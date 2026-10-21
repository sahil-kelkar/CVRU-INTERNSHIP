import React, { useState } from "react";

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  const initialUsers = [
    { id: 1, name: "Raja Jadham", email: "raja.jadham@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Kittu Jadham", email: "kittu.jadham@example.com", role: "Editor", status: "Active" },
    { id: 3, name: "Akanksha Khede", email: "akanksha.khede@example.com", role: "Viewer", status: "Pending" },
    { id: 4, name: "Krishna Raverkar", email: "krishna.raverkar@example.com", role: "Editor", status: "Active" },
    { id: 5, name: "Saloni Couhan", email: "saloni.couhan@example.com", role: "Viewer", status: "Inactive" },
  ];

  const filteredUsers = initialUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Users Management
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Manage system members, account permissions and status.
          </p>
        </div>

        {/* Search Bar (Optional Add-On) */}
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-xs rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold border-b border-gray-100 dark:border-gray-700">
              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-gray-700 dark:text-gray-200">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-gray-400">
                    No users matching "{searchTerm}"
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-750 transition">
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold flex items-center justify-center text-xs">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {user.name}
                        </div>
                        <div className="text-gray-400 text-[11px]">{user.email}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                          user.status === "Active"
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300"
                            : user.status === "Pending"
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
