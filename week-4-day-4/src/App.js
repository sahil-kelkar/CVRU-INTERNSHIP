import InteractiveCard from "./components/InteractiveCard";

function App() {
  return (
    // Task 2: Custom Color Palette (bg-background, text-primary, bg-secondary)
    <div className="bg-background min-h-screen p-6 text-center">
      <h1 className="text-primary text-3xl font-bold mb-4">Welcome</h1>
      <button className="bg-secondary text-white px-4 py-2 rounded-lg mb-8">
        Explore
      </button>

      {/* Task 1: Interactive Card */}
      <InteractiveCard />
    </div>
  );
}

export default App;
