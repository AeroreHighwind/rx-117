import { AuthService } from "../auth.module.js";
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
      const successLogin = await this.authService.login(dto);
      if (successLogin) res.status(200).send("login successful");
      throw new CustomError("Unauthorized", 401);
    } catch (error) {
      ExceptionHandler.handle(error);
      res.status(error.status).send(error.message);
    }
  }

  async signUp(req, res, next) {
    try {
      const userDto = { ...req.body };
      console.log("CONTROLLER DTO", userDto);
      this.authService.signUp(userDto);
      res.status(201).end();
    } catch (error) {
      ExpressLogger.log.red(error);
      res.status(500).end();
    }
  }

  static async recovery(req, res, next) {
    res.send("This is the password recovery");
  }
}
