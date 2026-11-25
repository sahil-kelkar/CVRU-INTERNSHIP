const Student = require("../models/studentModel");

// 1. Add New Student
exports.addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      message: "Student added successfully",
      student
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};


// 2. Get All Students + Search + Pagination + Sorting
exports.getStudents = async (req, res) => {
  try {
    const {
      search,
      page = 1,
      limit = 5,
      sort = "name",
      order = "asc"
    } = req.query;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    if (
      !Number.isInteger(pageNumber) ||
      !Number.isInteger(limitNumber) ||
      pageNumber < 1 ||
      limitNumber < 1 ||
      limitNumber > 100
    ) {
      return res.status(400).json({
        message: "Invalid page or limit"
      });
    }

    const query = {};

    if (search) {
      query.name = {
        $regex: search,
        $options: "i"
      };
    }

    const allowedSortFields = [
      "name",
      "rollNo",
      "department",
      "year",
      "email"
    ];

    if (!allowedSortFields.includes(sort)) {
      return res.status(400).json({
        message: "Invalid sort field"
      });
    }

    const sortOrder = order === "desc" ? -1 : 1;

    const students = await Student.find(query)
      .sort({ [sort]: sortOrder })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    const totalStudents = await Student.countDocuments(query);

    res.status(200).json({
      totalStudents,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalStudents / limitNumber),
      students
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


// 3. Get Student By ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(student);

  } catch (error) {
    res.status(400).json({
      error: "Invalid student ID"
    });
  }
};


// 4. Update Student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      message: "Student updated successfully",
      student
    });

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};


// 5. Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      message: "Student deleted successfully"
    });

  } catch (error) {
    res.status(400).json({
      error: "Invalid student ID"
    });
  }
};