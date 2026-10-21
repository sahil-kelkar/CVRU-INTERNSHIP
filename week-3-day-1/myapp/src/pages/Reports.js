import React from "react";

export default function Reports() {
  const reportsList = [
    { title: "Monthly Financial Audit Q3", date: "Oct 20, 2026", format: "PDF (2.4 MB)", status: "Completed" },
    { title: "User Growth & Retention Breakdown", date: "Oct 18, 2026", format: "CSV (640 KB)", status: "Completed" },
    { title: "Server Uptime & Performance Logs", date: "Oct 15, 2026", format: "JSON (1.1 MB)", status: "Archived" },
    { title: "Inventory Turnover Analysis", date: "Oct 10, 2026", format: "XLSX (850 KB)", status: "Completed" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Reports Overview
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          Generate, schedule and download historical administrative reports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-400 font-medium uppercase">Total Generated</span>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">128 Reports</p>
        </div>
        <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-400 font-medium uppercase">Scheduled Tasks</span>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">4 Active Crons</p>
        </div>
        <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-400 font-medium uppercase">Storage Used</span>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">4.2 GB / 20 GB</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-4">
        <h3 className="text-base font-bold text-gray-800 dark:text-white">
          Recent Generated Reports
        </h3>

        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {reportsList.map((r, i) => (
            <div key={i} className="py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  {r.title}
                </p>
                <p className="text-gray-400 mt-0.5">
                  Generated on {r.date} • {r.format}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold">
                  {r.status}
                </span>
                <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
