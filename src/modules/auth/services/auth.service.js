import { UserRepository } from "../repositories/user.repository.js";
export class AuthService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async login(loginDto) {
    const { username, password } = loginDto;
    const user = await this.userRepository.findOne(username);
    return user.password === password;
  }
}
