import InteractiveCard from "./components/InteractiveCard";

function App() {
  return (
    // Task 2: Using Custom Color Palette (bg-background, text-primary, bg-secondary, bg-accent)
    <div className="bg-background min-h-screen p-8 text-center font-sans">
      <div className="max-w-xl mx-auto">
        {/* Task 2: Custom Palette Showcase */}
        <h1 className="text-primary text-4xl font-bold mb-3">Welcome to Day 4</h1>
        <p className="text-gray-600 mb-6">
          Custom Tailwind Palette: Primary, Secondary &amp; Accent
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-secondary text-white px-5 py-2 rounded-lg hover:opacity-90 transition font-medium shadow-sm">
            Explore
          </button>
          <button className="bg-accent text-white px-5 py-2 rounded-lg hover:opacity-90 transition font-medium shadow-sm">
            Action
          </button>
        </div>

        {/* Task 1: Interactive Card Component */}
        <InteractiveCard />
      </div>
    </div>
  );
}

export default App;
