// Task 3: ProfileCard Component
function ProfileCard(props) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    width: "220px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
  };

  return (
    <div style={cardStyle}>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }}
      />
      <h3 style={{ margin: "10px 0 5px 0", color: "#222" }}>{props.name}</h3>
      <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>{props.role}</p>
    </div>
  );
}

export default ProfileCard;
