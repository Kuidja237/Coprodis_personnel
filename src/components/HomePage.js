// src/components/HomePage.js
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import RecommendedProfiles from './RecommendedProfiles';
import Testimonials from './Testimonials';
import Footer from './Footer';
import {profiles} from '../data/constants'

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <RecommendedProfiles profiles={profiles} isLoading={false} /> 
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
