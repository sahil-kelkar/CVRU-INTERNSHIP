// ========================================================
// Topic 7: Path Module (Built-in Core Module)
// Helps manage file and directory paths across different OS
// ==========================================

const path = require("path");

console.log("=========================================");
console.log("         CORE MODULE: path               ");
console.log("=========================================");

// 1. Current file name, directory name, and file extension
console.log("Base file name (path.basename) :", path.basename(__filename));
console.log("Directory path (path.dirname)  :", path.dirname(__filename));
console.log("File extension (path.extname)  :", path.extname(__filename));

// 2. Joining paths safely (independent of Windows \ or Mac / Linux /)
const samplePath = path.join(__dirname, "notes", "day1.txt");
console.log("Joined path    (path.join)     :", samplePath);

console.log("=========================================");
console.log("Path module methods executed successfully!");
