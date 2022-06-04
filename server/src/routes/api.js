const {Router} = require(`express`);
const apiRouter = new Router();
// const userRouter = require("./user");
// const orderRouter = require("./order");
const documentController = require("../controllers/document");
const userController = require("../controllers/user.js");
const {authenticateToken, adminAuth} = require("../utils/token");

apiRouter.get("/login", userController.checkAuth);
apiRouter.post("/login", userController.login);
apiRouter.post("/registration", userController.registration);
apiRouter.get("/users", adminAuth, userController.getUsersData);
apiRouter.get("/user/:id", userController.getOneUserData);
apiRouter.delete("/logout", userController.logout);

apiRouter.get("/documents", documentController.getAll);
apiRouter.get("/documents/:id", documentController.getOne);
apiRouter.post("/documents/upload", documentController.create);
apiRouter.put("/documents/:id", documentController.update);

// apiRouter.use(userRouter);
// apiRouter.use(orderRouter);
apiRouter.use((req, res) => res.sendStatus(404))

module.exports = apiRouter;
