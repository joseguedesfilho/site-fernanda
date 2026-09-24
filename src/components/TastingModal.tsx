import { useState } from 'react';
import { X, Wine, Send, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data/buffetData';

interface TastingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TastingModal({ isOpen, onClose }: TastingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Casamento');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const message = `*SOLICITAÇÃO DE DEGUSTAÇÃO PRIVATIVA - ATELIER FERNANDA PRADO*\n\n` +
    `Olá, equipe do Buffet Fernanda Prado!\n` +
    `Gostaria de agendar uma sessão exclusiva no Atelier Gastronômico da Chácara Urbana em Jundiaí:\n\n` +
    `👤 *Anfitriões:* ${name}\n` +
    `📱 *WhatsApp:* ${phone}\n` +
    `💍 *Tipo de Evento:* ${eventType}\n` +
    `📅 *Data Prevista do Evento:* ${date || 'A definir'}\n\n` +
    `Gostaria de consultar as próximas datas disponíveis para a degustação com o chef.`;

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMessage('Por favor, informe seu nome e WhatsApp para contato.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative max-w-lg w-full bg-white text-neutral-900 border border-neutral-200 rounded-sm p-5 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-neutral-400 hover:text-neutral-950 w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 border-b border-neutral-100 pb-4">
          <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 block font-medium">
            Atelier Sensorial dos Noivos
          </span>
          <h3 className="font-serif text-2xl text-neutral-950 font-normal">
            Agendar Degustação Privativa
          </h3>
          <p className="text-xs text-neutral-600 font-light">
            Sessão exclusiva com mesa posta e prova guiada pelo chef executivo em Jundiaí.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
              Nome dos Anfitriões *
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Mariana Silveira & Carlos Eduardo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-base sm:text-sm px-4 py-3 rounded-sm outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                WhatsApp com DDD *
              </label>
              <input
                type="tel"
                required
                placeholder="(11) 98765-4321"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-base sm:text-sm px-4 py-3 rounded-sm outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                Tipo de Evento
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-base sm:text-sm px-4 py-3 rounded-sm outline-none transition-colors cursor-pointer"
              >
                <option value="Casamento">Casamento</option>
                <option value="Festa de 15 Anos">Festa de 15 Anos</option>
                <option value="Mini Wedding">Mini Wedding</option>
                <option value="Gala / Corporativo">Gala / Corporativo</option>
                <option value="Bodas & Celebração">Bodas & Celebração</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
              Data Prevista do Evento
            </label>
            <input
              type="text"
              placeholder="Ex: Outubro / 2026"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-base sm:text-sm px-4 py-3 rounded-sm outline-none transition-colors"
            />
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-sm">
              {errorMessage}
            </div>
          )}

          {submitted ? (
            <div className="space-y-3 p-5 bg-neutral-50 border border-neutral-900 rounded-sm text-center">
              <p className="text-xs text-neutral-950 font-semibold flex items-center justify-center gap-1.5">
                <Check className="w-4 h-4 text-neutral-950 stroke-[3]" />
                Solicitação pronta com sucesso!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setTimeout(() => onClose(), 1500);
                }}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.15em] rounded-sm shadow-md transition-all text-center"
              >
                <Send className="w-4 h-4 text-white shrink-0" />
                Confirmar no WhatsApp
              </a>
            </div>
          ) : (
            <div className="pt-2">
              <button
                type="submit"
                className="w-full cursor-pointer bg-neutral-950 hover:bg-black text-white font-bold text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] py-4 px-4 sm:px-6 rounded-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01] text-center"
              >
                <Send className="w-4 h-4 text-white shrink-0" />
                Solicitar Data de Degustação
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
