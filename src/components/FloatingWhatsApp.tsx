import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { formatWhatsAppGeneralEnquiryUrl } from '../utils/appointment';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const waUrl = formatWhatsAppGeneralEnquiryUrl(undefined, SALON_DATA.whatsappNumber);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Optional Attention Bubble */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-sm bg-[#191919] border border-[#D6B36A]/40 text-[#F5F2ED] text-xs shadow-2xl animate-bounce">
          <span className="font-serif italic text-[#D6B36A]">Book via WhatsApp</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-[#A7A29B] hover:text-[#F5F2ED] p-0.5"
            aria-label="Dismiss WhatsApp hint"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white shadow-2xl shadow-emerald-950/80 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
        aria-label="Chat with Head Zone Salon on WhatsApp (+91 96345 56912)"
      >
        {/* Emerald luxury glow ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500/40 transition-colors pointer-events-none" />

        <MessageSquare className="w-6 h-6 fill-current group-hover:scale-110 transition-transform duration-200" />
      </a>
    </div>
  );
};
