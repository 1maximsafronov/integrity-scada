const {Router} = require(`express`);
const apiRouter = new Router();
const documentController = require("../controllers/document");
const userController = require("../controllers/user.js");
const orderController = require("../controllers/order.js");
const {authenticateToken, adminAuth} = require("../utils/token");

apiRouter.post("/login", userController.login);
apiRouter.get("/login", userController.checkAuth);
apiRouter.post("/registration", userController.registration);
apiRouter.delete("/logout", userController.logout);

apiRouter.get("/users", adminAuth, userController.getUsersData);
apiRouter.get("/user/:id", userController.getOneUserData);

apiRouter.get("/documents", documentController.getAll);
apiRouter.get("/documents/:id", documentController.getOne);
apiRouter.post("/documents/upload", documentController.create);
apiRouter.put("/documents/:id", documentController.update);

apiRouter.get("/orders", orderController.getAll);
apiRouter.post("/order", orderController.create);
apiRouter.get("/order", orderController.getUserOrders)

apiRouter.use((req, res) => res.sendStatus(404))

module.exports = apiRouter;
