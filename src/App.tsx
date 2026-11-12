import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { CallToAction } from './components/CallToAction';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForBooking(serviceTitle);
    }
    const el = document.getElementById('appointment-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus on first input for accessibility
      const input = document.getElementById('customer-name');
      if (input) {
        input.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F2ED] flex flex-col font-sans selection:bg-[#D6B36A]/30 selection:text-[#F7F3EC]">
      {/* 1. Navigation Bar */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      <main id="main-content" className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreServices={scrollToServices}
          onBookAppointment={() => scrollToBooking()}
        />

        {/* 3. Trust & Statistics */}
        <Statistics />

        {/* 4. About Head Zone */}
        <About onDiscover={scrollToServices} />

        {/* 5. Our Curated Services */}
        <Services onSelectServiceForBooking={(service) => scrollToBooking(service)} />

        {/* 6. Why Choose Head Zone */}
        <WhyChooseUs />

        {/* 7. Gallery with Lightbox */}
        <Gallery />

        {/* 8. Customer Reviews & Reputation */}
        <Reviews />

        {/* 9. High-impact Call to Action */}
        <CallToAction onBookAppointment={() => scrollToBooking()} />

        {/* 10. Frequently Asked Questions (FAQ) Accordion */}
        <FAQ />

        {/* 11. Contact, Location & Appointment Form */}
        <Contact selectedServiceForBooking={selectedServiceForBooking} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
