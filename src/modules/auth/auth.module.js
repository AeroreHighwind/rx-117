import AuthController from "./controllers/auth.controller.js";
import authRouter from "./routes/auth.routes.js";
import UserEntity from "./models/user.model.js";

const AuthModule = { AuthController, UserEntity, authRouter };

export default AuthModule;
