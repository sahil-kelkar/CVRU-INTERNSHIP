const Order = require("../models/Order");
const User = require("../models/User");

// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {

    const { productName, amount, quantity, user } = req.body;

    if (!productName || amount === undefined || !user) {
      return res.status(400).json({
        error: "Product name, amount and user ID are required"
      });
    }

    // CHECK USER EXISTS
    const existingUser = await User.findById(user);

    if (!existingUser) {
      return res.status(404).json({
        error: "User not found"
      });
    }

    const order = await Order.create({
      productName,
      amount,
      quantity,
      user
    });

    res.status(201).json({
      message: "Order Created Successfully",
      order
    });

  } catch (error) {

    res.status(400).json({
      error: error.message
    });

  }
};


// GET ALL ORDERS WITH USER DETAILS
exports.getAllOrders = async (req, res) => {
  try {

    const orders = await Order.find()
      .populate("user", "name email mobile role");

    res.status(200).json({
      total: orders.length,
      orders
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};


// GET ORDER BY ID WITH USER DETAILS
exports.getOrderById = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id)
      .populate("user", "name email mobile");

    if (!order) {
      return res.status(404).json({
        error: "Order not found"
      });
    }

    res.status(200).json(order);

  } catch (error) {

    res.status(400).json({
      error: error.message
    });

  }
};


// GET ORDERS OF A PARTICULAR USER
exports.getOrdersByUser = async (req, res) => {
  try {

    const userId = req.params.userId;

    const orders = await Order.find({
      user: userId
    }).populate("user", "name email");

    res.status(200).json({
      total: orders.length,
      orders
    });

  } catch (error) {

    res.status(400).json({
      error: error.message
    });

  }
};