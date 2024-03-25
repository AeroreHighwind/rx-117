export class AuthController {
  static login(req, res) {
    res.send("This is the login route" + JSON.stringify(req.body));
  }

  static signUp(req, res) {
    res.send("This is the sign-up route");
  }

  static recovery(req, res) {
    res.send("This is the password recovery");
  }
}

// export function loginValidationRules = () => [
//   body('email').isEmail().withMessage('Invalid email address'),
//   body('password').notEmpty().withMessage('Password is required')
// ];
