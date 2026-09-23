import { useState } from 'react';
import { Camera, X, Maximize2, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, CONTACT_INFO } from '../data/buffetData';
import { GalleryItem } from '../types/buffet';

export default function GallerySection() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'casamentos':
        return 'Casamento';
      case 'ilhas':
        return 'Ilha Gastronômica';
      case 'gastronomia':
        return 'Alta Gastronomia';
      case '15anos_corporativo':
        return 'Galas & Eventos';
      default:
        return 'Especial';
    }
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#FAFAF9] text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-neutral-500 block font-medium">
            Portfolio Exclusif · Galeria de Eventos Reais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950">
            A arte de servir registrada em{' '}
            <span className="italic text-neutral-600">detalhes inesquecíveis</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Confira detalhes reais dos nossos banquetes, ilhas gastronômicas exuberantes e pratos empratados 
            servidos nos principais espaços e fazendas de Jundiaí, Itatiba, Campinas e Capital.
          </p>
        </div>

        {/* Minimalist Segmented Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-neutral-200 pb-4">
          {[
            { id: 'all', label: 'Todos os Registros' },
            { id: 'casamentos', label: 'Casamentos & Banquetes' },
            { id: 'ilhas', label: 'Ilhas & Grazing Tables' },
            { id: 'gastronomia', label: 'Pratos Empratados' },
            { id: '15anos_corporativo', label: '15 Anos & Galas' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all cursor-pointer relative ${
                filter === tab.id
                  ? 'text-neutral-950 font-semibold'
                  : 'text-neutral-500 hover:text-neutral-950'
              }`}
            >
              {tab.label}
              {filter === tab.id && (
                <span className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-neutral-950 transition-all"></span>
              )}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative h-84 rounded-sm overflow-hidden border border-neutral-200 bg-white cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.82] contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Tag on Top */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] bg-white/90 text-neutral-950 border border-neutral-200 px-3 py-1 rounded-sm backdrop-blur-sm shadow-sm">
                  {getCategoryLabel(item.category)}
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-normal text-white">
                    {item.title}
                  </h4>
                  <Maximize2 className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-neutral-200 font-light line-clamp-2">
                  {item.caption}
                </p>
                <span className="text-[11px] text-neutral-300 block pt-1 font-sans">
                  Fazendas & Espaços Nobres · SP
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white border border-neutral-200 rounded-sm overflow-hidden shadow-2xl text-neutral-900"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                aria-label="Fechar ampliação"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-neutral-950 flex items-center justify-center">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              <div className="p-6 sm:p-8 bg-white border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                    {getCategoryLabel(selectedPhoto.category)}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-neutral-950 mt-1">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1 max-w-xl">
                    {selectedPhoto.caption}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Olá, Fernanda! Vi a foto '${selectedPhoto.title}' no site e gostaria de saber se é possível fazer uma proposta com esse mesmo conceito para o meu evento.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm transition-all whitespace-nowrap text-center shadow-md"
                >
                  Quero Este Formato
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
