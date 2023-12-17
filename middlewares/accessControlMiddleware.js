const accessControlMiddleware = (req, res, next) => {
  const userRole = req.decoded ? req.decoded.role : null;

  if (userRole === "admin") {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Permission denied. Admin role required." });
  }
};

module.exports = accessControlMiddleware;
