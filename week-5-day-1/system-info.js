// ========================================================
// Task 3: Create a Script That Logs System Information
// os = Operating System (Built-in Core Module)
// ========================================================

const os = require("os");

console.log("=========================================");
console.log("       SYSTEM INFORMATION LOG (os)       ");
console.log("=========================================");

// 1. Platform & Architecture
console.log("Operating System :", os.platform());
console.log("Architecture     :", os.arch());
console.log("OS Type          :", os.type());
console.log("Home Directory   :", os.homedir());

// 2. Memory Information (Bytes converted to GB for clean beginner reading)
const totalMemBytes = os.totalmem();
const freeMemBytes = os.freemem();
const totalMemGB = (totalMemBytes / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (freeMemBytes / (1024 * 1024 * 1024)).toFixed(2);

console.log("Total Memory     :", `${totalMemGB} GB (${totalMemBytes} bytes)`);
console.log("Free Memory      :", `${freeMemGB} GB (${freeMemBytes} bytes)`);

// 3. CPU Information
const cpus = os.cpus();
console.log("CPU Cores Count  :", cpus.length);
if (cpus.length > 0) {
  console.log("CPU Model        :", cpus[0].model);
  console.log("CPU Speed        :", `${cpus[0].speed} MHz`);
}

console.log("=========================================");
console.log("System information logged successfully!");
