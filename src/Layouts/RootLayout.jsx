import React from 'react'
import Hero from '../pages/home/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const RootLayout = ({children, headerText}) => {
    return (
      <div>
      <Navbar />
       <h1>{headerText}</h1>
        <div>{children}</div>
        <Hero />
        <Footer />
      </div>
  )
}

export default RootLayout;

















