const Course = require("../models/courseModel");

exports.addCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      message: "Course added successfully",
      course
    });

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};