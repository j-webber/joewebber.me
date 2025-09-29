import { Router } from "express";
import passport from "passport";

const userRouter = Router();

userRouter.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/new"
  })
);
userRouter.post("/logout");

export default userRouter;
