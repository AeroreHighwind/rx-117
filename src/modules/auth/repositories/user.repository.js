import { UserSchema } from "../auth.module.js";
import { dataSource } from "../../../../data-source.js";
import { ExpressLogger } from "../../shared/shared.module.js";

export class UserRepository {
  constructor() {
    this.repository = dataSource.getRepository(UserSchema);
    ExpressLogger.log.blue("UserRepository constructed");
  }

  async findAll() {
    return await this.repository.findAll();
  }
  async findOne(id) {
    return await this.repository.findOne(id);
  }
  async findOneByUsername(name) {
    return await this.repository.findOneBy({
      username: name,
    });
  }
  async save(dto) {
    return await this.repository.save(dto);
  }
  async delete(id) {
    return await this.repository.delete(id);
  }
}
