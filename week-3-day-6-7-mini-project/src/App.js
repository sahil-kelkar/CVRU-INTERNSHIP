import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
