const Student = require("../models/Student");

// GET all Students
exports.getAllStudents= async (req, res) => {
try {
const students = await Student.find();
res.json(students);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

// GET Student by ID
exports.getStudentById = async (req, res) => {
try {
const student = await Student.findById(req.params.id);
if (!student) {
return res.status(404).json({ error: "Student not found" });
}
res.json(student);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

// PUT update Student
exports.updateStudent = async (req, res) => {
try {
const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true
});
if (!student) {
return res.status(404).json({ error: "Student not found" });
}
res.json({ message: "Student Updated", student });
} catch (err) {
res.status(500).json({ error: err.message });
}
};

// DELETE Student
exports.deleteStudent = async (req, res) => {
try {
const student = await Student.findByIdAndDelete(req.params.id);
if (!student) {
return res.status(404).json({ error: "Student not found" });
}
res.json({ message: "Student Deleted", student });
} catch (err) {
res.status(500).json({ error: err.message });
}
};
// POST create Students

exports.createStudent= async (req, res) => {
try {
const student = await Student.create(req.body);
res.status(201).json({ message: "Student Added", student });
} catch (err) {
res.status(400).json({ error: err.message });
}
}
