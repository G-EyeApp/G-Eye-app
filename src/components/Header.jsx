import React, { useState } from 'react';
import { FaChevronDown, FaUserCircle, FaCog, FaSignOutAlt, FaArrowLeft, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = ({ user = { firstName: 'John', lastName: 'Doe' } }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getInitials = () => {
    return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  };

  const ProfileDisplay = () => {
    if (profileImage) {
      return (
        <img
          src={profileImage}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      );
    }
    return (
      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold">
        {getInitials()}
      </div>
    );
  };

  return (
    <div>
      <div className="flex-1 flex flex-col bg-gray-100">
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Go to home"
            >
              <FaHome className="text-green-900 text-xl" />
            </button>
            <h1 className="text-2xl font-semibold text-green-900">Agency Dashboard</h1>
          </div>
          
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <ProfileDisplay />
              <FaChevronDown className="text-green-900" />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <label className="flex items-center cursor-pointer">
                      <FaUserCircle className="mr-2" />
                      <span>Edit Profile Picture</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center">
                    <FaCog className="mr-2" />
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center">
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;