import express from "express";
import { UserController } from "../user.module.js";
import { ExpressLogger, ValidatorService } from "../../shared/shared.module.js";

export class UserRouter {
  constructor() {
    this.router = express.Router();
    this.userController = new UserController();

    // Define routes
    this.router.get(
      "/profile",
      [ValidatorService.loginValidationRules],
      this.getProfile.bind(this)
    );

    this.router.put(
      "/profile",
      [ValidatorService.signUpValidationRules],
      this.updateProfile.bind(this)
    );

    ExpressLogger.logRouterEndpoints(this.router);
  }

  async getProfile(req, res, next) {
    try {
      ValidatorService.validate(req, res);
      await this.userController.getProfile(req, res, next);
    } catch (error) {
      ExpressLogger.log.red(error);
      res.status(400).json({ message: error.message });
    }
  }

  async updateProfile(req, res, next) {
    try {
      ValidatorService.validate(req, res);
      await this.userController.updateProfile(req, res);
    } catch (error) {
      ExpressLogger.log.red(error);
      res.status(400).json({ message: error.message });
    }
  }
}
