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
      const errorMessage = JSON.parse(error.message).join(", ");

      // Remove quotes and backslashes
      const cleanedErrorMessage = errorMessage.replace(/["\\]/g, "");

      ExpressLogger.log.red(error);
      res.status(400).json({ message: cleanedErrorMessage });
    }
  }
);
AuthRouter.post("/sign-up", (req, res, next) =>
  authController.signUp(req, res)
);
AuthRouter.post("/recovery", (req, res) => authController.recovery(req, res));

ExpressLogger.logRouterEndpoints(AuthRouter);
