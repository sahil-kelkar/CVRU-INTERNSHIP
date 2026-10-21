# Week 4 - Day 1: React Router (Multi-Page App)

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  

---

## 📌 Core Concepts (Very Simple)

- **React Router**: Page ko bina reload kiye URL ke hisab se alag-alag component dikhata hai (Single Page Application - SPA).
- **`<Routes>` & `<Route>`**: URL path ko component se jodte hain.
- **`<NavLink>`**: Click karne par active link ko automatically highlight karta hai.
- **`useParams()`**: URL ke dynamic parameters (jaise `/post/:postId` me `:postId`) ko read karta hai.

---

## 🛠️ Main Tasks & Code

### 1. Pages (`src/pages/`)
- `Home.js` -> `<h2>Home Page</h2>`
- `About.js` -> `<h2>About Page</h2>`
- `Contact.js` -> `<h2>Contact Page</h2>`
- `Dashboard.js` -> `<h2>Dashboard Page</h2>`

### 2. Dynamic Route Page (`src/pages/PostDetail.js`)
```jsx
import { useParams } from "react-router-dom";

function PostDetail() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Post Details</h2>
      <p>Viewing Post ID: <strong>{postId}</strong></p>
    </div>
  );
}

export default PostDetail;
```

---

### 3. Navigation Bar with Active Highlighting (`src/components/Navbar.js`)
```jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  const navStyle = ({ isActive }) => ({
    margin: "0 10px",
    textDecoration: "none",
    color: isActive ? "red" : "blue",
    fontWeight: isActive ? "bold" : "normal"
  });

  return (
    <nav style={{ padding: "12px", backgroundColor: "#f0f0f0", marginBottom: "20px" }}>
      <NavLink to="/" style={navStyle}>Home</NavLink>
      <NavLink to="/about" style={navStyle}>About</NavLink>
      <NavLink to="/contact" style={navStyle}>Contact</NavLink>
      <NavLink to="/dashboard" style={navStyle}>Dashboard</NavLink>
      <NavLink to="/post/101" style={navStyle}>Sample Post</NavLink>
    </nav>
  );
}

export default Navbar;
```

---

### 4. Main App Router (`src/App.js`)
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          {/* Bonus: 404 Not Found Page */}
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

---

## 🚀 How to Run
- **Terminal:** Run `npm start` inside `myapp` (`http://localhost:3000`).
- **Browser:** Open `week-4-day-1/index.html` directly in your browser.
