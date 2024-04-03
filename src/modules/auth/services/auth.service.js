import { UserRepository } from "../auth.module.js";
import { ExceptionHandler, ExpressLogger } from "../../shared/shared.module.js";

export class AuthService {
  constructor() {
    this.repository = new UserRepository();
    this.handler = ExceptionHandler;
    ExpressLogger.log.blue("AuthService constructed");
  }

  async login(dto) {
    try {
      const dbUser = await this.repository.findOneByUsername(dto.username);
      const { password, ...rest } = dbUser;
      return { ...rest };
    } catch (error) {
      this.handler.handle(error);
    }
  }

  async signUp(userDto) {
    try {
      const newUser = await this.repository.save(userDto);
      return newUser;
    } catch (error) {
      this.handler.handle(error);
    }
  }
}
