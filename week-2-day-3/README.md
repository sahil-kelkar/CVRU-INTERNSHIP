# Week 2 - Day 3: Asynchronous JavaScript (Promises & Async/Await)

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  
**Program:** 3-Month MERN Full Stack Internship Program  

---

## 📌 Core Concepts (Very Simple Explanation)

JavaScript is **single-threaded** (ek samay par ek hi kaam karta hai) aur **non-blocking** (lambe chalne wale kaamo ke liye poora program freeze nahi hota).

| Concept | Kya karta hai? | Asan Udaharan (Analogy) | Example Syntax |
| :--- | :--- | :--- | :--- |
| **`setTimeout()`** | Specified delay (milliseconds) ke baad callback run karta hai | Reminder alarm jo 2 second baad bajta hai | `setTimeout(callback, 2000)` |
| **`Promise`** | Future result ko represent karta hai (Success ya Failure) | Online order ki receipt: ya to saman aayega (resolve) ya cancel hoga (reject) | `new Promise((resolve, reject) => ...)` |
| **`async / await`** | Promises ko synchronous tarike jaisa readable aur clean banata hai | Asynchronous task ka result aane tak wait karna bina code uljhay | `const res = await fetch(url)` |

---

## 🛠️ Tasks & Step-by-Step Solutions

### Task 1 – Simulate API Call with `setTimeout`

**Problem Statement:**
Create a simulated API call that logs "Fetching user details...", waits 2 seconds, and then logs "User data received ".
**Extension:** Add another nested timeout for "Processing Data..." to show asynchronous flow.

**Solution Code:**
```javascript
function fakeAPICall() {
    console.log("Fetching user details...");

    setTimeout(() => {
        console.log("User data received ");

        // Extension: Nested timeout to show async chain
        setTimeout(() => {
            console.log("Processing Data...");
        }, 1000);
    }, 2000);
}

fakeAPICall();
```

**Expected Console Output:**
```
Fetching user details...
(2 seconds delay...)
User data received 
(1 second delay...)
Processing Data...
```

---

### Task 2 – Promise Example (`.then` & `.catch`)

**Problem Statement:**
Create a Promise `simulateFetch` that checks internet connection status (`isOnline`).
- If online: resolve with `"Data fetched successfully "`
- If offline: reject with `"Network error "`

**Solution Code:**
```javascript
const simulateFetch = new Promise((resolve, reject) => {
    let isOnline = true;

    setTimeout(() => {
        if (isOnline) {
            resolve("Data fetched successfully ");
        } else {
            reject("Network error ");
        }
    }, 1500);
});

// Consuming the Promise
simulateFetch
    .then((msg) => console.log(msg))
    .catch((err) => console.error(err));
```

**Expected Console Output (When Online):**
```
Data fetched successfully 
```

**Expected Console Output (When Offline / Network Error):**
```
Network error 
```

---

### Task 3 – Async/Await with Fetch (JSONPlaceholder API)

**Problem Statement:**
Fetch the first 5 posts from the JSONPlaceholder mock API using `async/await` and handle errors gracefully using `try...catch`.

**Solution Code:**
```javascript
async function loadPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const posts = await response.json();
        console.log("Latest Posts:", posts);
    } catch (error) {
        console.error("Error loading posts:", error);
    }
}

loadPosts();
```

**Expected Console Output:**
```
Latest Posts: [
  { id: 1, title: 'sunt aut facere repellat provident...' },
  { id: 2, title: 'qui est esse...' },
  { id: 3, title: 'ea molestias quasi exercitationem...' },
  { id: 4, title: 'eum et est occaecati...' },
  { id: 5, title: 'nesciunt quas odio...' }
]
```

---

## 🏆 Mini Challenge: "Weather Fetcher"

**Challenge Goal:**
1. Open-Meteo free API se live weather data fetch karna (`https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true`)
2. Current temperature aur wind speed display karna.
3. Errors ko gracefully handle karna (`try...catch`).

**Solution Code:**
```javascript
async function fetchWeather() {
    console.log("Fetching weather...");

    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true";

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Temperature aur Wind Speed extract karna
        const currentTemp = data.current_weather.temperature;
        const windSpeed = data.current_weather.windspeed;

        console.log(`Current Temp: ${currentTemp}°C`);
        console.log(`Wind Speed: ${windSpeed} km/h`);

        return { currentTemp, windSpeed };
    } catch (error) {
        console.error("Error fetching weather:", error.message);
    }
}

fetchWeather();
```

**Expected Output:**
```
Fetching weather...
Current Temp: 28.7°C
Wind Speed: 3.1 km/h
```

---

## 🚀 How to Run

### Option 1: Run in Terminal with Node.js
```bash
cd "week-2-day-3"
node script.js
```

### Option 2: Run in Browser
Open `week-2-day-3/index.html` in any web browser and click the interactive buttons to test all tasks live!

---

## 🎯 Learning Outcomes
- JavaScript ke **Asynchronous non-blocking** execution flow ko samajhna.
- **Promises** create karna (`resolve`, `reject`) aur unhe consume karna (`.then()`, `.catch()`).
- Modern **`async/await`** syntax ka use karke clean aur readable asynchronous code likhna.
- Real Web APIs se live data fetch karna (`fetch()`) aur network errors ko **`try...catch`** se handle karna.
