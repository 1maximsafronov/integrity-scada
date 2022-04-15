const jwt = require('jsonwebtoken');
const { User: UserModel } = require("../models/models");
const md5 = require("md5");

const generateJwt = (user) => {
  return jwt.sign(
    user,
    '12345',
    { expiresIn: '12h' }
  )
}

class UserController {

  async checkAuth(req, res, next) {

  }

  async login(req, res, next) {

  }

  async registration(req, res, next) {
    const { email, password, name, phone, company, city } = req.body;
    let errors = [];
    if (!password) {
      errors.push("Invalid password")
    }

    if (!email) {
      errors.push("Invalid email")
    }

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      errors.push("User alredy exist");
    }

    if (errors.length) {
      res.status(400).json({ "error": errors.join(",") });
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

    const token = generateJwt(newUser);

    return res.json({
      status: "success",
      data: {
        ...newUser,
        token
      }
    })
  }

  async updateData(req, res, next) {

  }

  async getUsersData(req, res, next) {

  }

  async getOneUserData(req, res, next) {

  }

}


module.exports = new UserController();
