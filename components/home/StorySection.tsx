import React from 'react';
import { PartyPopper, Bug } from 'lucide-react';

const StorySection = () => {
  return (
    <section className="bg-brand-lime py-24 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" className="text-white" fill="currentColor" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Image Side */}
                <div className="relative">
                    {/* Dotted Circle Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border-4 border-dashed border-white/50 animate-spin-slow"></div>
                    <div className="absolute top-0 right-0 text-white animate-bounce">
                        <Bug className="w-12 h-12" />
                    </div>
                    
                    <div className="relative rounded-full overflow-hidden border-8 border-white shadow-2xl aspect-square max-w-md mx-auto">
                        <img 
                            src="https://picsum.photos/seed/founder_smile/800/800" 
                            alt="Stacey Founder" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Decorative Doodle */}
                    <div className="absolute bottom-0 left-10 text-brand-yellow">
                         <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5">
                             <path d="M10 50 Q 25 25 50 10 T 90 50 T 50 90 T 10 50" />
                         </svg>
                    </div>
                </div>

                {/* Text Side */}
                <div className="text-brand-dark">
                    <div className="flex items-center gap-3 mb-6">
                        <PartyPopper className="w-8 h-8 text-brand-pink" />
                        <h2 className="text-4xl md:text-5xl font-bold font-heading transform -rotate-2">
                            Get to know us & our story!
                        </h2>
                        <Bug className="w-8 h-8 text-emerald-700" />
                    </div>

                    <div className="space-y-6 text-lg font-medium leading-relaxed bg-white/40 p-8 rounded-3xl backdrop-blur-sm border border-white/50 shadow-lg">
                        <p>
                            <span className="font-bold text-2xl font-heading block mb-2">Hello! I'm Stacey,</span> 
                            the visionary behind <span className="font-bold">Pack Me Too</span>—where practicality meets pocket-sized perfection!
                        </p>
                        
                        <p>
                            Picture this: after globe-trotting across countless countries (yes, I still have all ten fingers, thanks to our Buzz-Off bug repellent stickers!), I uncovered a world of ingenious, tiny products that turned life’s little annoyances into manageable delights.
                        </p>
                        
                        <p>
                            But here’s the thing—these clever creations often lacked style, quality, and availability outside their local markets. As an auntie on a mission to share what I enjoyed on my journies, I knew it was time to share these hidden gems with the world. Thus, <span className="font-bold">Pack Me Too</span> was born!
                        </p>
                        
                        <div className="pt-4">
                            <h3 className="text-xl font-bold font-heading mb-2">Our First Star: The Mosquito Buzz-Off Collection! 🌟</h3>
                            <p>Say goodbye to traditional bug sprays and hello to stylish, effective insect repellent stickers.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default StorySection;