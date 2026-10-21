// Task 2: Greeting Component with Props
function Greeting(props) {
  return (
    <div style={{
      backgroundColor: "#e7f3ff",
      borderLeft: "4px solid #007bff",
      padding: "10px 15px",
      margin: "10px auto",
      maxWidth: "400px",
      borderRadius: "4px"
    }}>
      <h3 style={{ margin: "0 0 5px 0", color: "#0056b3" }}>Hello, {props.name}!</h3>
      <p style={{ margin: 0, color: "#333" }}>You are learning {props.topic} today.</p>
    </div>
  );
}

export default Greeting;
