
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Built-in Middleware
app.use(express.json());

// Custom Middleware
app.use(logger);

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running & MongoDB Connected");
});

// Student Routes
app.use("/students", studentRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// MongoDB Connection and Server Start
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err.message);
  });
