import { NavLink } from "react-router-dom";

function Navbar() {
  // Active link styling
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
