import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { FAQ_LIST, CONTACT_INFO } from '../data/buffetData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappDirect = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá, equipe do Buffet Fernanda Prado! Gostaria de esclarecer uma dúvida sobre os serviços do buffet para o meu evento.'
  )}`;

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white text-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-neutral-500 block font-medium">
            Esclarecimentos & Transparência
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950">
            Perguntas frequentes dos anfitriões{' '}
            <span className="italic text-neutral-600">mais atentos</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Reunimos as respostas essenciais para que você planeje seu evento com segurança 
            absoluta sobre contratos, degustações, montagem e formas de pagamento.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAFAF9] border border-neutral-200 rounded-sm overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-100/60 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-neutral-950">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-200/60 pt-4 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct question help */}
        <div className="mt-12 text-center p-6 bg-[#F5F5F4] border border-neutral-200 rounded-sm">
          <p className="text-xs sm:text-sm text-neutral-700 font-light mb-3">
            Sua dúvida específica não está listada aqui? Fale diretamente com a equipe do Buffet Fernanda Prado.
          </p>
          <a
            href={whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-neutral-950 hover:text-black transition-colors border-b border-neutral-950 pb-0.5"
          >
            Tirar dúvida direta no WhatsApp
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
