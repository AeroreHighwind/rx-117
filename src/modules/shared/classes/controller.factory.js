import { AuthController } from "../../auth/auth.module";

export class ControllerFactory {
  static create(type) {
    switch (type) {
      case "Auth":
        return new AuthController();

      case "User":
        // return new UserController();
        break;

      default:
        return null;
    }
  }
}
