// ==========================================
// Week 2 - Day 4: Fetch API & Random Users
// Student: Sahil Kelkar | CVRU / AISECT
// ==========================================

// ------------------------------------------
// Task 1: Fetch 1 Random User Card
// ------------------------------------------
async function fetchSingleUser() {
    const card = typeof document !== "undefined" ? document.getElementById("singleUserCard") : null;
    if (card) card.innerHTML = "<p class='loading'>Loading user...</p>";

    try {
        const res = await fetch("https://randomuser.me/api");
        const data = await res.json();
        const user = data.results[0];

        const fullName = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const photo = user.picture.large;

        console.log("Task 1 User:", fullName, email);

        if (card) {
            card.innerHTML = `
                <div class="user-card-single">
                    <img src="${photo}" alt="${fullName}" class="user-img-large">
                    <h3>${fullName}</h3>
                    <p class="user-email"><a href="mailto:${email}">${email}</a></p>
                </div>
            `;
        }
    } catch (error) {
        console.error("Error in Task 1:", error);
        if (card) card.innerHTML = "<p class='error'>Failed to load user.</p>";
    }
}

// ------------------------------------------
// Task 2: Fetch 5 Random Users (Grid Layout)
// ------------------------------------------
async function fetchMultipleUsers() {
    const grid = typeof document !== "undefined" ? document.getElementById("multipleUsersGrid") : null;
    if (grid) grid.innerHTML = "<p class='loading'>Loading 5 users...</p>";

    try {
        const res = await fetch("https://randomuser.me/api/?results=5");
        const data = await res.json();

        console.log(`Task 2: Loaded ${data.results.length} users.`);

        if (grid) {
            grid.innerHTML = data.results.map(user => `
                <div class="user-card">
                    <img src="${user.picture.medium}" alt="${user.name.first}" class="user-img">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p class="user-email"><a href="mailto:${user.email}">${user.email}</a></p>
                </div>
            `).join("");
        }
    } catch (error) {
        console.error("Error in Task 2:", error);
        if (grid) grid.innerHTML = "<p class='error'>Failed to load users.</p>";
    }
}

// ------------------------------------------
// Mini Task: User Directory (Refresh Users)
// ------------------------------------------
async function loadUserDirectory() {
    const directory = typeof document !== "undefined" ? document.getElementById("directoryGrid") : null;
    if (directory) directory.innerHTML = "<p class='loading'>Loading user directory...</p>";

    try {
        const res = await fetch("https://randomuser.me/api/?results=6");
        const data = await res.json();

        console.log(`Mini Task: Loaded ${data.results.length} users.`);

        if (directory) {
            directory.innerHTML = data.results.map(user => `
                <div class="user-card">
                    <img src="${user.picture.medium}" alt="${user.name.first}" class="user-img">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p class="user-email"><a href="mailto:${user.email}">${user.email}</a></p>
                </div>
            `).join("");
        }
    } catch (error) {
        console.error("Error in Mini Task:", error);
        if (directory) directory.innerHTML = "<p class='error'>Failed to load directory.</p>";
    }
}

// ------------------------------------------
// Auto-load data on page load (Browser)
// ------------------------------------------
if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", () => {
        fetchSingleUser();
        fetchMultipleUsers();
        loadUserDirectory();
    });
}

// ------------------------------------------
// Auto-run in Node.js (Terminal)
// ------------------------------------------
if (typeof window === "undefined") {
    (async () => {
        console.log("Running Week 2 Day 4 Tasks in Node.js:");
        await fetchSingleUser();
        await fetchMultipleUsers();
        await loadUserDirectory();
        console.log("All tasks completed!");
    })();
}
