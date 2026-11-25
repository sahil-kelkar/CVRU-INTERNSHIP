# Week-5 — Day-3: Getting Started with Express.js

**Course:** MERN Full Stack Internship Program (3 Months)  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  
**Student:** Sahil Kelkar  
**GitHub Profile:** [https://github.com/sahil-kelkar](https://github.com/sahil-kelkar)  

---

## 📖 What is Express.js? (Beginner Explanation)

- **Definition:** Express.js Node.js ke liye ek fast, minimal aur flexible web application framework hai.
- **Node.js vs Express.js:** Pure Node.js me HTTP server likhna bohot lengthy hota hai (URL parse karna, headers set karna, stream chunks handle karna). Express is pure process ko 4-5 lines me clean aur simple bana deta hai.
- **Express kyu use karte hain?**
  - ✔ Easy routing (`app.get`, `app.post`, etc.)
  - ✔ Middleware support (`app.use(express.json())`)
  - ✔ Built-in JSON response handling (`res.json()`)
  - ✔ MERN Stack (MongoDB, Express, React, Node) ka core backend pillar hai.

---

## 🌐 HTTP Methods Cheat Sheet

| Method | Purpose | Real-Life Example |
| :--- | :--- | :--- |
| **GET** | Fetch / Read data | View profile, list products |
| **POST** | Create / Submit new data | User signup, submit contact form |
| **PUT** | Update / Replace existing data | Update user profile, edit password |
| **DELETE** | Remove / Delete data | Delete account, remove product from cart |

---

## 🔍 Route Parameters vs Query Strings

| Feature | Route Parameters (`req.params`) | Query Strings (`req.query`) |
| :--- | :--- | :--- |
| **Syntax in Route** | `app.get("/users/:id", ...)` | `app.get("/search", ...)` |
| **Example URL** | `http://localhost:5000/users/10` | `http://localhost:5000/search?name=John&age=22` |
| **Access in Code** | `req.params.id` $\rightarrow$ `"10"` | `req.query.name` $\rightarrow$ `"John"` |
| **Best Used For** | Specific item identifier (ID, slug) | Filtering, searching, sorting, pagination |

---

## 📂 Project Structure

```text
week-5-day-3/
├── package.json        # Dependencies (express), scripts & info
├── package-lock.json   # Exact dependency locks
├── .gitignore          # Ignores node_modules/
├── index.js            # Task 1 & 2: Complete Express server & routes
├── test-api.js         # Task 3: Automated route verification script
└── README.md           # Documentation & Postman guide
```

---

## 🛠️ Hands-On Tasks & Code Files

### 📝 Task 1 & 2: Express Server & Endpoints (`index.js`)

**Complete Code:**
```javascript
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON bodies
app.use(express.json());

// 1. Root GET Route (Task 1)
app.get("/", (req, res) => {
  res.send("Express API is working...");
});

// 2. About GET Route (Task 1)
app.get("/about", (req, res) => {
  res.send("This is the About page!");
});

// 3. Contact POST Route (Task 1)
app.post("/contact", (req, res) => {
  res.send("Contact form submitted!");
});

// 4. Return User Data in JSON Format (Task 2)
app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Ananya",
    role: "Intern",
    skills: ["Node.js", "Express.js", "Git"]
  });
});

// 5. Dynamic Route Parameter (Topic 5)
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

// 6. Query String Filter (Topic 5)
app.get("/search", (req, res) => {
  res.json(req.query);
});

// 7. PUT & DELETE Routes (Topic 3)
app.put("/update", (req, res) => {
  res.send("Data updated using PUT!");
});

app.delete("/remove", (req, res) => {
  res.send("Data deleted!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 🚀 Running the Server

Open terminal and run:
```bash
cd "week-5-day-3"

# Standard run:
npm start
# or: node index.js

# Auto-reload development mode:
npm run dev
```

---

## 🧪 Task 3: Testing APIs

### Option A: Using Postman (Step-by-Step)
1. **Open Postman.**
2. **Test `GET http://localhost:5000/`**
   - Method: `GET` $\rightarrow$ Enter URL `http://localhost:5000/` $\rightarrow$ Click **Send**.
   - Output: `Express API is working...`
3. **Test `GET http://localhost:5000/api/user`**
   - Method: `GET` $\rightarrow$ Click **Send**.
   - Output: JSON object showing Ananya's intern profile.
4. **Test `POST http://localhost:5000/contact`**
   - Method: change dropdown to `POST` $\rightarrow$ URL `http://localhost:5000/contact` $\rightarrow$ Click **Send**.
   - Output: `Contact form submitted!`
5. **Test Route Parameter `GET http://localhost:5000/users/25`**
   - Output: `User ID is: 25`
6. **Test Query String `GET http://localhost:5000/search?name=John&age=22`**
   - Output: `{ "name": "John", "age": "22" }`

---

### Option B: Instant Automated Testing (`npm run test-api`)

Agar aap bina Postman open kiye saare routes test karna chahte hain, toh run karein:
```bash
npm run test-api
```

**Live Test Output:**
```text
=========================================
 Testing Express Endpoints on Port 5001
=========================================

✔ [GET] /
   Purpose : Root Route
   Status  : 200 OK
   Response: Express API is working...

✔ [GET] /about
   Purpose : About Route
   Status  : 200 OK
   Response: This is the About page!

✔ [POST] /contact
   Purpose : Contact Form Submit
   Status  : 200 OK
   Response: Contact form submitted!

✔ [GET] /api/user
   Purpose : User JSON Response
   Status  : 200 OK
   Response: {"id":1,"name":"Ananya","role":"Intern","skills":["Node.js","Express.js","Git"]}

✔ [GET] /users/25
   Purpose : Route Parameter (:id = 25)
   Status  : 200 OK
   Response: User ID is: 25

✔ [GET] /search?name=Sahil&course=MERN
   Purpose : Query String Filter
   Status  : 200 OK
   Response: {"name":"Sahil","course":"MERN"}

✔ [PUT] /update
   Purpose : PUT Update Route
   Status  : 200 OK
   Response: Data updated using PUT!

✔ [DELETE] /remove
   Purpose : DELETE Remove Route
   Status  : 200 OK
   Response: Data deleted!

=========================================
 All Day-3 API Endpoints Verified Successfully!
=========================================
```

---

### Option C: Using Terminal `curl`
```bash
curl http://localhost:5000/
curl http://localhost:5000/api/user
curl -X POST http://localhost:5000/contact
curl http://localhost:5000/users/10
curl "http://localhost:5000/search?name=John&age=22"
curl -X PUT http://localhost:5000/update
curl -X DELETE http://localhost:5000/remove
```

---

## 🎯 Learning Outcomes Checklist
- [x] Express.js kya hai aur Node.js ke sath kyu use karte hain.
- [x] Express server start karna aur port 5000 par listen karna.
- [x] HTTP Methods (GET, POST, PUT, DELETE) define karna.
- [x] `res.send()` vs `res.json()` se data return karna.
- [x] Route parameters (`req.params.id`) handle karna.
- [x] Query strings (`req.query`) se filtering handle karna.
- [x] Postman aur automated test script se API testing karna.
