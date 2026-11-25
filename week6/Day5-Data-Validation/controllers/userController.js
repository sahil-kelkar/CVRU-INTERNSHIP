const User = require("../models/User");

// CREATE USER
exports.createUser = async (req, res) => {
  try {

    const user = await User.create(req.body);

    res.status(201).json({
      message: "User Created Successfully",
      user
    });

  } catch (error) {

    res.status(400).json({
      error: error.message
    });

  }
};


// GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {

    const users = await User.find().select("-password");

    res.status(200).json({
      total: users.length,
      users
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};


// GET USER BY ID
exports.getUserById = async (req, res) => {
  try {

    const user = await User.findById(req.params.id)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        error: "User not found"
      });
    }

    res.status(200).json(user);

  } catch (error) {

    res.status(400).json({
      error: error.message
    });

  }
};