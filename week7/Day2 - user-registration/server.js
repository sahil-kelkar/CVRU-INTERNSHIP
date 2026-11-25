const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,

  message: {
    success: false,
    message: "Too many requests from this IP. Please try again later."
  }
});

app.use(limiter);

// Middleware
app.use(express.json());

// Routes
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/userRoutes"));

// Start server after database connection
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
};

startServer();
