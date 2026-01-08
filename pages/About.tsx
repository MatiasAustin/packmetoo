import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Globe, Shield, Smile, Map, Leaf } from 'lucide-react';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50 overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative pb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime/30 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-emerald-100 rounded-full shadow-sm mb-6 animate-bounce">
             <Heart className="w-4 h-4 text-brand-pink fill-current" />
             <span className="text-sm font-bold text-emerald-800 uppercase tracking-wide">Made with Love</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
            Small Stickers, <br />
            <span className="text-emerald-600 relative">
              Big Adventures
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-brand-yellow z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-medium">
            How a globetrotting auntie turned a travel discovery into a family essential.
          </p>
        </div>
      </div>

      {/* The Story Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-brand-dark/5 border-2 border-stone-100">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6 text-lg text-stone-600 leading-relaxed font-medium">
              <h2 className="text-3xl font-bold text-brand-dark font-heading mb-4">It started with a backpack...</h2>
              <p>
                Hi, I'm Stacey! 👋 A few years ago, I was backpacking through Southeast Asia, armed with nothing but a map and a sense of adventure. The scenery was breathtaking, the food was amazing, but the mosquitoes? They were relentless.
              </p>
              <p>
                I tried everything—sticky sprays, strong-smelling lotions—until I discovered a local secret: <span className="text-emerald-700 font-bold bg-emerald-50 px-2 rounded">repellent patches.</span>
              </p>
              <p>
                They were simple, effective, and didn't require coating my skin in chemicals. I realized that families back home needed this. Not just for travel, but for backyard BBQs, soccer practice, and park dates.
              </p>
              <p>
                So, <strong>Pack Me Too</strong> was born. We took that simple concept and made it safer, cuter, and more effective for modern families.
              </p>
              
              <div className="pt-4">
                <img src="https://fontmeme.com/permalink/240523/sign.png" alt="Stacey Signature" className="h-12 opacity-60" /> 
                {/* Placeholder signature */}
                <p className="text-sm font-bold text-stone-400 mt-2">Stacey, Founder & Chief Auntie</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
               <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-stone-50 shadow-2xl relative rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src="https://picsum.photos/seed/traveler/800/1000" alt="Stacey Traveling" className="w-full h-full object-cover" />
               </div>
               {/* Floating elements */}
               <div className="absolute -bottom-8 -left-8 bg-brand-yellow p-6 rounded-full shadow-lg border-4 border-white animate-bounce" style={{animationDuration: '3s'}}>
                  <Globe className="w-8 h-8 text-brand-dark" />
               </div>
               <div className="absolute -top-8 -right-8 bg-brand-pink p-6 rounded-full shadow-lg border-4 border-white animate-bounce" style={{animationDuration: '4s'}}>
                  <Map className="w-8 h-8 text-white" />
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-brand-dark py-24 relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Promise to You</h2>
            <div className="w-24 h-1 bg-brand-lime mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-800/50 backdrop-blur border border-emerald-700 p-8 rounded-[2rem] text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-6 text-brand-dark shadow-lg">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-heading">Naturally Safe</h3>
              <p className="text-emerald-100 font-medium">We only use plant-based essential oils like Citronella and Peppermint. No DEET, no harsh chemicals, ever.</p>
            </div>

            <div className="bg-emerald-800/50 backdrop-blur border border-emerald-700 p-8 rounded-[2rem] text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-heading">Kid Approved</h3>
              <p className="text-emerald-100 font-medium">Protection shouldn't be a chore. Our fun shapes and cool designs make kids actually want to wear them.</p>
            </div>

            <div className="bg-emerald-800/50 backdrop-blur border border-emerald-700 p-8 rounded-[2rem] text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6 text-brand-dark shadow-lg">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-heading">Effective</h3>
              <p className="text-emerald-100 font-medium">Cute stickers, serious science. Our slow-release technology ensures bugs stay away for up to 12 hours.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 text-center px-4">
        <h2 className="text-4xl font-bold text-brand-dark mb-6">Ready to join the adventure?</h2>
        <div className="flex justify-center gap-4">
          <Link to="/shop">
            <Button size="lg" className="bg-brand-dark text-white hover:bg-emerald-800">
               Shop The Collection
            </Button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default About;