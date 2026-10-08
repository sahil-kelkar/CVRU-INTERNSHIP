// ============================================================
// Week 2 - Day 3: Asynchronous JavaScript (Promises & Async/Await)
// Student: Sahil Kelkar | CVRU / AISECT Infotech
// ============================================================

// ------------------------------------------------------------
// Task 1 – Simulate API Call with setTimeout
// ------------------------------------------------------------
// Concept: JavaScript is single-threaded & non-blocking.
// setTimeout pauses callback execution without freezing the main thread.
function fakeAPICall(isExtension = true) {
    const el = typeof document !== "undefined" ? document.getElementById("task1Result") : null;

    console.log("Fetching user details...");
    if (el) el.innerText = "Fetching user details...";

    // Step 1: Wait 2000ms (2 seconds) to simulate fetching user data
    setTimeout(() => {
        console.log("User data received ");
        if (el) el.innerText = "Fetching user details...\nUser data received ";

        // Extension: Nested timeout for "Processing Data..." to demonstrate async flow
        if (isExtension) {
            setTimeout(() => {
                console.log("Processing Data...");
                if (el) el.innerText = "Fetching user details...\nUser data received \nProcessing Data...";
            }, 1000);
        }
    }, 2000);
}

// ------------------------------------------------------------
// Task 2 – Promise Example
// ------------------------------------------------------------
// Concept: A Promise represents a future value that can either
// RESOLVE (Success) or REJECT (Failure).
function runPromiseTask(isOnline = true) {
    const el = typeof document !== "undefined" ? document.getElementById("task2Result") : null;

    console.log(`\nInitiating simulated fetch (isOnline = ${isOnline})...`);
    if (el) {
        el.className = "result-box";
        el.innerText = `Connecting to server... (Status: ${isOnline ? "Online" : "Offline"}) ⏳`;
    }

    // 1. Creating the Promise
    const simulateFetch = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOnline) {
                resolve("Data fetched successfully ");
            } else {
                reject("Network error ");
            }
        }, 1500);
    });

    // 2. Consuming the Promise with .then() and .catch()
    simulateFetch
        .then((msg) => {
            console.log(msg);
            if (el) {
                el.innerText = ` Resolved (.then):\n${msg}`;
                el.className = "result-box success";
            }
        })
        .catch((err) => {
            console.error(err);
            if (el) {
                el.innerText = ` Rejected (.catch):\n${err}`;
                el.className = "result-box error";
            }
        });

    return simulateFetch;
}

// ------------------------------------------------------------
// Task 3 – Async/Await with Fetch (JSONPlaceholder)
// ------------------------------------------------------------
// Concept: 'async/await' is syntactic sugar over Promises,
// making asynchronous code look clean and synchronous.
async function loadPosts() {
    const el = typeof document !== "undefined" ? document.getElementById("task3Result") : null;

    console.log("Fetching posts from JSONPlaceholder...");
    if (el) {
        el.className = "result-box";
        el.innerText = "Fetching posts from JSONPlaceholder... 🔄";
    }

    try {
        // 1. Send HTTP GET request
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

        // 2. Parse response body as JSON
        const posts = await response.json();

        console.log("Latest Posts:", posts);

        if (el) {
            const formatted = posts
                .map((post, idx) => `${idx + 1}. [ID: ${post.id}] ${post.title}`)
                .join("\n");
            el.innerText = `Latest Posts (5):\n\n${formatted}`;
            el.className = "result-box success";
        }

        return posts;
    } catch (error) {
        console.error("Error loading posts:", error);
        if (el) {
            el.innerText = `Error loading posts: ${error.message}`;
            el.className = "result-box error";
        }
    }
}

// ------------------------------------------------------------
// Mini Challenge – "Weather Fetcher" (Open-Meteo API)
// ------------------------------------------------------------
// Goal:
// 1. Fetches weather data from Open-Meteo (lat: 28.61, lon: 77.23)
// 2. Displays temperature and wind speed
// 3. Handles errors gracefully
async function fetchWeather() {
    const el = typeof document !== "undefined" ? document.getElementById("challengeResult") : null;

    console.log("Fetching weather...");
    if (el) {
        el.className = "result-box";
        el.innerText = "Fetching weather...";
    }

    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true";

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const currentTemp = data.current_weather.temperature;
        const windSpeed = data.current_weather.windspeed;

        console.log(`Current Temp: ${currentTemp}°C`);
        console.log(`Wind Speed: ${windSpeed} km/h`);

        if (el) {
            el.innerText = `Fetching weather...\nCurrent Temp: ${currentTemp}°C\nWind Speed: ${windSpeed} km/h`;
            el.className = "result-box success";
        }

        return { currentTemp, windSpeed };
    } catch (error) {
        console.error("Error fetching weather:", error.message);
        if (el) {
            el.innerText = `Error fetching weather: ${error.message}`;
            el.className = "result-box error";
        }
    }
}

// ------------------------------------------------------------
// Auto-Run for Node.js CLI Testing
// ------------------------------------------------------------
if (typeof window === "undefined") {
    (async () => {
        console.log("==================================================");
        console.log(" Week 2 - Day 3: Asynchronous JavaScript (Node)");
        console.log("==================================================\n");

        console.log("--- Task 1: fakeAPICall() with Extension ---");
        fakeAPICall(true);

        // Wait 3.5 seconds for Task 1 timeouts to complete
        await new Promise((r) => setTimeout(r, 3500));

        console.log("\n--- Task 2: simulateFetch Promise (Success) ---");
        await runPromiseTask(true).catch(() => {});

        // Wait 2 seconds for Task 2 to complete
        await new Promise((r) => setTimeout(r, 2000));

        console.log("\n--- Task 3: loadPosts() (Async/Await + Fetch) ---");
        await loadPosts();

        console.log("\n--- Mini Challenge: fetchWeather() ---");
        await fetchWeather();

        console.log("\n==================================================");
        console.log(" All Week 2 - Day 3 Tasks Completed Successfully! ");
        console.log("==================================================");
    })();
}
