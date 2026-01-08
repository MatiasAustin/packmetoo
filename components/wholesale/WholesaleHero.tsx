import React from 'react';
import Button from '../Button';

const WholesaleHero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="bg-emerald-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Protect Your Team</h1>
          <p className="text-emerald-200 text-xl mb-10 leading-relaxed">
            Premium, natural insect protection for corporate retreats, outdoor events, and employee wellness kits. 
            Customize with your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">Request Quote</Button>
              <Button variant="outline" size="lg" className="border-emerald-700 text-emerald-100 hover:bg-emerald-800 hover:text-white hover:border-emerald-800">Download Catalog</Button>
          </div>
        </div>
        
        {/* Abstract pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" className="text-white" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WholesaleHero;