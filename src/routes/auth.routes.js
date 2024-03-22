import express from "express";

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.send("this is user route");
});

authRouter.post("/sign-up", (req, res) => {
  res.send("this is user route");
});

export default authRouter;
