import express from "express";
import { config } from "dotenv";
import authModule from "./src/modules/auth/auth.module.js";

config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/auth", authModule.AuthController.router);
