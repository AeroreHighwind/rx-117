import express from "express";
import { config } from "dotenv";
import { AuthRouter, UserSchema } from "./src/modules/auth/auth.module.js";
import { ExpressLogger } from "./src/modules/shared/services/logger.service.js";
import { authDataSource } from "./data-source.js";
import "reflect-metadata";

config();

authDataSource
  .initialize()
  .then(() => {
    ExpressLogger.log.cyan(`AuthDB initialized`);
    ExpressLogger.log.cyan(
      "ENTITIES LOGGED",
      JSON.stringify(authDataSource.entities)
    );
  })
  .catch((error) => ExpressLogger.log.red("Error:", error));

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/auth", AuthRouter);

const testRepository = authDataSource.getRepository(UserSchema);

await testRepository.save({
  username: "frost",
  password: "test123",
  email: "frost@tst.com",
});

app.listen(port, () => {
  ExpressLogger.log.yellow(`Server running on port ${port}`);
});
