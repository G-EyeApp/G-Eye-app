import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const ImpactTrend = () => {
  // Hardcoded data for the line graph
  const lineData = [
    { year: '2018', Water: 20, Forest: 15, Environment: 10 },
    { year: '2019', Water: 30, Forest: 25, Environment: 20 },
    { year: '2020', Water: 45, Forest: 35, Environment: 30 },
    { year: '2021', Water: 60, Forest: 50, Environment: 45 },
    { year: '2022', Water: 75, Forest: 70, Environment: 60 },
    { year: '2023', Water: 90, Forest: 85, Environment: 75 },
  ];

  // Hardcoded data for the pie chart
  const pieData = [
    { name: 'Water Impact', value: 90 },
    { name: 'Forest Impact', value: 85 },
    { name: 'Overall Environmental Impact', value: 75 },
  ];

  // Define colors for the pie chart
  const COLORS = ['#1E90FF', '#32CD32', '#FF6347'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-center text-xl font-semibold text-green-700 mb-4">
        Impact Trends on Environment
      </h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="line-chart-container mb-6 md:mb-0 md:w-1/2">
          <h3 className="text-center text-lg font-semibold text-green-600 mb-3">
            Trends Over Years
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Water" stroke="#1E90FF" strokeWidth={2} />
              <Line type="monotone" dataKey="Forest" stroke="#32CD32" strokeWidth={2} />
              <Line type="monotone" dataKey="Environment" stroke="#FF6347" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="pie-chart-container md:w-1/2">
          <h3 className="text-center text-lg font-semibold text-green-600 mb-3">
            Environmental Impact Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} innerRadius={40} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ImpactTrend;