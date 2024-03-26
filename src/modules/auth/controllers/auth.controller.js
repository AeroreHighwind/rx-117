import { body, validationResult } from "express-validator";

export class AuthController {
  static login(req, res) {
    body("username");
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.send(`Hello, ${req.body.person}!`);
    }

    res.send({ errors: result.array() });
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
