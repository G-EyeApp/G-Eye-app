import React, { useState, useEffect } from 'react';
import { FaUsers, FaTasks, FaBell, FaChartBar } from 'react-icons/fa';

const CountingNumber = ({ target, duration = 9000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
        // Reset and start over
        startTime = currentTime;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);

  return <span className="text-2xl">{count.toLocaleString()}</span>;
};

const Overview = () => {
  const cardData = [
    {
      title: "Total Reports",
      value: 1234,
      icon: FaTasks,
      color: "text-blue-500"
    },
    {
      title: "Reports Under Review",
      value: 456,
      icon: FaBell,
      color: "text-yellow-500"
    },
    {
      title: "Resolved Cases",
      value: 789,
      icon: FaUsers,
      color: "text-green-500"
    },
    {
      title: "Data Analytics",
      value: null,
      icon: FaChartBar,
      color: "text-purple-500"
    }
  ];

  return (
    <div className="p-6 bg-[#f0fdf4]">
      <h1 className="text-3xl font-semibold mb-4">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-lg p-4 flex items-center transition-transform hover:scale-105"
          >
            <card.icon className={`text-4xl ${card.color} mr-4`} />
            <div>
              <p className="text-lg font-bold">{card.title}</p>
              {card.value !== null ? (
                <CountingNumber target={card.value} />
              ) : (
                <p className="text-2xl">View</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;