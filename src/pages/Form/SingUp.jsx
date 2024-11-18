import React, { useState } from 'react';
import { FaBuilding, FaPhone, FaEnvelope, FaLock, FaGlobe, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AgencySignup = () => {
  const [formData, setFormData] = useState({
    agencyName: '',
    officeNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    agencyAddress: '',
    contactPerson: '',
    contactPhone: '',
    website: '',
    services: [],
    preferredContact: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
   <div className='signup p-20 bg-gray-300'>
     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg backdrop-blur-xl bg-white/30">
      <h2 className="text-xl font-bold mb-4 text-center text-green-700">Agency Signup</h2>

      <label className="block mb-2">
        Name of Agency
        <div className="flex items-center border border-gray-300 rounded mt-1">
          <FaBuilding className="ml-2 text-green-500 mr-2" />
          <input
            type="text"
            name="agencyName"
            value={formData.agencyName}
            onChange={handleChange}
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
            value={formData.officeNumber}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
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
            value={formData.confirmPassword}
            onChange={handleChange}
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
          value={formData.agencyAddress}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder='Input Agency Address'
        />
      </label>


      <label className="block mb-2">
        Tin Number
        <div className="flex items-center border border-gray-300 rounded mt-1">
          <FaBuilding className="ml-2 text-green-500 mr-2" />
          <input
            type="number"
            name="tinNumber"
            value={formData.tinNumber}
            onChange={handleChange}
            className="w-full p-2 border-0 focus:outline-none"
            placeholder='Tin Number'
          />
        </div>
      </label>


      <label className="block mb-4">
        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          className="mr-2"
          required
        />
        I agree to the Terms and Conditions
      </label>

      <button
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        Submit
      </button>

      <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Already have an account?</span>{' '}
          <a href="#" className="font-medium text-green-600 hover:text-green-700">
            <Link to='/login'>Log In</Link>
          </a>

        </div>
    </form>
   </div>
  );
};

export default AgencySignup;