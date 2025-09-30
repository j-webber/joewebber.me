import { Router } from "express";
import passport from "passport";
import { login, logout } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/login", passport.authenticate("local"), login);
userRouter.post("/logout", logout);

export default userRouter;
