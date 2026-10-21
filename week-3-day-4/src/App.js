import UserList from "./UserList";
import Posts from "./Posts";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Task 1: User List */}
      <UserList />

      <hr style={{ margin: "30px 0" }} />

      {/* Task 2: Posts */}
      <Posts />
    </div>
  );
}

export default App;
