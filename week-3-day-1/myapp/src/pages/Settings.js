import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Application Settings
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          Configure interface appearance, notifications and security parameters.
        </p>
      </div>

      {/* Appearance Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-4">
        <h3 className="text-base font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-3">
          Appearance &amp; Theme (Context API)
        </h3>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Dark Mode</p>
            <p className="text-xs text-gray-400">
              Toggle between modern high-contrast dark theme and crisp light theme.
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              dark ? "bg-blue-600 justify-end" : "bg-gray-300 justify-start"
            }`}
          >
            <div className="bg-white w-4 h-4 rounded-full shadow-md transform transition-transform"></div>
          </button>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-4">
        <h3 className="text-base font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-3">
          Notification Preferences
        </h3>

        <div className="space-y-3 text-xs">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="rounded text-blue-600 focus:ring-blue-500" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">Email notifications for daily analytics summary</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="rounded text-blue-600 focus:ring-blue-500" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">Security alerts for new administrative logins</span>
          </label>
        </div>
      </div>

      {/* Admin Information */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-4">
        <h3 className="text-base font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-3">
          Admin Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-gray-400 block mb-1">Student / Admin Name</span>
            <span className="font-semibold text-gray-800 dark:text-white">Sahil Kelkar</span>
          </div>
          <div>
            <span className="text-gray-400 block mb-1">Affiliation</span>
            <span className="font-semibold text-gray-800 dark:text-white">Dr. C. V. Raman University (CVRU)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
