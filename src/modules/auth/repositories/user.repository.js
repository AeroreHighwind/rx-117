import { UserSchema } from "../auth.module.js";
import { dataSource } from "../../../../data-source.js";
import { BaseRepository, ExpressLogger } from "../../shared/shared.module.js";

export class UserRepository extends BaseRepository {
  constructor() {
    super(UserSchema);
    ExpressLogger.log.blue("UserRepository constructed");
  }

  async findOneByUsername(name) {
    return await this.repository.findOneBy({
      username: name,
    });
  }
}
