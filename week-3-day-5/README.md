# Week 3 - Day 5: Conditional Rendering & Login Form

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  

---

## 📌 Core Concept (Very Simple)

**Conditional Rendering** ka matlab hai condition ke basis par alag-alag UI dikhana:
- **Ternary Operator (`condition ? <TrueUI /> : <FalseUI />`)**:
  Agar user login hai (`isLoggedIn === true`) toh Welcome message dikhao, varna Login form dikhao.

---

## 🛠️ Main Component (`LoginForm.js`)

```jsx
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {isLoggedIn ? (
        // Task 2: Welcome message conditionally shown when logged in
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout} style={{ padding: "6px 14px", cursor: "pointer" }}>
            Logout
          </button>
        </div>
      ) : (
        // Task 1: Login Form UI shown when not logged in
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <p>Please login to continue.</p>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "8px", width: "220px" }}
          />

          <br /><br />

          <button type="submit" style={{ padding: "6px 14px", cursor: "pointer" }}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
```

---

## 🧩 App.js

```jsx
import LoginForm from "./LoginForm";

function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;
```

---

## 🚀 How to Run
- **Terminal:** Run `npm start` inside `myapp`
- **Browser:** Open `week-3-day-5/index.html` directly in your browser.
