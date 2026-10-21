# Week 4 - Day 3: Tailwind CSS in React

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  

---

## 📌 Core Concepts (Very Simple)

- **Tailwind CSS**: Utility-first CSS framework hai jisme bina CSS file likhe direct JSX ke andar classes (`className="bg-blue-600 text-white p-4"`) use karke styling karte hain.
- **Responsive Prefixes**:
  - `sm:` (Small screen - Tablet)
  - `md:` (Medium screen - Laptop)
  - `hidden md:flex` (Mobile par hide, desktop par flex)

---

## 🛠️ Main Tasks & Code

### Task 1: Convert Components to Tailwind (Button)
```jsx
// Before (Normal CSS):
<button className="btn-primary">Click Me</button>

// After (Tailwind CSS):
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
  Click Me
</button>
```

---

### Task 2: Responsive Navigation Bar (`src/components/Navbar.js`)
```jsx
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">MySite</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="cursor-pointer hover:text-blue-400">Home</li>
          <li className="cursor-pointer hover:text-blue-400">About</li>
          <li className="cursor-pointer hover:text-blue-400">Contact</li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-3 mt-4 text-center border-t border-gray-700 pt-3">
          <li className="cursor-pointer hover:text-blue-400">Home</li>
          <li className="cursor-pointer hover:text-blue-400">About</li>
          <li className="cursor-pointer hover:text-blue-400">Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
```

---

### Task 3: Responsive Card Layout (`src/components/CardList.js`)
```jsx
function CardList() {
  const cards = [
    { id: 1, title: "React Components", desc: "Build reusable UI pieces." },
    { id: 2, title: "Tailwind CSS", desc: "Style rapidly with utility classes." },
    { id: 3, title: "Responsive Grid", desc: "Adapt seamlessly to any screen." }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Tailwind Card Layout
      </h2>

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-6 shadow-md rounded-xl bg-white hover:scale-105 transition duration-200 border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{card.desc}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Click Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
```

---

### `App.js` (Combining Both)
```jsx
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <CardList />
    </div>
  );
}

export default App;
```

---

## 🚀 How to Run
- **Terminal:** Run `npm start` inside `myapp` (`http://localhost:3000`).
- **Browser:** Open `week-4-day-3/index.html` directly in your browser. Resize the window to test the mobile hamburger menu and responsive card grid!
