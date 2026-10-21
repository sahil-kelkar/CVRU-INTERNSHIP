import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        {/* Task 2: Navigation Bar */}
        <Navbar />

        {/* Task 1 & 3: Routes & Dynamic Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
