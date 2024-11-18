import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className="dashboard-layout flex">
    <Sidebar isSidebarOpen={setIsSidebarOpen} />
    <div className="main-content flex-1 flex flex-col bg-[#f0fdf4]">
      <Header className=" flex-1 flex flex-col bg-gray-100"/>
      {/* Other components or content go here */}
      <Outlet/>
    </div>
  </div>
  );
};

export default DashboardLayout;
