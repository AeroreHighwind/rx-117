import express from "express";
import { config } from "dotenv";
import { AuthModule } from "./src/modules/auth/auth.module.js";
import { ExpressLogger } from "./src/modules/shared/services/logger.service.js";
import authDataSource from "./data-source.js";

config();

authDataSource
  .initialize()
  .then(() => {
    ExpressLogger.log.cyan(`AuthDB initialized`);
  })
  .catch((error) => console.log("Error>>", error));

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/auth", AuthModule.AuthRouter);

app.listen(port, () => {
  ExpressLogger.log.yellow(`Server running on port ${port}`);
});
