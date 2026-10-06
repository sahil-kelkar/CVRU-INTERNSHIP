# Week 2 - Day 1: Modern JavaScript (ES6+) Features

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  
**Program:** 3-Month MERN Full Stack Internship Program  

---

## 📌 Overview (Simple Language)

ES6 (ECMAScript 2015) JavaScript ka sabse important update hai. Is day par humne 5 main modern features seekhe:
1. **Destructuring:** Object ya Array se direct variables me data nikalna.
2. **Spread & Rest Operators (`...`):** Array ko merge karna (Spread) aur multiple arguments ko collect karna (Rest).
3. **Template Literals (`` ` ``):** `${variable}` ke saath clean string banana.
4. **Arrow Functions:** Short syntax `() => {}`.
5. **Array `map()` Method:** List ke har element par operation perform karna.

---

## 🛠️ Tasks & Simple Solutions

### Task 1: Object & Array Destructuring

**Code:**
```javascript
// 1. Object Destructuring
const car = { brand: "Tesla", model: "Model 3", color: "White" };
const { brand, model } = car;

console.log(brand); // Tesla
console.log(model); // Model 3

// 2. Array Destructuring
const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor] = colors;

console.log(firstColor);  // Red
console.log(secondColor); // Green
```

---

### Task 2: Spread & Rest Operators (`...`)

**Code:**
```javascript
// Spread: Arrays ko merge karna
const fruits = ["Apple", "Banana"];
const moreFruits = ["Cherry", "Mango"];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits); // ["Apple", "Banana", "Cherry", "Mango"]

// Rest: Unlimited parameters accept karna
const printFruits = (...items) => {
    console.log(`Total: ${items.length} items`);
};
printFruits("Apple", "Banana", "Cherry");
```

---

### Task 3: Template Literals

**Code:**
```javascript
const name = "Priya";
const course = "JavaScript Mastery";

// Template Literal using backticks (`)
const message = `Hello ${name}! Welcome to ${course}.`;
console.log(message);
// Output: Hello Priya! Welcome to JavaScript Mastery.
```

---

### Task 4: Code Refactoring (ES5 to ES6)

| ES5 (Old Style) | ES6 (Modern Style) |
| :--- | :--- |
| `var user = {name: "Aman", age: 22};` | `const user = { name: "Aman", age: 22 };` |
| `function greet(user) { ... }` | `const greet = ({ name, age }) => ...` |
| `"Hello " + user.name + ", you are " + user.age + " years old."` | `` `Hello ${name}, you are ${age} years old.` `` |

**Modern Code:**
```javascript
const user = { name: "Aman", age: 22 };
const greet = ({ name, age }) => `Hello ${name}, you are ${age} years old.`;

console.log(greet(user)); // Hello Aman, you are 22 years old.
```

---

### Mini Challenge: Array `map()` with Arrow Function

**Problem:** Array ke har number ko double (x2) karna.

**Code:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

---

## 💡 Quick Viva / Interview Notes: Why ES6 is Important?

1. **`let` & `const` vs `var`:** `var` function scoped tha aur bugs create karta tha. `let` aur `const` block-scoped `{}` hote hain.
2. **Arrow Functions:** Code short aur clean banta hai, aur `this` keyword properly bind rehta hai.
3. **Template Literals:** Long strings aur variables ko bina `+` operator ke easily combine karte hain.
4. **React & Node.js Ready:** Modern libraries (jaise React.js) poori tarah ES6 syntax par kaam karti hain.

---

## 🚀 How to Run

1. **In Terminal (Node.js):**
   ```bash
   node week-2-day-1/script.js
   ```

2. **In Browser:**
   `week-2-day-1/index.html` ko kisi bhi browser me open karein aur buttons click karke output dekhein.
