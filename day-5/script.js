// ==============================================================
// Day 5: DOM & Event Handling
// Student: Sahil Kelkar | AISECT Infotech
// ==============================================================

// Current font size tracker for Task 1
let currentFontSize = 16;

// ==============================================================
// TASK 1: INTERACTIVE BUTTONS
// ==============================================================

// 1. Change Text Color on Click (RED, GREEN, BLUE)
function changeColor(color) {
    document.getElementById("sampleText").style.color = color;
}

// 2. Change Font Family via Dropdown
function changeFont() {
    let selectedFont = document.getElementById("fontSelect").value;
    document.getElementById("sampleText").style.fontFamily = selectedFont;
}

// 3. Change Font Size (A+ Increase, A- Decrease)
function changeFontSize(amount) {
    currentFontSize += amount;

    // Boundary limits (between 12px and 32px)
    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 32) currentFontSize = 32;

    document.getElementById("sampleText").style.fontSize = currentFontSize + "px";
}

// 4. Change Font Style on Mouseover (Bold, Italic, Underline)
function setStyle(styleType) {
    let text = document.getElementById("sampleText");
    if (styleType === "bold") {
        text.style.fontWeight = "bold";
    } else if (styleType === "italic") {
        text.style.fontStyle = "italic";
    } else if (styleType === "underline") {
        text.style.textDecoration = "underline";
    }
}

// Reset font style on mouseout
function resetStyle() {
    let text = document.getElementById("sampleText");
    text.style.fontWeight = "normal";
    text.style.fontStyle = "normal";
    text.style.textDecoration = "none";
}


// ==============================================================
// TASK 2: SIMPLE FORM VALIDATION
// Validate non-empty fields and alert user below the fields
// ==============================================================
function validateForm(event) {
    event.preventDefault(); // Stop form from reloading page

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let formSuccess = document.getElementById("formSuccess");

    // Clear previous errors
    nameError.innerText = "";
    emailError.innerText = "";
    formSuccess.innerText = "";

    let isValid = true;

    // Check Name
    if (name === "") {
        nameError.innerText = "⚠️ Name field cannot be empty.";
        isValid = false;
    }

    // Check Email
    if (email === "") {
        emailError.innerText = "⚠️ Email field cannot be empty.";
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        formSuccess.innerText = `✅ Thank you, ${name}! Form submitted successfully.`;
        document.getElementById("userForm").reset();
    }
}


// ==============================================================
// TASK 3: SIMPLE CALCULATOR (+, -, *, /)
// Validate non-empty fields & alert below
// ==============================================================
function calculate(operator) {
    let num1Input = document.getElementById("num1").value;
    let num2Input = document.getElementById("num2").value;

    let calcError = document.getElementById("calcError");
    let calcResult = document.getElementById("calcResult");

    // Clear previous messages
    calcError.innerText = "";
    calcResult.innerText = "";

    // Validation: check if non-empty
    if (num1Input === "" || num2Input === "") {
        calcError.innerText = "⚠️ Please enter both numbers to calculate.";
        return;
    }

    let n1 = Number(num1Input);
    let n2 = Number(num2Input);
    let result = 0;

    if (operator === "+") {
        result = n1 + n2;
    } else if (operator === "-") {
        result = n1 - n2;
    } else if (operator === "*") {
        result = n1 * n2;
    } else if (operator === "/") {
        if (n2 === 0) {
            calcError.innerText = "⚠️ Cannot divide by zero!";
            return;
        }
        result = n1 / n2;
    }

    calcResult.innerText = `Result: ${n1} ${operator} ${n2} = ${result}`;
}


// ==============================================================
// BONUS CHALLENGE: MINI THEME SWITCHER (Light & Dark)
// ==============================================================
function setTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}
