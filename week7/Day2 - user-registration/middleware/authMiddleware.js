
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Authentication Middleware
exports.protect = async (req, res, next) => {
  try {

    let token;

    // Check Authorization Header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // Check Token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, token missing"
      });
    }

    // Verify JWT Token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Find User in Database
    const user = await User.findById(decoded.id)
      .select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found"
      });
    }

    // Attach User to Request
    req.user = user;

    // Continue
    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });

  }
};


// Role-Based Authorization Middleware
exports.authorizeRoles = (...roles) => {

  return (req, res, next) => {

    if (!req.user || !roles.includes(req.user.role)) {

      return res.status(403).json({
        success: false,
        message: "Access denied: insufficient role"
      });

    }

    next();

  };

};
