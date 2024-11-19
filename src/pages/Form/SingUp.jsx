import React, { useState } from 'react';
import { FaBuilding, FaPhone, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { apiSignup } from '../../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify styles

const AgencySignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const formDataObj = new FormData(e.target);
      const agencyName = formDataObj.get("agencyName");
      const officeNumber = formDataObj.get("officeNumber");
      const email = formDataObj.get("email");
      const password = formDataObj.get("password");
      const agencyAddress = formDataObj.get("agencyAddress");
      const tinNumber = formDataObj.get("tinNumber");
      // const confirmPassword = formDataObj.get("confirmPassword");
      // const termsAccepted = formDataObj.get("termsAccepted") === "on"; // checkbox handling

      const payload = {
        agencyName,
        officeNumber,
        email,
        password,
        agencyAddress,
        tinNumber,
        // confirmPassword, // Include this if needed for validation
        // termsAccepted,
      };

      const response = await apiSignup(payload);

      // Success Toast
      toast.success('Registered Successfully! You have successfully created an account.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/login");
    } catch (error) {
      // Error Toast
      toast.error(error.response?.data?.message || 'Registration Failed! Something went wrong!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='signup p-20 bg-gray-300'>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg backdrop-blur-xl bg-white/30">
        <h2 className="text-xl font-bold mb-4 text-center text-green-700">Agency Signup</h2>

        <label className="block mb-2">
          Name of Agency
          <div className="flex items-center border border-gray-300 rounded mt-1">
            <FaBuilding className="ml-2 text-green-500 mr-2" />
            <input
              type="text"
              name="agencyName"
              className="w-full p-2 border-0 focus:outline-none"
              placeholder='Enter Name of Agency'
              required
            />
          </div>
        </label>

        <label className="block mb-2">
          Office Number
          <div className="flex items-center border border-gray-300 rounded mt-1">
            <FaPhone className="ml-2 text-green-500 mr-2" />
            <input
              type="text"
              name="officeNumber"
              className="w-full p-2 border-0 focus:outline-none"
              placeholder='Enter Office Number'
              required
            />
          </div>
        </label>

        <label className="block mb-2">
          Email Address
          <div className="flex items-center border border-gray-300 rounded mt-1">
            <FaEnvelope className="ml-2 text-green-500 mr-2" />
            <input
              type="email"
              name="email"
              className="w-full p-2 border-0 focus:outline-none"
              placeholder='Enter Email'
              required
            />
          </div>
        </label>

        <label className="block mb-2">
          Password
          <div className="flex items-center border border-gray-300 rounded mt-1">
            <FaLock className="ml-2 text-green-500 mr-2" />
            <input
              type="password"
              name="password"
              className="w-full p-2 border-0 focus:outline-none"
              placeholder='Enter Password'
              required
            />
          </div>
        </label>

        <label className="block mb-2">
          Confirm Password
          <div className="flex items-center border border-gray-300 rounded mt-1">
            <FaLock className="ml-2 text-green-500 mr-2" />
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-2 border-0 focus:outline-none"
              placeholder='Confirm Password'
              required
            />
          </div>
        </label>

        <label className="block mb-2">
          Agency Address
          <textarea
            name="agencyAddress"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder='Input Agency Address'
            required
          />
        </label>

        <label className="block mb-2">
          Tin Number
          <div className="flex items-center border border-gray-300 rounded mt-1">
            <FaBuilding className="ml-2 text-green-500 mr-2" />
            <input
              type="number"
              name="tinNumber"
              className="w-full p-2 border-0 focus:outline-none"
              placeholder='Tin Number'
              required
            />
          </div>
        </label>

        <label className="block mb-4">
          <input
            type="checkbox"
            name="termsAccepted"
            className="mr-2"
            required
          />
          I agree to the Terms and Conditions
        </label>

        <button
          type="submit"
          className={`w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} // Disable button if loading
        >
          Submit
        </button>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Already have an account?</span>{' '}
          <Link to='/login' className="font-medium text-green-600 hover:text-green-700">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AgencySignup;