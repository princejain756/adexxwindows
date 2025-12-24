import React, { useEffect, useMemo, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { buildWhatsAppLink, COMPANY } from '../company';

const QUICK_REPLIES = [
  {
    label: 'Get a quote',
    message: 'Hi, I would like a quote for aluminium windows/doors. Please guide me.',
  },
  {
    label: 'Book a site visit',
    message: 'Hi, I would like to book a site visit. Please share the next steps.',
  },
  {
    label: 'Product enquiry',
    message: 'Hi, I have a product enquiry. Please share details and brochures.',
  },
  {
    label: 'Service/support',
    message: 'Hi, I need service/support. Please connect me with the team.',
  },
] as const;

const WhatsAppChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener('adexx:open-whatsapp-chat', handleOpen);
    return () => window.removeEventListener('adexx:open-whatsapp-chat', handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const hasWhatsApp = COMPANY.contact.whatsappE164.trim().length > 0;
  const defaultMessage = useMemo(
    () => `Hi ${COMPANY.name}, I’d like to know more about your windows and doors.`,
    []
  );
  const message = (draft.trim() || defaultMessage).slice(0, 1000);
  const whatsappHref = hasWhatsApp
    ? buildWhatsAppLink({ phoneE164: COMPANY.contact.whatsappE164, message })
    : '#';

  const openWhatsApp = (text?: string) => {
    if (!hasWhatsApp) return;
    const href = buildWhatsAppLink({
      phoneE164: COMPANY.contact.whatsappE164,
      message: text ?? message,
    });
    window.open(href, '_blank', 'noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {open && (
        <div className="w-[min(380px,calc(100vw-3rem))] glass-panel rounded-3xl shadow-2xl border-white/60 overflow-hidden">
          <div className="px-5 py-4 flex items-center justify-between border-b border-white/40">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white/60 border border-white/70 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-slate-900" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{COMPANY.name}</div>
                <div className="text-xs text-slate-600">WhatsApp assistant</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="h-10 w-10 rounded-2xl hover:bg-white/60 transition-colors flex items-center justify-center"
            >
              <X className="h-5 w-5 text-slate-900" />
            </button>
          </div>

          <div className="px-5 py-4">
            <div className="rounded-2xl bg-white/60 border border-white/70 p-4 text-sm text-slate-800">
              Share your requirement and we’ll continue the conversation on WhatsApp.
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => openWhatsApp(q.message)}
                  disabled={!hasWhatsApp}
                  className="text-left rounded-2xl px-3 py-2 bg-white/40 border border-white/60 hover:bg-white/60 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="text-xs font-bold tracking-widest uppercase text-slate-700">
                    {q.label}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4">
              <label className="text-xs font-bold tracking-widest uppercase text-slate-500">
                Message
              </label>
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={3}
                className="mt-2 w-full rounded-2xl bg-white/60 border border-white/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder={defaultMessage}
              />
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!hasWhatsApp}
              className={`mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold tracking-wide border transition-all ${
                hasWhatsApp
                  ? 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
                  : 'bg-slate-200 text-slate-500 border-slate-200 pointer-events-none'
              }`}
            >
              <Send className="h-4 w-4" />
              Continue on WhatsApp
            </a>

            {!hasWhatsApp && (
              <div className="mt-3 text-xs text-slate-600">
                WhatsApp number is not configured yet.
              </div>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className="mt-3 h-14 w-14 rounded-2xl glass-panel border-white/60 shadow-2xl hover:bg-white/70 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
      >
        <MessageCircle className="h-6 w-6 text-slate-900" />
      </button>
    </div>
  );
};

export default WhatsAppChat;
