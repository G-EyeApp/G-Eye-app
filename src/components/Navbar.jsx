import React, { useState, useEffect } from 'react';
import image from '../assets/images/eye.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from local storage and apply it
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(storedDarkMode);

    if (storedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode and update local storage
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('dark-mode', newMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 bg-opacity-90 w-full shadow-md z-40 fixed">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={image} alt="Logo" className="mt-3 w-36 h-36" />
          </div>

          {/* Navbar links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition hover:underline font-bold">
              Home
            </Link>
            <Link to="/#map" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition hover:underline font-bold">
              Map
            </Link>
            <Link to="/submission" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition hover:underline font-bold">
              Reports
            </Link>
            <Link to="/signup" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition hover:underline font-bold">
              Agencies
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition hover:underline font-bold">
              About
            </Link>
          </div>

          {/* Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notification Icon */}
            <button className="relative text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
              🔔
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>

            {/* Report Now Button */}
            <Link to="/reportform" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
              Report Now
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 bg-opacity-95">
          <Link to="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            Home
          </Link>
          <Link to="/#map" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            Map
          </Link>
          <Link to="/submission" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            Reports
          </Link>
          <Link to="/signup" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            Agencies
          </Link>
          <Link to="/about" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            About
          </Link>
          <Link
            to="/reportform"
            className="block w-full bg-green-600 text-white px-4 py-2 mt-2 rounded-full hover:bg-green-700 transition"
          >
            Report Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
