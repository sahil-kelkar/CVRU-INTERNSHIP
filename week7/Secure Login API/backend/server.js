require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Basic security & parsers
app.use(helmet());
app.use(
    cors({
        // origin: true, // restrict in production
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Rate limiting (basic)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
});
app.use(limiter);

app.get("/sahil", (req, res) => {
    return res.json({ status: true, message: "Sahill server are sed dont call me this time i am edititing..." })
})

// Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
// Error handler (must be last)
app.use(errorHandler);

// Connect DB and start
const PORT = process.env.PORT || 4000 || 3000;
mongoose
    .connect("mongodb+srv://sahilkelkar709_db_user:PDVo27jPfN5B0wSX@cluster0.pmoqkn5.mongodb.net/")
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });