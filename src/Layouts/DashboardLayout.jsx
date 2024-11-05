
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-green-700 text-white p-4">
        <h2 className="text-2xl font-bold mb-8">Authority Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:bg-green-600 p-2 rounded">Reports</a>
          <a href="#" className="hover:bg-green-600 p-2 rounded">Analytics</a>
          <a href="#" className="hover:bg-green-600 p-2 rounded">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
