const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters"],
    trim: true
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [
      /^\S+@\S+\.\S+$/,
      "Invalid email format"
    ]
  },

  password: {
    type: String,
    required: [true, "Password is required"],

    validate: {
      validator: function(value) {
        return value.length >= 6;
      },
      message: "Password must be at least 6 characters long"
    }
  },

  mobile: {
    type: String,

    validate: {
      validator: function(value) {
        return !value || /^[0-9]{10}$/.test(value);
      },
      message: "Mobile number must be 10 digits"
    }
  },

  age: {
    type: Number,
    min: [18, "Age must be at least 18"],
    max: [70, "Age cannot be more than 70"]
  },

  role: {
    type: String,
    enum: ["Admin", "Customer", "Seller"],
    default: "Customer"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model(
  "User",
  userSchema,
  "Users"
);