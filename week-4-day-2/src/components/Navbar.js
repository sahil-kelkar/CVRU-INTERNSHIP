import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

// Task 2: Navbar with Theme Toggle Button
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
      <h2 style={{ margin: 0 }}>My Theme App</h2>
      <button 
        onClick={toggleTheme}
        style={{
          padding: "8px 16px",
          fontSize: "14px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      >
        Switch to {theme === "light" ? "Dark 🌙" : "Light ☀️"}
      </button>
    </nav>
  );
}

export default Navbar;
