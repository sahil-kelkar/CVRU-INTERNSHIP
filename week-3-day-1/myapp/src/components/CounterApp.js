import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Counter: {count}</h1>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ fontSize: "20px", padding: "5px 15px", margin: "5px", cursor: "pointer" }}
      >
        +
      </button>
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ fontSize: "20px", padding: "5px 15px", margin: "5px", cursor: "pointer" }}
      >
        -
      </button>
    </div>
  );
}

export default CounterApp;
