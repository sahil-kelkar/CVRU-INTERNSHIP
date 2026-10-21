import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto", textAlign: "left" }}>
      <h2>Registration Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", width: "100%", padding: "8px", margin: "10px 0", boxSizing: "border-box" }}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", width: "100%", padding: "8px", margin: "10px 0", boxSizing: "border-box" }}
      />

      <h3>Live Preview:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserForm;
