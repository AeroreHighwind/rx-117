import { UserRepository } from "../auth.module.js";
import { ExceptionHandler, ExpressLogger } from "../../shared/shared.module.js";
import bcrypt from "bcrypt";

const saltRounds = 12;

export class AuthService {
  constructor() {
    this.repository = new UserRepository();
    this.handler = ExceptionHandler;
    ExpressLogger.log.blue("AuthService constructed");
  }

  async login(dto) {
    try {
      const { username, password } = dto;
      const dbUser = await this.repository.findOneByUsername(username);
      const validCredentials = await this.#decryptPassword(
        password,
        dbUser.password
      );
      if (!validCredentials) throw new Error("Invalid credentials");
      return true;
    } catch (error) {
      return false;
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

  async #encryptPassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
          reject(err);
        } else {
          resolve(hashedPassword);
        }
      });
    });
  }

  async #decryptPassword(dbPass, reqPass) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(dbPass, reqPass, (err, result) => {
        if (err) reject(err);
        else {
          resolve(result);
        }
      });
    });
  }
}
