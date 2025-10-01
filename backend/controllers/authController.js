import { CustomUnauthorizedError } from "../errors/CustomUnAuthorizedError.js";

const login = (req, res) => {
  if (!req.user) {
    throw new CustomUnauthorizedError("Not Authorized");
  }
  res.json(req.user);
};

const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: "User logged out" });
  });
};

const getAuthStatus = (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(202).json({
      success: false
    });
  }
};

export { login, logout, getAuthStatus };
