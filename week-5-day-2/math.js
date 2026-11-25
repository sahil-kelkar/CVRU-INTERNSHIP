// ========================================================
// Task 3: Build a Small Math Utility Module (math.js)
// Course: MERN Full Stack Internship Program
// Institution: Dr. C. V. Raman University (CVRU), Khandwa
// Student: Sahil Kelkar
// ========================================================

// 1. Addition function
function add(a, b) {
  return a + b;
}

// 2. Subtraction function
function subtract(a, b) {
  return a - b;
}

// 3. Multiplication function
function multiply(a, b) {
  return a * b;
}

// 4. Division function with divide-by-zero check
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Export functions using CommonJS module.exports
module.exports = {
  add,
  subtract,
  multiply,
  divide
};
