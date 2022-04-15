const { Router } = require(`express`);
const userRouter = new Router();
const userController = require("../controllers/user.js");

userRouter.get("/users", userController.getUsersData);
userRouter.get("/user/:id", userController.getOneUserData);
userRouter.get("/login", userController.checkAuth);
userRouter.post("/login", userController.login);
userRouter.post("/registration", userController.registration);

module.exports = userRouter;
