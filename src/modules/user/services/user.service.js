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
    console.log("GET USER PROFILE BEFORE TRY");
    try {
      const dbProfile = await this.profileRepository.findOne(id);
      console.log("GET USER PROFILE", id, dbProfile);
      if (!dbProfile) throw new CustomError("Profile not found", 404);
      return dbProfile;
    } catch (error) {
      console.log("ERROR IN GE PROFILE", error);
      return undefined;
    }
  }

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
      return await this.profileRepository.create(
        // ExceptionHandler.handle(error);
        newProfile
      );
    } catch (error) {
      // this.handler(error);
      console.log(error);
    }
  }
  async updateUserProfile(userId, dto) {
    try {
      const { id } = dto;
      if (id !== userId) throw new CustomError("Bad request", 400);
      return await await this.profileRepository.update(dto);
    } catch (error) {
      console.log(error);
      // this.handler.handle(error);
    }
  }
}
