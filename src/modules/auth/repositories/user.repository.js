import { UserEntity } from "../auth.module.js";
import { BaseRepository, ExpressLogger } from "../../shared/shared.module.js";

export class UserRepository extends BaseRepository {
  constructor() {
    super(UserEntity);
    ExpressLogger.log.blue("UserRepository constructed");
  }

  async findOneByUsername(name) {
    return await this.repository.findOne({ where: { username: name } });
  }
}
