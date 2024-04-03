import express from "express";
import helmet from "helmet";
import { AuthRouter } from "./src/modules/auth/auth.module.js";

import { ExpressLogger } from "./src/modules/shared/services/logger.service.js";
import { authDataSource } from "./data-source.js";

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

//routing
app.use("/auth", AuthRouter);

app.listen(port, () => {
  ExpressLogger.log.yellow(`Server running on port ${port}`);
});
