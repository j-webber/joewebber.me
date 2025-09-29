class CustomUnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
    // So the error is neat when stringified. NotFoundError: message instead of Error: message
    this.name = "UnauthorizedError";
  }
}

export { CustomUnauthorizedError };
