# Week 4 - Day 2: React Context API (`ThemeContext`)

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  

---

## 📌 Core Concepts (Very Simple)

- **Context API**: Jab kisi data (jaise Theme ya User Login) ko bina prop drilling ke poore app me access karna ho, tab Context use karte hain.
- **`createContext()`**: Naya context banata hai (`ThemeContext`).
- **`<ThemeContext.Provider value={{ theme, setTheme }}>`**: Data ko provide karta hai sabhi child components ke liye.
- **`useContext(ThemeContext)`**: Kisi bhi child component ke andar direct data ko read aur update karta hai.

---

## 🛠️ Main Tasks & Code

### 1. `ThemeContext.js` (Task 1)
```jsx
import { createContext } from "react";

export const ThemeContext = createContext();
```

---

### 2. `Navbar.js` (Task 2: Toggle Button with `useContext`)
```jsx
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav style={{
      padding: "15px 20px",
      backgroundColor: theme === "light" ? "#e2e8f0" : "#1e293b",
      color: theme === "light" ? "#000000" : "#ffffff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>My Theme App</h2>
      <button onClick={toggleTheme} style={{ padding: "8px 16px", cursor: "pointer" }}>
        Switch to {theme === "light" ? "Dark 🌙" : "Light ☀️"}
      </button>
    </nav>
  );
}

export default Navbar;
```

---

### 3. `App.js` (Wrapping with Provider)
```jsx
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#0f172a",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    textAlign: "center"
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={appStyle}>
        <Navbar />
        <div style={{ marginTop: "60px" }}>
          <h1>Current Theme: {theme.toUpperCase()}</h1>
          <p>Click the button in the Navbar to toggle the theme globally!</p>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```

---

## 🚀 How to Run
- **Terminal:** Run `npm start` inside `myapp` (`http://localhost:3000`).
- **Browser:** Open `week-4-day-2/index.html` directly in your browser to test live light/dark theme switching!
