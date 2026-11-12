import React, { useState } from 'react';
import { Camera, ZoomIn, Sparkles } from 'lucide-react';
import { SALON_DATA, GalleryItem } from '../data/salonData';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    "Men's Hairstyles",
    'Haircuts',
    'Beard Grooming',
    'Hair Coloring',
    'Salon Interiors',
    'Hair Treatments',
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? SALON_DATA.gallery
      : SALON_DATA.gallery.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#151515] relative" aria-label="Hairstyling and Salon Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#D6B36A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-semibold">
              Visual Portfolio
            </span>
            <Sparkles className="w-4 h-4 text-[#D6B36A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F2ED] mb-4">
            STYLE THAT SPEAKS FOR ITSELF
          </h2>
          <p className="text-base sm:text-lg text-[#A7A29B]">
            Explore modern cuts, precision beard trims, radiant coloring, and the luxurious ambiance of Head Zone.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Gallery Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium rounded-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B36A] ${
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

        {/* Asymmetric Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            // Apply varied spanning for visual asymmetry
            const isTall = item.aspect === 'tall' || index === 0 || index === 4;
            const isWide = item.aspect === 'wide' || index === 1;

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-sm bg-[#191919] border border-[#242424] hover:border-[#D6B36A]/60 transition-all duration-500 cursor-pointer ${
                  isTall ? 'sm:row-span-2 aspect-[3/4]' : isWide ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
                onClick={() => handleOpenLightbox(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(item);
                  }
                }}
                aria-label={`Open photo of ${item.title}`}
              >
                {/* Image with zoom effect */}
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.category} portfolio at HEAD ZONE Luxury Salon Haridwar`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={1000}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Hover Details Card */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#D6B36A] font-semibold block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg text-[#F5F2ED] font-bold group-hover:text-[#D6B36A] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#111111]/80 border border-[#D6B36A]/40 text-[#D6B36A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#73706B] flex items-center justify-center gap-2">
            <Camera className="w-3.5 h-3.5 text-[#D6B36A]" />
            <span>Curated photographic styling references representing Head Zone design standards &amp; salon aesthetics.</span>
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
