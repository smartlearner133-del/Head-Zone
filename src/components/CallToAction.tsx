import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface CallToActionProps {
  onBookAppointment: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onBookAppointment }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#111111] overflow-hidden" aria-label="Book Call to Action">
      {/* Background Salon Imagery with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Salon Atmosphere"
          className="w-full h-full object-cover object-center brightness-40 contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#111111]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]" />
      </div>

      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#D6B36A] to-transparent z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#D6B36A] font-semibold mb-4">
          Reserve Your Chair
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F2ED] mb-6">
          READY FOR YOUR <span className="gold-gradient-text italic font-normal">NEXT LOOK?</span>
        </h2>

        <p className="text-base sm:text-xl text-[#A7A29B] max-w-2xl leading-relaxed mb-10">
          Your next great look starts at Head Zone. Get in touch with us and plan your salon visit in Govindpuri, Haridwar.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookAppointment}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D6B36A] to-[#B9975B] text-[#111111] font-bold text-xs sm:text-sm tracking-widest uppercase rounded-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#D6B36A]/20 flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
          >
            <Calendar className="w-4 h-4 text-[#111111]" />
            <span>BOOK AN APPOINTMENT</span>
          </button>

          <a
            href={SALON_DATA.phoneHref}
            className="w-full sm:w-auto px-8 py-4 bg-[#191919] hover:bg-[#242424] text-[#F5F2ED] hover:text-[#D6B36A] border border-[#242424] hover:border-[#D6B36A]/50 font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-sm transition-all flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
          >
            <Phone className="w-4 h-4 text-[#D6B36A]" />
            <span>CALL US NOW ({SALON_DATA.phoneNumber})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
