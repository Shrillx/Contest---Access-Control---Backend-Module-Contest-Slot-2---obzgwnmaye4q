const accessControlMiddleware = (req, res, next) => {
  const userRole = req.user ? req.user.role : null;
  console.log("req.user   " + req.user);
  console.log(req)
  if (userRole === "admin") {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Permission denied. Admin role required." });
  }
};

module.exports = accessControlMiddleware;
