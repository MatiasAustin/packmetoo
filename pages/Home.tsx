import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ValuePropsSection from '../components/home/ValuePropsSection';
import FeaturedProductsSection from '../components/home/FeaturedProductsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StorySection from '../components/home/StorySection';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <StorySection />
      <ValuePropsSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;