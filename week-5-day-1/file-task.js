// ========================================================
// Task 2: Read and Write Files Using fs Module
// fs = File System (Built-in Core Module)
// ========================================================

const fs = require("fs");

console.log("=========================================");
console.log("     TASK 2: FILE SYSTEM (fs) DEMO      ");
console.log("=========================================");

const fileName = "student.txt";
const fileContent = "Welcome to Node.js!\nStudent: Sahil Kelkar\nCourse: MERN Full Stack Internship Program";

// Step 1: Write file asynchronously
console.log(`1. Writing content to '${fileName}'...`);

fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("-> File written successfully!\n");

  // Step 2: Read file asynchronously after write completes
  console.log(`2. Reading content from '${fileName}'...`);
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("-> File content received:\n");
    console.log("-----------------------------------------");
    console.log(data);
    console.log("-----------------------------------------");
    console.log("\nTask 2 finished successfully!");
  });
});
