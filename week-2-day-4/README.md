# Week 2 - Day 4: Fetch API Tasks (Simple)

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  

---

## 📋 Tasks Implemented

### Task 1 – Random User Card
- **API URL:** `https://randomuser.me/api`
- **Output:** Profile Picture, Full Name, Email
- **Button:** "Get New Random User"

```javascript
async function fetchSingleUser() {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    const user = data.results[0];

    document.getElementById("singleUserCard").innerHTML = `
        <div class="user-card-single">
            <img src="${user.picture.large}" class="user-img-large">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.email}</p>
        </div>
    `;
}
```

---

### Task 2 – Display Multiple Users (5 Users Grid)
- **API URL:** `https://randomuser.me/api/?results=5`
- **Output:** 5 users rendered in a responsive CSS Grid
- **Button:** "Fetch 5 Users"

```javascript
async function fetchMultipleUsers() {
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = await res.json();

    document.getElementById("multipleUsersGrid").innerHTML = data.results.map(user => `
        <div class="user-card">
            <img src="${user.picture.medium}" class="user-img">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.email}</p>
        </div>
    `).join("");
}
```

---

### Mini Task – User Directory
- **Goal:** List of random users with Photo, Name, and Email
- **Button:** "Refresh Users" to load fresh data dynamically

```javascript
async function loadUserDirectory() {
    const res = await fetch("https://randomuser.me/api/?results=6");
    const data = await res.json();

    document.getElementById("directoryGrid").innerHTML = data.results.map(user => `
        <div class="user-card">
            <img src="${user.picture.medium}" class="user-img">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.email}</p>
        </div>
    `).join("");
}
```

---

## 🚀 How to Run

1. **In Browser:**
   Open [index.html](file:///Users/sahilkelkar/sahil%20internship/week-2-day-4/index.html) in your browser.
2. **In Terminal:**
   ```bash
   node week-2-day-4/script.js
   ```
