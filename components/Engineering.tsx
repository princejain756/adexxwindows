import React from 'react';

const Engineering: React.FC = () => {
  return (
    <section id="technology" className="bg-slate-900 text-white py-32 relative overflow-hidden">
      {/* Background radial gradient spotlight */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div>
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block">Technology Section</span>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            THE ENGINEERING <br />
            OF <span className="font-semibold">INVISIBILITY.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-md font-light">
            Obsessive German precision hides within minimalist Italian design. We remove the unnecessary to reveal the essential view.
          </p>

          <div className="space-y-8">
            {[
              { label: 'U-Value', value: '1.2 W/m²K', desc: 'Thermal Efficiency' },
              { label: 'Acoustic Rating', value: '42dB', desc: 'Sound Reduction' },
              { label: 'Frame Depth', value: '12mm', desc: 'Ultra Slim Sightline' },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-6 group cursor-default">
                <div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center bg-slate-800/50 group-hover:border-blue-500 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                </div>
                <div>
                  <h4 className="text-2xl font-light">{stat.value}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[600px] w-full flex items-center justify-center">
          {/* Abstract representation of a window profile cross-section */}
          <div className="relative w-full max-w-md aspect-[3/4] glass-panel-dark rounded-xl border border-slate-700 p-8 flex flex-col items-center justify-center hover:bg-slate-800/30 transition-colors duration-500">
             <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
             
             {/* Schematic Lines */}
             <svg className="w-full h-full stroke-slate-500" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simulated Profile drawing */}
                <path d="M40 40 L160 40 L160 260 L40 260 Z" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />
                <path d="M50 50 L150 50 L150 250 L50 250 Z" strokeWidth="2" className="stroke-slate-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                <path d="M50 150 L150 150" strokeWidth="1" className="stroke-blue-400/50" />
                <path d="M100 50 L100 250" strokeWidth="1" className="stroke-blue-400/50" />
                
                {/* Pointer lines */}
                <circle cx="150" cy="50" r="3" fill="#60A5FA" />
                <path d="M153 50 L190 30" stroke="#60A5FA" strokeWidth="1" />
                <text x="180" y="25" fill="#60A5FA" fontSize="8" textAnchor="end">Rigid Core</text>

                <circle cx="50" cy="200" r="3" fill="#60A5FA" />
                <path d="M47 200 L10 220" stroke="#60A5FA" strokeWidth="1" />
                <text x="15" y="230" fill="#60A5FA" fontSize="8">Thermal Break</text>
             </svg>
             <div className="absolute bottom-4 text-xs text-slate-500 tracking-widest uppercase">Cross Section View</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Engineering;