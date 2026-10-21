# Week 3 - Day 3: Simple State & Events

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  

---

## 🛠️ Main Tasks

### Task 1: Simple Counter App (`CounterApp.js`)

```jsx
import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default CounterApp;
```

---

### Task 2: Live Form Preview (`UserForm.js`)

```jsx
import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Registration Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>Live Preview:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserForm;
```

---

### App.js (Combining Both)

```jsx
import CounterApp from "./components/CounterApp";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div>
      <CounterApp />
      <hr />
      <UserForm />
    </div>
  );
}

export default App;
```

---

## 🚀 How to Run
- **Terminal:** Run `npm start` inside `myapp`
- **Browser:** Open `week-3-day-3/index.html` directly in your browser.
