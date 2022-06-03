const {Router} = require(`express`);
const apiRouter = new Router();
const userRouter = require("./user");
const orderRouter = require("./order");

apiRouter.use(userRouter);
apiRouter.use(orderRouter);
apiRouter.use((req, res) => res.sendStatus(404))

module.exports = apiRouter;
