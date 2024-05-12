import { UserProfileEntity } from "../user.module.js";
import { BaseRepository, ExpressLogger } from "../../shared/shared.module.js";

export class UserProfileRepository extends BaseRepository {
  constructor() {
    super(UserProfileEntity);
    ExpressLogger.log.blue("UserProfileRepository constructed");
  }

  async findOneByUserId(userId) {
    return await this.repository.findOne({
      userId,
    });
  }
}
