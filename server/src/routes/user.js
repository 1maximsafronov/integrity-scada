const {Router} = require(`express`);
const userRouter = new Router();
const userController = require("../controllers/user.js");
const {authenticateToken, adminAuth} = require("../utils/token")

userRouter.post("/login", userController.login);
userRouter.get("/login", userController.checkAuth);
userRouter.post("/registration", userController.registration);
userRouter.get("/users", adminAuth, userController.getUsersData);
userRouter.get("/user/:id", userController.getOneUserData);
userRouter.get("/logout", userController.logout);

module.exports = userRouter;
