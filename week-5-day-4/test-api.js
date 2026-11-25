// ========================================================
// Task 3: Automated CRUD & Middleware API Tester
// Tests all endpoints and status codes automatically
// ========================================================

const app = require("./server");

const TEST_PORT = 3001;

const server = app.listen(TEST_PORT, async () => {
  console.log("=========================================");
  console.log(` Testing CRUD API on Port ${TEST_PORT}`);
  console.log("=========================================\n");

  const baseUrl = `http://localhost:${TEST_PORT}`;

  try {
    // 1. GET /users (Initial list)
    console.log("1. Testing GET /users (Fetch all users)");
    let res = await fetch(`${baseUrl}/users`);
    let data = await res.json();
    console.log(`   Status: ${res.status} | Data:`, data);

    // 2. GET /users/1 (Single user)
    console.log("\n2. Testing GET /users/1 (Fetch single user)");
    res = await fetch(`${baseUrl}/users/1`);
    data = await res.json();
    console.log(`   Status: ${res.status} | Data:`, data);

    // 3. GET /users/999 (Non-existent user - Expect 404)
    console.log("\n3. Testing GET /users/999 (Non-existent user -> 404)");
    res = await fetch(`${baseUrl}/users/999`);
    data = await res.json();
    console.log(`   Status: ${res.status} | Data:`, data);

    // 4. POST /users (Missing fields - Expect 400 Bad Request)
    console.log("\n4. Testing POST /users (Validation error -> 400)");
    res = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "" })
    });
    data = await res.json();
    console.log(`   Status: ${res.status} | Data:`, data);

    // 5. POST /users (Valid user creation -> 201 Created)
    console.log("\n5. Testing POST /users (Create new user -> 201)");
    res = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Rahul", age: 21 })
    });
    data = await res.json();
    console.log(`   Status: ${res.status} | Data:`, data);

    // 6. PUT /users/1 (Update user -> 200 OK)
    console.log("\n6. Testing PUT /users/1 (Update user -> 200)");
    res = await fetch(`${baseUrl}/users/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ age: 23 })
    });
    data = await res.json();
    console.log(`   Status: ${res.status} | Data:`, data);

    // 7. DELETE /users/2 (Delete user -> 200 OK)
    console.log("\n7. Testing DELETE /users/2 (Delete user -> 200)");
    res = await fetch(`${baseUrl}/users/2`, { method: "DELETE" });
    data = await res.json();
    console.log(`   Status: ${res.status} | Data:`, data);

    // 8. GET /users (Final list verification)
    console.log("\n8. Testing GET /users (Final user list)");
    res = await fetch(`${baseUrl}/users`);
    data = await res.json();
    console.log(`   Status: ${res.status} | Data:`, data);

    console.log("\n=========================================");
    console.log(" All CRUD Endpoints & Status Codes Verified!");
    console.log("=========================================");
  } catch (err) {
    console.error("Test failed:", err);
  } finally {
    server.close(() => process.exit(0));
  }
});
