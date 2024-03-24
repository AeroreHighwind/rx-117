export class AuthController {
  static login(req, res) {
    res.send("This is the login route");
  }

  static signUp(req, res) {
    res.send("This is the sign-up route");
  }
}

export default AuthController;
