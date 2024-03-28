import { BaseRepository } from "../../shared/shared.module.js";

export class UserRepository extends BaseRepository {
  constructor({ UserModel }) {
    super(UserModel);
  }

  async findAll() {
    return await this.model.findAll();
  }
}
