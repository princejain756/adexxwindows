import React from 'react';
import { TimeOfDay } from '../types';

const times: TimeOfDay[] = [
  {
    id: 'dawn',
    label: 'Dawn',
    title: 'Wake with the first light.',
    description: 'The world is yours before it stirs. Soft hues filter through.',
    image: '/windowimage1.webp',
    gradient: 'from-blue-200/20 to-orange-100/20',
    textColor: 'text-slate-800'
  },
  {
    id: 'noon',
    label: 'Noon',
    title: 'Bathe in daylight.',
    description: 'Verily flows through unfiltered specs. Pure clarity.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2600&auto=format&fit=crop',
    gradient: 'from-blue-50/20 to-white/20',
    textColor: 'text-slate-800'
  },
  {
    id: 'dusk',
    label: 'Golden Hour',
    title: 'Bask in the flight.',
    description: 'The horizon becomes your evening art. Warmth radiates.',
    image: '/windowimage2.webp',
    gradient: 'from-orange-500/20 to-purple-500/20',
    textColor: 'text-white'
  },
  {
    id: 'night',
    label: 'Night',
    title: 'Sleep in silence.',
    description: 'The city lights are infinite, the noise is miles away.',
    image: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2600&auto=format&fit=crop',
    gradient: 'from-blue-900/40 to-black/60',
    textColor: 'text-white'
  }
];

const DaylightCycle: React.FC = () => {
  return (
    <section id="inspiration" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 block">Living Light Scrolltelling</span>
        <h2 className="text-4xl font-light text-slate-900 uppercase">Live Through The Glass</h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        {times.map((time) => (
          <div key={time.id} className="relative group rounded-3xl overflow-hidden shadow-2xl h-[500px] transition-transform duration-700 hover:scale-[1.01]">
            <img 
              src={time.image} 
              alt={time.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
            {/* Atmospheric Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${time.gradient}`}></div>
            
            {/* Glass Content Card positioned based on flow */}
            <div className="absolute top-1/2 left-8 md:left-12 -translate-y-1/2 max-w-sm">
              <div className={`glass-panel p-8 rounded-2xl border-l-4 ${time.id === 'night' ? 'border-l-blue-500 bg-black/40' : 'border-l-white bg-white/20'} backdrop-blur-md`}>
                <span className={`text-xs font-bold uppercase tracking-widest mb-4 block opacity-80 ${time.textColor}`}>
                  {time.label}
                </span>
                <h3 className={`text-3xl font-light mb-4 leading-tight ${time.textColor}`}>
                  {time.title}
                </h3>
                <p className={`text-sm leading-relaxed opacity-90 ${time.textColor}`}>
                  {time.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DaylightCycle;