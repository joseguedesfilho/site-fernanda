import { Phone, MapPin, Clock, Award, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/buffetData';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenTastingModal: () => void;
}

export default function Footer({ onScrollToSection, onOpenTastingModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-neutral-600 border-t border-neutral-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center bg-neutral-100 text-neutral-950 font-serif text-base font-semibold">
                FP
              </div>
              <div>
                <span className="block font-serif text-xl font-normal tracking-wide text-neutral-950">
                  Fernanda Prado
                </span>
                <span className="block text-[9px] tracking-[0.3em] uppercase text-neutral-500 font-sans font-medium">
                  Haute Gastronomie & Eventos
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Alta gastronomia, ilhas nobres e serviço com brigada 100% própria. 
              Referência em casamentos inesquecíveis, festas de 15 anos e galas corporativas 
              em Jundiaí, Campinas e em todo o Estado de São Paulo.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-700 font-light pt-1">
              <Award className="w-4 h-4 text-neutral-900" />
              <span>Avaliação 5.0 estrelas máxima no Google & Casamentos.com.br</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-medium text-neutral-950 uppercase tracking-[0.2em]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 font-light">
              <li>
                <button
                  onClick={() => onScrollToSection('hero')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('cardapios')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Cardápios & Ilhas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('simulador')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer text-neutral-950 font-medium"
                >
                  Simulador Sob Medida
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('degustacao')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Degustação Privativa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('diferenciais')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  O Padrão FP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('galeria')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Galeria de Fotos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('clientes')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Clientes Atendidos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('depoimentos')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Depoimentos Reais
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-medium text-neutral-950 uppercase tracking-[0.2em]">
              Regiões Atendidas
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600 font-light">
              {CONTACT_INFO.serviceAreas.map((area, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-neutral-500 pt-1 font-light">
              Realizamos também casamentos e eventos de destino (Destination Weddings) sob consulta prévia.
            </p>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-medium text-neutral-950 uppercase tracking-[0.2em]">
              Atelier em Jundiaí
            </h4>
            <div className="space-y-2 text-xs text-neutral-600 font-light">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-900 flex-shrink-0 mt-0.5" />
                <span>
                  {CONTACT_INFO.address.street}, {CONTACT_INFO.address.complement}<br />
                  {CONTACT_INFO.address.neighborhood} - {CONTACT_INFO.address.city}/{CONTACT_INFO.address.state}<br />
                  CEP: {CONTACT_INFO.address.cep}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.whatsappNumber}`}
                  className="text-neutral-950 hover:underline font-medium"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-neutral-900 flex-shrink-0 mt-0.5" />
                <span>
                  {CONTACT_INFO.operatingHours.weekdays}<br />
                  {CONTACT_INFO.operatingHours.saturday}
                </span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTastingModal}
                className="w-full text-center py-2.5 px-3 bg-neutral-950 hover:bg-black text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-sm transition-all cursor-pointer shadow-sm"
              >
                Agendar Degustação Privativa
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <p>
            © {new Date().getFullYear()} Fernanda Prado Buffet & Eventos. Todos os direitos reservados. Alta Gastronomia e Concepção de Eventos.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer font-medium"
          >
            Voltar ao topo
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
