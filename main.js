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
    ExpressLogger.log.cyan(`AuthDB initialized`);
    const repository = db.getRepository(UserSchema);
    repository.save({
      username: "frost",
      password: "test123",
      email: "frost@test.com",
    });
  })
  .catch((error) => console.log("Error:", error));

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/auth", AuthRouter);

// const testRepository = authDataSource.getRepository(UserSchema);

// await testRepository.save({
//   username: "frost",
//   password: "test123",
//   email: "frost@tst.com",
// });

app.listen(port, () => {
  ExpressLogger.log.yellow(`Server running on port ${port}`);
});
