import React from 'react';
import { Building2, FileText, MessageCircle, Phone, Star, StarHalf } from 'lucide-react';
import {
  buildGoogleDirectionsLink,
  buildGoogleMapsEmbedLink,
  buildGoogleMapsLink,
  buildWhatsAppLink,
  COMPANY,
} from '../company';

const About: React.FC = () => {
  const address = `${COMPANY.address.line1}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.pincode}`;
  const hasPhone = COMPANY.contact.phoneE164.trim().length > 0;
  const hasWhatsApp = COMPANY.contact.whatsappE164.trim().length > 0;
  const mapsQuery = COMPANY.maps.query || address;
  const mapEmbedSrc = COMPANY.maps.embedSrc.trim()
    ? COMPANY.maps.embedSrc.trim()
    : buildGoogleMapsEmbedLink(mapsQuery);

  const phoneHref = hasPhone ? `tel:${COMPANY.contact.phoneE164.replace(/[^\d+]/g, '')}` : '#';
  const whatsappHref = hasWhatsApp
    ? buildWhatsAppLink({
        phoneE164: COMPANY.contact.whatsappE164,
        message: `Hi ${COMPANY.name}, I’d like to know more about your windows and doors.`,
      })
    : '#';

  const rating = COMPANY.googleListing.rating;
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const starNumber = idx + 1;
    if (rating >= starNumber) {
      return <Star key={starNumber} className="h-4 w-4 text-yellow-500" fill="currentColor" />;
    }
    if (rating >= starNumber - 0.5) {
      return <StarHalf key={starNumber} className="h-4 w-4 text-yellow-500" fill="currentColor" />;
    }
    return <Star key={starNumber} className="h-4 w-4 text-slate-300" />;
  });

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-3 block">About</span>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
            {COMPANY.name}
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Registered partnership firm in {COMPANY.address.city}, {COMPANY.address.state}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-3xl p-8 border-white/60 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white/60 border border-white/70 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Contact</h3>
                <p className="text-sm text-slate-600">Reach us for enquiries and support.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-white/60 border border-white/70 p-5">
                <div className="text-xl font-semibold text-slate-900 leading-snug">
                  {COMPANY.googleListing.name}
                </div>

                <div className="mt-2 flex items-center flex-wrap gap-x-2 gap-y-1">
                  <span className="text-sm font-semibold text-slate-900">
                    {COMPANY.googleListing.rating.toFixed(1)}
                  </span>
                  <div className="flex items-center gap-0.5">{stars}</div>
                  <a
                    href={buildGoogleMapsLink(mapsQuery)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    {COMPANY.googleListing.reviewsCount} Google reviews
                  </a>
                </div>

                <div className="mt-1 text-sm text-slate-600">{COMPANY.googleListing.category}</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="/"
                    className="rounded-full px-4 py-2 text-sm font-semibold bg-white/70 border border-white/70 hover:bg-white transition-colors"
                  >
                    Website
                  </a>
                  <a
                    href={buildGoogleDirectionsLink(mapsQuery)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-4 py-2 text-sm font-semibold bg-white/70 border border-white/70 hover:bg-white transition-colors"
                  >
                    Directions
                  </a>
                  <a
                    href={buildGoogleMapsLink(mapsQuery)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-4 py-2 text-sm font-semibold bg-white/70 border border-white/70 hover:bg-white transition-colors"
                  >
                    Reviews
                  </a>
                  <a
                    href={phoneHref}
                    aria-disabled={!hasPhone}
                    className={`rounded-full px-4 py-2 text-sm font-semibold bg-white/70 border border-white/70 hover:bg-white transition-colors ${
                      hasPhone ? '' : 'opacity-50 pointer-events-none'
                    }`}
                  >
                    Call
                  </a>
                </div>

                <div className="mt-5 space-y-2 text-sm text-slate-800">
                  <div>
                    <span className="font-semibold text-slate-900">Address:</span>{' '}
                    <span className="text-slate-700">{address}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Phone:</span>{' '}
                    <span className="text-slate-700">
                      {COMPANY.contact.phoneDisplay ?? COMPANY.contact.phoneE164}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Hours:</span>{' '}
                    <span className="text-slate-700">{COMPANY.googleListing.hoursLabel}</span>
                  </div>
                </div>

                <a
                  href={buildGoogleMapsLink(mapsQuery)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-sm font-semibold text-slate-800 hover:text-blue-700 transition-colors"
                >
                  View on Google Maps
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href={phoneHref}
                  aria-disabled={!hasPhone}
                  className={`glass-panel rounded-2xl px-4 py-3 flex items-center gap-3 border-white/70 transition-all ${
                    hasPhone ? 'hover:bg-white/70 hover:scale-[1.02]' : 'opacity-50 pointer-events-none'
                  }`}
                >
                  <Phone className="h-5 w-5 text-slate-900" />
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-slate-500">Call</div>
                    <div className="text-sm font-semibold text-slate-900">
                      {hasPhone ? (COMPANY.contact.phoneDisplay ?? COMPANY.contact.phoneE164) : 'Add phone number'}
                    </div>
                  </div>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={!hasWhatsApp}
                  className={`glass-panel rounded-2xl px-4 py-3 flex items-center gap-3 border-white/70 transition-all ${
                    hasWhatsApp ? 'hover:bg-white/70 hover:scale-[1.02]' : 'opacity-50 pointer-events-none'
                  }`}
                >
                  <MessageCircle className="h-5 w-5 text-slate-900" />
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-slate-500">WhatsApp</div>
                    <div className="text-sm font-semibold text-slate-900">
                      {hasWhatsApp ? 'Chat now' : 'Add WhatsApp number'}
                    </div>
                  </div>
                </a>
              </div>

              <div className="pt-2">
                <div className="rounded-3xl overflow-hidden border border-white/70 bg-white/40 shadow-sm">
                  <div className="aspect-[16/10] w-full">
                    <iframe
                      title={`${COMPANY.name} map`}
                      src={mapEmbedSrc}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 border-white/60 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white/60 border border-white/70 flex items-center justify-center">
                <FileText className="h-5 w-5 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Legal & Registration</h3>
                <p className="text-sm text-slate-600">GST and business registration details.</p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              <div>
                <dt className="text-xs font-bold tracking-widest uppercase text-slate-500">GSTIN</dt>
                <dd className="mt-1 font-semibold text-slate-900">{COMPANY.gstin}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-widest uppercase text-slate-500">GST State</dt>
                <dd className="mt-1 font-semibold text-slate-900">{COMPANY.gstState}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-widest uppercase text-slate-500">Entity Type</dt>
                <dd className="mt-1 font-semibold text-slate-900">{COMPANY.entityType}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-widest uppercase text-slate-500">Registration Type</dt>
                <dd className="mt-1 font-semibold text-slate-900">{COMPANY.registrationType}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-widest uppercase text-slate-500">Registration Date</dt>
                <dd className="mt-1 font-semibold text-slate-900">{COMPANY.registrationDate}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-widest uppercase text-slate-500">Nature Of Business</dt>
                <dd className="mt-1 font-semibold text-slate-900">{COMPANY.natureOfBusiness.join(', ')}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-bold tracking-widest uppercase text-slate-500">Department Code & Type</dt>
                <dd className="mt-1 font-semibold text-slate-900">{COMPANY.departmentCodeAndType}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
