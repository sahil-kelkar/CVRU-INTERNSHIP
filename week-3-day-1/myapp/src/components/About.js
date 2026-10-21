import React from "react";

// Task 3: About component for Lazy Loading
function About() {
  console.log("About page loaded dynamically!");
  return (
    <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f3e8ff", border: "1px solid #d8b4fe", borderRadius: "8px", textAlign: "left" }}>
      <h3 style={{ margin: "0 0 10px", color: "#6b21a8" }}>About Page (Lazy Loaded)</h3>
      <p style={{ margin: 0, fontSize: "14px", color: "#4b5563", lineHeight: "1.5" }}>
        This component loads only on demand using <code>React.lazy</code> and <code>&lt;Suspense&gt;</code>!
        In a real-life application (like a large Hotel Menu App), lazy loading keeps the initial bundle size small and improves page load speed.
      </p>
    </div>
  );
}

export default About;
