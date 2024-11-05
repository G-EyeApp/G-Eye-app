import React from 'react'
import Hero from './Hero';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Introduction from './Introduction';
import Impact from './Impact';
import EnvFacts from './User/EnvFacts';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <EnvFacts />
      <Impact />
      <Footer />
    </div>
  )
}

export default Home;