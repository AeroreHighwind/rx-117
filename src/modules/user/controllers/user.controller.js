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
      const { id } = req.params;
      const profile = await this.userService.getUserProfile(id);
      if (!profile) throw new CustomError("Profile not found", 404);
      return res.json(profile);
    } catch (error) {
      ExceptionHandler.handle(error);
      res.status(error.status).send(error.message);
    }
  }

  async getProfileList(req, res, next) {
    try {
      //TODO PAGINATION
      const profileList = await this.userService.getProfileList();
      if (!profileList) throw new CustomError("Profiles not found", 404);
      return res.json(profileList).end();
    } catch (error) {
      res.status(error.status || 500).send(error.message);
    }
  }

  async createProfile(req, res, next) {
    try {
      const userId = req.query.userId;
      console.log(userId);
      const profileDto = { ...req.body };
      const isCreated = await this.userService.createUserProfile(
        userId,
        profileDto
      );
      if (!isCreated) throw new CustomError("Error", 500);
      return res.status(200).send("profile creation successful");
    } catch (error) {
      console.log(error);
      // ExceptionHandler.handle(error);
      return res.status(error.status).send(error.message);
    }
  }
  async updateProfile(req, res, next) {
    try {
      const id = req.params.id;
      const profileDto = { ...req.body };
      const isUpdated = await this.userService.updateUserProfile(
        id,
        profileDto
      );
      console.log(isUpdated);
      if (!isUpdated) throw new CustomError("Error", 500);
      return res.status(200).send("profile update successful");
    } catch (error) {
      // ExceptionHandler.handle(error);
      console.log(error);
      return res.status(error.status).send(error.message);
    }
  }
}
