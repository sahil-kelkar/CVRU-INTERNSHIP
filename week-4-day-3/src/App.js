import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main>
        <CardList />
      </main>
    </div>
  );
}

export default App;
