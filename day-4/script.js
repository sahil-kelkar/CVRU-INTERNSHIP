// Day 4: JavaScript Basics & Functions
// Student: Sahil Kelkar

// -------------------------------------------------------------
// Task 2: Display User's Name Dynamically on Webpage
// When the page loads, ask for a name and display "Welcome, [Name]!"
// -------------------------------------------------------------
window.onload = function() {
    let name = prompt("Please enter your name:");
    if (name && name.trim() !== "") {
        document.getElementById("greeting").innerText = `Welcome, ${name}! 👋`;
    } else {
        document.getElementById("greeting").innerText = "Welcome, Alice! 👋";
    }
};


// -------------------------------------------------------------
// Task 1 (Part A): Normal Parameterized Function
// Calculates the area of a rectangle (Length * Width)
// -------------------------------------------------------------
function getArea(length, width) {
    return length * width;
}

function calculateArea() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;

    if (length === "" || width === "") {
        document.getElementById("areaResult").innerText = "Please enter both length and width.";
        return;
    }

    let area = getArea(Number(length), Number(width));
    document.getElementById("areaResult").innerText = `Area of Rectangle: ${area}`;
}


// -------------------------------------------------------------
// Task 1 (Part B): Arrow Function for Voter Eligibility
// Checks if age >= 18 (Can vote else Not)
// -------------------------------------------------------------
const checkVote = (age) => {
    if (age >= 18) {
        return "Eligible to Vote ✅";
    } else {
        return "Not Eligible to Vote ❌";
    }
};

function checkEligibility() {
    let age = document.getElementById("age").value;

    if (age === "") {
        document.getElementById("voteResult").innerText = "Please enter your age.";
        return;
    }

    let status = checkVote(Number(age));
    document.getElementById("voteResult").innerText = `Result: ${status}`;
}
