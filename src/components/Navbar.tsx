import { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, MapPin, MessageCircle, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data/buffetData';

interface NavbarProps {
  onOpenTastingModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onOpenTastingModal, onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(sectionId);
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá, Fernanda Prado! Gostaria de solicitar uma proposta personalizada para o meu evento.'
  )}`;

  const navLinks = [
    { label: 'Cardápios', id: 'cardapios' },
    { label: 'Simulador', id: 'simulador', highlight: true },
    { label: 'Degustação', id: 'degustacao' },
    { label: 'O Padrão FP', id: 'diferenciais' },
    { label: 'Galeria', id: 'galeria' },
    { label: 'Clientes', id: 'clientes' },
    { label: 'Depoimentos', id: 'depoimentos' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <>
      {/* 1. Top Prestigious Announcement & Location Bar */}
      <div className="bg-[#F5F5F4] text-neutral-600 text-[11px] tracking-wide border-b border-neutral-200 hidden md:block select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-neutral-800 font-normal">
              <MapPin className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
              Atelier Gastronômico na Chácara Urbana · Jundiaí - SP
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-500 font-light hidden lg:inline">
              Atendimento a casamentos e eventos em todo o Estado de São Paulo
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-neutral-600 flex items-center gap-1.5 font-light">
              <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
              Seg a Sex: 09h às 18h30 · Sáb: 09h às 13h30
            </span>
            <span className="text-neutral-300">|</span>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:text-black transition-colors font-medium flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-neutral-700 shrink-0" />
              {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200 py-3'
            : 'bg-white py-4 sm:py-5 border-b border-neutral-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 xl:gap-8">
            
            {/* Brand Logo & Maison Seal */}
            <button 
              onClick={() => handleNavClick('hero')} 
              className="text-left group cursor-pointer focus:outline-none flex items-center gap-3 shrink-0"
              aria-label="Fernanda Prado Buffet - Início"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 group-hover:border-black flex items-center justify-center bg-neutral-100 group-hover:bg-black text-neutral-900 group-hover:text-white font-serif text-sm sm:text-base font-semibold tracking-wider transition-all shadow-sm shrink-0">
                FP
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif text-lg sm:text-xl xl:text-2xl font-normal tracking-wide text-neutral-950 group-hover:text-black transition-colors leading-tight whitespace-nowrap">
                  Fernanda Prado
                </span>
                <span className="text-[8.5px] sm:text-[9px] tracking-[0.28em] uppercase text-neutral-500 font-sans font-medium leading-tight mt-0.5 whitespace-nowrap">
                  Haute Gastronomie & Eventos
                </span>
              </div>
            </button>

            {/* Central Navigation Links */}
            <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 2xl:gap-7 text-[11px] uppercase tracking-[0.16em] font-medium text-neutral-600 whitespace-nowrap">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`py-1.5 transition-all cursor-pointer relative group flex items-center ${
                    link.highlight
                      ? 'text-neutral-950 font-semibold'
                      : 'hover:text-black'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full ${
                    link.highlight ? 'w-full bg-black/60' : ''
                  }`}></span>
                </button>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden md:flex items-center gap-2.5 xl:gap-3 shrink-0">
              <button
                onClick={onOpenTastingModal}
                className="cursor-pointer text-[11px] xl:text-xs font-medium uppercase tracking-[0.14em] text-neutral-800 hover:text-black hover:bg-neutral-100 py-2 px-3.5 xl:px-4 border border-neutral-300 rounded-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
                Degustação
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-neutral-950 hover:bg-black text-white font-semibold text-[11px] xl:text-xs uppercase tracking-[0.14em] py-2 px-4 xl:px-5 rounded-sm shadow-md transition-all flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white shrink-0" />
                Orçamento VIP
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-900 hover:text-black transition-colors cursor-pointer"
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-5 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-1 text-xs uppercase tracking-[0.15em] text-neutral-700">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2.5 border-b border-neutral-100 transition-colors cursor-pointer flex items-center justify-between ${
                    link.highlight ? 'text-black font-semibold' : 'hover:text-black'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-neutral-400 text-[10px]">→</span>
                </button>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTastingModal();
                }}
                className="w-full text-center py-3 border border-neutral-300 text-neutral-900 font-medium text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Agendar Degustação Privativa
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-black text-white font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com a Chef no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
