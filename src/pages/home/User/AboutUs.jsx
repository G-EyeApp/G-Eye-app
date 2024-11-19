
import React from 'react';
import Navbar from '../../../components/Navbar';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section id="about-us" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center mt-10">About Us</h2>
        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
          Our mission is to combat illegal mining and its adverse effects on our communities and environment. We aim to promote sustainable practices and empower communities through education and support.
        </p>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Established by a passionate group of environmental advocates, we have worked tirelessly to report and mitigate the impacts of illegal mining. Our vision is a sustainable world where natural resources are responsibly managed for the prosperity of all.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-3 text-green-800">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Integrity</li>
              <li>Sustainability</li>
              <li>Community Engagement</li>
              <li>Transparency</li>
              <li>Accountability</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-3 text-green-800">Our Achievements</h3>
            <p className="text-gray-600">
              To date, we have supported the closure of over 50 illegal mining sites and facilitated over 100 community awareness workshops.
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Join us in creating a sustainable future. Together, we can make a lasting impact.
        </p>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;