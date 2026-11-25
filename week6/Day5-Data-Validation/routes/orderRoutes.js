const express = require("express");

const router = express.Router();

const {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrdersByUser
} = require("../controllers/orderController");

// GET ALL ORDERS
router.get("/", getAllOrders);

// GET ORDERS BY USER ID
router.get("/user/:userId", getOrdersByUser);

// GET ORDER BY ID
router.get("/:id", getOrderById);

// CREATE ORDER
router.post("/", createOrder);

module.exports = router;