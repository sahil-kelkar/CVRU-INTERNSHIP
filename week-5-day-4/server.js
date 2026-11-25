// ========================================================
// Week 5 - Day 4: Main Server Entry File (server.js)
// Course: MERN Full Stack Internship Program
// Institution: Dr. C. V. Raman University (CVRU), Khandwa
// Student: Sahil Kelkar
// ========================================================

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Built-in Middleware (Part 2)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Custom Middleware (Part 3 & Task 2)
const logger = require("./middleware/logger");
app.use(logger);

// Welcome Route
app.get("/", (req, res) => {
  res.send("Week 5 Day 4: Express Middleware & REST API running smoothly!");
});

// 3. Modular Routes (Part 5 & 6)
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// 4. 404 Route Handler (Part 7)
app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// 5. Error Handling Middleware (Part 6 & Task 3)
// Must have exactly 4 parameters: (err, req, res, next)
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(` Server running on port ${PORT}`);
    console.log(` Local URL : http://localhost:${PORT}`);
    console.log(` Users API : http://localhost:${PORT}/users`);
    console.log(`=========================================`);
  });
}

module.exports = app;
