import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../../components/Navbar';

// Dummy data for submissions
const dummySubmissions = [
  { id: 1, title: 'Illegal Mining Report 1', date: '2024-11-01', status: 'Under Review', details: 'Details about the first report.', images: [] },
  { id: 2, title: 'Illegal Mining Report 2', date: '2024-11-03', status: 'Resolved', details: 'Details about the second report.', images: ['https://via.placeholder.com/150'] },
  { id: 3, title: 'Illegal Mining Report 3', date: '2024-11-05', status: 'In Progress', details: 'Details about the third report.', images: [] },
  { id: 4, title: 'Illegal Mining Report 4', date: '2024-11-07', status: 'Under Review', details: 'Details about the fourth report.', images: ['https://via.placeholder.com/150'] },
  { id: 5, title: 'Illegal Mining Report 5', date: '2024-11-09', status: 'Resolved', details: 'Details about the fifth report.', images: [] },
  { id: 6, title: 'Illegal Mining Report 6', date: '2024-11-11', status: 'In Progress', details: 'Details about the sixth report.', images: [] },
];

const UserSubmissions = () => {
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [submissionsPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDate, setSearchDate] = useState('');

  // Filter submissions based on the search term and date
  const filteredSubmissions = dummySubmissions.filter(submission =>
    submission.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (searchDate ? submission.date === searchDate : true)
  );

  // Pagination logic
  const indexOfLastSubmission = currentPage * submissionsPerPage;
  const indexOfFirstSubmission = indexOfLastSubmission - submissionsPerPage;
  const currentSubmissions = filteredSubmissions.slice(indexOfFirstSubmission, indexOfLastSubmission);
  const totalPages = Math.ceil(filteredSubmissions.length / submissionsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCardClick = (submission) => {
    setSelectedSubmission(selectedSubmission?.id === submission.id ? null : submission);
  };

  const handleCloseDetails = () => {
    setSelectedSubmission(null);
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSearchDate('');
    setCurrentPage(1);
  };

  const isFiltered = searchTerm || searchDate;

  return (
   <div>
    <Navbar />
     <div className="flex min-h-screen bg-gray-50 mt-5">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 border-r">
        <h3 className="text-lg font-semibold mb-4">Filter Reports</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search by Title
            </label>
            <input
              type="text"
              placeholder="Enter title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Date
            </label>
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          
          <button
            onClick={handleSearch}
            className="w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600"
          >
            Apply Filters
          </button>
          
          {isFiltered && (
            <button
              onClick={handleReset}
              className="w-full px-4 py-2 bg-green-900 text-gray-700 rounded hover:bg-green-600 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              Show All Reports
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">List of Reports Submitted</h2>
          {isFiltered && (
            <span className="text-sm text-gray-500">
              Showing {filteredSubmissions.length} of {dummySubmissions.length} reports
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentSubmissions.map((submission) => (
            <div
              key={submission.id}
              className="p-4 bg-white border rounded shadow hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="font-semibold">{submission.title}</h3>
              <p>Date: {submission.date}</p>
              <p>Status: {submission.status}</p>
              <button
                onClick={() => handleCardClick(submission)}
                className="mt-2 px-3 py-1 bg-green-600 text-white rounded"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 mx-1 border rounded ${currentPage === i + 1 ? 'bg-green-700 text-white' : 'bg-white'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSubmission && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">{selectedSubmission.title}</h3>
            <p><strong>Date:</strong> {selectedSubmission.date}</p>
            <p><strong>Status:</strong> {selectedSubmission.status}</p>
            <p><strong>Details:</strong> {selectedSubmission.details}</p>
            {selectedSubmission.images.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold">Images:</h4>
                <div className="flex flex-wrap">
                  {selectedSubmission.images.map((img, index) => (
                    <img key={index} src={img} alt="Report" className="w-32 h-32 object-cover m-1 border rounded" />
                  ))}
                </div>
              </div>
            )}
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
   </div>
  );
};

export default UserSubmissions;