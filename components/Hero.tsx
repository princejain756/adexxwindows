import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
          src="/herovideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Floating Glass Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
        <div className="max-w-3xl">
          <div className="glass-panel inline-block px-4 py-1 rounded-full mb-6 border border-white/20 bg-white/10 backdrop-blur-md">
            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">
              Endless Possibilities Begin Here
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8 leading-[1.1] text-shadow-lg">
            IMAGINE WINDOWS, <br />
            <span className="font-semibold">NOT WALLS.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-lg font-medium leading-relaxed glass-panel bg-black/30 p-4 rounded-xl backdrop-blur-md border border-white/10">
            System Aluminium Windows & Doors By ADEXX WINDOWS
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#collections"
              className="group relative overflow-hidden bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-2xl transition-all hover:bg-slate-100 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              EXPLORE COLLECTIONS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('adexx:open-whatsapp-chat'))}
              className="glass-panel px-8 py-4 rounded-full font-bold text-sm tracking-wide text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border-white/30 border"
            >
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </div>

      {/* Decorative gradient flare */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
