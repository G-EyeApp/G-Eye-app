import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserCircle, FaChartBar, FaBell, FaPaperPlane } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`bg-green-900 text-white transition-width duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-22'} overflow-hidden`}>
        <button onClick={toggleSidebar} className="p-4 focus:outline-none text-gray-300 hover:text-white">
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className="flex flex-col items-center mt-6">
          <FaUserCircle size={isSidebarOpen ? 80 : 40} />
          {isSidebarOpen && <p className="mt-2 text-lg">Agency Name</p>}
        </div>
        <nav className="mt-10">
          <ul>
            <li className="p-4 hover:bg-green-700 flex items-center">
              <FaChartBar className="mr-2" />
              <Link to='/dashboard'>{isSidebarOpen && 'Dashboard Overview'}</Link>
            </li>
            <li className="p-4 hover:bg-green-700 flex items-center" onClick={toggleDropdown}>
              <FaBell className="mr-2" />
              <Link to='/dashboard/review'>{isSidebarOpen && 'Case Reviews'}</Link>
            </li>
            {isDropdownOpen && (
              <li className="pl-8 pr-4 hover:bg-green-700 flex items-center">
                <FaPaperPlane className="mr-2" /> {/* Icon for Submit Report */}
                <Link to='/dashboard/submit'>{isSidebarOpen && 'Submit Report'}</Link>
              </li>
            )}
            <li className="p-4 hover:bg-green-700 flex items-center">
              <FaBell className="mr-2" />
              {isSidebarOpen && 'Alerts & Warnings'}
            </li>
            <li className="p-4 hover:bg-green-700 flex items-center">
              <FaChartBar className="mr-2" />
              {isSidebarOpen && 'Data Visualization'}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;