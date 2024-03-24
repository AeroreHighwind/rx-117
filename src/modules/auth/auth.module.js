import AuthController from "./controllers/auth.controller.js";
import authRouter from "./routes/auth.routes.js";
import UserEntity from "./models/user.model.js";

const authModule = { AuthController, UserEntity };

export default authModule;
