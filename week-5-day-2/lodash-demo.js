// ========================================================
// Topic 2: Third-Party Package Demo (lodash)
// Course: MERN Full Stack Internship Program
// Student: Sahil Kelkar
// ========================================================

let _;
try {
  _ = require("lodash");
} catch (e) {
  console.log("Note: lodash is not installed yet. Run 'npm install' to install dependencies.");
  process.exit(0);
}

console.log("=========================================");
console.log("     LODASH THIRD-PARTY PACKAGE DEMO     ");
console.log("=========================================");

// 1. Capitalize first letter of string
const sampleText = "hello world from node.js & npm";
console.log("Original String      :", sampleText);
console.log("Capitalized (lodash) :", _.capitalize(sampleText));

// 2. Chunk an array into smaller groups
const numbers = [1, 2, 3, 4, 5, 6];
console.log("Original Array       :", numbers);
console.log("Chunked (size 2)     :", _.chunk(numbers, 2));

// 3. Sum of numbers
console.log("Sum of Array Numbers :", _.sum(numbers));

console.log("=========================================");
console.log("Lodash library methods tested successfully!");
