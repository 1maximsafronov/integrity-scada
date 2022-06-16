const jwt = require("jsonwebtoken");
const { OrderUser, OrderGuest  } = require("../models/models");

class OrderController {
  async create(req, res, next) {
    const {
      email,
      userName,
      phone,
      company,
      city,
      message = "",
      type,
      status = "waiting"
    } = req.body;

    try {
      const newOrder = await OrderGuest.create({
        email,
        userName,
        phone,
        company,
        city,
        message,
        type,
        status
      });

      res.json({
        data: newOrder,
      });
    } catch (error) {
      res.status(500).json({error: "Ошибка при создании заявки"})
    }
  }

  async getOne(req, res, next) {

  }

  async getUserOrders(req, res, next) {
    let userData = {};
    const token = req.headers["authorization"];

    if (token == null) {
      return res.sendStatus(401);
    }
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);
      userData = user;
    });

    try {
      const userOrders = await OrderUser.findAll({
        where: {
          email: userData.email
        }
      });

      res.json({
        data: userOrders,
      });
    } catch (error) {
      res.status(500).json({error: "Ошибка при запросе списка заявок"})
    }
  }

  async getAll(req, res, next) {
    try {
      const guestOrders = await OrderGuest.findAll();
      const userOrders = await OrderUser.findAll();
      res.json({
        data: {
          guestOrders,
          userOrders
        },
      });
    } catch (error) {
      res.status(500).json({error: "Ошибка при запросе списка заявок"})
    }
  }
}


module.exports = new OrderController();
