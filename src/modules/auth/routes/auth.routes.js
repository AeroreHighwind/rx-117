import express from "express";
import { AuthController } from "../../auth/auth.module.js";
import { ExpressLogger, ValidatorService } from "../../shared/shared.module.js";

export const AuthRouter = express.Router();

const authController = new AuthController();

AuthRouter.post(
  "/login",
  [ValidatorService.loginValidationRules],
  async (req, res, next) => {
    try {
      ValidatorService.validate(req, res);
      await authController.login(req, res, next);
    } catch (error) {
      ExpressLogger.log.red(error);
      res.status(400).json({ message: error.message });
    }
  }
);
AuthRouter.post(
  "/sign-up",
  [ValidatorService.signUpValidationRules],
  async (req, res, next) => {
    try {
      ValidatorService.validate(req, res);
      await authController.signUp(req, res);
    } catch (error) {
      ExpressLogger.log.red(error);
      res.status(400).json({ message: error.message });
    }
  }
);
AuthRouter.post("/recovery", (req, res) => authController.recovery(req, res));

ExpressLogger.logRouterEndpoints(AuthRouter);
