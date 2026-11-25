
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server Running & MongoDB Connected!");
});

// Connect to MongoDB
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
  }
}

startServer();
