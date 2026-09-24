import { Star, Check, ArrowRight, Sparkles, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../data/buffetData';

interface HeroProps {
  onOpenSimulator: () => void;
  onOpenTastingModal: () => void;
}

export default function Hero({ onOpenSimulator, onOpenTastingModal }: HeroProps) {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá, Fernanda! Gostaria de consultar disponibilidade de data e receber uma proposta personalizada para meu evento.'
  )}`;

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center bg-[#FAFAF9] overflow-hidden">
      {/* Background Image with luminous warm luxury treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Banquete de Casamento de Luxo Fernanda Prado Buffet"
          className="w-full h-full object-cover object-center brightness-[0.92] contrast-[1.05] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft high-key editorial gradients for crisp typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF9] via-[#FAFAF9]/92 to-[#FAFAF9]/75 lg:to-[#FAFAF9]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-transparent to-[#FAFAF9]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Hero Pitch */}
          <div className="lg:col-span-8 space-y-7">
            
            {/* Editorial Kicker & Credibility Bar */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-neutral-500 font-sans font-medium">
                <span>Haute Gastronomie</span>
                <span className="text-neutral-300">·</span>
                <span>Jundiaí & Grande SP</span>
                <span className="text-neutral-300">·</span>
                <span className="text-neutral-900 font-semibold">Casamentos & Galas</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <div className="flex text-neutral-900">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-neutral-900 text-neutral-900" />
                  ))}
                </div>
                <span className="text-xs text-neutral-900 font-medium">
                  5.0 no Google & Casamentos.com.br
                </span>
                <span className="text-neutral-300">·</span>
                <span className="text-xs text-neutral-600">
                  Mais de 850 celebrações inesquecíveis
                </span>
              </div>
            </div>

            {/* Main Headline - Editorial Sophistication */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-950 leading-[1.18] sm:leading-[1.12] tracking-tight max-w-3xl">
              A alta gastronomia que transforma o seu grande dia em uma{' '}
              <span className="italic font-light text-neutral-700">
                memória sensorial inesquecível.
              </span>
            </h1>

            {/* Persuasive Subtitle */}
            <p className="text-sm sm:text-lg text-neutral-700 font-light max-w-2xl leading-relaxed">
              Ilhas gastronômicas exuberantes, jantares autorais e um serviço impecável com brigada 100% própria. 
              Para quem não abre mão de ver seus convidados encantados do primeiro canapé à última mordida da madrugada.
            </p>

            {/* Hallmarks of Excellence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-1 text-xs sm:text-sm text-neutral-800">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-neutral-950 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                <span>Degustação privativa para aprovação do menu na Chácara Urbana</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-neutral-950 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                <span>Brigada própria treinada (zero improviso de garçons avulsos)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-neutral-950 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                <span>Cardápio 100% customizado às memórias afetivas dos noivos</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-neutral-950 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                <span>Alta gastronomia inclusiva para celíacos, veganos e restrições</span>
              </div>
            </div>

            {/* High-conversion action buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenSimulator}
                className="cursor-pointer group relative inline-flex items-center justify-center px-5 sm:px-8 py-4 text-[11px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-white bg-black hover:bg-neutral-800 rounded-sm shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] text-center"
              >
                <Sparkles className="w-3.5 h-3.5 mr-2 text-white shrink-0" />
                Simular Cardápio & Proposta Sob Medida
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <button
                onClick={onOpenTastingModal}
                className="cursor-pointer inline-flex items-center justify-center px-5 sm:px-7 py-3.5 sm:py-4 text-[11px] sm:text-xs font-medium tracking-[0.14em] sm:tracking-[0.18em] uppercase text-neutral-900 bg-white/90 hover:bg-white hover:text-black border border-neutral-300 rounded-sm transition-all shadow-sm backdrop-blur-sm text-center"
              >
                <Calendar className="w-3.5 h-3.5 mr-2 text-neutral-700 shrink-0" />
                Agendar Degustação dos Noivos
              </button>
            </div>

            {/* Reassurance text */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-neutral-700 shrink-0" />
              <span>Atendimento exclusivo com assessoria gastronômica e resposta em poucos minutos.</span>
            </div>
          </div>

          {/* Side Floating Atelier Feature Card */}
          <div className="lg:col-span-4 mt-6 lg:mt-0">
            <div className="bg-white/95 border border-neutral-200/90 p-5 sm:p-8 rounded-sm shadow-2xl relative backdrop-blur-md space-y-5">
              
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 block font-medium">
                    Atelier Gastronômico
                  </span>
                  <h3 className="font-serif text-xl font-normal text-neutral-950 mt-0.5">
                    Fernanda Prado
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-900 bg-neutral-100 font-serif text-sm">
                  FP
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-neutral-700">
                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500">Especialidade:</span>
                  <span className="text-neutral-950 font-medium text-right">Casamentos & 15 Anos de Luxo</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500">Formato Assinatura:</span>
                  <span className="text-neutral-950 font-medium text-right">Ilhas Gastronômicas Nobres</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500">Raio de Atendimento:</span>
                  <span className="text-neutral-950 font-medium text-right">Jundiaí, Campinas, Capital & SP</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500">Espaço Degustação:</span>
                  <span className="text-neutral-950 font-medium text-right">Chácara Urbana, Jundiaí</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-neutral-500">Disponibilidade 2026/2027:</span>
                  <span className="text-neutral-950 font-semibold text-right">Agenda Aberta</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 bg-neutral-950 text-white hover:bg-black text-xs font-bold uppercase tracking-[0.15em] rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  Consultar Minha Data no WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
