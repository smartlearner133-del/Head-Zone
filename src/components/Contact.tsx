import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Sparkles } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { AppointmentForm } from './AppointmentForm';

interface ContactProps {
  selectedServiceForBooking?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServiceForBooking }) => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#111111] relative" aria-label="Contact and Salon Location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#D6B36A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-semibold">
              Find &amp; Contact Us
            </span>
            <Sparkles className="w-4 h-4 text-[#D6B36A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F2ED] mb-4">
            VISIT HEAD ZONE
          </h2>
          <p className="text-base sm:text-lg text-[#A7A29B]">
            Conveniently situated in Govindpuri, Ranipur, Haridwar. Step in for an unparalleled grooming experience.
          </p>
        </div>

        {/* Two-Column Grid: Location Details & Interactive Map + Appointment Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Salon Address, Phone, Interactive Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-sm bg-[#151515] border border-[#242424] shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-[#F5F2ED] mb-6 flex items-center justify-between">
                <span>Salon Information</span>
                <span className="text-xs font-serif italic text-[#D6B36A]">Haridwar, Uttarakhand</span>
              </h3>

              {/* Address Block */}
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#242424]">
                <div className="w-10 h-10 rounded-sm bg-[#191919] border border-[#D6B36A]/30 flex items-center justify-center text-[#D6B36A] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#A7A29B] font-semibold mb-1">
                    Salon Address
                  </h4>
                  <p className="font-serif text-base text-[#F5F2ED] font-medium leading-relaxed">
                    {SALON_DATA.address.fullFormatted}
                  </p>
                </div>
              </div>

              {/* Contact Numbers Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pb-6 border-b border-[#242424]">
                {/* Clickable Phone Number */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#191919] border border-[#D6B36A]/30 flex items-center justify-center text-[#D6B36A] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A7A29B] font-semibold mb-1">
                      Direct Phone
                    </h4>
                    <a
                      href={SALON_DATA.phoneHref}
                      className="font-serif text-base text-[#F5F2ED] hover:text-[#D6B36A] transition-colors font-medium block"
                      aria-label={`Call ${SALON_DATA.phoneNumber}`}
                    >
                      {SALON_DATA.phoneNumber}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#191919] border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A7A29B] font-semibold mb-1">
                      WhatsApp Chat
                    </h4>
                    <a
                      href={SALON_DATA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-base text-emerald-400 hover:text-emerald-300 transition-colors font-medium block"
                      aria-label="Chat on WhatsApp"
                    >
                      +91 96345 56912
                    </a>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={SALON_DATA.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#191919] hover:bg-[#242424] text-[#D6B36A] hover:text-[#E2C583] border border-[#D6B36A]/40 rounded-sm text-xs uppercase tracking-widest font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B36A]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions in Google Maps</span>
                </a>

                <a
                  href={SALON_DATA.phoneHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#191919] text-[#F5F2ED] border border-[#242424] rounded-sm text-xs uppercase tracking-wider font-semibold transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D6B36A]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Google Maps Visual Card & Directions */}
            <div className="rounded-sm overflow-hidden border border-[#242424] shadow-2xl aspect-[16/10] bg-[#151515] relative group flex flex-col justify-between p-6">
              {/* Background Map Stylized Graphic Pattern */}
              <div className="absolute inset-0 bg-[#121212] opacity-90">
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D6B36A" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Pin Accent in Center */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
                <div className="w-14 h-14 rounded-full bg-[#191919] border-2 border-[#D6B36A] flex items-center justify-center text-[#D6B36A] shadow-xl shadow-[#D6B36A]/20 mb-3 animate-bounce">
                  <MapPin className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#F5F2ED]">
                  HEAD ZONE SALON
                </h4>
                <p className="text-xs text-[#D6B36A] font-medium tracking-wider uppercase mt-0.5">
                  Above Woodland Showroom · Govindpuri
                </p>
                <p className="text-xs text-[#A7A29B] max-w-sm mt-2">
                  Ranipur, Haridwar, Uttarakhand 249401
                </p>
              </div>

              {/* Bottom Direct CTA Bar */}
              <div className="relative z-10 pt-4 border-t border-[#242424] flex items-center justify-between">
                <span className="text-[11px] text-[#A7A29B]">
                  Open in Google Maps App
                </span>
                <a
                  href={SALON_DATA.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D6B36A] hover:bg-[#E2C583] text-[#111111] text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-6">
            <AppointmentForm initialService={selectedServiceForBooking} />
          </div>
        </div>
      </div>
    </section>
  );
};
