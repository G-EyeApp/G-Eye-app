
import React, { useState } from 'react';

const reportsData = [
  { id: 1, title: "Illegal Mining in Forest A", date: "2024-10-01", status: "New" },
  { id: 2, title: "Mining Near River B", date: "2024-10-12", status: "In Progress" },
  // Add more dummy data as needed
];

const Report = () => {
  const [reports, setReports] = useState(reportsData);

  const updateStatus = (id, newStatus) => {
    setReports(reports.map(report => report.id === id ? { ...report, status: newStatus } : report));
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-2xl font-semibold mb-6">Reports</h3>
      
      {reports.map(report => (
        <div key={report.id} className="border-b py-4">
          <h4 className="text-lg font-medium">{report.title}</h4>
          <p className="text-gray-500 text-sm">Date: {report.date}</p>
          <p className="text-gray-500 text-sm">Status: {report.status}</p>
          
          <div className="flex mt-2 space-x-4">
            {/* Status Update */}
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => updateStatus(report.id, report.status === "New" ? "In Progress" : "Resolved")}
            >
              {report.status === "New" ? "Mark as In Progress" : "Mark as Resolved"}
            </button>

            {/* Add Notes */}
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => alert(`Add note for report ID ${report.id}`)}
            >
              Add Note
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Report;
