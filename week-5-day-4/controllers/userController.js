// ========================================================
// Part 6 & Task 1: User Controller (CRUD Logic)
// Handles business logic for user resources
// ========================================================

// In-memory dummy data
let users = [
  { id: 1, name: "Aman", age: 22 },
  { id: 2, name: "Sara", age: 25 }
];

// 1. GET /users - Fetch all users
exports.getUsers = (req, res) => {
  res.status(200).json(users);
};

// 2. GET /users/:id - Fetch single user by ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
};

// 3. POST /users - Create new user
exports.createUser = (req, res) => {
  const { name, age } = req.body;

  // Validation: both name and age are required
  if (!name || !age) {
    return res.status(400).json({ error: "Name and age are required" });
  }

  const nextId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  const newUser = {
    id: nextId,
    name,
    age: Number(age)
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// 4. PUT /users/:id - Update existing user
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.name = req.body.name || user.name;
  user.age = req.body.age ? Number(req.body.age) : user.age;

  res.status(200).json(user);
};

// 5. DELETE /users/:id - Remove user
exports.deleteUser = (req, res) => {
  const exists = users.some(u => u.id == req.params.id);
  if (!exists) {
    return res.status(404).json({ error: "User not found" });
  }

  users = users.filter(u => u.id != req.params.id);
  res.status(200).json({ message: "User deleted" });
};
