# Week 3 - Day 4: Fetch API Data Using `useEffect`

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  

---

## 📌 Core Concept (Very Simple)

- **`useEffect`**: Component render hone ke baad koi side-effect (jaise API se data lana) run karne ke liye use hota hai.
- **Dependency Array `[]`**: Empty array `[]` ka matlab hai ki API call sirf **ek baar** chalegi (jab component pehli baar mount hoga).
- **Loading & Error States**: Data aane tak "Loading..." dikhana, aur fail hone par error message dikhana.

---

## 🛠️ Main Tasks

### Task 1: Fetch User List (`UserList.js`)

```jsx
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
          <p>City: {user.address.city}</p>
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
```

---

### Task 2: Display Posts Dynamically (`Posts.js`)

```jsx
import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data.slice(0, 10)); // show only 10
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <h2>Fetching data...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>
      {posts.map((p) => (
        <div key={p.id} style={box}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

const box = {
  padding: "10px",
  border: "1px solid #ccc",
  marginBottom: "10px",
  borderRadius: "5px",
};

export default Posts;
```

---

### App.js (Combining Both)

```jsx
import UserList from "./UserList";
import Posts from "./Posts";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <UserList />
      <hr style={{ margin: "30px 0" }} />
      <Posts />
    </div>
  );
}

export default App;
```

---

## 🚀 How to Run
- **Terminal:** Run `npm start` inside `myapp`
- **Browser:** Open `week-3-day-4/index.html` directly in your browser.
