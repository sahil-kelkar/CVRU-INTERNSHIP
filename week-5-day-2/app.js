// ========================================================
// Task 3: Import and Use math.js Module (app.js)
// Course: MERN Full Stack Internship Program
// Institution: Dr. C. V. Raman University (CVRU), Khandwa
// Student: Sahil Kelkar
// ========================================================

// Import the custom math module using require()
const math = require("./math");

console.log("=========================================");
console.log("   WEEK 5 DAY 2: MATH MODULE TESTING     ");
console.log("=========================================");

console.log("Addition (10 + 5)       :", math.add(10, 5));
console.log("Subtraction (10 - 5)    :", math.subtract(10, 5));
console.log("Multiplication (10 * 5) :", math.multiply(10, 5));
console.log("Division (10 / 2)       :", math.divide(10, 2));
console.log("Division (10 / 0)       :", math.divide(10, 0));

console.log("=========================================");
console.log("Math utility module executed successfully!");
