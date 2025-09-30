import { CustomUnauthorizedError } from "../errors/CustomUnAuthorizedError";

const ensureAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    throw new CustomUnauthorizedError("Not Authorized");
  }
  return next();
};

export { ensureAuthenticated };
