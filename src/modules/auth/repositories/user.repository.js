import { Repository } from "typeorm";
import { UserEntity } from "../models/user.model.js";

export class UserRepository {
  constructor() {
    this.repository = new Repository(UserEntity);
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
