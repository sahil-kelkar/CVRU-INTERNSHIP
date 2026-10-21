import BlogCard from "./BlogCard";

function BlogList() {
  const blogs = [
    {
      id: 1,
      title: "My First Blog",
      author: "Sahil",
      content: "Welcome to my React blog! This is my first blog post."
    },
    {
      id: 2,
      title: "Learning React",
      author: "Sahil",
      content: "React components and JSX are very easy to learn."
    },
    {
      id: 3,
      title: "What is Props?",
      author: "Sahil",
      content: "Props help us pass data from parent to child components."
    }
  ];

  return (
    <div style={{ padding: "10px" }}>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          author={blog.author}
          content={blog.content}
        />
      ))}
    </div>
  );
}

export default BlogList;
