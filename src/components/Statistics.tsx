import React from 'react';
import { Star, Award, Sparkles, Users } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const Statistics: React.FC = () => {
  const stats = [
    {
      id: 'reviews',
      value: '813+',
      label: 'Customer Reviews',
      sublabel: 'Consistent client satisfaction',
      icon: Users,
    },
    {
      id: 'rating',
      value: '5.0 / 5',
      label: 'Customer Rating',
      sublabel: 'Flawless 5-star standard',
      icon: Star,
      isStar: true,
    },
    {
      id: 'experience',
      value: '100%',
      label: 'Professional Salon Experience',
      sublabel: 'Hygienic, modern & refined',
      icon: Award,
    },
    {
      id: 'personalized',
      value: 'Custom',
      label: 'Personalized Styling',
      sublabel: 'Tailored to your facial features',
      icon: Sparkles,
    },
  ];

  return (
    <section
      className="relative z-20 py-16 bg-[#151515] border-y border-[#242424]"
      aria-label="Salon Trust & Statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">HEAD ZONE Salon Trust, Customer Reviews &amp; Ratings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-[#242424]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`flex flex-col items-center text-center ${
                  idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6 lg:pl-10' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#111111] border border-[#D6B36A]/40 flex items-center justify-center mb-4 text-[#D6B36A] shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F2ED]">
                    {stat.value}
                  </span>
                  {stat.isStar && (
                    <span className="text-[#D6B36A] text-lg">★</span>
                  )}
                </div>

                <h3 className="font-serif text-base sm:text-lg text-[#D6B36A] font-semibold mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-[#A7A29B] font-normal max-w-[200px]">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transparent business note */}
        <div className="mt-10 pt-6 border-t border-[#242424]/60 text-center">
          <p className="text-[11px] uppercase tracking-widest text-[#73706B]">
            * {SALON_DATA.reviews.sourceNote} Based in Haridwar, Uttarakhand.
          </p>
        </div>
      </div>
    </section>
  );
};
