import { AuthService } from "../auth.module.js";
import { ExpressLogger } from "../../shared/shared.module.js";

export class AuthController {
  constructor() {
    this.authService = new AuthService();
    ExpressLogger.log.blue("AuthController constructed");
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      res.send("Login successful");
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).send("Internal server error");
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
