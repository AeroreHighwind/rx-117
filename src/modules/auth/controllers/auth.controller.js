import { AuthService } from "../services/auth.service.js";
import { ExpressLogger } from "../../shared/shared.module.js";
import { body, validationResult } from "express-validator";

export class AuthController {
  constructor() {}
  authService = new AuthService();
  async login(req, res, next) {
    body("username", "no username in body", "ERROR");
    // console.log("BODY VALIDATOR", body("username").error);
    const result = validationResult(body);
    // console.log("VALIDATIONRESULT", result);
    if (result.isEmpty()) {
      return res.send(`Hello, ${req.body.username}!`);
    }

    res.send({ errors: result.array() });
  }

  async signUp(req, res) {
    try {
      const userDto = { ...req.body };
      console.log("CONTROLLER DTO", userDto);
      authService.signUp(userDto);
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
