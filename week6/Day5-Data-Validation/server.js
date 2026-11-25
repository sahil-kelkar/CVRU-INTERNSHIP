require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
const userRoutes = require("./routes/userRoutes");

const orderRoutes = require("./routes/orderRoutes");

// USER API
app.use("/api/users", userRoutes);

// ORDER API
app.use("/api/orders", orderRoutes);

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Week 6 Day 5 API Running");
});

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)

  .then(() => {

    console.log("MongoDB Connected Successfully");

    app.listen(process.env.PORT || 7000, () => {

      console.log("Server running on port 7000");

    });

  })

  .catch((error) => {

    console.log("Database Error:", error.message);

  });