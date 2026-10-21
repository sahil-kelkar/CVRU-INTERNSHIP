import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  const navItems = [
    { path: "/", label: "Dashboard", icon: "📊" },
    { path: "/users", label: "Users", icon: "👥" },
    { path: "/reports", label: "Reports", icon: "📑" },
    { path: "/settings", label: "Settings", icon: "⚙️" },
  ];

  const getLinkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
            ⚡
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            Admin Panel
          </h2>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden text-gray-400 hover:text-white p-1 text-lg"
          >
            ✕
          </button>
        )}
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={getLinkClasses}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="pt-6 border-t border-gray-800 text-xs text-gray-400">
        <p className="font-semibold text-gray-300">CVRU Internship</p>
        <p className="mt-0.5">MERN Stack • Week 4</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block shrink-0 min-h-screen">
        {sidebarContent}
      </aside>

      {/* Mobile Backdrop & Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />
          <aside className="relative w-64 bg-gray-900 text-white p-6 flex flex-col z-10 shadow-2xl animate-in slide-in-from-left">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
