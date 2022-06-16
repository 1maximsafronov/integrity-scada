const {Router} = require(`express`);
const orderRouter = new Router();
const orderController = require("../controllers/order.js");
const {authenticateToken, adminAuth} = require("../utils/token");

orderRouter.get("/orders", orderController.getAll);
orderRouter.post("/order", orderController.create);
orderRouter.get("/order", orderController.getUserOrders)

module.exports = orderRouter;
