import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#0f172a",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
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
