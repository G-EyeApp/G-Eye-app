
import React from 'react';
import { useState, useEffect } from 'react';
import { FaCheckCircle, FaUsers, FaMountain } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

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

  const [chartData, setChartData] = useState({
    labels: [], // Placeholder labels for months or categories
    datasets: [
      {
        label: 'Reports Submitted per Month',
        data: [], // Placeholder data
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Fetch data from the API and update chartData here
    const fetchData = async () => {
      try {
        // Example fetch call; replace with actual API URL
        const response = await fetch('/api/impact-stats/monthly-reports');
        const data = await response.json();

        // Assuming data is in the format [{ month: 'January', count: 10 }, ...]
        const months = data.map((item) => item.month);
        const counts = data.map((item) => item.count);

        setChartData({
          labels: months,
          datasets: [
            {
              label: 'Reports Submitted per Month',
              data: counts,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching monthly report data:", error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
        <p className="text-gray-600 mb-12">
          Together, we are making a difference in the fight against illegal mining. Here’s what our community has achieved so far:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-gray-800">{stat.count}+</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

    <div className="max-w-4xl mx-auto mt-12">
      <h3 className="text-xl font-bold text-center mb-4">Monthly Report Submissions</h3>
      <Bar data={chartData} />
    </div>
    </section>
  );
};

export default Impact;
