import { BaseRepository } from "../../shared/classes/base.repository.js";

export class UserRepository extends BaseRepository {
  constructor({ UserModel }) {
    super(UserModel);
  }

  async findAll() {
    return await this.model.findAll();
  }
}
