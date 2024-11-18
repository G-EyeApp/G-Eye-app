import React from 'react'
import Hero from './Hero';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Introduction from './Introduction';
import Impact from './Impact';
import EnvFacts from './User/EnvFacts';
import FAQSection from './User/FaqItem';
import Video from './User/video';
import UserSubmissions from './User/UserSubmissions';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <Video />
      <EnvFacts />
      <Impact />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default Home;