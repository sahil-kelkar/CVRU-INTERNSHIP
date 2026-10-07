// ============================================================
// Week 2 - Day 2: Functional JavaScript (map, filter, reduce)
// Student: Sahil Kelkar | CVRU / AISECT Infotech
// ============================================================

// Helper function to show results both in Browser and Console
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
// Task 1: Data Transformation with map() and filter()
// ------------------------------------------------------------
function runTask1() {
    const prices = [120, 250, 300, 450, 600];

    // 1. Filter prices greater than 250
    // filter() sirf unhi elements ko rakhta hai jo condition pass karte hain
    const filteredPrices = prices.filter(price => price > 250);

    // 2. Apply 10% discount using map()
    // map() har element par operation karke ek naya array banata hai
    // 10% discount formula: price * 0.90 (ya price - price * 0.10)
    const discountedPrices = filteredPrices.map(price => price * 0.90);

    // 3. Result formatting
    const output = [
        `Original Prices: [${prices.join(", ")}]`,
        `Filtered (> 250): [${filteredPrices.join(", ")}]`,
        `Discounted (10% off): [${discountedPrices.join(", ")}]`
    ].join("\n");

    displayResult("task1Result", output);
    return { prices, filteredPrices, discountedPrices };
}

// ------------------------------------------------------------
// Task 2: Calculate Total Expense with reduce()
// ------------------------------------------------------------
function runTask2() {
    const expenses = [
        { category: "Food", amount: 300 },
        { category: "Transport", amount: 150 },
        { category: "Shopping", amount: 400 }
    ];

    // reduce() pooray array ko ek single value me condense (accumulate) karta hai
    // total: accumulator (starting from 0)
    // item: current expense item
    const totalExpense = expenses.reduce((total, item) => total + item.amount, 0);

    const output = `Total Expense: ₹${totalExpense}`;
    displayResult("task2Result", output);
    return totalExpense;
}

// ------------------------------------------------------------
// Task 3: Combine map(), filter(), reduce()
// ------------------------------------------------------------
function runTask3() {
    const scores = [45, 80, 90, 35, 60, 75];

    // Step 1: Filter passing scores (>= 50)
    const passingScores = scores.filter(score => score >= 50);

    // Step 2: Add 10 bonus marks to each using map()
    const bonusScores = passingScores.map(score => score + 10);

    // Step 3: Calculate total using reduce()
    const totalScore = bonusScores.reduce((sum, score) => sum + score, 0);

    // We can also chain all 3 together:
    // const chainedTotal = scores
    //     .filter(score => score >= 50)
    //     .map(score => score + 10)
    //     .reduce((sum, score) => sum + score, 0);

    const output = [
        `Original Scores: [${scores.join(", ")}]`,
        `Passing Scores (>= 50): [${passingScores.join(", ")}]`,
        `Bonus Scores (+10): [${bonusScores.join(", ")}]`,
        `Total Score: ${totalScore}`
    ].join("\n");

    displayResult("task3Result", output);
    return { passingScores, bonusScores, totalScore };
}

// ------------------------------------------------------------
// Mini Challenge: Student Score Analyzer
// ------------------------------------------------------------
function runChallenge() {
    const students = [
        { name: "Aman", marks: 85 },
        { name: "Sara", marks: 42 },
        { name: "Riya", marks: 68 },
        { name: "John", marks: 49 }
    ];

    // 1. Filter only students who passed (marks >= 50)
    // 2. Add +5 bonus marks to each using map()
    const passedStudents = students
        .filter(student => student.marks >= 50)
        .map(student => ({
            name: student.name,
            marks: student.marks + 5
        }));

    // 3. Log each student's name and final score
    const studentLogs = passedStudents
        .map(student => `${student.name}: ${student.marks}`)
        .join("\n");

    // 4. Calculate and display class average using reduce()
    const totalMarks = passedStudents.reduce((sum, student) => sum + student.marks, 0);
    const classAverage = totalMarks / passedStudents.length;

    const output = `${studentLogs}\nClass Average: ${classAverage}`;

    displayResult("challengeResult", output);
    return { passedStudents, classAverage };
}

// Run automatically in Node.js environment
if (typeof window === "undefined") {
    console.log("==================================================");
    console.log(" Week 2 - Day 2: Functional JavaScript Tasks");
    console.log("==================================================\n");

    console.log("--- Task 1: map() and filter() ---");
    runTask1();

    console.log("\n--- Task 2: reduce() for Total Expense ---");
    runTask2();

    console.log("\n--- Task 3: Combine filter(), map(), reduce() ---");
    runTask3();

    console.log("\n--- Mini Challenge: Student Score Analyzer ---");
    runChallenge();
}
