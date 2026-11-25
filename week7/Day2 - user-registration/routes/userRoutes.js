
const express = require("express");
const router = express.Router();

const {
  protect,
  authorizeRoles
} = require("../middleware/authMiddleware");

const User = require("../models/User");


// Route 1: Protected Users Route
router.get("/users", protect, async (req, res) => {

  try {

    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      users
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

});


// Route 2: Admin Only Route
router.get(
  "/admin/users",
  protect,
  authorizeRoles("admin"),
  async (req, res) => {

    try {

      const users = await User.find().select("-password");

      res.status(200).json({
        success: true,
        message: "Admin access granted",
        admin: req.user.name,
        users
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });

    }

  }
);


module.exports = router;
