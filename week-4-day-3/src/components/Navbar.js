import { useState } from "react";

// Task 2: Responsive Navigation Bar Using Tailwind CSS
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
