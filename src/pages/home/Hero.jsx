import React from 'react';
import videoSource from '../../assets/videos/hero.mp4'; // Path to your video file
import image1 from '../../assets/images/mine.png';
import image2 from '../../assets/images/nature.png';
import image3 from '../../assets/images/env.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero relative h-screen">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        src={videoSource} 
        autoPlay 
        loop 
        muted 
        playsInline 
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white space-y-6 px-6">
        <h1 className="text-4xl md:text-5xl font-bold animate-fadeInUp space-x-3">
          <span className="inline-block">Guard Our Resources</span>
          <span className="inline-block animate-rotateText"> &mdash; Report Illegal Mining</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl animate-fadeInUp animation-delay-200">
          Join us in safeguarding the environment by reporting illegal mining activities in your community.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full animate-fadeInUp animation-delay-300">
          <Link to='/involved'>Get Involved</Link>
        </button>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 animate-fadeInUp animation-delay-400">
          <img src={image1} alt="Mining" className="h-20 w-20 object-cover rounded-full shadow-lg transform hover:scale-105 transition" />
          <img src={image2} alt="Nature" className="h-20 w-20 object-cover rounded-full shadow-lg transform hover:scale-105 transition" />
          <img src={image3} alt="Nature" className="h-20 w-20 object-cover rounded-full shadow-lg transform hover:scale-105 transition" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
