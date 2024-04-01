import express from "express";
import { config } from "dotenv";
import { AuthRouter } from "./src/modules/auth/auth.module.js";
import { UserSchema } from "./src/modules/auth/entity/user.entity.js";

import { ExpressLogger } from "./src/modules/shared/services/logger.service.js";
import { authDataSource } from "./data-source.js";
import "reflect-metadata";

config();

authDataSource
  .initialize()
  .then((db) => {
    ExpressLogger.log.cyan(`DB initialized: ${db.isInitialized}`);
  })
  .catch((error) => console.log("Error:", error));

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/auth", AuthRouter);

app.listen(port, () => {
  ExpressLogger.log.yellow(`Server running on port ${port}`);
});
