
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Helper component for handling map clicks
const LocationMarker = ({ setLocation }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setLocation(e.latlng);
    },
  });

  return position ? <Marker position={position} /> : null;
};

const ReportForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const handleImageUpload = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      description,
      image,
      location,
    });

    setTitle('');
    setDescription('');
    setImage(null);
    setLocation(null);
  };

  return (
    <div className='p-20 bg-gray-300'>
      <div className="max-w-lg mx-auto p-4 bg-white rounded shadow backdrop-blur-xl bg-white/30">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Report Illegal Mining Activity</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Title Input */}
        <label className="block mb-2 font-semibold">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        
        {/* Description Input */}
        <label className="block mb-2 font-semibold">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          rows="4"
          required
        ></textarea>

        {/* Image Upload */}
        <label className="block mb-2 font-semibold">Upload Image:</label>
        <input
          type="file"
          onChange={handleImageUpload}
          className="mb-4"
        />

         {/* Location Input */}
         <label className="block mb-2 font-semibold">Location (optional):</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          placeholder="E.g., GPS coordinates or address"
        />


        {/* Location Selection */}
        <label className="block mb-2 font-semibold">Location:</label>
        <button
          type="button"
          onClick={() => setShowMap(!showMap)}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mb-4"
        >
          {showMap ? 'Hide Map' : 'Select Location on Map'}
        </button>

        {showMap && (
          <div className="mb-4">
            <MapContainer
              center={[51.505, -0.09]}
              zoom={8}
              style={{ width: '100%', height: 300 }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationMarker setLocation={setLocation} />
            </MapContainer>
          </div>
        )}

        {/* Display Chosen Coordinates */}
        {location && (
          <p className="text-gray-500 text-sm">
            Selected Location: Latitude {location.lat}, Longitude {location.lng}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800 mt-4"
        >
          Submit Report
        </button>
      </form>
    </div>
    </div>
  );
};

export default ReportForm;
