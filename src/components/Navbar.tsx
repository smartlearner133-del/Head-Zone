import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, MessageSquare } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const formEl = document.querySelector('#appointment-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(SALON_DATA.whatsappUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#111111]/95 backdrop-blur-md border-b border-[#242424] py-3.5 shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Custom HEAD ZONE Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A] rounded-sm"
            aria-label="Head Zone Salon - Home"
          >
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#191919] to-[#111111] border border-[#D6B36A]/50 flex items-center justify-center shadow-inner group-hover:border-[#D6B36A] transition-colors">
              <span className="font-serif text-[#D6B36A] text-lg font-bold tracking-wider">HZ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F5F2ED] group-hover:text-[#D6B36A] transition-colors">
                HEAD ZONE
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#A7A29B] font-medium">
                Luxury Salon · Haridwar
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium tracking-wider text-[#A7A29B] hover:text-[#D6B36A] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B36A]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={SALON_DATA.phoneHref}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#F5F2ED] hover:text-[#D6B36A] px-3 py-2 rounded border border-[#242424] hover:border-[#D6B36A]/50 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B36A]"
              aria-label={`Call Head Zone at ${SALON_DATA.phoneNumber}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#D6B36A]" />
              <span className="font-medium">{SALON_DATA.phoneNumber}</span>
            </a>

            <button
              onClick={handleBookingClick}
              className="relative group overflow-hidden bg-gradient-to-r from-[#D6B36A] to-[#B9975B] text-[#111111] px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#D6B36A]/10 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={SALON_DATA.phoneHref}
              className="p-2 rounded bg-[#191919] border border-[#242424] text-[#D6B36A]"
              aria-label="Call salon"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#F5F2ED] hover:text-[#D6B36A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111]/98 border-b border-[#242424] px-6 pt-6 pb-8 backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-serif tracking-wider text-[#F5F2ED] hover:text-[#D6B36A] py-1 border-b border-[#1f1f1f]"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={SALON_DATA.phoneHref}
                className="flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider text-[#F5F2ED] py-3 rounded border border-[#242424] bg-[#191919]"
              >
                <Phone className="w-4 h-4 text-[#D6B36A]" />
                <span>Call {SALON_DATA.phoneNumber}</span>
              </a>

              <a
                href={SALON_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider text-emerald-400 py-3 rounded border border-emerald-900/40 bg-emerald-950/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={handleBookingClick}
                className="w-full bg-gradient-to-r from-[#D6B36A] to-[#B9975B] text-[#111111] py-3 rounded-sm text-xs font-bold uppercase tracking-widest shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
