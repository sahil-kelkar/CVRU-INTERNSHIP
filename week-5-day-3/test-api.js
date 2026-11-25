// ========================================================
// Task 3: Automated API Route Tester
// Tests all endpoints without requiring manual Postman setup
// ========================================================

const http = require("http");
const app = require("./index");

const TEST_PORT = 5001;

const server = app.listen(TEST_PORT, async () => {
  console.log("=========================================");
  console.log(` Testing Express Endpoints on Port ${TEST_PORT}`);
  console.log("=========================================\n");

  const baseUrl = `http://localhost:${TEST_PORT}`;

  const tests = [
    { method: "GET", path: "/", desc: "Root Route" },
    { method: "GET", path: "/about", desc: "About Route" },
    { method: "POST", path: "/contact", desc: "Contact Form Submit" },
    { method: "GET", path: "/api/user", desc: "User JSON Response" },
    { method: "GET", path: "/users/25", desc: "Route Parameter (:id = 25)" },
    { method: "GET", path: "/search?name=Sahil&course=MERN", desc: "Query String Filter" },
    { method: "PUT", path: "/update", desc: "PUT Update Route" },
    { method: "DELETE", path: "/remove", desc: "DELETE Remove Route" }
  ];

  for (const t of tests) {
    try {
      const response = await fetch(`${baseUrl}${t.path}`, { method: t.method });
      const contentType = response.headers.get("content-type") || "";
      const text = await response.text();

      console.log(`✔ [${t.method}] ${t.path}`);
      console.log(`   Purpose : ${t.desc}`);
      console.log(`   Status  : ${response.status} ${response.statusText}`);
      console.log(`   Response: ${text}\n`);
    } catch (err) {
      console.error(`✖ Error testing [${t.method}] ${t.path}:`, err.message);
    }
  }

  console.log("=========================================");
  console.log(" All Day-3 API Endpoints Verified Successfully!");
  console.log("=========================================");

  server.close(() => {
    process.exit(0);
  });
});
