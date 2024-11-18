import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { FaCheckCircle, FaUsers, FaMountain } from 'react-icons/fa';

const Impact = () => {
  const stats = [
    {
      icon: <FaCheckCircle size={32} className="text-green-500" />,
      label: "Reports Resolved",
      count: 75,
    },
    {
      icon: <FaUsers size={32} className="text-blue-500" />,
      label: "Communities Impacted",
      count: 50,
    },
    {
      icon: <FaMountain size={32} className="text-orange-500" />,
      label: "Illegal Sites Closed",
      count: 30,
    },
  ];

  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000); // Adjust the duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Report Overview</h2>
        <p className="text-gray-600 mb-12">
          Together, we are making a difference in the fight against illegal mining. Here’s what our community has achieved so far:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-gray-800">
                <CountUp key={key} end={stat.count} duration={4} />+
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
