import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []); // runs once on mount

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} style={cardStyle}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address?.city}</p>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  margin: "10px 0",
  padding: "10px",
  borderRadius: "5px",
};

export default UserList;
