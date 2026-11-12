import React from 'react';
import { UserCheck, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface AboutProps {
  onDiscover: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscover }) => {
  const highlightIcons = [UserCheck, CheckCircle2, ShieldCheck];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#111111] relative overflow-hidden" aria-label="About Head Zone">
      {/* Background ambient gold gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D6B36A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Editorial Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative rounded-sm overflow-hidden border border-[#242424] shadow-2xl bg-[#191919] aspect-[4/5] group">
                <img
                  src={SALON_DATA.about.primaryImage}
                  alt="Master stylist providing precision haircut and styling at HEAD ZONE Salon in Haridwar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={1500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Floating Badge on Primary Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#111111]/90 backdrop-blur-md border border-[#D6B36A]/30 rounded-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#D6B36A] font-semibold block">
                        Atmosphere &amp; Precision
                      </span>
                      <p className="font-serif text-sm text-[#F5F2ED] font-medium">
                        Govindpuri, Ranipur · Haridwar
                      </p>
                    </div>
                    <span className="text-xs font-serif italic text-[#D6B36A]">Est. Perfection</span>
                  </div>
                </div>
              </div>

              {/* Overlapping Secondary Accent Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-1/2 aspect-[4/3] rounded-sm overflow-hidden border-2 border-[#D6B36A]/40 shadow-2xl bg-[#151515]">
                <img
                  src={SALON_DATA.about.secondaryImage}
                  alt="Client receiving personalized modern hairstyle treatment at HEAD ZONE Haridwar"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                />
              </div>

              {/* Decorative Frame Line */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D6B36A]/40 -z-10" />
            </div>
          </div>

          {/* Right Column: Editorial Text & Feature Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#D6B36A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-semibold">
                The Head Zone Philosophy
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F2ED] leading-tight mb-6">
              MORE THAN A SALON. <br />
              <span className="gold-gradient-text italic font-normal">IT&apos;S YOUR STYLE DESTINATION.</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#A7A29B] leading-relaxed mb-8">
              {SALON_DATA.about.description}
            </p>

            {/* 3 Feature Highlights */}
            <div className="space-y-6 mb-10">
              {SALON_DATA.about.highlights.map((highlight, index) => {
                const Icon = highlightIcons[index % highlightIcons.length];
                return (
                  <div key={highlight.title} className="flex items-start gap-4 p-4 rounded-sm bg-[#151515] border border-[#242424] hover:border-[#D6B36A]/40 transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-[#191919] border border-[#D6B36A]/30 flex-shrink-0 flex items-center justify-center text-[#D6B36A]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#F5F2ED] font-semibold mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-[#A7A29B] leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Discover Head Zone Button */}
            <div>
              <button
                onClick={onDiscover}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D6B36A] to-[#B9975B] text-[#111111] hover:brightness-110 active:scale-95 transition-all text-xs sm:text-sm font-bold tracking-widest uppercase rounded-sm shadow-xl shadow-[#D6B36A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
              >
                <span>Discover Head Zone Services</span>
                <ArrowRight className="w-4 h-4 text-[#111111]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
