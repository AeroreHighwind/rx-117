import express from "express";
import { config } from "dotenv";

//routes modules
import authRouter from "./src/routes/auth.routes.js";
//Load env
config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/auth", authRouter);
