# Week 3 - Days 6–7 Mini Project: Simple React Personal Blog

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  

---

## 📌 Project Overview
Ek bahut simple Personal Blog interface jo React ke core concepts sikhata hai:
- **Components:** `Navbar`, `BlogCard`, `BlogList`, `Footer`.
- **Props:** Blog ka title, author, aur content pass karna.
- **Array `.map()`:** Blogs ki list ko loop karke render karna.

---

## 🛠️ Components Code

### 1. `Navbar.js`
```jsx
function Navbar() {
  return (
    <div style={{ backgroundColor: "#007bff", color: "white", padding: "10px", textAlign: "center" }}>
      <h2>My Personal Blog</h2>
    </div>
  );
}

export default Navbar;
```

---

### 2. `BlogCard.js` (Props)
```jsx
function BlogCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "15px auto", padding: "15px", maxWidth: "400px", borderRadius: "5px" }}>
      <h3>{props.title}</h3>
      <p style={{ color: "gray", fontSize: "14px" }}>By {props.author}</p>
      <p>{props.content}</p>
    </div>
  );
}

export default BlogCard;
```

---

### 3. `BlogList.js` (`.map()`)
```jsx
import BlogCard from "./BlogCard";

function BlogList() {
  const blogs = [
    { id: 1, title: "My First Blog", author: "Sahil", content: "Welcome to my React blog!" },
    { id: 2, title: "Learning React", author: "Sahil", content: "React components and JSX are very easy to learn." },
    { id: 3, title: "What is Props?", author: "Sahil", content: "Props help us pass data from parent to child." }
  ];

  return (
    <div>
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
```

---

### 4. `Footer.js`
```jsx
function Footer() {
  return (
    <div style={{ backgroundColor: "#f1f1f1", padding: "10px", textAlign: "center", marginTop: "30px" }}>
      <p>© 2025 Sahil Kelkar | My React Blog</p>
    </div>
  );
}

export default Footer;
```

---

### 5. `App.js`
```jsx
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
```

---

## 🚀 How to Run
- **Terminal:** Run `npm start` inside `myapp` (`http://localhost:3000`).
- **Browser:** Open `week-3-day-6-7-mini-project/index.html` directly in your browser.
