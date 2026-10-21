import React from "react";

export default function Card({ title, value, icon, change, isPositive }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider">
          {title}
        </h2>
        {icon && (
          <span className="p-2.5 rounded-lg bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 text-lg">
            {icon}
          </span>
        )}
      </div>

      <p className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        {value}
      </p>

      {change && (
        <div className="mt-3 flex items-center text-xs font-medium">
          <span className={isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}>
            {isPositive ? "↑" : "↓"} {change}
          </span>
          <span className="text-gray-400 ml-1.5">vs last month</span>
        </div>
      )}
    </div>
  );
}
