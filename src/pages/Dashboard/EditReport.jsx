import React, { useState } from 'react';

const UpdateReportForm = ({ caseId, onSubmit }) => {
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');
  const [actionTaken, setActionTaken] = useState('');
  const [notes, setNotes] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('status', status);
    formData.append('location', location);
    formData.append('actionTaken', actionTaken);
    formData.append('notes', notes);
    if (attachment) {
      formData.append('attachment', attachment);
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow mt-10">
      <h2 className="text-2xl font-semibold mb-4">Update Report for Case ID: {caseId}</h2>

     <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
     <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700 font-bold">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border-gray-300 p-2 rounded-md">
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Under Review">Under Review</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700 font-bold">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border-gray-300 p-2 rounded-md"
          placeholder="Enter new location"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="actionTaken" className="block text-gray-700 font-bold">Action Taken</label>
        <textarea
          id="actionTaken"
          value={actionTaken}
          onChange={(e) => setActionTaken(e.target.value)}
          className="w-full border-gray-300 p-2 rounded-md"
          placeholder="Describe the actions taken"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="notes" className="block text-gray-700 font-bold">Notes</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border-gray-300 p-2 rounded-md"
          placeholder="Add any additional notes"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="attachment" className="block text-gray-700 font-bold">Attachment</label>
        <input
          type="file"
          id="attachment"
          onChange={handleAttachmentChange}
          className="w-full border-gray-300 p-2 rounded-md"
        />
      </div>
     </div>
     <button type="submit" className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700">
        Submit Update
      </button>
    </form>
  );
};

export default UpdateReportForm;
