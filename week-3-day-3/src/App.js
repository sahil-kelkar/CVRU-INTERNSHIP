import CounterApp from "./components/CounterApp";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" }}>
      {/* Task 1: Simple Counter */}
      <CounterApp />

      <hr style={{ margin: "30px auto", maxWidth: "400px" }} />

      {/* Task 2: Live Form Preview */}
      <UserForm />
    </div>
  );
}

export default App;
