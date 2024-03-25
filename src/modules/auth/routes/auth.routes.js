import express from "express";
import { AuthController } from "../controllers/auth.controller.js";
import logRouterEndpoints from "../../shared/services/endpoint.logger.service.js";
const AuthRouter = express.Router();

AuthRouter.get("/login", AuthController.login);
AuthRouter.post("/sign-up", AuthController.signUp);
AuthRouter.post("/recovery", AuthController.recovery);
AuthRouter.post("/recovery", AuthController.recovery);

// const logger = () => {
//   AuthRouter.stack.forEach((stack) =>
//     console.log("Route initialized: ", stack.route.methods)
//   );
// };
// logger();
logRouterEndpoints(AuthRouter);
export default AuthRouter;
