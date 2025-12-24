import React from 'react';
import { Sun, VolumeX, Thermometer, Settings } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: '1',
    title: 'PANORAMIC CLARITY',
    description: 'Defined views, zero visual noise. Ultra-clear low-iron glass.',
    icon: <Sun className="w-6 h-6" />,
  },
  {
    id: '2',
    title: 'ACOUSTIC SANCTUARY',
    description: 'Silence in the city. Advanced sound dampening layers.',
    icon: <VolumeX className="w-6 h-6" />,
  },
  {
    id: '3',
    title: 'THERMAL MASTERY',
    description: 'Cool in summer, warm in winter. Double thermal breaks.',
    icon: <Thermometer className="w-6 h-6" />,
  },
  {
    id: '4',
    title: 'PRECISION ENGINEERING',
    description: 'German technology, Italian design. Micrometer perfection.',
    icon: <Settings className="w-6 h-6" />,
  },
];

const ValueProps: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 block">Value Proposition</span>
          <h2 className="text-3xl font-light text-slate-900">Experience the Invisible</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group glass-panel p-8 rounded-3xl transition-all duration-500 hover:bg-white/40 hover:shadow-2xl hover:-translate-y-1 cursor-default`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center mb-6 text-slate-800 shadow-inner group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">{feature.description}</p>

              {/* Hover shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/0 via-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;