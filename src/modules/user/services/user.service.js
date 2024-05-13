import { UserProfileRepository } from "../user.module.js";
import {
  CustomError,
  ExceptionHandler,
  ExpressLogger,
} from "../../shared/shared.module.js";

export class UserService {
  constructor() {
    this.profileRepository = new UserProfileRepository();
    this.handler = ExceptionHandler;
    ExpressLogger.log.blue("UserService constructed");
  }

  async getUserProfile(id) {
    try {
      const dbProfile = await this.profileRepository.findOne(id);
      if (!dbProfile) throw new CustomError("Profile not found", 404);
      return dbProfile;
    } catch (error) {
      return undefined;
    }
  }

  //admin
  async getProfileList() {
    try {
      return await this.profileRepository.findAll();
    } catch (error) {
      console.log(error);
    }
  }
  async createUserProfile(userId, dto) {
    try {
      const newProfile = { ...dto, userId };
      return await this.profileRepository.create(newProfile);
    } catch (error) {
      this.handler.handle(error);
    }
  }
  async updateUserProfile(userId, dto) {
    try {
      // if (id !== userId) throw new CustomError("Bad request", 400);
      return await await this.profileRepository.update(userId, dto);
    } catch (error) {
      // console.log(error);
      this.handler.handle(error);
    }
  }
}
