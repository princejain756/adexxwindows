import React from 'react';
import { buildWhatsAppLink, COMPANY } from '../company';

const Footer: React.FC = () => {
  const address = `${COMPANY.address.line1}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.pincode}`;
  const hasWhatsApp = COMPANY.contact.whatsappE164.trim().length > 0;
  const whatsappHref = hasWhatsApp
    ? buildWhatsAppLink({
        phoneE164: COMPANY.contact.whatsappE164,
        message: `Hi ${COMPANY.name}, I’d like to get started.`,
      })
    : '#';

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden">
        {/* Rainbow/Holo gradient flare at bottom right like in design */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 rounded-full blur-[80px] opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4 block">Get Started</span>
        <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-8">
          READY TO ERASE <br />
          YOUR WALLS?
        </h2>
        
        <a
          href={hasWhatsApp ? whatsappHref : '#about'}
          onClick={() => window.dispatchEvent(new Event('adexx:open-whatsapp-chat'))}
          className="inline-flex items-center justify-center glass-panel px-10 py-4 rounded-full font-bold text-sm tracking-wide text-slate-900 bg-white/50 hover:bg-white transition-all hover:scale-105 shadow-xl border-white mb-24"
        >
          START YOUR PROJECT
        </a>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-slate-200 pt-12">
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 mb-6">Collections</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li>
                <a href="#collections" className="hover:text-slate-900 transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#inspiration" className="hover:text-slate-900 transition-colors">
                  Inspiration
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-slate-900 transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  About {COMPANY.name}
                </a>
              </li>
              <li>
                <a
                  href={hasWhatsApp ? whatsappHref : '#'}
                  onClick={() => window.dispatchEvent(new Event('adexx:open-whatsapp-chat'))}
                  className={`hover:text-slate-900 transition-colors ${hasWhatsApp ? '' : 'pointer-events-none opacity-60'}`}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.contact.phoneE164.trim() ? `tel:${COMPANY.contact.phoneE164.replace(/[^\d+]/g, '')}` : '#'}
                  className={`hover:text-slate-900 transition-colors ${COMPANY.contact.phoneE164.trim() ? '' : 'pointer-events-none opacity-60'}`}
                >
                  Call
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event('adexx:open-whatsapp-chat'))}
                  className="hover:text-slate-900 transition-colors"
                >
                  Chat Assistant
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li className="text-slate-500">
                GSTIN:{' '}
                <span className="text-slate-900 font-semibold">{COMPANY.gstin}</span>
              </li>
              <li className="text-slate-500">
                Entity:{' '}
                <span className="text-slate-900 font-semibold">{COMPANY.entityType}</span>
              </li>
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  Full details
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center text-xs text-slate-500 font-medium space-y-1">
          <div>
            {COMPANY.name} • {address}
          </div>
          <div className="text-slate-400">Designed for the view.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
