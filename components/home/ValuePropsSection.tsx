import React from 'react';
import { Leaf, Clock, Sun, Heart } from 'lucide-react';

const ValuePropsSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Why Parents Love Us</h2>
            <div className="h-1 w-24 bg-brand-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group flex flex-col items-center p-8 rounded-[2rem] bg-emerald-50 border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-emerald-600 mb-6 shadow-md border-4 border-emerald-100 group-hover:scale-110 transition-transform">
              <Leaf className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-3 font-heading">100% Natural</h3>
            <p className="text-stone-600 text-center font-medium leading-relaxed">
              Infused with citronella and peppermint oil. No harsh chemicals, DEET-free, and safe for sensitive skin.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center p-8 rounded-[2rem] bg-orange-50 border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-orange-500 mb-6 shadow-md border-4 border-orange-100 group-hover:scale-110 transition-transform">
              <Clock className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-3 font-heading">All Day Play</h3>
            <p className="text-stone-600 text-center font-medium leading-relaxed">
              Advanced slow-release technology provides up to 12 hours of effective protection radius.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center p-8 rounded-[2rem] bg-blue-50 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-500 mb-6 shadow-md border-4 border-blue-100 group-hover:scale-110 transition-transform">
              <Sun className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-3 font-heading">Fun & Functional</h3>
            <p className="text-stone-600 text-center font-medium leading-relaxed">
              Waterproof, durable adhesive that sticks to fabric, backpacks, hats, or strollers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;