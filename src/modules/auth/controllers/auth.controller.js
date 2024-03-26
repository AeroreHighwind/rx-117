import { body, validationResult } from "express-validator";

export class AuthController {
  static loginValidationRules() {
    return [
      body("username").notEmpty().withMessage("Username is required"),
      // Add more validation rules as needed
    ];
  }

  static login(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // If validation passes, proceed with the logic
    return res.send(`Hello, ${req.body.username}!`);
  }

  static signUp(req, res) {
    res.send("This is the sign-up route");
  }

  static recovery(req, res) {
    res.send("This is the password recovery");
  }
}
