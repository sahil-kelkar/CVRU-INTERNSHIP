# Week 4 — Days 6–7: Mini Project - Responsive Dashboard Interface

**Course:** MERN Full Stack Internship Program (3 Months)  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  
**Student:** Sahil Kelkar  
**GitHub Profile:** [https://github.com/sahil-kelkar](https://github.com/sahil-kelkar)  

---

## 🎯 Objective
Build a modern, fully-responsive Admin Dashboard UI with navigation, theme toggle (Light/Dark mode), responsive layout, and reusable components. This 2-day capstone project synthesizes all concepts learned throughout Week 4:
- **React Router v6+** for seamless multi-page client-side routing
- **Tailwind CSS** for modern utility-first layout, typography, and dark mode
- **React Context API** (`ThemeContext`) for global state management
- **Modular Component Architecture** (`Sidebar`, `Navbar`, `Card`)
- **Responsive Web Design** (Mobile drawer to Desktop persistent sidebar)

---

## 📂 Project Structure

```
week-4-day-6-7-mini-project/
├── index.html                      # Standalone interactive browser preview
├── README.md                       # Comprehensive project documentation
└── src/
    ├── components/
    │   ├── Sidebar.js              # Navigation sidebar with mobile drawer toggle
    │   ├── Navbar.js               # Topbar with dynamic title & theme switch
    │   └── Card.js                 # Reusable analytics / stat card component
    ├── context/
    │   └── ThemeContext.js         # React Context for global Light/Dark mode
    ├── pages/
    │   ├── Dashboard.js            # Key metrics cards & CSS weekly revenue chart
    │   ├── Users.js                # Member directory with live search filter
    │   ├── Reports.js              # Historical reports list and download actions
    │   └── Settings.js             # Theme switch & notification preferences
    ├── App.js                      # Root router configuration & layout shell
    └── index.css                   # Global Tailwind utilities
```

---

## 🛠️ Step-by-Step Implementation

### Step 1 — Setup React Router (`App.js`)
Wraps the application in `ThemeProvider` and sets up client-side routing with `BrowserRouter`:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <Navbar />
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
```

---

### Step 2 — Sidebar Component (`Sidebar.js`)
Persistent on desktop screens (`md:block`) and converts to a slide-over mobile drawer on smaller devices:

```jsx
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-6 hidden md:block">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/users" className="hover:text-blue-400">Users</Link>
        <Link to="/reports" className="hover:text-blue-400">Reports</Link>
        <Link to="/settings" className="hover:text-blue-400">Settings</Link>
      </nav>
    </div>
  );
}
```

---

### Step 3 — Navbar with Global Theme Toggle (`ThemeContext.js` & `Navbar.js`)

#### `ThemeContext.js`
```jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={dark ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

#### `Navbar.js`
```jsx
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
```

---

### Step 4 — Dashboard Page & Analytics Cards (`Card.js` & `Dashboard.js`)

#### `Card.js`
```jsx
export default function Card({ title, value }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition">
      <h2 className="text-gray-600 dark:text-gray-300 text-sm">{title}</h2>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
```

#### `Dashboard.js`
```jsx
import Card from "../components/Card";

export default function Dashboard() {
  const stats = [
    { title: "Total Users", value: "1,250" },
    { title: "Orders Today", value: "78" },
    { title: "Revenue", value: "$8,900" },
    { title: "Pending Reports", value: "14" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Analytics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Card key={i} title={s.title} value={s.value} />
        ))}
      </div>
      <div className="mt-10 h-48 bg-blue-300 dark:bg-blue-800 rounded-lg flex items-center justify-center">
        <p className="font-bold">Chart Placeholder</p>
      </div>
    </div>
  );
}
```

---

### Step 5 — Secondary Pages (`Users.js`, `Reports.js`, `Settings.js`)
- **`Users.js`:** Real-time search filter for member name/email and role management.
- **`Reports.js`:** Financial, activity, and uptime logs with direct download triggers.
- **`Settings.js`:** Theme switcher connected to `useTheme()` and notification preferences.

---

## 🌟 Optional Add-Ons Included
1. **Collapsible Mobile Drawer:** Accessible via the `☰` hamburger button on mobile screens.
2. **Interactive CSS Bar Chart:** Live hoverable weekly revenue visualization.
3. **User Search Filter:** Instant client-side filtering on the Users management view.

---

## 🚀 How to Run

### Option 1: Direct in Browser
Open [`week-4-day-6-7-mini-project/index.html`](./index.html) in any browser.

### Option 2: Running via Create React App (`myapp`)
```bash
cd week-3-day-1/myapp
npm start
```
Visit `http://localhost:3000` to interact with the responsive dashboard.
