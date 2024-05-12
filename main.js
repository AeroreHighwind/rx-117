import express from "express";
import helmet from "helmet";
import { dataBase } from "./data-source.js";
import { expressjwt } from "express-jwt";
import { AuthRouter } from "./src/modules/auth/auth.module.js";
import { UserRouter } from "./src/modules/user/user.module.js";
import { ExpressLogger } from "./src/modules/shared/shared.module.js";

async function startServer() {
  try {
    // Initialize Express app
    const app = express();
    const port = process.env.PORT;

    // Features
    app.use(helmet());
    app.use(express.json());
    app.use(
      expressjwt({
        secret: process.env.JWT_SECRET,
        algorithms: [process.env.JWT_ALGORITHM],
        maxAge: "1h",
      }).unless({ path: ["/auth/login", "/auth/sign-up"] })
    );

    // Database initialization
    const db = dataBase;
    // await db.sync({ alter: true });
    if (db) ExpressLogger.log.cyan(`DB initialized`);

    // Routing
    const authRouter = new AuthRouter().router;
    const userRouter = new UserRouter().router;
    app.use("/auth", authRouter);
    app.use("/user", userRouter);

    // Start the server
    app.listen(port, () => {
      let runtimeMode = "development";
      if (process.env.NODE_ENV === "production") runtimeMode = "production";
      ExpressLogger.log.yellow(
        `Server running on port ${port} in ${runtimeMode} mode`
      );
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

// Start the server
startServer();
