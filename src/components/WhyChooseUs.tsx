import React from 'react';
import { UserCheck, Sparkles, Coffee, HeartHandshake } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const iconMap = {
    UserCheck,
    Sparkles,
    Coffee,
    HeartHandshake,
  };

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#111111] relative" aria-label="Why Choose Head Zone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[#D6B36A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-semibold">
              The Head Zone Distinction
            </span>
            <span className="h-[1px] w-8 bg-[#D6B36A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F2ED] mb-4">
            WHY CLIENTS CHOOSE HEAD ZONE
          </h2>
          <p className="text-base sm:text-lg text-[#A7A29B]">
            A dedication to craft, personalized styling, and an inviting salon environment right in Haridwar.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SALON_DATA.whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="group p-8 rounded-sm bg-[#151515] border border-[#242424] hover:border-[#D6B36A]/60 transition-all duration-300 hover:-translate-y-1 relative"
              >
                {/* Editorial Index Number */}
                <div className="text-right text-xs font-serif italic text-[#333333] group-hover:text-[#D6B36A]/40 transition-colors">
                  0{index + 1}
                </div>

                {/* Gold Framed Icon */}
                <div className="w-14 h-14 rounded-sm bg-[#191919] border border-[#D6B36A]/30 flex items-center justify-center mb-6 text-[#D6B36A] group-hover:border-[#D6B36A] group-hover:bg-[#111111] transition-all shadow-md">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-[#F5F2ED] font-bold mb-3 group-hover:text-[#D6B36A] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A7A29B] leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent glow on hover */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#D6B36A] group-hover:to-transparent transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
