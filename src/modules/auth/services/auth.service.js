import { UserRepository } from "../auth.module.js";
import {
  CustomError,
  ExceptionHandler,
  ExpressLogger,
} from "../../shared/shared.module.js";
import bcrypt from "bcrypt";
import sign from "jsonwebtoken/sign.js";

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
      if (!dbUser) throw new CustomError("Invalid credentials", 401);
      const validCredentials = await this.#decryptPassword(
        password,
        dbUser.password
      );
      if (!validCredentials) throw new CustomError("Invalid credentials", 401);
      const token = this.generateAccessToken(username);
      return token;
    } catch (error) {
      return undefined;
    }
  }

  async signUp(dto) {
    try {
      const { password, ...rest } = dto;
      const hashedPassword = await this.#encryptPassword(password);
      const newUser = { password: hashedPassword, ...rest };
      return await this.repository.save(newUser);
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

  generateAccessToken(username) {
    //TODO username role
    try {
      const key = process.env.JWT_SECRET;
      const payload = {
        username,
      };
      const token = sign(JSON.stringify(payload), key);
      ExpressLogger.log.red(token);

      return token;
    } catch (error) {
      console.log(error);
    }
  }
}
