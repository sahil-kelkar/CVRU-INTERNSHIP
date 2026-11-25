# Week-5 — Day-1: Introduction to Node.js

**Course:** MERN Full Stack Internship Program (3 Months)  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  
**Student:** Sahil Kelkar  
**GitHub Profile:** [https://github.com/sahil-kelkar](https://github.com/sahil-kelkar)  

---

## 📖 What is Node.js? (Very Simple Explanation)

- **Definition:** Node.js ek open-source, server-side JavaScript runtime environment hai jo developers ko browser ke bahar JavaScript run karne deta hai.
- **Pehle kya tha:** Pehle JavaScript sirf web browser (Chrome, Firefox, Safari) ke andar chalti thi (DOM manipulation, buttons, animations ke liye).
- **Node.js ke aane ke baad:** Ab JavaScript backend servers, REST APIs, CLI tools, real-time chat apps aur automation scripts banane ke liye use hoti hai.

### ⚙️ How Node.js Works:
1. **Chrome V8 Engine:** Google dwara C++ me likha gaya engine jo JavaScript code ko seedhe machine code me convert karta hai (extremely fast).
2. **Event-Driven Architecture:** Events (request aana, file read hona) par react karta hai.
3. **Non-Blocking I/O (Asynchronous):** Kisi heavy task (jaise file read ya database query) ke complete hone ka wait nahi karta, aage ka code execute karta rehta hai. Jab task complete hota hai, callback ya promise ke through result mil jata hai.

---

## 💻 Environment & Installation Check

Check karein ki Node.js aur npm aapke system me install hain:

```bash
# Check Node version
node -v

# Check NPM (Node Package Manager) version
npm -v
```

---

## 🎯 Hands-On Tasks & Code Files

Folder Structure:
```text
week-5-day-1/
├── package.json        # Project metadata & npm scripts
├── hello.js            # Task 1: "Hello World" in Node.js
├── math.js             # Topic 6: Custom module with module.exports
├── module-demo.js      # Topic 6: Importing custom module with require()
├── file-task.js        # Task 2: File reading and writing with 'fs' module
├── student.txt         # Auto-generated text file from Task 2
├── path-demo.js        # Topic 7: Path module methods (basename, dirname, extname, join)
├── system-info.js      # Task 3: Operating system details with 'os' module
└── README.md           # Documentation & step-by-step notes
```

---

### Task 1: Create and Run a "Hello World" Node Script (`hello.js`)

Browser ke bina terminal me pehla JavaScript script run karna.

**Code (`hello.js`):**
```javascript
// Task 1: Hello World from Node.js
console.log("Hello World from Node.js!");

const studentName = "Sahil Kelkar";
console.log(`Welcome to Node.js Backend Development, ${studentName}!`);
console.log("Node.js is running JavaScript outside the browser using Chrome's V8 Engine.");
```

**Run Command:**
```bash
node hello.js
```

**Output:**
```text
Hello World from Node.js!
Welcome to Node.js Backend Development, Sahil Kelkar!
Node.js is running JavaScript outside the browser using Chrome's V8 Engine.
```

---

### Topic: Using Terminal & Node REPL

REPL stands for **Read-Eval-Print-Loop**. Yeh JavaScript ko live test karne ke liye ek interactive terminal environment hai.

1. **REPL Start karein:**
   ```bash
   node
   ```
2. **Commands try karein:**
   ```javascript
   > 10 + 20
   30
   > const greet = () => "Hello Node!";
   undefined
   > greet()
   'Hello Node!'
   ```
3. **Exit karein:**
   Press `Ctrl + C` twice, ya type `.exit`

---

### Topic: Modules & the `require` System (CommonJS)

Node.js me har file ek **module** hoti hai. Ek file ke code ko doosri file me use karne ke liye `module.exports` aur `require()` ka use karte hain.

#### 1. Custom Module (`math.js`):
```javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

module.exports = {
  add,
  subtract,
  multiply
};
```

#### 2. Importing Module (`module-demo.js`):
```javascript
const math = require("./math");

console.log("Addition (5 + 10):", math.add(5, 10));
console.log("Subtraction (20 - 7):", math.subtract(20, 7));
console.log("Multiplication (6 * 4):", math.multiply(6, 4));
```

**Run Command:**
```bash
node module-demo.js
```

---

### Task 2: Read and Write Files Using `fs` Module (`file-task.js`)

Node.js ka built-in `fs` (File System) module files create, read, update aur delete karne ke liye use hota hai.

**Code (`file-task.js`):**
```javascript
const fs = require("fs");

const fileName = "student.txt";
const fileContent = "Welcome to Node.js!\nStudent: Sahil Kelkar\nCourse: MERN Full Stack Internship Program";

// 1. Write file asynchronously
fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("-> File written successfully!\n");

  // 2. Read file asynchronously
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("-> File content received:\n");
    console.log(data);
    console.log("\nTask 2 finished successfully!");
  });
});
```

**Run Command:**
```bash
node file-task.js
```

**Output:**
```text
1. Writing content to 'student.txt'...
-> File written successfully!

2. Reading content from 'student.txt'...
-> File content received:

-----------------------------------------
Welcome to Node.js!
Student: Sahil Kelkar
Course: MERN Full Stack Internship Program
-----------------------------------------

Task 2 finished successfully!
```

---

### Topic: Core Module `path` (`path-demo.js`)

File aur folder paths ko cross-platform (Windows / Mac / Linux) safe banane ke liye `path` module use hota hai.

**Code (`path-demo.js`):**
```javascript
const path = require("path");

console.log("Base file name (path.basename) :", path.basename(__filename));
console.log("Directory path (path.dirname)  :", path.dirname(__filename));
console.log("File extension (path.extname)  :", path.extname(__filename));

const samplePath = path.join(__dirname, "notes", "day1.txt");
console.log("Joined path    (path.join)     :", samplePath);
```

**Run Command:**
```bash
node path-demo.js
```

---

### Task 3: Create a Script That Logs System Information (`system-info.js`)

Built-in `os` module computer ke hardware aur operating system ki details provide karta hai.

**Code (`system-info.js`):**
```javascript
const os = require("os");

console.log("Operating System :", os.platform());
console.log("Architecture     :", os.arch());
console.log("Home Directory   :", os.homedir());

const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);

console.log("Total Memory     :", `${totalMemGB} GB`);
console.log("Free Memory      :", `${freeMemGB} GB`);

const cpus = os.cpus();
console.log("CPU Cores Count  :", cpus.length);
console.log("CPU Model        :", cpus[0]?.model || "Standard CPU");
```

**Run Command:**
```bash
node system-info.js
```

**Sample Output:**
```text
=========================================
       SYSTEM INFORMATION LOG (os)       
=========================================
Operating System : darwin (or win32 on Windows)
Architecture     : arm64 / x64
Home Directory   : /Users/sahilkelkar
Total Memory     : 16.00 GB
Free Memory      : 0.15 GB
CPU Cores Count  : 10
CPU Model        : Apple M4
=========================================
System information logged successfully!
```

---

## ⚡ Quick NPM Scripts

`package.json` me ready-to-use scripts add kiye gaye hain:

```bash
npm run hello     # Run Task 1
npm run fs        # Run Task 2 (fs module)
npm run os        # Run Task 3 (os module)
npm run math      # Run Custom Module Demo
npm run path      # Run Path Module Demo
```

---

## ✅ Learning Outcomes / Checklist

- [x] Node.js kya hai aur yeh JavaScript ko browser ke bahar kaise chalata hai.
- [x] V8 Engine, Event Loop aur Non-blocking I/O ka basic role.
- [x] Terminal aur Node REPL use karke JS execute karna.
- [x] CommonJS modules: `module.exports` aur `require()` ka use.
- [x] Built-in Core Modules: `fs`, `path`, aur `os`.
- [x] File write aur read karna (`student.txt`).
- [x] System hardware aur OS information display karna.
