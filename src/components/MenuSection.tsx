import { useState } from 'react';
import { 
  Wine, 
  Sparkles, 
  Calendar, 
  FileText, 
  ChevronRight, 
  Check, 
  Clock, 
  Info,
  X
} from 'lucide-react';
import { MENU_ITEMS, CONTACT_INFO } from '../data/buffetData';
import { MenuItem } from '../types/buffet';

interface MenuSectionProps {
  onOpenTastingModal: () => void;
  onOpenSimulator: () => void;
}

const CATEGORIES = [
  { id: 'all', label: 'Todos os Destaques' },
  { id: 'ilhas', label: 'Ilhas Gastronômicas' },
  { id: 'jantares', label: 'Jantares & Risotos' },
  { id: 'finger_foods', label: 'Finger Foods' },
  { id: 'sobremesas', label: 'Pâtisserie & Sobremesas' },
  { id: 'madrugada', label: 'Lanchinho da Madrugada' },
  { id: 'especiais', label: 'Menus Especiais & Inclusivos' }
];

export default function MenuSection({ onOpenTastingModal, onOpenSimulator }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const whatsappPdfUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá, Fernanda Prado! Gostaria de receber o PDF completo com todos os cardápios e opções de ilhas gastronômicas.'
  )}`;

  return (
    <section id="cardapios" className="py-20 sm:py-28 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-neutral-500 block font-medium">
            Carte Gastronomique · Haute Cuisine
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950">
            Uma sinfonia de sabores onde cada prato{' '}
            <span className="italic text-neutral-600">é uma obra de arte</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Ingredientes de procedência nobre, finalizações ao vivo e respeito absoluto à temperatura de serviço. 
            Conheça criações que encantam os paladares mais exigentes em celebrações por todo o Estado de São Paulo.
          </p>
        </div>

        {/* Minimalist Segmented Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center sm:justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-12 border-b border-neutral-200 pb-3 sm:pb-4 px-1 sm:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.15em] font-medium transition-all cursor-pointer whitespace-nowrap rounded-sm ${
                activeCategory === cat.id
                  ? 'bg-neutral-950 text-white font-semibold shadow-xs'
                  : 'bg-neutral-100/80 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDish(item)}
              className="bg-[#FAFAF9] border border-neutral-200/90 hover:border-neutral-400 hover:bg-white rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer group"
            >
              {/* Card Header & Content */}
              <div className="p-6 sm:p-7 space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-neutral-200/70 pb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-medium">
                    {item.highlight || 'Criação Autoral'}
                  </span>
                  <span className="text-[11px] text-neutral-400 group-hover:text-neutral-950 transition-colors flex items-center gap-1 font-sans">
                    <Info className="w-3.5 h-3.5" />
                    Ver detalhes
                  </span>
                </div>

                <h3 className="font-serif text-xl font-normal text-neutral-950 group-hover:text-black transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Dietary & tags */}
                {item.dietary && item.dietary.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-neutral-500 uppercase tracking-wider">
                    {item.dietary.map((diet, idx) => (
                      <span key={idx} className="flex items-center gap-1 text-neutral-700">
                        <Check className="w-3 h-3 text-neutral-950" />
                        {diet.replace('_', ' ')}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Bar */}
              <div className="px-6 py-3.5 bg-neutral-100/70 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
                <span className="text-[11px] uppercase tracking-wider text-neutral-500">
                  Serviço Fernanda Prado
                </span>
                <span className="text-neutral-950 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Degustar no Atelier →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout Bar */}
        <div className="mt-14 p-8 sm:p-10 bg-[#F5F5F4] border border-neutral-200 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-medium block">
              Cardápio Completo & Degustação
            </span>
            <h3 className="font-serif text-2xl text-neutral-950">
              Deseja receber o Catálogo Completo com mais de 80 opções?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-xl">
              Enviamos o PDF em alta resolução com composições sugeridas de casamentos clássicos, rústico-chiques e recepções modernas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={whatsappPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-950 text-white hover:bg-black text-xs font-bold uppercase tracking-[0.15em] rounded-sm transition-all shadow-md"
            >
              <FileText className="w-4 h-4 text-white" />
              Solicitar Cardápio em PDF
            </a>

            <button
              onClick={onOpenTastingModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-neutral-300 hover:border-neutral-900 text-neutral-900 hover:bg-neutral-100 text-xs font-medium uppercase tracking-[0.15em] rounded-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-neutral-700" />
              Agendar Degustação
            </button>
          </div>
        </div>

        {/* Dish Detail Inspection Modal */}
        {selectedDish && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedDish(null)}
          >
            <div
              className="relative max-w-lg w-full bg-white border border-neutral-200 rounded-sm p-6 sm:p-8 shadow-2xl space-y-6 text-neutral-900 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-neutral-400 hover:text-black w-10 h-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1.5 border-b border-neutral-200 pb-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 block font-medium">
                  {selectedDish.highlight || 'Criação Autoral'}
                </span>
                <h3 className="font-serif text-2xl text-neutral-950">
                  {selectedDish.name}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                <p>{selectedDish.description}</p>

                <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-sm space-y-2">
                  <div className="flex items-center gap-2 text-neutral-950 font-medium text-xs">
                    <Wine className="w-4 h-4 text-neutral-900" />
                    Harmonização Sugerida:
                  </div>
                  <p className="text-xs text-neutral-600">
                    Espumante Brut Champenoise, Vinho Tinto Encorpado (Syrah/Cabernet) ou Vinho Branco Sauvignon Blanc de clima frio.
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-neutral-600">
                  <div className="flex justify-between border-b border-neutral-100 py-1">
                    <span>Padrão de Apresentação:</span>
                    <span className="text-neutral-950 font-medium">Porcelana fina & réchauds nobres</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-100 py-1">
                    <span>Cocção & Finalização:</span>
                    <span className="text-neutral-950 font-medium">No local do evento</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Degustação dos Noivos:</span>
                    <span className="text-neutral-950 font-medium">Incluso na sessão privativa</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Olá, Fernanda! Gostei muito do prato "${selectedDish.name}" que vi no site e gostaria de saber se ele pode estar na proposta do meu evento.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3.5 bg-neutral-950 text-white hover:bg-black text-xs font-bold uppercase tracking-[0.15em] rounded-sm transition-all shadow-md"
                >
                  Quero no Meu Cardápio
                </a>
                <button
                  onClick={() => {
                    setSelectedDish(null);
                    onOpenTastingModal();
                  }}
                  className="flex-1 py-3.5 border border-neutral-300 hover:border-neutral-900 text-neutral-900 hover:bg-neutral-100 text-xs font-medium uppercase tracking-[0.15em] rounded-sm transition-all cursor-pointer"
                >
                  Agendar Prova
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
