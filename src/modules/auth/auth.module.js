import { AuthController } from "./controllers/auth.controller.js";
import { AuthService } from "./services/auth.service.js";
import { AuthRouter } from "./routes/auth.routes.js";
import { UserEntity } from "./models/user.model.js";

export const AuthModule = {
  AuthController,
  AuthService,
  UserEntity,
  AuthRouter,
};
