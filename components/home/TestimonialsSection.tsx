import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">Trusted by 50,000+ Families</h2>
             <p className="text-emerald-200 text-lg">Real stories from real adventures.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-emerald-800/40 backdrop-blur border border-emerald-700/50 p-8 rounded-[2rem] text-emerald-50 relative hover:bg-emerald-800/60 transition-colors">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-emerald-600 opacity-50 rotate-180" />
              <div className="flex gap-1 text-brand-yellow mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg font-medium mb-6 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center font-bold">
                     {t.name.charAt(0)}
                 </div>
                 <div>
                    <div className="font-bold font-heading text-white">{t.name}</div>
                    <div className="text-emerald-300/80 text-sm font-medium uppercase tracking-wider">{t.role}</div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;