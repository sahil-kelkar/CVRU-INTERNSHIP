import React, { useState, useEffect, lazy, Suspense } from "react";
import Score from "./components/Score";

// Task 3: Lazy load the About component
const About = lazy(() => import("./components/About"));

function App() {
  // Task 1: Timer state that updates every second
  const [time, setTime] = useState(0);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
      console.log("Time updated!");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", backgroundColor: "#ffffff", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ margin: "0 0 8px", color: "#0f172a" }}>Week 4 — Day 5</h2>
      <h3 style={{ margin: "0 0 20px", color: "#334155", fontWeight: "normal" }}>
        React Performance &amp; Optimization
      </h3>

      {/* Task 1: Timer updates every second */}
      <div style={{ padding: "15px", backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "8px", marginBottom: "15px" }}>
        <h2 style={{ margin: 0, color: "#1d4ed8" }}>Timer: {time}s</h2>
        <p style={{ margin: "5px 0 0", fontSize: "12px", color: "#3b82f6" }}>
          Parent state updates every 1 second (triggers parent re-render)
        </p>
      </div>

      {/* Task 2: Memoized Child Component */}
      <Score value={100} />

      {/* Task 4: Console Log Note */}
      <p style={{ color: "#64748b", fontSize: "13px", margin: "15px 0 25px" }}>
        🔍 <em>Open Developer Console (F12) to observe: <code>Score</code> rendered only once, while <code>Time updated!</code> logs every second.</em>
      </p>

      <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "25px 0" }} />

      {/* Task 3: Lazy load About page */}
      <div>
        <button
          onClick={() => setShowAbout((prev) => !prev)}
          style={{
            padding: "10px 20px",
            fontSize: "14px",
            fontWeight: "bold",
            backgroundColor: "#7c3aed",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          {showAbout ? "Hide About Page" : "Load About Page (React.lazy)"}
        </button>

        {showAbout && (
          <Suspense fallback={<h4 style={{ color: "#7c3aed", marginTop: "20px" }}>Loading component chunk...</h4>}>
            <About />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default App;
