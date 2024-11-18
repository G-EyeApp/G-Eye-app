import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';

// Enhanced dummy data
const dummyCases = [
    {
        id: '001',
        title: 'Illegal Logging Investigation',
        agencyName: 'Agency A',
        dateReported: '2024-11-07',
        location: 'Forest Zone A',
        statusUpdate: 'Under Review',
        actionsTaken: 'Initial investigation completed.',
        notes: 'Observations were noted during the first survey.',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    },
    {
        id: '002',
        title: 'Water Pollution Report',
        agencyName: 'Agency B',
        dateReported: '2024-11-06',
        location: 'River Delta',
        statusUpdate: 'Resolved',
        actionsTaken: 'Issue addressed and resolved.',
        notes: 'Final report submitted to authorities.',
        images: ['https://via.placeholder.com/150'],
    },
    // Add more dummy cases as needed
];

const CaseList = ({ onSelectCase }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    const itemsPerPage = 6;

    // Filter cases based on search term and dates
    const filteredCases = dummyCases.filter(caseItem => {
        const matchesSearch = caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            caseItem.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDate = (!startDate || caseItem.dateReported >= startDate) &&
                          (!endDate || caseItem.dateReported <= endDate);
        return matchesSearch && matchesDate;
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredCases.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCases.slice(indexOfFirstItem, indexOfLastItem);

    const resetFilters = () => {
        setSearchTerm('');
        setStartDate('');
        setEndDate('');
        setCurrentPage(1);
    };

    return (
        <div className="case-list p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl font-bold mb-4 sm:mb-0">CASE LIST</h2>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search cases..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>
                    <button 
                        onClick={() => setShowFilters(!showFilters)}
                        className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
                    >
                        <FaFilter className="mr-2" /> Filter
                    </button>
                </div>
            </div>

            {showFilters && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center space-x-2">
                            <label>Start Date:</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="border rounded-lg p-2"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label>End Date:</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="border rounded-lg p-2"
                            />
                        </div>
                        <button
                            onClick={resetFilters}
                            className="flex items-center space-x-1 text-red-500 hover:text-red-700"
                        >
                            <FaTimes /> <span>Reset</span>
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentItems.map((caseItem) => (
                    <div
                        key={caseItem.id}
                        className="p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer transition duration-200 bg-white"
                        onClick={() => onSelectCase(caseItem)}
                    >
                        <h3 className="text-lg font-semibold mb-2">{caseItem.title}</h3>
                        <p className="text-sm text-gray-600">{`Case ID: ${caseItem.id}`}</p>
                        <p className="text-sm">{`Agency: ${caseItem.agencyName}`}</p>
                        <p className="text-sm">{`Location: ${caseItem.location}`}</p>
                        <p className="text-sm">{`Date Reported: ${caseItem.dateReported}`}</p>
                        <div className={`inline-block px-2 py-1 rounded-full text-sm mt-2 
                            ${caseItem.statusUpdate === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {caseItem.statusUpdate}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-6">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded-lg bg-green-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded-lg ${
                                currentPage === index + 1
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded-lg bg-green-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

// Rest of the components remain the same
const CaseDetails = ({ caseDetails, onBack }) => {
    return (
        <div className="case-details p-2 border rounded-lg shadow mt-1 bg-white">
            <button onClick={onBack} className="mb-4 p-2 bg-green-600 hover:bg-green-700 rounded text-white">
                Back to List
            </button>
            <h3 className="text-xl font-semibold mb-2">{caseDetails.title}</h3>
            <p>{`Case ID: ${caseDetails.id}`}</p>
            <p>{`Agency Name: ${caseDetails.agencyName}`}</p>
            <p>{`Date Reported: ${caseDetails.dateReported}`}</p>
            <p>{`Location: ${caseDetails.location}`}</p>
            <p>{`Status Update: ${caseDetails.statusUpdate}`}</p>
            <p>{`Actions Taken: ${caseDetails.actionsTaken}`}</p>
            <p>{`Notes: ${caseDetails.notes}`}</p>
            <div className="case-images my-2">
                <h4 className="font-semibold">Images</h4>
                <div className="grid grid-cols-2 gap-2">
                    {caseDetails.images.map((image, idx) => (
                        <img key={idx} src={image} alt={`Case ${caseDetails.id} - img ${idx}`} className="w-36 h-36 rounded" />
                    ))}
                </div>
            </div>
            <div className="actions mt-2">
                <button className="mr-2 p-2 bg-red-500 text-white hover:bg-red-600 rounded">Delete</button>
                <button className="p-2 bg-blue-500 text-white hover:bg-blue-600 rounded">
                    <Link to='/dashboard/edit'>Update</Link>
                </button>
            </div>
        </div>
    );
};

const CaseReview = () => {
    const [selectedCase, setSelectedCase] = useState(null);

    return (
        <div className="case-management p-4">
            {!selectedCase ? (
                <div>
                    <CaseList onSelectCase={setSelectedCase} />
                    <button className="mt-4 p-2 bg-green-600 text-white hover:bg-green-700 rounded">
                        <Link to='/dashboard/submit'>Add Report</Link>
                    </button>
                </div>
            ) : (
                <CaseDetails caseDetails={selectedCase} onBack={() => setSelectedCase(null)} />
            )}
        </div>
    );
};

export default CaseReview;