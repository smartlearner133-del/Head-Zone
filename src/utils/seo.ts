import { SALON_DATA } from '../data/salonData';

export interface LocalBusinessSchema {
  '@context': string;
  '@type': string[];
  name: string;
  alternateName?: string;
  image: string;
  telephone: string;
  url: string;
  priceRange: string;
  description: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    '@type': string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  aggregateRating: {
    '@type': string;
    ratingValue: string;
    reviewCount: string;
    bestRating: string;
    worstRating: string;
  };
  hasOfferCatalog?: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
        description: string;
      };
    }>;
  };
  sameAs?: string[];
}

export function generateLocalBusinessSchema(appUrl: string = 'https://ais-pre-ugm4nlq2pshqpppp3hx2s7-830287238515.asia-east1.run.app/'): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HairSalon', 'HealthAndBeautyBusiness'],
    name: SALON_DATA.businessName,
    alternateName: 'HEAD ZONE Luxury Salon',
    image: SALON_DATA.hero.bgImage,
    telephone: SALON_DATA.phoneNumber,
    url: appUrl,
    priceRange: '$$',
    description: 'Experience luxury grooming at HEAD ZONE in Govindpuri, Haridwar. Offering precision haircuts, beard styling, hair spa, and facials. Book your appointment today.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SALON_DATA.address.line1 + ', ' + SALON_DATA.address.locality,
      addressLocality: SALON_DATA.address.city,
      addressRegion: SALON_DATA.address.state,
      postalCode: SALON_DATA.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.9287,
      longitude: 78.1258,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:30',
        closes: '21:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SALON_DATA.reviews.rating.toFixed(1),
      reviewCount: SALON_DATA.reviews.count.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'HEAD ZONE Salon Services',
      itemListElement: SALON_DATA.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
    sameAs: [
      SALON_DATA.whatsappUrl,
      SALON_DATA.reviews.googleReviewUrl,
    ],
  };
}

export function generateFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SALON_DATA.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
