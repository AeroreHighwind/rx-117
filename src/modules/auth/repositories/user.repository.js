import { UserSchema } from "../entity/user.entity.js";
import { authDataSource } from "../../../../data-source.js";
import { ExpressLogger } from "../../shared/shared.module.js";

export class UserRepository {
  constructor() {
    this.repository = authDataSource.getRepository(UserSchema);
    ExpressLogger.log.blue("UserRepository constructed");
  }

  async findAll() {
    return await this.repository.findAll();
  }
  async findOne(criteria) {
    return await this.repository.findOne(criteria);
  }
  async create(dto) {
    return await this.repository.save(dto);
  }
}
