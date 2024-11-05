import React, { useState, useEffect } from 'react';
import image from '../assets/images/eye.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from local storage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(storedDarkMode);
    document.documentElement.classList.toggle('dark', storedDarkMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('dark-mode', !isDarkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 bg-opacity-90 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={image}  // Adjust this path if needed
              alt="Logo"
              className="mt-3 w-36 h-36" // Adjust the height and width as needed
            />
          </div>

          {/* Navbar links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
              Home
            </a>
            <a href="#map" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
              Map
            </a>
            <a href="#report" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
              Report
            </a>
            <a href="#dashboard" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
              Dashboard
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
              About
            </a>
          </div>

          {/* Action button & dark mode toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
              Report Now
            </button>
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
          <a href="#home" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            Home
          </a>
          <a href="#map" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            Map
          </a>
          <a href="#report" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            Report
          </a>
          <a href="#dashboard" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            Dashboard
          </a>
          <a href="#about" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            About
          </a>
          <button className="block w-full bg-green-600 text-white px-4 py-2 mt-2 rounded-full hover:bg-green-700 transition">
            Report Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
