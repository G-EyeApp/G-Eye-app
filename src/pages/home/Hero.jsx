import React from 'react';
import image from '../../assets/images/hero.jpg'
import image1 from '../../assets/images/mine.png'
import image2 from '../../assets/images/nature.png'

const Hero = () => {
  return (
    <div>
    <section className="hero relative bg-cover bg-center h-screen">
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  {/* Content */}
  <div className="relative flex flex-col items-center justify-center h-full text-center text-white space-y-6 px-6">
    {/* Animated Text */}
    <h1 className="text-4xl md:text-5xl font-bold animate-fadeInUp">
      <span className="inline-block">Guard Our Resources</span>
      <span className="inline-block animate-rotateText"> &mdash; Report Illegal Mining</span>
    </h1>

    {/* Supporting Text */}
    <p className="text-lg md:text-xl max-w-2xl animate-fadeInUp animation-delay-200">
      Join us in safeguarding the environment by reporting illegal mining activities in your community.
    </p>

    {/* Call-to-Action Button */}
    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full animate-fadeInUp animation-delay-300">
      Get Invoved
    </button>

    {/* Moving Images (optional) */}
    <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 animate-fadeInUp animation-delay-400">
      <img src={image} alt="Environment" className="h-20 w-20 object-cover rounded-full shadow-lg transform hover:scale-105 transition" />
      <img src={image1} alt="Mining" className="h-20 w-20 object-cover rounded-full shadow-lg transform hover:scale-105 transition" />
      <img src={image2} alt="Nature" className="h-20 w-20 object-cover rounded-full shadow-lg transform hover:scale-105 transition" />
    </div>
  </div>
</section>
</div>
    
  );
};

export default Hero;
