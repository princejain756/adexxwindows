import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 
      ${scrolled ? 'py-3' : 'py-6'}`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-full flex items-center justify-between px-8 py-3 transition-all duration-500
        ${scrolled
            ? 'glass-panel bg-white/60 shadow-lg'
            : 'bg-transparent border border-transparent'}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/LOGO.webp" alt="Logo" className="rounded-sm h-10 w-auto object-contain" />

        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {['Collections', 'Inspiration', 'Technology', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-slate-600' : 'text-slate-700'
                }`}
            >
              {item.toUpperCase()}
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('adexx:open-whatsapp-chat'))}
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider hover:bg-slate-800 transition-transform transform hover:scale-105 active:scale-95 shadow-xl"
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 glass-panel rounded-2xl p-6 flex flex-col space-y-4 md:hidden animate-fade-in">
          {['Collections', 'Inspiration', 'Technology', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-800 font-medium text-center py-2 border-b border-gray-200/50 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new Event('adexx:open-whatsapp-chat'));
              setMobileMenuOpen(false);
            }}
            className="bg-slate-900 text-white w-full py-3 rounded-xl font-bold"
          >
            CONTACT US
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
