import { UserRepository } from "../repositories/user.repository.js";
import { ExpressLogger } from "../../shared/shared.module.js";

export class AuthService {
  constructor() {
    this.repository = new UserRepository();
    ExpressLogger.log.blue("AUTH SERVICE CONSTRUCTED");
  }

  async login(username) {
    const dbUser = await this.repository.findOne(username);
    const { password, ...rest } = dbUser;
    return { ...rest };
  }

  async signUp(userDto) {
    const newUser = await this.repository.create(userDto);
  }
}
