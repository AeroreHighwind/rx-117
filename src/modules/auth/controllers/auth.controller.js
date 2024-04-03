import { AuthService } from "../auth.module.js";
import { ExpressLogger } from "../../shared/shared.module.js";
import { body, validationResult } from "express-validator";

export class AuthController {
  constructor() {
    this.authService = new AuthService();
    ExpressLogger.log.blue("AuthController constructed");
  }

  async login(req, res, next) {
    try {
      body("username", "no username in body", "ERROR");
      const result = validationResult(body);
      if (result.isEmpty()) {
        const dto = { ...req.body };
        this.authService.login(dto);
        return res.send(`Hello, ${req.body.username}!`);
      }

      res.send({ errors: result.array() });
    } catch (error) {
      res.status(500).end();
    }
  }

  async signUp(req, res) {
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

  static async recovery(req, res) {
    res.send("This is the password recovery");
  }
}
