// ========================================================
// Topic 6: Custom Module Creation (math.js)
// In Node.js, every file is treated as a separate module.
// ========================================================

// Basic Math Functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// Exporting functions using CommonJS module.exports
module.exports = {
  add,
  subtract,
  multiply
};
