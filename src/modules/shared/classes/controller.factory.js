import { AuthController } from "../../auth/auth.module.js";

export class ControllerFactory {
  create(type) {
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
