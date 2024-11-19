import React from 'react';
import image1 from '../../assets/images/stop2.jpeg'; // Image 1
import image2 from '../../assets/images/intro5.png'; // Image 2
import image3 from '../../assets/images/intro3.png'; // Image 3
import image4 from '../../assets/images/stop.jpeg'; // Image 3
import { Link } from 'react-router-dom';
import ImpactTrend from './User/ImpactTrend';

const Introduction = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-700 text-center">Protecting Our Environment Together</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          
          {/* Images Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={image1} alt="Forest impacted by illegal mining" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={image2} alt="Community impact" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={image3} alt="Impact of illegal mining" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={image4} alt="Impact of illegal mining" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 md:pl-8 text-center md:text-left mt-5">
            <h2 className="text-3xl font-bold text-green-700 text-center">Statistics</h2>
            <p className="mt-4 text-lg text-gray-600 text-justify">
              Join the fight against illegal mining and help preserve our natural resources.
            </p>
            <p className="mt-4 text-gray-700 text-justify">
              Illegal mining causes severe damage to our environment, including contamination of water sources, 
              loss of biodiversity, and soil degradation. By reporting cases, you help protect your community 
              and our planet.
            </p>

            {/* Statistics */}
            <div className="flex justify-center md:justify-start mt-8 space-x-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-green-600">50%</span>
                <p className="text-gray-600 text-justify">Forest areas lost to illegal mining</p>
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
                <Link to='/reportform'> Start Reporting</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Trend Section */}
      <section className="py-10 px-6 bg-green-50">
        <div className="container mx-auto text-center md:text-left space-y-6">
          <h1 className="text-3xl font-bold text-green-900 text-center">Impact Trend of Illegal Mining on The Environment</h1>
          <p className="text-lg text-green-700 text-center">
            Our app empowers communities to report illegal mining activities, helping safeguard our water, forests, and environment.
          </p>
          <ImpactTrend />
        </div>
      </section>
    </div>
  );
};

export default Introduction;