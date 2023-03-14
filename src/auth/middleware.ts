const jwt = require("jsonwebtoken");

export const authMiddleware = (req, res, next) => {
  const [_ , token] = req.headers["authorization"].split(" ");

  if (!token) {
    next(new Error("Authorization Required"));
  }
  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    next(new Error("Wrong token"));
  }
};
