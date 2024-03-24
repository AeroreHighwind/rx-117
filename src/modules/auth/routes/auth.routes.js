import express from "express";
import { AuthController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.get("/login", AuthController.login);
authRouter.post("/sign-up", AuthController.signUp);

export default authRouter;
