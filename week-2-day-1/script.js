// ============================================================
// Week 2 - Day 1: Modern JavaScript (ES6+) Features
// Student: Sahil Kelkar | CVRU / AISECT Infotech
// ============================================================

// Result display helper (Browser DOM + Console)
function displayResult(elementId, text) {
    if (typeof document !== "undefined") {
        const el = document.getElementById(elementId);
        if (el) {
            el.innerText = text;
        }
    }
    console.log(text);
}

// ------------------------------------------------------------
// Task 1: Object & Array Destructuring
// ------------------------------------------------------------
function runTask1() {
    // 1. Object Destructuring (Object se values nikalna)
    const car = { brand: "Tesla", model: "Model 3", color: "White" };
    const { brand, model } = car;

    // 2. Array Destructuring (Array se values nikalna)
    const colors = ["Red", "Green", "Blue"];
    const [firstColor, secondColor] = colors;

    const output = `🚗 Car: Brand = ${brand}, Model = ${model}\n🎨 Colors: First = ${firstColor}, Second = ${secondColor}`;
    displayResult("task1Result", output);
}

// ------------------------------------------------------------
// Task 2: Spread & Rest Operators (...)
// ------------------------------------------------------------
function runTask2() {
    // 1. Spread Operator: Do arrays ko merge karna
    const fruits = ["Apple", "Banana"];
    const moreFruits = ["Cherry", "Mango"];
    const allFruits = [...fruits, ...moreFruits];

    // 2. Rest Operator: Multiple arguments ko ek array me lena
    const countItems = (...items) => `Total ${items.length} items: [${items.join(", ")}]`;

    const output = `🍎 Merged Array (Spread): [${allFruits.join(", ")}]\n📦 Rest Parameter Function: ${countItems(...allFruits)}`;
    displayResult("task2Result", output);
}

// ------------------------------------------------------------
// Task 3: Template Literals
// ------------------------------------------------------------
function runTask3() {
    const studentName = "Priya";
    const course = "JavaScript Mastery";

    // Backticks (`) aur ${variable} ka use
    const greeting = `Hello ${studentName}! Welcome to ${course}.`;

    displayResult("task3Result", greeting);
}

// ------------------------------------------------------------
// Task 4: ES5 to ES6 Code Refactoring
// ------------------------------------------------------------
function runTask4() {
    const user = { name: "Aman", age: 22 };

    // Modern ES6: Arrow function + Template literal + Destructuring
    const greet = ({ name, age }) => `Hello ${name}, you are ${age} years old.`;

    const output = greet(user);
    displayResult("task4Result", output);
}

// ------------------------------------------------------------
// Mini Challenge: Array map() with Arrow Function
// ------------------------------------------------------------
function runChallenge() {
    const numbers = [1, 2, 3, 4, 5];

    // map() method with concise arrow function
    const doubled = numbers.map(n => n * 2);

    const output = `Original Numbers: [${numbers.join(", ")}]\nDoubled Numbers (n * 2): [${doubled.join(", ")}]`;
    displayResult("challengeResult", output);
}

// Node.js terminal execution check
if (typeof window === "undefined") {
    console.log("=== Week 2 - Day 1: Modern JavaScript (ES6) Tasks ===\n");
    console.log("[Task 1: Destructuring]");
    runTask1();
    console.log("\n[Task 2: Spread & Rest]");
    runTask2();
    console.log("\n[Task 3: Template Literals]");
    runTask3();
    console.log("\n[Task 4: ES5 to ES6 Refactor]");
    runTask4();
    console.log("\n[Mini Challenge: map() + Arrow Function]");
    runChallenge();
}
