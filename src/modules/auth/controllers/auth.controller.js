import { AuthService } from "../auth.module.js";
import { expressjwt } from "express-jwt";
import {
  CustomError,
  ExceptionHandler,
  ExpressLogger,
} from "../../shared/shared.module.js";

export class AuthController {
  constructor() {
    this.authService = new AuthService();
    ExpressLogger.log.blue("AuthController constructed");
  }

  async login(req, res, next) {
    try {
      const dto = req.body;
      const loginSuccess = await this.authService.login(dto);
      if (loginSuccess) {
        return res.status(200).send("login successful");
      }
      throw new CustomError("Unauthorized", 401);
    } catch (error) {
      ExceptionHandler.handle(error);
      res.status(error.status).send(error.message);
    }
  }

  async signUp(req, res, next) {
    try {
      const userDto = { ...req.body };
      const registerSuccess = await this.authService.signUp(userDto);
      if (registerSuccess) {
        return res.status(201).end();
      }
      throw new CustomError("Error", 500);
    } catch (error) {
      ExceptionHandler.handle(error);
      return res.status(error.status).send(error.message);
    }
  }

  async recovery(req, res, next) {
    res.send("This is the password recovery");
  }
}
