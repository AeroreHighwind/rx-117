import AuthController from "./controllers/auth.controller.js";
import AuthRouter from "./routes/auth.routes.js";
import UserEntity from "./models/user.model.js";

const AuthModule = { AuthController, UserEntity, AuthRouter };

export default AuthModule;
