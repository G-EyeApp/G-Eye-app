import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AgencyLogin = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiLogin({ email, password });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);

        // Toast for successful login
        toast.success('You have logged in successfully!');

        navigate('/dashboard'); 
      }
    } catch (error) {
      console.error("Login failed:", error);
      
      // Toast for login failure
      toast.error('Incorrect email or password. Please try again.');
    }
  };

  return (
    <div className='login min-h-screen flex items-center justify-center bg-gray-300'>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-10 shadow-md rounded-lg backdrop-blur-xl bg-white/30">
        <h2 className="text-xl font-bold mb-4 text-green-700 text-center">Agency Login</h2>

        <label className="block mb-2">
          Email Address
          <div className="flex items-center border border-gray-300 rounded mt-1">
            <FaEnvelope className="ml-2 text-green-500 mr-2" />
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 border-0 focus:outline-none"
              placeholder='Enter Your Email'
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
              id="password"
              className="w-full p-2 border-0 focus:outline-none"
              placeholder='Enter Password'
              required
            />
          </div>
        </label>

        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            className="mr-2"
          />
          Remember Me
        </label>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Login
        </button>

        <div className='w-full h-auto flex items-center justify-center gap-x-1 mb-3 mt-4'>
          <p className='text-black text-sm font-medium'>Don't have an account?</p>
          <Link to='/signup' className='text-green-400 text-sm font-medium hover:underline ease-out duration-500'>Sign Up</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AgencyLogin;