import React from 'react';
import { Phone, MapPin, MessageSquare, ArrowUp, Instagram, Facebook } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#242424] text-[#A7A29B] relative z-20" aria-label="Site Footer">
      {/* Top Gold Accent Bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D6B36A]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand & Description Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#151515] border border-[#D6B36A]/50 flex items-center justify-center">
                <span className="font-serif text-[#D6B36A] font-bold text-base">HZ</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#F5F2ED]">
                HEAD ZONE
              </span>
            </div>

            <p className="font-serif text-sm italic text-[#D6B36A] tracking-wider">
              {SALON_DATA.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#A7A29B] leading-relaxed max-w-md">
              A premium salon experience in Haridwar dedicated to modern hairstyles, precision beard grooming, restorative hair treatments, and personalized styling.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SALON_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#151515] border border-[#242424] hover:border-emerald-500 text-emerald-400 hover:bg-emerald-950/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={SALON_DATA.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#151515] border border-[#242424] hover:border-[#D6B36A] text-[#F5F2ED] hover:text-[#D6B36A] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_DATA.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#151515] border border-[#242424] hover:border-[#D6B36A] text-[#F5F2ED] hover:text-[#D6B36A] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base text-[#F5F2ED] font-semibold tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#D6B36A] transition-colors">
                  Home Experience
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D6B36A] transition-colors">
                  About Head Zone
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D6B36A] transition-colors">
                  Curated Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D6B36A] transition-colors">
                  Why Clients Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D6B36A] transition-colors">
                  Style Portfolio &amp; Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D6B36A] transition-colors">
                  Customer Reviews (813+ 5.0★)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D6B36A] transition-colors">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D6B36A] transition-colors">
                  Contact &amp; Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base text-[#F5F2ED] font-semibold tracking-wider uppercase">
              Salon Location &amp; Inquiries
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D6B36A] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[#F5F2ED]/90">
                  {SALON_DATA.address.fullFormatted}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D6B36A] flex-shrink-0" />
                <a
                  href={SALON_DATA.phoneHref}
                  className="hover:text-[#D6B36A] text-[#F5F2ED] font-medium transition-colors"
                >
                  {SALON_DATA.phoneNumber}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={SALON_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-medium transition-colors"
                >
                  WhatsApp: +91 96345 56912
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73706B]">
          <p>
            &copy; {currentYear} HEAD ZONE Salon. All rights reserved.
          </p>

          <p className="font-serif italic text-[#A7A29B]">
            HEAD ZONE — STYLE THAT DEFINES YOU.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#A7A29B] hover:text-[#D6B36A] transition-colors p-1"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
