import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faClipboardCheck, faMapMarkerAlt, faInfoCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { apiSubmitReport } from '../../services/report';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const SubmitReportForm = () => {
    const [formData, setFormData] = useState({
        agencyName: '',
        title: '',
        dateReported: '',
        location: '',
        statusUpdate: '',
        actionsTaken: '',
        notes: '',
        image: null,
    });

    const navigate = useNavigate(); // Hook to navigate

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const reportData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            reportData.append(key, value);
        });
    
        try {
            const response = await apiSubmitReport(reportData);
            toast.success("Report submitted successfully!");
            setFormData({
                agencyName: '',
                title: '',
                dateReported: '',
                location: '',
                statusUpdate: '',
                actionsTaken: '',
                notes: '',
                image: null,
            });
        } catch (error) {
            console.error("Error submitting report:", error);
            toast.error(error.response?.data?.message || 'Failed to submit the report. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow mt-8">
            <button 
                onClick={() => navigate('/dashboard/review')} // Replace with your actual route
                className="flex items-center text-green-600 mb-4"
            >
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                
            </button>
            <h2 className="text-xl font-semibold text-center mb-3">Submit Report</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-600" htmlFor="agencyName">
                            <FontAwesomeIcon icon={faClipboardCheck} className="mr-1" /> Agency Name:
                        </label>
                        <input
                            type="text"
                            id="agencyName"
                            name="agencyName"
                            value={formData.agencyName}
                            onChange={handleChange}
                            required
                            className="block w-full border-gray-300 rounded p-1.5 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600" htmlFor="title">
                            <FontAwesomeIcon icon={faClipboardCheck} className="mr-1" /> Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="block w-full border-gray-300 rounded p-1.5 text-sm"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600" htmlFor="dateReported">
                        <FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> Date Reported:
                    </label>
                    <input
                        type="date"
                        id="dateReported"
                        name="dateReported"
                        value={formData.dateReported}
                        onChange={handleChange}
                        required
                        className="block w-full border-gray-300 rounded p-1.5 text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600" htmlFor="location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" /> Location:
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="block w-full border-gray-300 rounded p-1.5 text-sm"
                    />
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-600" htmlFor="statusUpdate">
                            <FontAwesomeIcon icon={faClipboardCheck} className="mr-1" /> Status Update:
                        </label>
                        <select
                            id="statusUpdate"
                            name="statusUpdate"
                            value={formData.statusUpdate}
                            onChange={handleChange}
                            required
                            className="block w-full border-gray-300 rounded p-1.5 text-sm"
                        >
                            <option value="">Select Status</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600" htmlFor="actionsTaken">
                            <FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> Actions Taken:
                        </label>
                        <textarea
                            id="actionsTaken"
                            name="actionsTaken"
                            value={formData.actionsTaken}
                            onChange={handleChange}
                            rows="2"
                            className="block w-full border-gray-300 rounded p-1.5 text-sm"
                        ></textarea>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600" htmlFor="notes">
                        <FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> Notes:
                    </label>
                    <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="2"
                        className="block w-full border-gray-300 rounded p-1.5 text-sm"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600" htmlFor="image">
                        <FontAwesomeIcon icon={faFileUpload} className="mr-1" /> Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        className="block w-full text-sm text-gray-600 border-gray-300 rounded p-1.5"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white rounded p-2 text-sm font-medium hover:bg-green-700"
                >
                    Submit
                </button>
            </form>
            <ToastContainer /> {/* Add ToastContainer for notifications */}
        </div>
    );
};

export default SubmitReportForm;