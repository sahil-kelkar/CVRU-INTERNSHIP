const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  productName: {
    type: String,
    required: [true, "Product name is required"]
  },

  amount: {
    type: Number,
    required: [true, "Amount is required"],
    min: [1, "Amount must be greater than zero"]
  },

  quantity: {
    type: Number,
    default: 1,
    min: 1
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"]
  }

}, {
  timestamps: true
});

module.exports = mongoose.model(
  "Order",
  orderSchema,
  "Orders"
);