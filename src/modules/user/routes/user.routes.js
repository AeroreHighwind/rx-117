import express from "express";
import { UserController } from "../user.module.js";
import { ExpressLogger, ValidatorService } from "../../shared/shared.module.js";

export const UserRouter = express.Router();

const userController = new UserController();

AuthRouter.get(
  "/profile",
  [ValidatorService.loginValidationRules],
  async (req, res, next) => {
    try {
      ValidatorService.validate(req, res);
      await userController.getProfile(req, res, next);
    } catch (error) {
      ExpressLogger.log.red(error);
      res.status(400).json({ message: error.message });
    }
  }
);
AuthRouter.put(
  "/profile",
  [ValidatorService.signUpValidationRules],
  async (req, res, next) => {
    try {
      ValidatorService.validate(req, res);
      await userController.updateProfile(req, res);
    } catch (error) {
      ExpressLogger.log.red(error);
      res.status(400).json({ message: error.message });
    }
  }
);

ExpressLogger.logRouterEndpoints(UserRouter);
