import { Star, Quote, Check, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/buffetData';

interface TestimonialsProps {
  onOpenSimulator: () => void;
}

export default function Testimonials({ onOpenSimulator }: TestimonialsProps) {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-[#FAFAF9] text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-neutral-500 block font-medium">
            Témoignages · Memórias Inesquecíveis
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950">
            A satisfação absoluta de quem viveu a{' '}
            <span className="italic text-neutral-600">experiência gastronômica</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Casais, cerimonialistas conceituadas e anfitriões corporativos relatam a tranquilidade 
            e o encanto de contratar o Buffet Fernanda Prado.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2">
            <div className="flex text-neutral-950">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-neutral-950 text-neutral-950" />
              ))}
            </div>
            <span className="text-xs text-neutral-700 font-medium">
              Nota 5.0 Máxima no Google & Casamentos.com.br
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-neutral-200 p-8 sm:p-9 rounded-sm shadow-sm hover:border-neutral-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-neutral-950">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-neutral-950 text-neutral-950" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-300" />
                </div>

                <p className="text-sm sm:text-base text-neutral-800 font-light leading-relaxed italic font-serif">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-medium text-neutral-950">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-light">{item.role}</p>
                  <p className="text-[11px] text-neutral-400 font-sans mt-0.5">{item.location}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-800 bg-neutral-100 px-3 py-1 rounded-sm border border-neutral-200">
                  <Check className="w-3.5 h-3.5 text-neutral-950 stroke-[2.5]" />
                  Depoimento Verificado
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenSimulator}
            className="cursor-pointer inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-950 hover:text-black transition-colors border-b border-neutral-950 pb-1"
          >
            Simular o cardápio exclusivo para o seu evento
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
