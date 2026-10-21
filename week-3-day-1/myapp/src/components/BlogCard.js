function BlogCard(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      margin: "15px auto",
      padding: "15px",
      maxWidth: "400px",
      borderRadius: "5px",
      textAlign: "left"
    }}>
      <h3 style={{ margin: "0 0 5px 0" }}>{props.title}</h3>
      <p style={{ margin: "0 0 10px 0", color: "gray", fontSize: "14px" }}>By {props.author}</p>
      <p style={{ margin: 0 }}>{props.content}</p>
    </div>
  );
}

export default BlogCard;
