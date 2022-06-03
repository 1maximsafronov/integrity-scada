const { OrderUser,OrderGuest  } = require("../models/models");

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

  async update() {

  }

  async delete(req, res, next) {

  }

  async getOne(req, res, next) {

  }

  async getAll(req, res, next) {
    try {
      const orders = await (await OrderGuest.findAll());
      res.json({
        data: orders,
      });
    } catch (error) {
      res.status(500).json({error: "Ошибка при запросе списка заявок"})
    }
  }
}


module.exports = new OrderController();
