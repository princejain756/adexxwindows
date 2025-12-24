import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CollectionItem } from '../types';

const collections: CollectionItem[] = [
  {
    id: '1',
    title: 'ETERNIA DURASLIM CASEMENT',
    subtitle: 'A premium aluminium casement door and window system designed for superior insulation, durability, and aesthetics.',
    image: '/products/images/eternia-duraslim-casement-1.webp',
  },
  {
    id: '2',
    title: 'ETERNIA DURASLIM CASEMENT TILT & TURN',
    subtitle: 'Seamless Operation – Our tilt and turn windows offer versatile functionality, allowing you to tilt them for secure ventilation or fully turn them for easy cleaning and maximum airflow.',
    image: '/products/images/eternia-duraslim-casement-tilt-and-turn-1.png',
  },
  {
    id: '3',
    title: 'ETERNIA DURASLIM EDGE LIFT & SLIDE',
    subtitle: 'Lift and Slide aluminium doors are designed and engineered for effortless sliding, maximum safety, and superior noise insulation.',
    image: '/products/images/eternia-duraslim-edge-lift-and-slide-1.webp',
  },
  {
    id: '4',
    title: 'ETERNIA DURASLIM EDGE MINIMAL',
    subtitle: 'Slimline aluminium doors designed with ultra-slim interlocks and flush profiles for wider, uninterrupted views and a touch of luxury.',
    image: '/products/images/eternia-duraslim-edge-minimal-1.webp',
  },
  {
    id: '5',
    title: 'ETERNIA DURASLIM EDGE SLIDE & FOLD',
    subtitle: 'A Slide and Fold aluminium door, designed and engineered to provide maximum opening.',
    image: '/products/images/eternia-duraslim-edge-slide-and-fold-1.webp',
  },
  {
    id: '6',
    title: 'DURASLIM SLIDING WINDOWS & DOORS',
    subtitle: 'A modern aluminium sliding door and window system designed for effortless operation, contemporary aesthetics, and flexible configurations.',
    image: '/products/images/duraslim-sliding-windows-and-doors-1.webp',
  },
  {
    id: '7',
    title: 'ETERNIA ESSENTIALS CASEMENT',
    subtitle: 'A robust and easy-to-maintain aluminium casement door and window system designed for durability, aesthetics, and flexibility.',
    image: '/products/images/eternia-essentials-casement-1.webp',
  },
  {
    id: '8',
    title: 'ETERNIA ESSENTIALS proSLIDER',
    subtitle: 'A high-performance aluminium sliding door and window system designed for enhanced security, long-lasting durability, and flexible configurations.',
    image: '/products/images/eternia-essentials-proslider-1.webp',
  },
  {
    id: '9',
    title: 'ETERNIA ESSENTIALS SLIDER',
    subtitle: 'A modern aluminium sliding door and window system designed for effortless operation, contemporary aesthetics, and flexible configurations.',
    image: '/products/images/eternia-essentials-slider-1.webp',
  },
  {
    id: '10',
    title: 'ETERNIA ESSENTIALS PLUS SLIDER',
    subtitle: 'An advanced aluminium sliding door and window system engineered for superior performance, sleek aesthetics, and customizable configurations.',
    image: '/products/images/eternia-essentials-plus-slider-1.webp',
  },
];

const Collections: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="collections" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 block">Collections</span>
          <h2 className="text-4xl font-light text-slate-900 uppercase tracking-tight">The Collections</h2>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 hover:border-slate-400 transition-all active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 text-slate-700" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 hover:border-slate-400 transition-all active:scale-95"
          >
            <ArrowRight className="w-5 h-5 text-slate-700" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-6 md:px-[calc((100vw-80rem)/2)] pb-12 snap-x hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {collections.map((item) => (
          <div
            key={item.id}
            className="flex-none w-[85vw] md:w-[600px] h-[400px] relative rounded-3xl overflow-hidden group snap-center cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="glass-panel-dark inline-block w-full rounded-2xl p-6 backdrop-blur-md bg-black/30 border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{item.subtitle}</p>
                <button className="text-xs font-bold text-white tracking-widest border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                  EXPLORE MODEL &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;