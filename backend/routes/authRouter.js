import { Router } from "express";
import passport from "passport";
import { getAuthStatus, login, logout } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/login", passport.authenticate("local"), login);
authRouter.post("/logout", logout);
authRouter.get("/status", getAuthStatus);

export default authRouter;
