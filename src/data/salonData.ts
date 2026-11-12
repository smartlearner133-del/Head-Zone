export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  pricingText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'UserCheck' | 'Sparkles' | 'Coffee' | 'HeartHandshake';
}

export const SALON_DATA = {
  businessName: 'HEAD ZONE',
  tagline: 'STYLE THAT DEFINES YOU',
  category: 'Salon',
  phoneNumber: '09634556912',
  phoneHref: 'tel:+919634556912',
  whatsappNumber: '919634556912',
  whatsappUrl: 'https://wa.me/919634556912',
  defaultWhatsAppMessage: 'Hello Head Zone! I would like to enquire about your salon services and book an appointment.',
  
  address: {
    line1: 'Roshan Tower, 8, More, Above Woodland Showroom',
    locality: 'Govindpuri, Devpura, Ranipur',
    city: 'Haridwar',
    state: 'Uttarakhand',
    postalCode: '249401',
    country: 'India',
    fullFormatted: 'Roshan Tower, 8, More, Above Woodland Showroom, Govindpuri, Devpura, Ranipur, Haridwar, Uttarakhand 249401, India.',
  },

  reviews: {
    count: 813,
    rating: 5.0,
    maxRating: 5.0,
    sourceNote: 'Business-provided verified customer feedback count & rating.',
    // Configurable Google Business Profile review URL
    googleReviewUrl: 'https://www.google.com/maps/search/?api=1&query=Head+Zone+Salon+Roshan+Tower+Govindpuri+Ranipur+Haridwar+Uttarakhand',
  },

  map: {
    // Configurable Google Maps search & embed URL for the address
    embedUrl: 'https://maps.google.com/maps?q=Roshan+Tower,+Above+Woodland+Showroom,+Govindpuri,+Ranipur,+Haridwar,+Uttarakhand+249401&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Roshan+Tower+Above+Woodland+Showroom+Govindpuri+Haridwar+Uttarakhand+249401',
  },

  socialLinks: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    whatsapp: 'https://wa.me/919634556912',
  },

  hero: {
    heading: 'YOUR STYLE. YOUR STATEMENT.',
    subtitle: 'Experience the Art of Grooming at Head Zone.',
    description: 'Discover exceptional hair styling, grooming, and beauty services designed to bring out your best look. Step into a space where style meets confidence.',
    bgImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85',
  },

  about: {
    heading: "MORE THAN A SALON. IT'S YOUR STYLE DESTINATION.",
    description: 'At Head Zone, we believe that great style is an expression of individuality. Our goal is to provide a welcoming salon experience where attention to detail, personal care, and modern styling come together.',
    primaryImage: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      {
        title: 'Personalized Styling',
        description: 'Every haircut and grooming session is tailored to your unique face shape, hair texture, and personal aesthetic.',
      },
      {
        title: 'Attention to Detail',
        description: 'From precision scissor work to beard contouring, our team focuses on sharp, refined perfection.',
      },
      {
        title: 'A Comfortable Experience',
        description: 'Relax in a sophisticated, impeccably hygienic salon environment crafted for total rejuvenation.',
      },
    ],
  },

  services: [
    {
      id: 'haircut-styling',
      title: 'Haircut & Styling',
      category: 'Hair Care',
      pricingText: 'Contact for Pricing',
      description: 'Precision cutting, trendsetting silhouettes, textured layers, and professional blow-dry finishing.',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
      features: ['Personalized consultation', 'Signature hair wash', 'Blow-dry & styling finisher'],
    },
    {
      id: 'hair-wash-conditioning',
      title: 'Hair Wash & Conditioning',
      category: 'Hair Care',
      pricingText: 'Contact for Pricing',
      description: 'Deep scalp cleansing followed by nourishing, protein-rich conditioning to restore softness and vitality.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      features: ['Aromatic scalp cleanse', 'Deep moisture therapy', 'Soothing scalp massage'],
    },
    {
      id: 'hair-spa-treatments',
      title: 'Hair Spa & Treatments',
      category: 'Hair Care',
      pricingText: 'Contact for Pricing',
      description: 'Intensive restorative spa therapies designed to repair damaged hair, control frizz, and nourish roots.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      features: ['Keratin & moisture infusers', 'Steam therapy', 'Root-to-tip revitalization'],
    },
    {
      id: 'hair-coloring',
      title: 'Hair Coloring',
      category: 'Coloring',
      pricingText: 'Contact for Pricing',
      description: 'Global hair colors, sophisticated highlights, grey coverage, and modern shade transformations with premium products.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
      features: ['Ammonia-free formulas', 'Custom tone formulation', 'Long-lasting radiance'],
    },
    {
      id: 'beard-styling-grooming',
      title: 'Beard Styling & Grooming',
      category: 'Grooming',
      pricingText: 'Contact for Pricing',
      description: 'Sharp razor detailing, beard trimming, shaping, hot towel conditioning, and premium beard oil treatment.',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
      features: ['Razor-sharp lineup', 'Beard softening spa', 'Precision shaping'],
    },
    {
      id: 'facial-skin-care',
      title: 'Facial & Skin Care',
      category: 'Skin Care',
      pricingText: 'Contact for Pricing',
      description: 'Targeted skin treatments, exfoliating clean-ups, de-tanning masks, and hydrating facials for a radiant glow.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      features: ['Pore purification', 'Detoxifying mask', 'Hydrating tone booster'],
    },
    {
      id: 'professional-grooming',
      title: 'Professional Grooming',
      category: 'Grooming',
      pricingText: 'Contact for Pricing',
      description: 'All-in-one executive grooming package combining haircut, beard detailing, head massage, and facial freshener.',
      image: 'https://images.unsplash.com/photo-1517832606589-7929c3922c22?auto=format&fit=crop&w=800&q=80',
      features: ['Complete executive makeover', 'Relaxing head massage', 'Finished with signature cologne'],
    },
    {
      id: 'special-occasion-styling',
      title: 'Special Occasion Styling',
      category: 'Styling',
      pricingText: 'Contact for Pricing',
      description: 'Bespoke event and festive styling ensuring your hair, beard, and overall presence look immaculate for celebrations.',
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
      features: ['Pre-event consultation', 'High-hold luxury styling', 'Photo-ready finish'],
    },
  ] as ServiceItem[],

  whyChooseUs: [
    {
      id: 'personalized',
      title: 'Personalized Attention',
      description: 'We take the time to understand your individual styling preferences, personal taste, and daily lifestyle.',
      iconName: 'UserCheck',
    },
    {
      id: 'modern-approach',
      title: 'Modern Styling Approach',
      description: 'Contemporary cutting techniques and current trends combined with classic craftsmanship for timeless appeal.',
      iconName: 'Sparkles',
    },
    {
      id: 'welcoming-atmosphere',
      title: 'Welcoming Atmosphere',
      description: 'A stylish, temperature-controlled, music-tuned salon space designed for your utmost relaxation.',
      iconName: 'Coffee',
    },
    {
      id: 'customer-satisfaction',
      title: 'Customer Satisfaction',
      description: 'Over 813 happy customers have experienced our consistent dedication to excellence and personal care.',
      iconName: 'HeartHandshake',
    },
  ] as WhyChooseItem[],

  gallery: [
    {
      id: 'gal-1',
      title: 'Sharp Textured Fade',
      category: "Men's Hairstyles",
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=80',
      aspect: 'tall',
    },
    {
      id: 'gal-2',
      title: 'Luxury Salon Ambience',
      category: 'Salon Interiors',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80',
      aspect: 'wide',
    },
    {
      id: 'gal-3',
      title: 'Beard Sculpting & Detailing',
      category: 'Beard Grooming',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=80',
      aspect: 'square',
    },
    {
      id: 'gal-4',
      title: 'Modern Crop Cut',
      category: 'Haircuts',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=80',
      aspect: 'square',
    },
    {
      id: 'gal-5',
      title: 'Deep Hair Spa & Scalp Therapy',
      category: 'Hair Treatments',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
      aspect: 'tall',
    },
    {
      id: 'gal-6',
      title: 'Premium Styling Station',
      category: 'Salon Interiors',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80',
      aspect: 'wide',
    },
    {
      id: 'gal-7',
      title: 'Dimensional Hair Tone',
      category: 'Hair Coloring',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80',
      aspect: 'square',
    },
    {
      id: 'gal-8',
      title: 'Classic Pompadour Finish',
      category: "Men's Hairstyles",
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80',
      aspect: 'tall',
    },
  ] as GalleryItem[],

  faqs: [
    {
      id: 'faq-hours',
      question: 'What are the operating hours of Head Zone Salon?',
      answer:
        'Head Zone is open 7 days a week from 9:30 AM to 9:00 PM. We recommend booking in advance via WhatsApp or phone to reserve your preferred stylist, especially on weekends and peak evening hours.',
      category: 'Timings & Booking',
    },
    {
      id: 'faq-parking',
      question: 'Is parking available at or near the salon?',
      answer:
        'Yes, dedicated two-wheeler and four-wheeler roadside parking is available directly outside Roshan Tower (Above Woodland Showroom) along the accessible Govindpuri main corridor in Ranipur, Haridwar.',
      category: 'Location & Amenities',
    },
    {
      id: 'faq-brands',
      question: 'Which professional product brands do you use for hair and skin treatments?',
      answer:
        'We exclusively utilize authentic, salon-grade, and dermatologically tested hair care brands (including L’Oréal Professionnel, Schwarzkopf, Matrix, and premium beard oils & elixirs). We never compromise on product authenticity or client hair health.',
      category: 'Products & Safety',
    },
    {
      id: 'faq-walkin',
      question: 'Do I need an appointment or do you accept walk-ins?',
      answer:
        'Walk-in guests are always welcome! However, to minimize waiting times and guarantee immediate service with your preferred barber or stylist, we recommend submitting a reservation or sending a quick WhatsApp message ahead of your visit.',
      category: 'Timings & Booking',
    },
    {
      id: 'faq-location',
      question: 'Where is Head Zone located and how do I reach the salon?',
      answer:
        'We are conveniently located at Roshan Tower, 8, More, Above Woodland Showroom, Govindpuri, Devpura, Ranipur, Haridwar, Uttarakhand 249401. You can tap the "Get Directions" button on our page for direct, turn-by-turn navigation via Google Maps.',
      category: 'Location & Amenities',
    },
    {
      id: 'faq-pricing',
      question: 'How does pricing work for hair, beard, and facial services?',
      answer:
        'Our pricing is transparent and tailored to your specific requirements, such as hair length, styling complexity, and personal consultation. You can tap "Enquire Now" on any service card or message us directly on WhatsApp for an immediate price quote.',
      category: 'Pricing & Packages',
    },
  ] as FaqItem[],
};

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

