import React from "react"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Hero from './pages/home/Hero';
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Introduction from "./pages/home/Introduction";
import DashboardLayout from "./Layouts/DashboardLayout";
import ReportForm from "./pages/home/User/ReportForm";
import Impact from "./pages/home/Impact";
import News from "./pages/home/User/News";
import EnvFacts from "./pages/home/User/EnvFacts";
import FAQSection from "./pages/home/User/FaqItem";
import Video from "./pages/home/User/video";
import AgencySignup from "./pages/Form/SingUp";
import AgencyLogin from "./pages/Form/Login";
import Overview from "./pages/Dashboard/Overview";
import CaseReview from "./pages/Dashboard/CaseReview";
import UserSubmissions from "./pages/home/User/UserSubmissions";
import SubmitReportForm from "./pages/Dashboard/AgencySubmission";
import UpdateReportForm from "./pages/Dashboard/EditReport";
import GetInvolved from "./pages/home/User/GetInvolved";
import AboutUs from "./pages/home/User/AboutUs";


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
          path: "/FAQ",
          element: <FAQSection/>,
        },
        {
          path: "/vid",
          element: <Video/>,
        },
        {
          path: "/signup",
          element: <AgencySignup/>,
        },
        {
          path: "/login",
          element: <AgencyLogin/>,
        },
        {
          path: "/submission",
          element: <UserSubmissions/>,
        },
        {
          path: "/involved",
          element: <GetInvolved/>,
        },
        {
          path: "/about",
          element: <AboutUs/>,
        },
    
       
        {
          path: "/dashboard",
          element: <DashboardLayout/>,
          children: [
            {
              index: true,
              element: <Overview />,
            },
            {
              path: "review",
              element: <CaseReview/>,
            },
            {
              path: "submit",
              element: <SubmitReportForm />,
            },
            {
              path: "edit",
              element: <UpdateReportForm />,
            },
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
