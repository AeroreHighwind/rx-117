import { UserService } from "../user.module.js";
import {
  CustomError,
  ExceptionHandler,
  ExpressLogger,
} from "../../shared/shared.module.js";

export class UserController {
  constructor() {
    this.userService = new UserService();
    ExpressLogger.log.blue("UserController constructed");
  }

  async getProfile(req, res, next) {
    try {
      const dto = req.body;
      const profile = await this.userService.getProfile(dto);
      if (!profile) throw new CustomError("Profile not found", 404);
      return res.body(JSON.stringify(profile)).send("login successful");
    } catch (error) {
      ExceptionHandler.handle(error);
      res.status(error.status).send(error.message);
    }
  }

  async updateProfile(req, res, next) {
    try {
      const profileDto = { ...req.body };
      const isUpdated = await this.userService.updateProfile(profileDto);
      if (!isUpdated) throw new CustomError("Error", 500);
      return res.status(200).send("profile update successful");
    } catch (error) {
      ExceptionHandler.handle(error);
      return res.status(error.status).send(error.message);
    }
  }
}
