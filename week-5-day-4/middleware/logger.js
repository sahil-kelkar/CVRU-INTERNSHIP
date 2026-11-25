// ========================================================
// Part 3 & Task 2: Custom Logger Middleware
// Logs HTTP method, URL, and ISO timestamp for every incoming request
// ========================================================

const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);

  // Note: next() is mandatory to forward request to next middleware/handler
  next();
};

module.exports = logger;
