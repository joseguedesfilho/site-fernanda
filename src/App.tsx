/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import BudgetCalculator from './components/BudgetCalculator';
import MenuSection from './components/MenuSection';
import Differentiators from './components/Differentiators';
import AboutFounder from './components/AboutFounder';
import TastingBooking from './components/TastingBooking';
import GallerySection from './components/GallerySection';
import ClientsSection from './components/ClientsSection';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TastingModal from './components/TastingModal';

export default function App() {
  const [isTastingModalOpen, setIsTastingModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#171717] font-sans flex flex-col selection:bg-black selection:text-white">
      {/* Header and navigation */}
      <Navbar
        onOpenTastingModal={() => setIsTastingModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenSimulator={() => scrollToSection('simulador')}
          onOpenTastingModal={() => setIsTastingModalOpen(true)}
        />

        {/* Credentials and Social Proof Bar */}
        <TrustBar />

        {/* Interactive Event Budget & Proposal Simulator (Core Converter) */}
        <BudgetCalculator />

        {/* Interactive Menu & Gastronomic Experiences */}
        <MenuSection
          onOpenTastingModal={() => setIsTastingModalOpen(true)}
          onOpenSimulator={() => scrollToSection('simulador')}
        />

        {/* VIP Tasting Experience Section */}
        <TastingBooking
          onSuccessNotice={() => {}}
        />

        {/* Persuasive Advantages & Peace of Mind Differentiators */}
        <Differentiators
          onOpenTastingModal={() => setIsTastingModalOpen(true)}
        />

        {/* Founder & Leadership Section: Fernanda Prado */}
        <AboutFounder
          onOpenSimulator={() => scrollToSection('simulador')}
          onOpenTastingModal={() => setIsTastingModalOpen(true)}
        />

        {/* Real Event Gallery with Lightbox */}
        <GallerySection />

        {/* Portfolio of Real Clients & Notable Celebrations */}
        <ClientsSection
          onOpenSimulator={() => scrollToSection('simulador')}
          onOpenTastingModal={() => setIsTastingModalOpen(true)}
        />

        {/* Social Proof: 5-Star Google & Wedding Reviews */}
        <Testimonials
          onOpenSimulator={() => scrollToSection('simulador')}
        />

        {/* Anti-Objection FAQ */}
        <FaqSection />

        {/* Contact Info, Physical Space & Direct Messages */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onScrollToSection={scrollToSection}
        onOpenTastingModal={() => setIsTastingModalOpen(true)}
      />

      {/* Floating Sticky Conversion Engine */}
      <FloatingWhatsApp />

      {/* Tasting / Quote Reservation Modal */}
      <TastingModal
        isOpen={isTastingModalOpen}
        onClose={() => setIsTastingModalOpen(false)}
      />
    </div>
  );
}
