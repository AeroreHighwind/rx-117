import express from "express";
import { config } from "dotenv";
import AuthModule from "./src/modules/auth/auth.module.js";
import authDataSource from "./data-source.js";

config();

authDataSource
  .initialize()
  .then(() => {
    console.log("AuthDB initialized");
  })
  .catch((error) => console.log("Error>>", error));

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/auth", AuthModule.AuthRouter);
