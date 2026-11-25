# Week-5 — Day-2: npm & Modular Programming

**Course:** MERN Full Stack Internship Program (3 Months)  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  
**Student:** Sahil Kelkar  
**GitHub Profile:** [https://github.com/sahil-kelkar](https://github.com/sahil-kelkar)  

---

## 📖 Core Concepts Explained (Beginner Level)

### 1️⃣ Understanding npm (Node Package Manager)
- **npm kya hai:** npm Node.js ka default package manager hai jo Node ke saath pehle se install aata hai.
- **Iska use kyu karte hain:**
  1. Third-party open-source libraries install karne ke liye (jaise `lodash`, `express`).
  2. Project ki dependencies aur version track karne ke liye (`package.json`).
  3. Custom scripts run karne ke liye (`npm start`, `npm run dev`).
- **Check npm Version:**
  ```bash
  npm -v
  ```

---

### 2️⃣ Installing Packages: Global vs Local

| Type | Command | Kaha Save Hota Hai? | Kab Use Karte Hain? |
| :--- | :--- | :--- | :--- |
| **Global (`-g`)** | `npm install -g nodemon` | Computer ke global system directory me | CLI tools jo terminal me har jagah chahiye |
| **Local** | `npm install lodash` | Current project ke `node_modules/` me | Libraries jo sirf specific project me chahiye |

Local installation se 3 cheezein banti hain:
1. **`node_modules/` folder:** Library ka saara downloaded code yahan rehta hai.
2. **`package.json`:** Isme dependency ka naam aur version save hota hai.
3. **`package-lock.json`:** Installed packages ki exact tree aur security checksums lock karta hai.

---

### 3️⃣ Managing Dependencies with `package.json`
`package.json` har Node.js project ka heart hota hai.

```bash
# Naya project initialize karne ke liye:
npm init -y
```

Isse default `package.json` banta hai:
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {},
  "devDependencies": {}
}
```

---

### 4️⃣ Semantic Versioning (semver: `X.Y.Z`)
Node packages ka version 3 numbers me hota hai: **MAJOR . MINOR . PATCH**

- **X (Major):** Breaking changes (purana code toot sakta hai).
- **Y (Minor):** Naye features add huye, but backward-compatible hai.
- **Z (Patch):** Chhote bug fixes aur performance improvements.

**Symbols ka matlab:**
- `^1.2.3` (Caret) $\rightarrow$ Minor aur Patch updates allow karta hai (jaise `1.3.0` ya `1.2.4`, but `2.0.0` nahi).
- `~1.2.3` (Tilde) $\rightarrow$ Sirf Patch updates allow karta hai (jaise `1.2.4`, but `1.3.0` nahi).
- `1.2.3` (Exact) $\rightarrow$ Fixed version, koi auto-update nahi.

---

### 5️⃣ Regular Dependencies vs Dev Dependencies

- **Dependencies (`"dependencies"`):**
  - Production me app run karne ke liye zaroori hoti hain (e.g., `express`, `lodash`).
  - Install command: `npm install lodash`
- **Dev Dependencies (`"devDependencies"`):**
  - Sirf code likhne, testing aur development ke time chahiye hoti hain (production me nahi) (e.g., `nodemon`, `eslint`, `jest`).
  - Install command: `npm install nodemon --save-dev`

---

## 🧪 Hands-On Tasks & Code Files

### 📂 Directory Structure:
```text
week-5-day-2/
├── package.json        # Dependencies, devDependencies & scripts
├── package-lock.json   # Exact dependency locks
├── .gitignore          # Ignores node_modules/
├── math.js             # Task 3: Math utility module (add, subtract, multiply, divide)
├── app.js              # Task 3: Importing and testing math module
└── lodash-demo.js      # Topic 2: Third-party library usage demo
```

---

### 📝 Task 1: Initialize a Node Project
Terminal me folder open karein aur run karein:
```bash
npm init -y
```

---

### 📝 Task 2: Install nodemon for Auto-Reload
**nodemon** ek aisi utility hai jo aapke code files ko monitor karti hai. Jaise hi aap file save karte hain, yeh server/app ko automatically restart kar deta hai (baar-baar terminal me `Ctrl + C` karke rerun karne ki zaroorat nahi padti).

1. **Install locally as Dev Dependency:**
   ```bash
   npm install nodemon --save-dev
   ```

2. **Add scripts in `package.json`:**
   ```json
   "scripts": {
     "start": "node app.js",
     "dev": "nodemon app.js"
   }
   ```

3. **Run with nodemon:**
   ```bash
   npm run dev
   ```

---

### 📝 Task 3: Build a Small Math Utility Module

#### Step 1: Create `math.js`
```javascript
// Function definitions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

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
```

#### Step 2: Import module in `app.js`
```javascript
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
```

#### Step 3: Run the code
Standard run:
```bash
node app.js
```
Ya auto-refresh mode (nodemon):
```bash
npm run dev
```

**Output:**
```text
=========================================
   WEEK 5 DAY 2: MATH MODULE TESTING     
=========================================
Addition (10 + 5)       : 15
Subtraction (10 - 5)    : 5
Multiplication (10 * 5) : 50
Division (10 / 2)       : 5
Division (10 / 0)       : Cannot divide by zero
=========================================
Math utility module executed successfully!
```

---

### 🌟 Bonus: Using Third-Party Package `lodash` (`lodash-demo.js`)

**Install:**
```bash
npm install lodash
```

**Code (`lodash-demo.js`):**
```javascript
const _ = require("lodash");

console.log("Capitalized :", _.capitalize("hello world from node.js"));
console.log("Chunked     :", _.chunk([1, 2, 3, 4, 5, 6], 2));
console.log("Sum         :", _.sum([1, 2, 3, 4, 5, 6]));
```

**Run:**
```bash
npm run lodash
```

**Output:**
```text
=========================================
     LODASH THIRD-PARTY PACKAGE DEMO     
=========================================
Original String      : hello world from node.js & npm
Capitalized (lodash) : Hello world from node.js & npm
Original Array       : [ 1, 2, 3, 4, 5, 6 ]
Chunked (size 2)     : [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
Sum of Array Numbers : 21
=========================================
Lodash library methods tested successfully!
```

---

## 🎯 Learning Outcomes Checklist
- [x] npm kya hai aur version kaise check karte hain (`npm -v`).
- [x] Local vs Global package installation ka difference.
- [x] `package.json` initialize karna (`npm init -y`).
- [x] Semantic versioning (`^`, `~`, exact) ka concept.
- [x] Regular dependencies (`lodash`) vs Dev dependencies (`nodemon`).
- [x] `nodemon` auto-reload configure aur run karna (`npm run dev`).
- [x] Custom module banana (`module.exports`) aur use karna (`require`).
