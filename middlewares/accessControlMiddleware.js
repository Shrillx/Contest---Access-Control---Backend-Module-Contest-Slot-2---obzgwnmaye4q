const accessControlMiddleware = (req, res, next) => {
  const userRole = req.decoded ? req.decoded.role : null;
    console.log("this is request ->>"+req);
  console.log("this is userrole ->>"+userRole);

  if (userRole === "admin") {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Permission denied. Admin role required." });
  }
};

module.exports = accessControlMiddleware;
