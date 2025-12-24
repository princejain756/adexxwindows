export const COMPANY = {
  name: 'ADEXX WINDOWS',
  gstin: '29ACDFA3018K1ZG',
  gstState: 'Karnataka',
  registrationDate: '11/12/2023',
  entityType: 'Partnership',
  registrationType: 'Regular',
  departmentCodeAndType: 'LGSTO 090 - Bengaluru, KA023, YV0601, RANGE-ASD6',
  natureOfBusiness: ['Retail Business', 'Wholesale Business'],
  googleListing: {
    name: 'Eternia Windows – Adexx Windows (Authorized Partner Showroom)',
    category: 'Aluminium window in Bengaluru, Karnataka',
    rating: 4.2,
    reviewsCount: 17,
    hoursLabel: 'Open • Closes 6:30 pm',
  },
  address: {
    line1: '9th Main Rd, 320C, 40th Cross Rd, 5th Block, Jayanagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560041',
  },
  maps: {
    query:
      'Eternia Windows – Adexx Windows (Authorized Partner Showroom), 9th Main Rd, 320C, 40th Cross Rd, 5th Block, Jayanagar, Bengaluru, Karnataka 560041',
    embedSrc: '',
  },
  contact: {
    phoneE164: '+917483087910',
    phoneDisplay: '074830 87910',
    whatsappE164: '+917483087910',
  },
} as const;

export function toWaMeNumber(phoneE164: string) {
  return phoneE164.replace(/[^\d]/g, '');
}

export function buildWhatsAppLink({
  phoneE164,
  message,
}: {
  phoneE164: string;
  message?: string;
}) {
  const number = toWaMeNumber(phoneE164);
  if (!number) return '#';
  const url = new URL(`https://wa.me/${number}`);
  if (message) url.searchParams.set('text', message);
  return url.toString();
}

export function buildGoogleMapsLink(query: string) {
  const url = new URL('https://www.google.com/maps/search/');
  url.searchParams.set('api', '1');
  url.searchParams.set('query', query);
  return url.toString();
}

export function buildGoogleMapsEmbedLink(query: string) {
  const url = new URL('https://www.google.com/maps');
  url.searchParams.set('q', query);
  url.searchParams.set('output', 'embed');
  return url.toString();
}

export function buildGoogleDirectionsLink(destination: string) {
  const url = new URL('https://www.google.com/maps/dir/');
  url.searchParams.set('api', '1');
  url.searchParams.set('destination', destination);
  return url.toString();
}
