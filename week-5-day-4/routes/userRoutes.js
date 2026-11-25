// ========================================================
// Part 5 & 6: User Routes (routes/userRoutes.js)
// Modular router mapping URLs to controller functions
// ========================================================

const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// REST CRUD Endpoints
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
