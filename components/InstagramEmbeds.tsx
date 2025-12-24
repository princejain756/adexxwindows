import React, { useMemo, useState } from 'react';
import { ExternalLink, Instagram } from 'lucide-react';
import instaEmbedSource from '../instaembed.md?raw';

type InstagramEmbedItem = {
  permalink: string;
  embedUrl: string;
};

function normalizeInstagramPermalink(rawUrl: string) {
  try {
    const url = new URL(rawUrl);
    const [type, code] = url.pathname.split('/').filter(Boolean);
    if (!type || !code) return null;
    if (type !== 'reel' && type !== 'p') return null;
    return `https://www.instagram.com/${type}/${code}/`;
  } catch {
    return null;
  }
}

function extractInstagramEmbeds(source: string): InstagramEmbedItem[] {
  const found =
    source.match(/https:\/\/www\.instagram\.com\/(?:reel|p)\/[A-Za-z0-9_-]+\/?/g) ?? [];
  const unique = new Set<string>();
  const items: InstagramEmbedItem[] = [];

  for (const rawUrl of found) {
    const permalink = normalizeInstagramPermalink(rawUrl);
    if (!permalink || unique.has(permalink)) continue;
    unique.add(permalink);
    items.push({ permalink, embedUrl: `${permalink}embed/` });
  }

  return items;
}

const InstagramEmbeds: React.FC = () => {
  const items = useMemo(() => extractInstagramEmbeds(instaEmbedSource), []);
  const [showAll, setShowAll] = useState(false);

  if (items.length === 0) return null;

  const displayedItems = showAll ? items : items.slice(0, 2);

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-gradient-to-tr from-purple-200 via-blue-200 to-pink-200 rounded-full blur-[90px] opacity-40 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200 via-cyan-200 to-purple-200 rounded-full blur-[90px] opacity-40 pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 block">
              Social
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Showroom & Installations
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl">
              Watch real projects, finishes, and premium systems—straight from Instagram.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Instagram className="h-4 w-4" />
            <span>Instagram Reels</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayedItems.map((item) => (
            <div
              key={item.permalink}
              className="group rounded-[2rem] p-[1px] bg-gradient-to-b from-white/90 via-white/60 to-white/90 shadow-2xl"
            >
              <div className="rounded-[2rem] glass-panel border-white/60 overflow-hidden">
                <div className="w-full bg-white/40">
                  <iframe
                    title="Instagram video"
                    src={item.embedUrl}
                    loading="lazy"
                    className="w-full h-[720px] sm:h-[760px] lg:h-[800px]"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-500">
                    <Instagram className="h-4 w-4 text-slate-700" />
                    Reel
                  </div>
                  <a
                    href={item.permalink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                  >
                    Open
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 2 && !showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Instagram className="h-5 w-5" />
              View More Reels
            </button>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-slate-600">
          If reels don’t load (privacy/ad blockers), use the <span className="font-semibold">Open</span>{' '}
          button to view on Instagram.
        </div>
      </div>
    </section>
  );
};

export default InstagramEmbeds;
