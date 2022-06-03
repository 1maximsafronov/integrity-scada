const {Router} = require(`express`);
const orderRouter = new Router();
const orderController = require("../controllers/order.js");

orderRouter.get("/orders", orderController.getAll);
orderRouter.post("/order", orderController.create);

module.exports = orderRouter;
