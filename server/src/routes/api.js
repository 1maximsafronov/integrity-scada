const {Router} = require(`express`);
const apiRouter = new Router();
const userRouter = require("./user");

apiRouter.use(userRouter);
apiRouter.use((req, res) => res.sendStatus(404))

module.exports = apiRouter;
