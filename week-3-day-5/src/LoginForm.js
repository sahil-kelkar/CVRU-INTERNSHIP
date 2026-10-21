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
        <div>
          <h2>Welcome, {username}!</h2>
          <button 
            onClick={handleLogout} 
            style={{ padding: "6px 14px", cursor: "pointer" }}
          >
            Logout
          </button>
        </div>
      ) : (
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
