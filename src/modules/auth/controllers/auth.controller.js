import express from "express";

export class AuthController {
  static router = express.Router();

  static login(req, res) {
    res.send("This is the login route");
  }

  static signUp(req, res) {
    res.send("This is the sign-up route");
  }
}

AuthController.router.get("/login", AuthController.login);
AuthController.router.post("/sign-up", AuthController.signUp);

export default AuthController;
