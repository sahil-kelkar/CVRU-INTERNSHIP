# Week-5 — Day-4: Express Middleware, REST API, Folder Structure & Error Handling

**Course:** MERN Full Stack Internship Program (3 Months)  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  
**Student:** Sahil Kelkar  
**GitHub Profile:** [https://github.com/sahil-kelkar](https://github.com/sahil-kelkar)  

---

## 📖 PART 1 — Express Middleware समझना

### Middleware क्या होता है?
Middleware वो function होता है जो request आने से लेकर response भेजने तक के बीच में execute होता है।

```text
Client ──► Request ──► [Middleware 1] ──► [Middleware 2] ──► Route Handler ──► Response ──► Client
```

### ✔ Middleware का मुख्य काम:
1. **Logging:** हर incoming request का method, URL और time log करना।
2. **Authentication / Authorization:** Check करना कि user logged in है या नहीं।
3. **Validation:** Check करना कि body me zaroori data aaya hai ya nahi.
4. **Modifying req/res:** Request me custom data attach karna (e.g. `req.user`).
5. **Error Handling:** Crash ko rokna aur clean error message bhejna.

> [!IMPORTANT]
> हर custom middleware के अंत में `next()` call करना अनिवार्य है, वरना request वहीं रुक जाएगी और browser/client infinite loading me chala jayega!

---

## ⚙️ PART 2 — Built-In Middleware

1. **`express.json()`:** Incoming request ke JSON body ko parse karke `req.body` me available karwata hai.
   ```javascript
   app.use(express.json());
   ```
2. **`express.urlencoded({ extended: true })`:** HTML form data ko parse karne ke liye use hota hai.
   ```javascript
   app.use(express.urlencoded({ extended: true }));
   ```

---

## 🛠️ PART 3 & 4 — REST API Rules & Status Codes

### REST API Best Practices:
- **Meaningful URLs:** Nouns use karein (`/users`, not `/getUsersData`).
- **Standard HTTP Methods:**
  - `GET /users` $\rightarrow$ Get All Users
  - `GET /users/:id` $\rightarrow$ Get Single User
  - `POST /users` $\rightarrow$ Create New User
  - `PUT /users/:id` $\rightarrow$ Update User
  - `DELETE /users/:id` $\rightarrow$ Delete User

### Common HTTP Status Codes:
| Code | Name | Meaning | Use Case |
| :--- | :--- | :--- | :--- |
| **200** | OK | Success | GET, PUT, DELETE successfully execute hua |
| **201** | Created | Naya resource create ho gaya | POST method me jab new user banta hai |
| **400** | Bad Request | User ki galti (validation fail) | Name ya Age body me missing hai |
| **404** | Not Found | Resource nahi mila | Diya gaya User ID exist nahi karta |
| **500** | Internal Server Error | Server crash / unexpected bug | Server error handling middleware |

---

## 🏗️ PART 5 — Professional Folder Structure (Internship Level)

Yeh structure industry-standard MVC pattern ka hissa hai jisme code neat aur maintainable rehta hai:

```text
week-5-day-4/
├── package.json               # Project dependencies and test scripts
├── package-lock.json          # Dependency lockfile
├── .gitignore                 # Ignores node_modules/
├── server.js                  # Main server entry file
├── middleware/
│   └── logger.js              # Custom logging middleware
├── controllers/
│   └── userController.js      # CRUD business logic
├── routes/
│   └── userRoutes.js          # REST routes & endpoints mapping
├── test-api.js                # Automated testing script
└── README.md                  # Documentation & testing guide
```

---

## 📝 PART 6 — File-by-File Code

### 1. `middleware/logger.js` (Custom Middleware)
```javascript
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next(); // Agle middleware ya route handler par bhejta hai
};

module.exports = logger;
```

### 2. `controllers/userController.js` (CRUD Controller Logic)
```javascript
let users = [
  { id: 1, name: "Aman", age: 22 },
  { id: 2, name: "Sara", age: 25 }
];

// GET /users
exports.getUsers = (req, res) => {
  res.status(200).json(users);
};

// GET /users/:id
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
};

// POST /users
exports.createUser = (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: "Name and age are required" });
  }

  const nextId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  const newUser = { id: nextId, name, age: Number(age) };
  users.push(newUser);

  res.status(201).json(newUser);
};

// PUT /users/:id
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.name = req.body.name || user.name;
  user.age = req.body.age ? Number(req.body.age) : user.age;

  res.status(200).json(user);
};

// DELETE /users/:id
exports.deleteUser = (req, res) => {
  const exists = users.some(u => u.id == req.params.id);
  if (!exists) {
    return res.status(404).json({ error: "User not found" });
  }

  users = users.filter(u => u.id != req.params.id);
  res.status(200).json({ message: "User deleted" });
};
```

### 3. `routes/userRoutes.js` (Modular Routes)
```javascript
const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
```

### 4. `server.js` (Main Server with Error Handler)
```javascript
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Logger Middleware
const logger = require("./middleware/logger");
app.use(logger);

// Welcome Route
app.get("/", (req, res) => {
  res.send("Week 5 Day 4: Express Middleware & REST API running smoothly!");
});

// Modular Routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// 404 Route Handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Error Handling Middleware (must take 4 parameters)
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 🚀 Running the Server

```bash
cd "week-5-day-4"

# Standard run
npm start

# Auto-reload with nodemon
npm run dev
```

---

## 🧪 Testing with Postman & Automated Script

### 1. Postman Testing Guide:
- **GET All Users:** `GET http://localhost:3000/users`
- **GET Single User:** `GET http://localhost:3000/users/1`
- **POST Create User:** `POST http://localhost:3000/users`
  - Body $\rightarrow$ `raw` $\rightarrow$ `JSON`:
    ```json
    { "name": "Rahul", "age": 21 }
    ```
- **PUT Update User:** `PUT http://localhost:3000/users/1`
  - Body $\rightarrow$ `raw` $\rightarrow$ `JSON`:
    ```json
    { "age": 23 }
    ```
- **DELETE User:** `DELETE http://localhost:3000/users/2`

### 2. Automated Test Run:
```bash
npm run test-api
```

**Verification Log Output:**
```text
=========================================
 Testing CRUD API on Port 3001
=========================================

1. Testing GET /users (Fetch all users)
   Status: 200 | Data: [ { id: 1, name: 'Aman', age: 22 }, { id: 2, name: 'Sara', age: 25 } ]

2. Testing GET /users/1 (Fetch single user)
   Status: 200 | Data: { id: 1, name: 'Aman', age: 22 }

3. Testing GET /users/999 (Non-existent user -> 404)
   Status: 404 | Data: { error: 'User not found' }

4. Testing POST /users (Validation error -> 400)
   Status: 400 | Data: { error: 'Name and age are required' }

5. Testing POST /users (Create new user -> 201)
   Status: 201 | Data: { id: 3, name: 'Rahul', age: 21 }

6. Testing PUT /users/1 (Update user -> 200)
   Status: 200 | Data: { id: 1, name: 'Aman', age: 23 }

7. Testing DELETE /users/2 (Delete user -> 200)
   Status: 200 | Data: { message: 'User deleted' }

8. Testing GET /users (Final user list)
   Status: 200 | Data: [ { id: 1, name: 'Aman', age: 23 }, { id: 3, name: 'Rahul', age: 21 } ]

=========================================
 All CRUD Endpoints & Status Codes Verified!
=========================================
```

---

## 🎯 Day-4 Outcomes Checklist
- [x] Middleware kya hai aur iska request-response cycle me role.
- [x] Express Built-in middleware (`express.json()`, `express.urlencoded()`).
- [x] Custom logger middleware aur `next()` ka mahatva.
- [x] REST API architecture aur standard status codes (200, 201, 400, 404, 500).
- [x] Complete User CRUD (Create, Read, Update, Delete).
- [x] Professional project folder structure (`routes/`, `controllers/`, `middleware/`).
- [x] Centralized error handling middleware.
- [x] Postman and automated API verification.
