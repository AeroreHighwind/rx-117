import { body, validationResult } from "express-validator";

export class ValidatorService {
  static loginValidationRules = [
    body("username").notEmpty().withMessage("Username is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ];

  static signUpValidationRules = [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];

  static validate(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const cleanedErrorMessage = errors
        .array()
        .map((err) => err.msg)
        .join(", ");
      throw new Error(cleanedErrorMessage);
    }
  }
}
