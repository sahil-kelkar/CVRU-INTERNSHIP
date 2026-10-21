// ==============================================================
// Day 6–7 Mini Project: Personal Portfolio Landing Page
// Student: Sahil Kelkar | AISECT Infotech / CVRU
// ==============================================================

// --------------------------------------------------------------
// 1. THEME TOGGLE (Dark / Light Mode)
// --------------------------------------------------------------
function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    const themeBtn = document.getElementById("themeToggleBtn");

    if (isDark) {
        themeBtn.innerText = "☀️ Light";
        localStorage.setItem("portfolioTheme", "dark");
    } else {
        themeBtn.innerText = "🌙 Dark";
        localStorage.setItem("portfolioTheme", "light");
    }
}

// Restore saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("portfolioTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        const themeBtn = document.getElementById("themeToggleBtn");
        if (themeBtn) themeBtn.innerText = "☀️ Light";
    }
});


// --------------------------------------------------------------
// 2. CONTACT FORM SUBMISSION WITH ALERT()
// Requirement: Contact form with alert() confirmation
// --------------------------------------------------------------
function handleContactSubmit(event) {
    event.preventDefault(); // Prevent standard page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation check
    if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all fields before sending your message.");
        return;
    }

    // Alert confirmation as requested in syllabus
    alert(`Thank you, ${name}! 🎉\nYour message has been sent successfully.\nI will reach back out to you at ${email}.`);

    // Reset the form after submission
    document.getElementById("contactForm").reset();

    console.log(`[Contact Form Submitted] Name: ${name} | Email: ${email}`);
}
