import React from 'react';
import { Star, ExternalLink, ShieldCheck, ThumbsUp, Sparkles, Award } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const Reviews: React.FC = () => {
  const satisfactionPillars = [
    {
      title: 'Precision Craftsmanship',
      description: 'Clients praise the sharp, disciplined scissor and clipper technique that lasts between visits.',
      icon: Award,
    },
    {
      title: 'Attentive Consultation',
      description: 'Listening closely to hair goals and offering professional face-shape recommendations.',
      icon: Sparkles,
    },
    {
      title: 'Pristine Hygiene & Ambience',
      description: 'Sanitized tools, fresh capes, and a welcoming air-conditioned luxury atmosphere.',
      icon: ShieldCheck,
    },
    {
      title: 'Consistent Excellence',
      description: 'A dedicated approach that turns first-time visitors into long-term loyal clients.',
      icon: ThumbsUp,
    },
  ];

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#111111] relative overflow-hidden" aria-label="Customer Reviews">
      {/* Decorative background circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D6B36A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[#D6B36A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-semibold">
              Client Feedback &amp; Trust
            </span>
            <span className="h-[1px] w-8 bg-[#D6B36A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F2ED] mb-4">
            LOVE THAT SPEAKS FOR ITSELF
          </h2>
          <p className="text-base sm:text-lg text-[#A7A29B]">
            Honest satisfaction reflected in real customer experiences at our Haridwar salon.
          </p>
        </div>

        {/* Big Rating Hero Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#191919] to-[#151515] border border-[#242424] rounded-sm p-8 sm:p-12 shadow-2xl relative mb-16 text-center">
          {/* Top Gold Ornament */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D6B36A] to-transparent mx-auto mb-6" />

          {/* Rating Number */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="font-serif text-5xl sm:text-7xl font-bold text-[#F5F2ED] tracking-tight">
              5.0
            </span>
            <span className="font-serif text-2xl sm:text-3xl text-[#A7A29B]">/ 5.0</span>
          </div>

          {/* 5 Gold Stars */}
          <div className="flex items-center justify-center gap-2 mb-4" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 sm:w-8 sm:h-8 fill-[#D6B36A] text-[#D6B36A] drop-shadow-md"
              />
            ))}
          </div>

          {/* Total Reviews Badge */}
          <p className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-widest text-[#D6B36A] mb-3">
            813 CUSTOMER REVIEWS
          </p>
          <p className="text-xs sm:text-sm text-[#A7A29B] max-w-xl mx-auto mb-8">
            {SALON_DATA.reviews.sourceNote} We welcome you to experience our salon hospitality and share your feedback.
          </p>

          {/* View Customer Reviews Action Button */}
          <a
            href={SALON_DATA.reviews.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#D6B36A] to-[#B9975B] text-[#111111] font-bold text-xs sm:text-sm tracking-widest uppercase rounded-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#D6B36A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
          >
            <span>View Customer Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#111111]" />
          </a>
        </div>

        {/* Customer Satisfaction Highlights Grid (No fabricated names/quotes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {satisfactionPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-sm bg-[#151515] border border-[#242424] hover:border-[#D6B36A]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-sm bg-[#191919] border border-[#D6B36A]/30 flex items-center justify-center text-[#D6B36A] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F2ED] font-semibold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A29B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
