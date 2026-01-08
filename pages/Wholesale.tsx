import React from 'react';
import WholesaleHero from '../components/wholesale/WholesaleHero';
import WholesaleFeatures from '../components/wholesale/WholesaleFeatures';
import WholesaleForm from '../components/wholesale/WholesaleForm';

const Wholesale = () => {
  return (
    <div className="pt-24 bg-stone-50 min-h-screen">
      <WholesaleHero />
      <WholesaleFeatures />
      <WholesaleForm />
    </div>
  );
};

export default Wholesale;