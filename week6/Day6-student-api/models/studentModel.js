const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    rollNo: {
      type: Number,
      required: true,
      unique: true
    },

    department: {
      type: String,
      required: true,
      trim: true
    },

    year: {
      type: Number,
      required: true,
      min: 1,
      max: 4
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^\S+@\S+\.\S+$/
    },
    courses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }

  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Student",
  studentSchema,
  "students"
);