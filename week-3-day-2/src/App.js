import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import ProfileCard from "./components/ProfileCard";

function App() {
  // Bonus Challenge: Array of user profiles rendered dynamically using .map()
  const users = [
    {
      id: 1,
      name: "Arjun Kumar",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sneha Verma",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Rahul Sharma",
      role: "Backend Engineer",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 4,
      name: "Pooja Patel",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Task 1: Header Component */}
      <Header />

      <main style={{ padding: "20px", textAlign: "center" }}>
        {/* Task 1: Modular Layout Content */}
        <h2>Welcome to My React App!</h2>
        <p style={{ color: "#555" }}>This is my first modular React layout with components &amp; props.</p>

        <hr style={{ margin: "25px auto", maxWidth: "600px", border: "0", borderTop: "1px solid #ddd" }} />

        {/* Task 2: Pass Data as Props (Greeting) */}
        <section>
          <h2>Task 2: Dynamic Greetings with Props</h2>
          <Greeting name="Priya" topic="React Components" />
          <Greeting name="Rohan" topic="JSX & Props" />
        </section>

        <hr style={{ margin: "25px auto", maxWidth: "600px", border: "0", borderTop: "1px solid #ddd" }} />

        {/* Task 3 & Bonus Challenge: Profile Cards (.map()) */}
        <section>
          <h2>Task 3 &amp; Bonus Challenge: Team Profile Cards</h2>
          <p style={{ color: "#666", fontSize: "14px" }}>
            Rendered dynamically using <code>.map()</code> from an array
          </p>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginTop: "15px" }}>
            {users.map((user) => (
              <ProfileCard
                key={user.id}
                name={user.name}
                role={user.role}
                image={user.image}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Task 1: Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
