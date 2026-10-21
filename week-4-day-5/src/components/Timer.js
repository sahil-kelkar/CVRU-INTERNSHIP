import React, { useState, useEffect } from "react";

// Task 1: Timer component that updates every second
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("Time updated!");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "15px", backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "8px", marginBottom: "15px" }}>
      <h2 style={{ margin: 0, color: "#1d4ed8" }}>Timer: {seconds}s</h2>
      <p style={{ margin: "5px 0 0", fontSize: "12px", color: "#3b82f6" }}>
        Parent state updates every 1 second (triggers parent re-render)
      </p>
    </div>
  );
}

export default Timer;
