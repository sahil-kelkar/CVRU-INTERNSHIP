import React from "react";

// Task 2: Child component that uses React.memo
const Score = React.memo(function Score({ value }) {
  console.log("Score component rendered!");
  return (
    <div style={{ margin: "15px 0", padding: "12px", backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: "8px" }}>
      <h3 style={{ margin: 0, color: "#047857" }}>Score: {value}</h3>
      <p style={{ margin: "5px 0 0", fontSize: "12px", color: "#059669" }}>
        Optimized with React.memo (Does not re-render when timer updates)
      </p>
    </div>
  );
});

export default Score;
