const accessControlMiddleware = (req, res, next) => {
  const userRole = req.body ? req.body.role : null;
  console.log("req.body   " + req.body);  
  console.log("req.body.role   " + req.body.role);  

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
