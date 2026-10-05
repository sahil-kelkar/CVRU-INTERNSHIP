# Day 4: JavaScript Basics & Functions

**Student:** Sahil Kelkar  
**Internship:** AISECT Infotech  
**Topic:** Hands-on Tasks (JS Functions, Dynamic DOM, and Basics)  

---

## 🛠️ Tasks Completed

### Task 1: Create a JS File & Practice Functions
1. **Normal Parameterized Function:**
   Calculates and returns the area of a rectangle:
   ```javascript
   function calculateRectangleArea(length, width) {
       return length * width;
   }
   ```
2. **Arrow Function for Voter Eligibility:**
   Checks if a voter is eligible to cast vote (Age &ge; 18):
   ```javascript
   const checkVoterEligibility = (age) => {
       if (age >= 18) {
           return "Eligible to Vote ✅";
       } else {
           return "Not Eligible to Vote ❌ (Must be 18 or above)";
       }
   };
   ```

### Task 2: Display User’s Name Dynamically on Webpage
- When the page loads, `prompt()` asks for the user's name.
- Dynamically updates the greeting on the webpage using Template Literals:
  ```javascript
  welcomeElement.innerText = `Welcome, ${userName}! 👋`;
  ```
- Includes a **Change Name** button to re-enter a name without refreshing the page.

---

## 💬 Discussion / Recap Summary

| Concept | Key Point |
| :--- | :--- |
| **Linking JS** | Use external `<script src="script.js"></script>` at the end of the `<body>` for cleaner separation and faster page parsing. |
| **`let` vs `const`** | Use `const` by default for variables that do not change; use `let` for variables whose values will be re-assigned. |
| **Functions** | Reusable blocks of code that take input parameters and return an output value. |
| **Arrow Functions** | ES6 shorter syntax for writing functions (`const myFunc = (param) => { ... }`). |
| **Template Literals** | Backtick syntax (`` `Hello, ${name}` ``) that simplifies string concatenation. |
| **Arrays & Objects** | Arrays store ordered collections `[1, 2, 3]`; Objects store key-value pairs `{ name: "Sahil", age: 20 }`. |

---

## 💡 Bonus Tips & Debugging

1. **`alert()` vs `console.log()` vs DOM Updates:**
   - `alert()`: Pops up a blocking dialog (halts execution until user clicks OK).
   - `console.log()`: Prints output silently to the Developer Tools Console (`F12` or `Ctrl+Shift+I` / `Cmd+Option+I`) for debugging.
   - **DOM Update:** Directly modifies HTML elements (e.g., `element.innerText = ...`), creating a smooth user experience.
2. **`typeof` Operator:**
   - Checks the data type of a variable:
     - `typeof "Sahil"` &rarr; `"string"`
     - `typeof 20` &rarr; `"number"`
     - `typeof true` &rarr; `"boolean"`
     - `typeof [1, 2, 3]` &rarr; `"object"`
