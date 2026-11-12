import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const FAQ: React.FC = () => {
  // Store expanded item IDs (default first item open to show affordance)
  const [openIds, setOpenIds] = useState<string[]>(['faq-hours']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#151515] relative overflow-hidden" aria-label="Frequently Asked Questions">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D6B36A]/40 to-transparent" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D6B36A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-[#D6B36A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-semibold">
              Client Inquiries
            </span>
            <HelpCircle className="w-4 h-4 text-[#D6B36A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F2ED] mb-4">
            FREQUENTLY ASKED <span className="gold-gradient-text italic font-normal">QUESTIONS</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A29B]">
            Clear answers about salon hours, parking, professional product brands, and appointment reservations.
          </p>
        </div>

        {/* Clean Luxury Accordion List */}
        <div className="space-y-4">
          {SALON_DATA.faqs.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-sm border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#191919] border-[#D6B36A]/60 shadow-lg shadow-black/40'
                    : 'bg-[#151515] border-[#242424] hover:border-[#D6B36A]/30 hover:bg-[#181818]'
                }`}
              >
                <button
                  type="button"
                  id={`faq-question-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 flex-grow">
                    <span className="text-xs font-serif italic text-[#D6B36A] flex-shrink-0">
                      0{index + 1}.
                    </span>
                    <h3 className={`font-serif text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? 'text-[#D6B36A]' : 'text-[#F5F2ED]'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full bg-[#111111] border border-[#242424] flex items-center justify-center flex-shrink-0 transition-transform duration-300 text-[#D6B36A] ${
                    isOpen ? 'rotate-180 border-[#D6B36A]/50 bg-[#D6B36A]/10' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-6 sm:px-8 pb-6 pt-1 text-sm text-[#A7A29B] leading-relaxed border-t border-[#242424]/60 animate-fadeIn"
                  >
                    <p className="mb-3">{faq.answer}</p>
                    {faq.category && (
                      <span className="text-[11px] uppercase tracking-widest text-[#73706B] font-medium">
                        Category · {faq.category}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help & Quick Contact Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-[#191919] border border-[#242424] text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-[#F5F2ED] mb-1 flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#D6B36A]" />
              <span>Still have a question?</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#A7A29B]">
              Our salon team is always available to assist with custom styling or scheduling questions.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <a
              href={SALON_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-400 border border-emerald-800/40 rounded-sm text-xs uppercase tracking-wider font-semibold transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={SALON_DATA.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] hover:bg-[#242424] text-[#D6B36A] border border-[#D6B36A]/40 rounded-sm text-xs uppercase tracking-wider font-semibold transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Salon</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
