import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; 
import image from '../assets/images/eye.png'; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <img src={image} alt="App Logo" className="w-36 h-36 mb-3 bg-white rounded-full" />
          <p className="text-justify md:text-left text-sm text-green-200 max-w-xs">
            Our mission is to empower communities by providing a platform for reporting illegal mining activities and safeguarding the natural environment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col text-center md:text-left space-y-2 md:space-y-4">
          <h4 className="font-semibold text-lg text-green-300">Quick Links</h4>
          <a href="#about" className="hover:text-green-400 transition duration-200">About Us</a>
          <a href="#contact" className="hover:text-green-400 transition duration-200">Contact</a>
          <a href="#privacy" className="hover:text-green-400 transition duration-200">Privacy Policy</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col text-center md:text-left space-y-2 md:space-y-4">
          <h4 className="font-semibold text-lg text-green-300">Contact Us</h4>
          <p className="text-green-200 text-sm">Email: support@g-eye.com</p>
          <p className="text-green-200 text-sm">Phone: +233 240672303</p>
          <p className="text-green-200 text-sm">Address: Accra, Ghana</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="font-semibold text-lg text-green-300">Follow Us</h4>
          <div className="flex space-x-4 text-green-400">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-green-500 transition duration-200" />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-green-500 transition duration-200" />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-green-500 transition duration-200" />
            </a>
            <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-green-500 transition duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-700 my-6"></div>

      {/* Copyright */}
      <div className="text-center text-sm text-green-300">
        © {new Date().getFullYear()} G-Eye. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
