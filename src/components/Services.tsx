import React, { useState } from 'react';
import { MessageSquare, Check, Sparkles } from 'lucide-react';
import { SALON_DATA, ServiceItem } from '../data/salonData';
import { formatWhatsAppServiceEnquiryUrl } from '../utils/appointment';

interface ServicesProps {
  onSelectServiceForBooking?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hair Care', 'Grooming', 'Skin Care', 'Coloring', 'Styling'];

  const filteredServices =
    selectedCategory === 'All'
      ? SALON_DATA.services
      : SALON_DATA.services.filter((s) => s.category === selectedCategory);

  const handleEnquire = (service: ServiceItem) => {
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(service.title);
    } else {
      const url = formatWhatsAppServiceEnquiryUrl(service.title, SALON_DATA.whatsappNumber);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#151515] relative" aria-label="Our Salon Services">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D6B36A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#D6B36A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-semibold">
              Curated Offerings
            </span>
            <Sparkles className="w-4 h-4 text-[#D6B36A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F2ED] mb-4">
            THE ART OF LOOKING YOUR BEST
          </h2>
          <p className="text-base sm:text-lg text-[#A7A29B]">
            Thoughtfully curated salon services to help you look and feel your best.
          </p>

          {/* Interactive Category Filter Tabs (Zero-pill, clean segmented buttons) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Service Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B36A] ${
                  selectedCategory === cat
                    ? 'bg-[#D6B36A] text-[#111111] font-bold shadow-md shadow-[#D6B36A]/20'
                    : 'bg-[#191919] text-[#A7A29B] hover:text-[#F5F2ED] border border-[#242424]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (8 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col bg-[#191919] border border-[#242424] hover:border-[#D6B36A]/60 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/60 hover:-translate-y-1"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111]">
                <img
                  src={service.image}
                  alt={`${service.title} - Professional salon service at HEAD ZONE Haridwar`}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-95 contrast-105"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent opacity-80" />

                {/* Subtle category tag (quiet inline typography, anti-slop) */}
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-[#D6B36A] bg-[#111111]/90 backdrop-blur-sm px-2.5 py-1 border border-[#D6B36A]/30 font-medium">
                  {service.category}
                </span>
              </div>

              {/* Service Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Gold Accent Line */}
                <div className="w-8 h-[2px] bg-[#D6B36A] mb-3 group-hover:w-16 transition-all duration-300" />

                <h3 className="font-serif text-xl text-[#F5F2ED] font-bold mb-2 group-hover:text-[#D6B36A] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A7A29B] leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Feature Bullets */}
                <ul className="space-y-1.5 mb-6 text-xs text-[#A7A29B] border-t border-[#242424] pt-4">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D6B36A] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Notice & Enquire Button */}
                <div className="pt-4 border-t border-[#242424] flex items-center justify-between gap-2 mt-auto">
                  <span className="text-xs font-serif italic text-[#A7A29B]">
                    {service.pricingText}
                  </span>

                  <button
                    onClick={() => handleEnquire(service)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#111111] hover:bg-[#D6B36A] text-[#D6B36A] hover:text-[#111111] border border-[#D6B36A]/50 hover:border-[#D6B36A] rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B36A]"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centralized disclaimer notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#73706B]">
            * Service offerings are customizable based on your hair length, style preferences, and consultation. Contact our salon team for pricing &amp; appointments.
          </p>
        </div>
      </div>
    </section>
  );
};
