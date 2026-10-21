import React from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ onToggleSidebar }) {
  const { dark, toggleTheme } = useTheme();
  const location = useLocation();

  // Dynamic Page Title mapping
  const titleMap = {
    "/": "Dashboard Overview",
    "/users": "Users Management",
    "/reports": "Reports & Analytics",
    "/settings": "Application Settings",
  };

  const pageTitle = titleMap[location.pathname] || "Dashboard";

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Button */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          {pageTitle}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3.5 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs font-semibold rounded-lg transition"
        >
          <span>{dark ? "☀️" : "🌙"}</span>
          <span>{dark ? "Light Mode" : "Dark Mode"}</span>
        </button>

        {/* User Profile Pill */}
        <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-gray-200 dark:border-gray-700">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
            SK
          </div>
          <div className="text-left text-xs">
            <p className="font-semibold text-gray-800 dark:text-gray-200">Sahil Kelkar</p>
            <p className="text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
