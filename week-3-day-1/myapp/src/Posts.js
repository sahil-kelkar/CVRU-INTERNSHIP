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
  }, []); // runs once on mount

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
