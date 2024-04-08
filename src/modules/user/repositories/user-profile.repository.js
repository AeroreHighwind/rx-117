import { dataSource } from "../../../../data-source.js";
import { UserProfileSchema } from "../user.module.js";
import { ExpressLogger } from "../../shared/shared.module.js";

export class UserProfileRepository {
  constructor() {
    this.repository = dataSource.getRepository(UserProfileSchema);
    ExpressLogger.log.blue("UserProfileRepository constructed");
  }

  async findAll() {
    return await this.repository.find();
  }
  async findOne(id) {
    return await this.repository.findOne(id);
  }
  async findOneByUserId(userId) {
    return await this.repository.findOne({
      userId,
    });
  }
  async save(dto) {
    return await this.repository.save(dto);
  }
  async delete(id) {
    return await this.repository.delete(id);
  }
}
