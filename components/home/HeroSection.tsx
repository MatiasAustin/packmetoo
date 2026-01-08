import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-stone-50">
      {/* Playful Background Shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand-lime/30 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-float"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-yellow/30 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-[20%] left-[20%] w-20 h-20 bg-brand-pink/20 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-28 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-emerald-100 rounded-full shadow-sm animate-fade-in-up hover:scale-105 transition-transform cursor-default">
              <span className="animate-pulse">✨</span>
              <span className="text-sm font-bold text-emerald-800 tracking-wide uppercase">No Deet. No Worries.</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark tracking-tight leading-[1.1]">
              Natural protection, <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-emerald-600">made simple.</span>
                <svg className="absolute bottom-1 left-0 w-full h-3 text-brand-yellow z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-stone-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Fun, DEET-free repellent stickers that actually work. 
              Safe for kids, easy for parents, and ready for adventure! 🏕️
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/shop">
                <Button size="lg" className="shadow-emerald-500/30">Shop The Collection</Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg" className="flex items-center gap-2">
                  How it works <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 justify-center lg:justify-start">
              <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-12 h-12 rounded-full border-4 border-white shadow-md object-cover" src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" />
                  ))}
              </div>
              <div className="text-left">
                <div className="flex text-orange-500 drop-shadow-sm tracking-wide">
                  {'★★★★★'}
                </div>
                <p className="text-sm font-bold text-stone-500">
                  Trusted by <span className="text-emerald-700">10k+ parents</span>
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[500px] lg:h-[650px] hidden lg:block">
             {/* Doodles */}
             <Sparkles className="absolute top-10 right-10 w-12 h-12 text-brand-yellow animate-spin-slow z-20" />
             
            <div className="absolute inset-0 bg-white p-4 rounded-[3rem] transform rotate-2 shadow-2xl border-4 border-brand-lime">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                    <img src="https://picsum.photos/seed/campingkid/1000/1200" alt="Child playing outdoors" className="w-full h-full object-cover" />
                    
                    {/* Sticker Effect Overlay */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
                </div>
                
                {/* Floating Feature Card */}
                <div className="absolute bottom-12 left-[-20px] bg-white p-5 rounded-3xl shadow-xl border-b-4 border-r-4 border-stone-100 max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center text-brand-dark border-2 border-brand-dark">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-dark leading-none mb-1">12h Protection</h4>
                      <p className="text-sm text-stone-500 font-semibold">Just stick & play!</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;