import express from "express";
import { AuthController } from "../../auth/controllers/auth.controller.js";
import { ExpressLogger } from "../../shared/services/logger.service.js";

export const AuthRouter = express.Router();

const authController = new AuthController();

AuthRouter.post("/login", (req, res, next) =>
  authController.login(req, res, next)
);
AuthRouter.post("/sign-up", (req, res, next) =>
  authController.signUp(req, res)
);
AuthRouter.post("/recovery", (req, res) => authController.recovery(req, res));

ExpressLogger.logRouterEndpoints(AuthRouter);
