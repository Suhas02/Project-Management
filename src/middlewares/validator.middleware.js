import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

// Extract the errors from the file and Process it

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));
  throw new ApiError(422, "Received data is not valid", extractedErrors);
};

// Upto here the file can be reused as it is
// Below this line, you can add custom validators if needed  // Middleware Complete head to validators
