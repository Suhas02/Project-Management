class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [], // Array where we keep pushing errors
    stack = "", // Stack trace is givent to us by the errors we can work on
  ) {
    super(message); // Only One argument can be passsed // Parent class constructor is called and expects one argument
    this.statusCode = statusCode;
    this.data = null; // default
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
