import React from 'react';
import { ArrowDown, Calendar, Scissors } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface HeroProps {
  onExploreServices: () => void;
  onBookAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onBookAppointment }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]"
      aria-label="Hero Section"
    >
      {/* Cinematic Background Image with Zoom and Subtle Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={SALON_DATA.hero.bgImage}
          alt="Head Zone Luxury Salon Interior & Grooming Experience"
          className="w-full h-full object-cover object-center scale-105 opacity-40 brightness-90 contrast-110"
          loading="eager"
        />
        {/* Multilayer Dark Overlays for Ultra Editorial Luxury Vibe */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/75 to-[#111111]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-[#111111]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#111111_100%)] opacity-80" />
      </div>

      {/* Decorative Gold Accent Lines in Corners */}
      <div className="absolute top-28 left-8 hidden md:block w-24 h-[1px] bg-gradient-to-r from-[#D6B36A]/60 to-transparent pointer-events-none" />
      <div className="absolute top-28 left-8 hidden md:block w-[1px] h-24 bg-gradient-to-b from-[#D6B36A]/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-20 right-8 hidden md:block w-24 h-[1px] bg-gradient-to-l from-[#D6B36A]/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-20 right-8 hidden md:block w-[1px] h-24 bg-gradient-to-t from-[#D6B36A]/60 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
        {/* Subtle Brand Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#D6B36A] font-semibold mb-6 border-b border-[#D6B36A]/30">
          <Scissors className="w-3.5 h-3.5 text-[#D6B36A]" />
          <span>Hairstyling & Grooming Atelier · Haridwar</span>
        </div>

        {/* Main Heading: Oversized Editorial Typography */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F2ED] leading-[1.08] mb-6 drop-shadow-md">
          YOUR STYLE. <br />
          <span className="gold-gradient-text italic font-normal">YOUR STATEMENT.</span>
        </h1>

        {/* Gold Decorative Center Line */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D6B36A] to-transparent mb-6" />

        {/* Subtitle */}
        <p className="font-serif text-lg sm:text-2xl text-[#E0C27E] tracking-wide mb-4 font-normal">
          {SALON_DATA.hero.subtitle}
        </p>

        {/* Description */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#A7A29B] leading-relaxed mb-10">
          {SALON_DATA.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-3.5 border border-[#D6B36A] text-[#D6B36A] hover:bg-[#D6B36A] hover:text-[#111111] transition-all duration-300 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-sm shadow-lg hover:shadow-[#D6B36A]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
          >
            EXPLORE OUR SERVICES
          </button>

          <button
            onClick={onBookAppointment}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D6B36A] via-[#E2C583] to-[#B9975B] text-[#111111] hover:brightness-110 active:scale-95 transition-all duration-300 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-sm shadow-xl shadow-[#D6B36A]/15 flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
          >
            <Calendar className="w-4 h-4 text-[#111111]" />
            <span>BOOK YOUR APPOINTMENT</span>
          </button>
        </div>

        {/* Trust pill hint */}
        <div className="mt-12 flex items-center gap-3 text-xs tracking-wider text-[#A7A29B]">
          <span className="text-[#D6B36A]">★ ★ ★ ★ ★</span>
          <span>5.0 Rated by 813+ Clients</span>
          <span className="text-[#333333]">|</span>
          <span>Govindpuri, Ranipur</span>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <button
          onClick={onExploreServices}
          className="text-[#A7A29B] hover:text-[#D6B36A] transition-colors flex flex-col items-center gap-2 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B36A]"
          aria-label="Scroll down to salon details"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A7A29B] group-hover:text-[#D6B36A]">
            Discover
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#D6B36A]" />
        </button>
      </div>
    </section>
  );
};
