import { UserProfileSchema } from "../user.module.js";
import { authDataSource } from "../../../../data-source.js";
import { ExpressLogger } from "../../shared/shared.module.js";

export class UserProfileRepository {
  constructor() {
    this.repository = authDataSource.getRepository(UserProfileSchema);
    ExpressLogger.log.blue("UserProfileRepository constructed");
  }

  async findAll() {
    return await this.repository.findAll();
  }
  async findOne(id) {
    return await this.repository.findOne(id);
  }
  async findOneByUserId(id) {
    return await this.repository.findOne({
      id,
    });
  }
  async save(dto) {
    return await this.repository.save(dto);
  }
  async delete(id) {
    return await this.repository.delete(id);
  }
}
