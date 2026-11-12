import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../data/salonData';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Bar with Title & Close Button */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-[#F5F2ED] z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <Maximize2 className="w-4 h-4 text-[#D6B36A]" />
          <span className="font-serif text-sm sm:text-base text-[#F5F2ED] tracking-wide">
            {currentItem.title}
          </span>
          <span className="text-xs text-[#A7A29B] hidden sm:inline">
            · {currentItem.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-[#191919] hover:bg-[#D6B36A] hover:text-[#111111] text-[#F5F2ED] border border-[#242424] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
          aria-label="Close lightbox modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#111111]/80 hover:bg-[#D6B36A] hover:text-[#111111] text-[#F5F2ED] border border-[#242424] transition-all z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
        aria-label="Previous gallery image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#111111]/80 hover:bg-[#D6B36A] hover:text-[#111111] text-[#F5F2ED] border border-[#242424] transition-all z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
        aria-label="Next gallery image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-[#242424]"
        />

        {/* Caption & Counter */}
        <div className="mt-4 text-center">
          <p className="font-serif text-lg text-[#F5F2ED] font-semibold">
            {currentItem.title}
          </p>
          <p className="text-xs text-[#A7A29B] mt-0.5">
            {currentIndex + 1} of {items.length} · {currentItem.category}
          </p>
        </div>
      </div>
    </div>
  );
};
