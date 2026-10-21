import React from "react";
import Card from "../components/Card";

export default function Dashboard() {
  const stats = [
    { title: "Total Users", value: "1,250", icon: "👥", change: "+12%", isPositive: true },
    { title: "Orders Today", value: "78", icon: "🛍️", change: "+5%", isPositive: true },
    { title: "Revenue", value: "$8,900", icon: "💰", change: "+18%", isPositive: true },
    { title: "Pending Reports", value: "14", icon: "📑", change: "-2%", isPositive: false },
  ];

  const weeklyData = [
    { day: "Mon", height: "45%", value: "$3.4k" },
    { day: "Tue", height: "65%", value: "$4.8k" },
    { day: "Wed", height: "55%", value: "$4.1k" },
    { day: "Thu", height: "80%", value: "$6.2k" },
    { day: "Fri", height: "95%", value: "$8.9k" },
    { day: "Sat", height: "70%", value: "$5.5k" },
    { day: "Sun", height: "40%", value: "$2.9k" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Analytics Overview
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Welcome back! Here is a summary of your key platform metrics.
        </p>
      </div>

      {/* Analytics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Card
            key={i}
            title={s.title}
            value={s.value}
            icon={s.icon}
            change={s.change}
            isPositive={s.isPositive}
          />
        ))}
      </div>

      {/* Static Visual Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Revenue Bar Chart */}
        <div className="lg:col-span-2 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-gray-800 dark:text-white">
                Weekly Revenue Statistics
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                CSS-powered interactive bar chart
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400">
              This Week
            </span>
          </div>

          <div className="h-56 flex items-end justify-between gap-2 sm:gap-6 pt-4 border-b border-gray-200 dark:border-gray-700 px-2">
            {weeklyData.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <span className="text-[10px] font-mono font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.value}
                </span>
                <div
                  style={{ height: item.height }}
                  className="w-full max-w-[40px] bg-blue-500 dark:bg-blue-600 rounded-t-md hover:bg-blue-600 dark:hover:bg-blue-500 transition-all cursor-pointer relative"
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Recent Activity */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-gray-800 dark:text-white mb-4">
              Recent Activity
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-200">New user registered</p>
                  <p className="text-gray-400">Pooja Sharma • 5 mins ago</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-200">Order #1049 placed</p>
                  <p className="text-gray-400">Amount: $128.50 • 25 mins ago</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 shrink-0"></span>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-200">Report generated</p>
                  <p className="text-gray-400">Monthly Sales • 1 hour ago</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
            <button className="w-full py-2 bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-lg transition">
              View All Notifications →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
