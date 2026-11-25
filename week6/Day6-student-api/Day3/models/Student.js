const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
age: {
type: Number,
required: true,
min: 5,
max: 80
},
department: {
type: String,
default: "General"
},
createdAt: {
type: Date,
default: Date.now
}
});

module.exports = mongoose.model("Student", studentSchema);
