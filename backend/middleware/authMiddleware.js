import { CustomUnauthorizedError } from "../errors/CustomUnAuthorizedError.js";

const ensureAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    throw new CustomUnauthorizedError("Not Authorized");
  }
  return next();
};

export { ensureAuthenticated };
