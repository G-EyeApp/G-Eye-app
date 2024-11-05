import React from 'react';
import image from '../../assets/images/illegal.jpg'
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-green-700 text-center">Protecting Our Environment Together</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 mt-5">
          <img src={image} alt="Forest impacted by illegal mining" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 md:pl-8 text-center md:text-left mt-5">
        <h2 className="text-3xl font-bold text-green-700 text-center">Statistics</h2>
          <p className="mt-4 text-lg text-gray-600">
            Join the fight against illegal mining and help preserve our natural resources.
          </p>
          <p className="mt-4 text-gray-700">
            Illegal mining causes severe damage to our environment, including contamination of water sources, 
            loss of biodiversity, and soil degradation. By reporting cases, you help protect your community 
            and our planet.
          </p>

          {/* Statistics */}
          <div className="flex justify-center md:justify-start mt-8 space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-green-600">50%</span>
              <p className="text-gray-600">Forest areas lost to illegal mining</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-green-600">70%</span>
              <p className="text-gray-600">Water sources contaminated</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">Every report counts. Help us combat illegal mining in your area.</p>
            <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200">
             <Link to= '/reportform'> Start Reporting</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
