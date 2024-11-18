import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faClipboardCheck, faMapMarkerAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const SubmitReportForm = () => {
    const [formData, setFormData] = useState({
        agencyName: '',
        dateReported: '',
        location: '',
        statusUpdate: '',
        actionsTaken: '',
        notes: '',
        attachments: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow mt-8">
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
                            required
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
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600" htmlFor="attachments">
                        <FontAwesomeIcon icon={faFileUpload} className="mr-1" /> Attachments:
                    </label>
                    <input
                        type="file"
                        id="attachments"
                        name="attachments"
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
        </div>
    );
};

export default SubmitReportForm;
