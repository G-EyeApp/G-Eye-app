import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom"; 
import "leaflet/dist/leaflet.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft } from "react-icons/fa"; 
import { apiAddReport } from "../../../services/report";

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
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [dateReported, setDateReported] = useState(""); 
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [manualLocation, setManualLocation] = useState("");
  const [showMap, setShowMap] = useState(false);

  const handleImageUpload = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("title", title);
    formData.append("dateReported", dateReported); 
    formData.append("description", description);
    formData.append("location", manualLocation); // Use manualLocation for the input field

    // If you want to include image upload
    if (image) formData.append("image", image);

    console.log("Submitting report with data:", Object.fromEntries(formData)); // Log form data

    try {
      await apiAddReport(formData);
      toast.success("Report submitted successfully!");

      // Navigate to reports list after 3 seconds
      setTimeout(() => {
        navigate("/submission");
      }, 5000);

      // Reset the form
      setEmail("");
      setTitle("");
      setDateReported(""); // Reset dateReported
      setDescription("");
      setImage(null);
      setManualLocation(""); // Reset manual location
      setShowMap(false); // Hide map after submission
    } catch (error) {
      console.error("Error submitting report:", error);
      if (error.response) {
        console.error("Server Response:", error.response.data);
        toast.error(`Failed to submit the report: ${error.response.data.message || 'Please try again.'}`);
      } else {
        toast.error("Network error. Please check your connection.");
      }
    }
  };

  const handleGoBack = () => {
    navigate("/"); // Navigate back to home page
  };

  return (
    <div className="p-20 bg-gray-300 relative">
      <div className="max-w-lg mx-auto p-4 bg-white rounded shadow backdrop-blur-xl bg-white/30">
        {/* Back Arrow */}
        <button 
          onClick={handleGoBack} 
          className="absolute top-4 left-4 text-green-700 hover:text-green-900"
        >
          <FaArrowLeft size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
          Report Illegal Mining Activity
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <label className="block mb-2 font-semibold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            placeholder="Enter your Email"
            required
          />

          {/* Title Input */}
          <label className="block mb-2 font-semibold">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            placeholder="Report Title"
            required
          />

          {/* Date Reported Input */}
          <label className="block mb-2 font-semibold">Date Reported:</label>
          <input
            type="date"
            value={dateReported}
            onChange={(e) => setDateReported(e.target.value)}
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
            placeholder="Give a brief description of the activity and effects"
            required
          ></textarea>

          {/* Image Upload */}
          <label className="block mb-2 font-semibold">Upload Image:</label>
          <input type="file" onChange={handleImageUpload} className="mb-4" />

          {/* Manual Location Input */}
          <label className="block mb-2 font-semibold">Location (GPS/Town):</label>
          <input
            type="text"
            value={manualLocation}
            onChange={(e) => setManualLocation(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            placeholder="E.g., GPS coordinates or town name"
            required
          />

          {/* Location Selection (Optional Map) */}
          <label className="block mb-2 font-semibold">Select Location on Map (Optional):</label>
          <button
            type="button"
            onClick={() => setShowMap(!showMap)}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mb-4"
          >
            {showMap ? "Hide Map" : "Select Location on Map"}
          </button>

          {showMap && (
            <div className="mb-4">
              <MapContainer
                center={[51.505, -0.09]}
                zoom={8}
                style={{ width: "100%", height: 300 }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker setLocation={setMapLocation} />
              </MapContainer>
            </div>
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
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ReportForm;