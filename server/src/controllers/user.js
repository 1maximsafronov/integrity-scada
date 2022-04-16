const jwt = require("jsonwebtoken");
const { User: UserModel } = require("../models/models");
const md5 = require("md5");
const {generateToken, verifyToken} = require("../utils/token.js");
const {getCleanUserDate} = require("../utils/common.js")

class UserController {
  async checkAuth(req, res) {
    const token = req.headers["authorization"];
    if (token == null) {
      return res.sendStatus(401);
    };

    try {
      const payload = verifyToken(token);
      res.json({data: getCleanUserDate(payload)});
    } catch (error) {
      res.status(401).json("You are not authorized");
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    let errors = [];

    if (!email) {
      errors.push("Invalid email");
    }

    if (!password) {
      errors.push("Invalid password");
    }

    if (errors.length) {
      res.status(400).json({ error: errors.join(",") });
      return;
    }

    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        error: "Пользователь не найден",
      });
    }

    let comparePassword = md5(password) === user.password;
    if (!comparePassword) {
      return res.status(400).json({
        error: "Не верный пароль",
      });
    }

    return res.json({
      message: "success authorization",
      data: {
        ...getCleanUserDate(user.dataValues),
        token: generateToken(user.dataValues),
      },
    });
  }

  async registration(req, res, next) {
    const { email, password, name, phone, company, city } = req.body;

    let errors = [];
    if (!password) {
      errors.push("Invalid password");
    }

    if (!email) {
      errors.push("Invalid email");
    }

    const candidate = await UserModel.findOne({ where: { email } });

    if (candidate) {
      errors.push("User alredy exist");
    }

    if (errors.length) {
      res.status(400).json({ error: errors.join(",") });
      return;
    }

    const newUser = await UserModel.create({
      city,
      name,
      phone,
      email,
      company,
      password: md5(password),
      reg_date: new Date().toISOString(),
    });

    return res.json({
      message: "success registration",
      data: {
        ...getCleanUserDate(newUser.dataValues),
        token: generateToken(newUser.dataValues),
      },
    });
  }

  async updateData(req, res) {}

  async getUsersData(req, res) {
    try {
      const users = await (await UserModel.findAll()).map(getCleanUserDate);
    res.json({data: users});
    } catch (error) {
      res.status(500).json({error: "Ошибка при запросе списка пользователе"})
    }
  }

  async getOneUserData(req, res) {
    try {
      const {dataValues} = await UserModel.findOne({where: {id: req.params.id}});
      res.json({
        data: {...getCleanUserDate(dataValues)}
      });
    } catch {
      res.status(400).json({error: "Пользователь не найден"});
    }
  }
}

module.exports = new UserController();
