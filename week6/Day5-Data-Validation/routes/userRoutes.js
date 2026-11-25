const express = require("express");

const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUserById
} = require("../controllers/userController");

// CREATE USER
router.post("/", createUser);

// GET ALL USERS
router.get("/", getAllUsers);

// GET USER BY ID
router.get("/:id", getUserById);

module.exports = router;