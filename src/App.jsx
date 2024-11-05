import React from "react"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Hero from './pages/home/Hero';
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Introduction from "./pages/home/Introduction";
import DashboardLayout from "./Layouts/DashboardLayout";
import Report from "./pages/Dashboard/Report";
import ReportForm from "./pages/home/User/ReportForm";
import Impact from "./pages/home/Impact";
import News from "./pages/home/User/News";
import EnvFacts from "./pages/home/User/EnvFacts";

function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/hero",
          element: <Hero />,
        },
        {
          path: "/nav",
          element: <Navbar />,
        },
        {
          path: "/intro",
          element: <Introduction />,
        },
        {
          path: "/reportform",
          element: <ReportForm />,
        },
        {
          path: "/impact",
          element: <Impact />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/facts",
          element: <EnvFacts/>,
        },
    
        {
          path: "/dashboard",
          element: <DashboardLayout/>,
          children: [
            {
              index: true,
              // element: <Report />,
            },
            {
              path: "report/",
              element: <Report/>,
            },
        //     {
        //       path: "adverts/add",
        //       element: <AddAdverts />,
        //     },
        //     {
        //       path: "adverts/:id",
        //       element: <SingleAdd />,
        //     },
        //     {
        //       path: "edit/:id",
        //       element: < EditAdvert/>,
        //     },
        //     {
        //       path: "orders",
        //       element: <Orders />,
        //     },
        //     {
        //       path: "profile",
        //       element: <Profile />,
        //     },
        //     {
        //       path: "settings",
        //       element: <Settings />,
        //     },
        //     {
        //       path: "logout",
        //       element: <Logout/>,
        //     },
          ],
        },
    
      ]);
    
      return <RouterProvider router={router} />;
    };
    

export default App
