// ========================================================
// Week 5 - Day 3: Getting Started with Express.js
// Course: MERN Full Stack Internship Program
// Institution: Dr. C. V. Raman University (CVRU), Khandwa
// Student: Sahil Kelkar
// ========================================================

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Enable JSON parsing middleware (incoming JSON bodies)
app.use(express.json());

// --------------------------------------------------------
// Task 1: Basic Test Routes
// --------------------------------------------------------

// Root GET Route
app.get("/", (req, res) => {
  res.send("Express API is working...");
});

// About Page GET Route
app.get("/about", (req, res) => {
  res.send("This is the About page!");
});

// Contact Form POST Route
app.post("/contact", (req, res) => {
  res.send("Contact form submitted!");
});

// --------------------------------------------------------
// Task 2: Return User Data in JSON Format
// --------------------------------------------------------
app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Ananya",
    role: "Intern",
    skills: ["Node.js", "Express.js", "Git"]
  });
});

// --------------------------------------------------------
// Topic 5: Handling Route Parameters (Dynamic URL segments)
// Example: http://localhost:5000/users/10
// --------------------------------------------------------
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

// --------------------------------------------------------
// Topic 5: Handling Query Strings (Filtering & Searching)
// Example: http://localhost:5000/search?name=John&age=22
// --------------------------------------------------------
app.get("/search", (req, res) => {
  const query = req.query;
  res.json(query);
});

// --------------------------------------------------------
// Topic 3: Additional HTTP Methods (PUT & DELETE)
// --------------------------------------------------------
app.put("/update", (req, res) => {
  res.send("Data updated using PUT!");
});

app.delete("/remove", (req, res) => {
  res.send("Data deleted!");
});

// --------------------------------------------------------
// Start Server (when run directly)
// --------------------------------------------------------
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(` Express Server running on port ${PORT}`);
    console.log(` Access Root : http://localhost:${PORT}`);
    console.log(` Access User : http://localhost:${PORT}/api/user`);
    console.log(`=========================================`);
  });
}

// Export app for automated testing
module.exports = app;
