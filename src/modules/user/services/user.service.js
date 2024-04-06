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

  async getUserProfile(dto) {
    try {
      const { id } = dto;
      const dbProfile = await this.profileRepository.findOneByUserId(id);
      if (!dbProfile) throw new CustomError("Profile not found", 404);
      return dbProfile;
    } catch (error) {
      return undefined;
    }
  }

  async updateUserProfile(userId, dto) {
    try {
      const { id } = dto;
      if (id !== userId) throw new CustomError("Bad request", 400);
      return await await this.profileRepository.save(dto);
    } catch (error) {
      this.handler.handle(error);
    }
  }
}
