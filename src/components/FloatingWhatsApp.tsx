import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/buffetData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip prompt after 4 seconds to boost conversion
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá, Fernanda! Estava olhando o site e gostaria de tirar uma dúvida sobre disponibilidade de data para o meu evento.'
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Speech bubble tooltip */}
      {showTooltip && (
        <div className="mb-2.5 mr-0.5 bg-white text-neutral-900 border border-neutral-200 p-3 sm:p-3.5 rounded-lg shadow-2xl max-w-[calc(100vw-3rem)] sm:max-w-xs animate-bounce-subtle relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-neutral-400 hover:text-neutral-950 p-1 cursor-pointer w-6 h-6 flex items-center justify-center rounded-full hover:bg-neutral-100"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-950">
              Atendimento Online
            </span>
          </div>
          <p className="text-xs text-neutral-600">
            Olá! Planejando um casamento ou evento? Clique aqui para falar direto com nossa equipe no WhatsApp!
          </p>
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp com Fernanda Prado Buffet"
        className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white" />
        <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider pr-1">
          WhatsApp Buffet
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}
