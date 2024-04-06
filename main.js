import express from "express";
import helmet from "helmet";
import { expressjwt } from "express-jwt";
import { AuthRouter } from "./src/modules/auth/auth.module.js";
import { authDataSource } from "./data-source.js";
import { ExpressLogger } from "./src/modules/shared/shared.module.js";

//init
const app = express();
const port = process.env.PORT;

authDataSource
  .initialize()
  .then((db) => {
    ExpressLogger.log.cyan(`DB initialized: ${db.isInitialized}`);
  })
  .catch((error) => console.log("Error:", error));

//features
app.use(helmet());
app.use(express.json());
app.use(
  expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: [process.env.JWT_ALGORITHM],
  }).unless({ path: ["/auth/login", "/auth/sign-up"] })
);
//routing
app.use("/auth", AuthRouter);

app.listen(port, () => {
  let runtimeMode = "development";
  if (process.env.NODE_ENV === "production") runtimeMode = "production";
  ExpressLogger.log.yellow(
    `Server running on port ${port} in ${runtimeMode} mode`
  );
});
