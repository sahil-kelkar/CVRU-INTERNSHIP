// ========================================================
// Topic 6: Importing and Using Custom Modules
// ========================================================

// Import the custom math module using require()
const math = require("./math");

console.log("=========================================");
console.log("       CUSTOM MODULE DEMO (math.js)      ");
console.log("=========================================");

console.log("Addition (5 + 10)        :", math.add(5, 10));
console.log("Subtraction (20 - 7)     :", math.subtract(20, 7));
console.log("Multiplication (6 * 4)   :", math.multiply(6, 4));

console.log("=========================================");
console.log("Custom module imported and executed successfully!");
