import express from "express";
import { AuthController } from "../auth.module.js";
import { ExpressLogger } from "../../shared/services/logger.service.js";

export const AuthRouter = express.Router();

AuthRouter.post("/login", AuthController.login);
AuthRouter.post("/sign-up", AuthController.signUp);
AuthRouter.post("/recovery", AuthController.recovery);

ExpressLogger.logRouterEndpoints(AuthRouter);
