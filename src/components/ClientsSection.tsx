import { useState, useRef, useEffect } from 'react';
import { 
  Building2, 
  Award, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Briefcase, 
  ArrowRight, 
  MoveHorizontal 
} from 'lucide-react';
import { CLIENT_LOGOS, CLIENTS_STATS } from '../data/clientsData';
import { CONTACT_INFO } from '../data/buffetData';

interface ClientsSectionProps {
  onOpenSimulator: () => void;
  onOpenTastingModal?: () => void;
}

export default function ClientsSection({ onOpenSimulator, onOpenTastingModal }: ClientsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse drag state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const filteredLogos = selectedCategory === 'all'
    ? CLIENT_LOGOS
    : CLIENT_LOGOS.filter(c => c.category === selectedCategory);

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    const maxScroll = scrollWidth - clientWidth;
    setScrollProgress(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    updateScrollState();
    carousel.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      carousel.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [filteredLogos]);

  // Reset scroll when category filter changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedCategory]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const itemWidth = carouselRef.current.clientWidth / 5;
    const scrollAmount = direction === 'left' ? -itemWidth * 2 : itemWidth * 2;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const getWhatsappCorporate = () => {
    const text = `*SOLICITAÇÃO CORPORATIVA / ASSESSORIA DE EVENTOS*\n\n` +
      `Olá, equipe Fernanda Prado Buffet!\n` +
      `Gostaria de solicitar uma proposta para evento institucional/corporativo da nossa empresa (com emissão de nota fiscal e cardápio executivo).`;
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="clientes" className="py-20 sm:py-28 bg-white text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-neutral-500 block font-medium">
            Confiance & Excellence · Clientes Atendidos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950">
            Empresas, instituições e marcas que{' '}
            <span className="italic text-neutral-600">confiam em nosso padrão</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Uma trajetória de excelência e pontualidade atendendo grandes corporações, cooperativas, 
            sociedades tradicionais e os espaços de eventos mais prestigiados de São Paulo.
          </p>
        </div>

        {/* 1. Metrics & Reputation Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CLIENTS_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[#FAFAF9] border border-neutral-200 p-6 rounded-sm text-center space-y-1 hover:border-neutral-400 hover:bg-white transition-all shadow-2xs"
            >
              <span className="font-serif text-3xl sm:text-4xl text-neutral-950 block tracking-tight font-normal">
                {stat.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-800 block">
                {stat.label}
              </span>
              <span className="text-[11px] text-neutral-500 font-light block">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* 2. Filter Tabs & Carousel Navigation Header */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-neutral-200 pb-4">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 sm:gap-2">
              {[
                { id: 'all', label: 'Todas as Marcas' },
                { id: 'corporativo', label: 'Corporativo & Imobiliário' },
                { id: 'saude_financeiro', label: 'Saúde & Financeiro' },
                { id: 'institucional', label: 'Institucional & Clubes' },
                { id: 'espacos', label: 'Espaços & Fazendas' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-[0.14em] font-medium transition-all cursor-pointer relative ${
                    selectedCategory === tab.id
                      ? 'text-neutral-950 font-semibold'
                      : 'text-neutral-500 hover:text-neutral-950'
                  }`}
                >
                  {tab.label}
                  {selectedCategory === tab.id && (
                    <span className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-neutral-950 transition-all"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Carousel Controls & Drag Hint */}
            <div className="flex items-center gap-3 self-center md:self-auto">
              <span className="text-[11px] text-neutral-500 font-light flex items-center gap-1.5 select-none hidden sm:inline-flex">
                <MoveHorizontal className="w-3.5 h-3.5 text-neutral-400" />
                Arraste para o lado
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleScroll('left')}
                  disabled={!canScrollLeft}
                  className={`w-9 h-9 rounded-sm border flex items-center justify-center transition-all cursor-pointer ${
                    canScrollLeft 
                      ? 'border-neutral-300 text-neutral-800 hover:bg-neutral-950 hover:text-white' 
                      : 'border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40'
                  }`}
                  aria-label="Ver clientes anteriores"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleScroll('right')}
                  disabled={!canScrollRight}
                  className={`w-9 h-9 rounded-sm border flex items-center justify-center transition-all cursor-pointer ${
                    canScrollRight 
                      ? 'border-neutral-300 text-neutral-800 hover:bg-neutral-950 hover:text-white' 
                      : 'border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40'
                  }`}
                  aria-label="Ver próximos clientes"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 3. Logos Carousel: Exactly 5 items visible simultaneously on desktop */}
          <div className="relative">
            <div
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {filteredLogos.map((client) => (
                <div
                  key={client.id}
                  className="flex-[0_0_calc(75%)] sm:flex-[0_0_calc((100%-1rem)/2)] md:flex-[0_0_calc((100%-2*1rem)/3)] lg:flex-[0_0_calc((100%-4*1rem)/5)] snap-start bg-[#FAFAF9] hover:bg-white border border-neutral-200 hover:border-neutral-400 p-5 rounded-sm transition-all duration-300 flex flex-col items-center justify-center text-center space-y-3 group min-h-[145px] shadow-2xs hover:shadow-md"
                >
                  {client.logoUrl ? (
                    <div className="h-12 w-full flex items-center justify-center">
                      <img
                        src={client.logoUrl}
                        alt={client.name}
                        className="max-h-10 max-w-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all pointer-events-none"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full border border-neutral-300 bg-neutral-100 group-hover:border-neutral-950 group-hover:bg-neutral-950 text-neutral-900 group-hover:text-white flex items-center justify-center font-serif text-sm font-semibold tracking-wider transition-all shadow-xs">
                      {client.monogram || client.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}

                  <div className="space-y-1 w-full px-1">
                    <h3 className="font-serif text-sm font-medium text-neutral-950 group-hover:text-black transition-colors truncate">
                      {client.name}
                    </h3>
                    <p className="text-[10px] text-neutral-500 font-light truncate">
                      {client.segment}
                    </p>
                    <span className="text-[9px] text-neutral-400 font-sans tracking-wider block uppercase">
                      {client.city}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Progress Indicator Bar */}
            <div className="mt-4 flex items-center justify-between gap-4 text-[11px] text-neutral-500 font-light">
              <div className="flex-1 h-0.5 bg-neutral-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-neutral-950 transition-all duration-150" 
                  style={{ width: `${Math.max(15, scrollProgress)}%` }}
                />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                Mostrando 5 por vez · {filteredLogos.length} marcas atendidas
              </span>
            </div>
          </div>
        </div>

        {/* 4. Corporate Direct Assistance & Invoicing Callout */}
        <div className="p-8 sm:p-10 bg-[#F5F5F4] border border-neutral-200 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-medium block">
              Atendimento Corporativo & Cerimonialistas
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950">
              Sua empresa precisa de proposta com faturamento e nota fiscal?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-2xl">
              Atendemos convenções empresariais, confraternizações anuais, coquetéis de diretoria e lançamentos 
              com pontualidade britânica, equipe própria uniformizada e condições contratuais facilitadas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={getWhatsappCorporate()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-neutral-950 text-white hover:bg-black text-xs font-bold uppercase tracking-[0.15em] rounded-sm transition-all shadow-md whitespace-nowrap"
            >
              <Briefcase className="w-4 h-4 text-white" />
              Solicitar Proposta Corporativa
            </a>

            <button
              onClick={onOpenSimulator}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 border border-neutral-300 hover:border-neutral-900 text-neutral-900 hover:bg-neutral-100 text-xs font-medium uppercase tracking-[0.15em] rounded-sm transition-all cursor-pointer whitespace-nowrap"
            >
              Simular Cardápio Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
