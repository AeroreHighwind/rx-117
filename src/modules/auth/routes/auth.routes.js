import express from "express";
import { AuthController } from "../auth.module.js";
import { ExpressLogger, ValidatorService } from "../../shared/shared.module.js";

export class AuthRouter {
  constructor() {
    this.router = express.Router();
    this.authController = new AuthController();

    // Define routes
    this.router.post(
      "/login",
      [ValidatorService.loginValidationRules],
      this.login.bind(this)
    );

    this.router.post(
      "/sign-up",
      [ValidatorService.signUpValidationRules],
      this.signUp.bind(this)
    );

    this.router.post("/recovery", this.recovery.bind(this));

    ExpressLogger.logRouterEndpoints(this.router);
  }

  async login(req, res, next) {
    try {
      ValidatorService.validate(req, res);
      await this.authController.login(req, res, next);
    } catch (error) {
      ExpressLogger.log.red(error);
      res.status(400).json({ message: error.message });
    }
  }

  async signUp(req, res, next) {
    try {
      ValidatorService.validate(req, res);
      await this.authController.signUp(req, res);
    } catch (error) {
      ExpressLogger.log.red(error);
      res.status(400).json({ message: error.message });
    }
  }

  recovery(req, res) {
    this.authController.recovery(req, res);
  }
}
