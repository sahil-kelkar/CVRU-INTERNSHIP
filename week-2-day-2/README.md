# Week 2 - Day 2: Functional JavaScript (`map`, `filter`, `reduce`)

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  
**Program:** 3-Month MERN Full Stack Internship Program  

---

## 📌 Core Concepts (Very Simple Explanation)

In JavaScript, **Higher-Order Functions** are functions that accept other functions (callbacks) as arguments. The 3 most important array methods are:

| Method | What it does | Simple Analogy | Result |
| :--- | :--- | :--- | :--- |
| **`filter()`** | Selects elements that match a condition | Channi (Strainer) - only keeps what passes | New array (can be smaller) |
| **`map()`** | Transforms each element in the array | Machine line - modifies every item | New array (same length) |
| **`reduce()`** | Combines all elements into one single result | Piggy bank - adds all coins into total | Single value (number, object, etc.) |

---

## 🛠️ Tasks & Step-by-Step Solutions

### Task 1 – Data Transformation with `map()` and `filter()`

**Problem Statement:**
```javascript
const prices = [120, 250, 300, 450, 600];
// 1. Filter prices greater than 250
// 2. Apply 10% discount to filtered prices using map()
// 3. Log both original and discounted arrays
```

**Solution Code:**
```javascript
const prices = [120, 250, 300, 450, 600];

// Step 1: Filter prices > 250
const filteredPrices = prices.filter(price => price > 250);

// Step 2: 10% discount (price * 0.90)
const discountedPrices = filteredPrices.map(price => price * 0.90);

// Step 3: Output
console.log("Original Prices:", prices);
console.log("Filtered Prices (> 250):", filteredPrices);
console.log("Discounted Prices (10% off):", discountedPrices);
```

**Output:**
```
Original Prices: [ 120, 250, 300, 450, 600 ]
Filtered Prices (> 250): [ 300, 450, 600 ]
Discounted Prices (10% off): [ 270, 405, 540 ]
```

---

### Task 2 – Calculate Total Expense with `reduce()`

**Problem Statement:**
```javascript
const expenses = [
  { category: "Food", amount: 300 },
  { category: "Transport", amount: 150 },
  { category: "Shopping", amount: 400 },
];

// Use reduce() to calculate total expense
// Output: "Total Expense: ₹850"
```

**Solution Code:**
```javascript
const expenses = [
  { category: "Food", amount: 300 },
  { category: "Transport", amount: 150 },
  { category: "Shopping", amount: 400 }
];

// reduce(accumulator, currentItem) -> initial value = 0
const totalExpense = expenses.reduce((total, item) => total + item.amount, 0);

console.log(`Total Expense: ₹${totalExpense}`);
```

**Output:**
```
Total Expense: ₹850
```

---

### Task 3 – Combine `map()`, `filter()`, `reduce()`

**Problem Statement:**
```javascript
const scores = [45, 80, 90, 35, 60, 75];
// Filter passing scores (>=50)
// Add 10 bonus marks to each
// Calculate total using reduce()
```

**Solution Code:**
```javascript
const scores = [45, 80, 90, 35, 60, 75];

// Method Chaining: filter -> map -> reduce
const totalScore = scores
  .filter(score => score >= 50)       // [80, 90, 60, 75]
  .map(score => score + 10)           // [90, 100, 70, 85]
  .reduce((sum, score) => sum + score, 0); // 90 + 100 + 70 + 85 = 345

console.log("Total Score:", totalScore);
```

**Output:**
```
Total Score: 345
```

---

### Mini Challenge – “Student Score Analyzer”

**Problem Statement:**
```javascript
const students = [
  { name: "Aman", marks: 85 },
  { name: "Sara", marks: 42 },
  { name: "Riya", marks: 68 },
  { name: "John", marks: 49 }
];
// 1. Filter students who passed (marks >= 50)
// 2. Add +5 bonus marks to each
// 3. Log each student's name and final score
// 4. Calculate and display class average
```

**Solution Code:**
```javascript
const students = [
  { name: "Aman", marks: 85 },
  { name: "Sara", marks: 42 },
  { name: "Riya", marks: 68 },
  { name: "John", marks: 49 }
];

// 1. Filter passing students (>= 50) & 2. Add +5 bonus marks
const passedStudents = students
  .filter(student => student.marks >= 50)
  .map(student => ({
    name: student.name,
    marks: student.marks + 5
  }));

// 3. Log each student's name and final score
passedStudents.forEach(student => {
  console.log(`${student.name}: ${student.marks}`);
});

// 4. Calculate and display class average
const totalMarks = passedStudents.reduce((sum, student) => sum + student.marks, 0);
const classAverage = totalMarks / passedStudents.length;

console.log(`Class Average: ${classAverage}`);
```

**Expected & Actual Output:**
```
Aman: 90
Riya: 73
Class Average: 81.5
```

---

## 🚀 How to Run

### Method 1: Using Node.js Terminal
```bash
node week-2-day-2/script.js
```

### Method 2: In Browser
Open `week-2-day-2/index.html` in your browser to interactively click buttons and see the computed outputs.
