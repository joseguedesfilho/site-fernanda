import { useState } from 'react';
import { Calendar, Clock, MapPin, Check, Send, Wine, Sparkles } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../data/buffetData';

interface TastingBookingProps {
  onSuccessNotice?: () => void;
}

export default function TastingBooking({ onSuccessNotice }: TastingBookingProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Casamento');
  const [eventDate, setEventDate] = useState('');
  const [tastingDate, setTastingDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const bookingText = `Olá, equipe do Buffet Fernanda Prado!\n\n` +
    `Gostaria de agendar uma DEGUSTAÇÃO PRIVATIVA EXCLUSIVA no Atelier da Chácara Urbana em Jundiaí:\n\n` +
    `* Nome dos Anfitriões: ${name}\n` +
    `* Telefone/WhatsApp: ${phone}\n` +
    `* Tipo de Evento: ${eventType}\n` +
    `* Data Prevista do Evento: ${eventDate || 'A definir'}\n` +
    `* Preferência de Data/Horário para Prova: ${tastingDate || 'A combinar'}\n\n` +
    `Gostaria de confirmar os horários disponíveis para a degustação com o chef!`;

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(bookingText)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMessage('Por favor, informe seu nome e WhatsApp para contato.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
    if (onSuccessNotice) onSuccessNotice();
  };

  return (
    <section id="degustacao" className="py-20 sm:py-28 bg-[#F5F5F4] text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-neutral-500 block font-medium">
            Atelier Sensorial dos Noivos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950">
            Experimente o sabor e a perfeição{' '}
            <span className="italic text-neutral-600">antes de decidir</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Uma sessão intimista na Chácara Urbana em Jundiaí para você, sua família e assessoria 
            degustarem as criações que encantarão seus convidados.
          </p>
        </div>

        <div className="bg-white text-neutral-900 rounded-sm border border-neutral-200 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Tasting Protocol & Experience */}
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-full flex flex-col justify-between p-8 sm:p-12 overflow-hidden bg-neutral-950">
              <img
                src={IMAGES.grazingTable}
                alt="Degustação Privativa de Casamento Fernanda Prado"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.4] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/40"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-300 font-medium block">
                    Protocolo de Degustação VIP
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                    O que você vivencia em nossa sessão privativa:
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-neutral-200 font-light">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white text-neutral-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <strong className="text-white font-medium block">Mesa Posta Completa:</strong>
                      Prataria, cristais, louças finas e guardanapos de linho montados como no dia do seu evento.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white text-neutral-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <strong className="text-white font-medium block">Sessão Guiada pelo Chef:</strong>
                      Apresentação direta pelo chef executivo, afinando temperos, molhos e tempos de serviço.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white text-neutral-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <strong className="text-white font-medium block">Harmonização & Restrições:</strong>
                      Testes específicos para membros da família com alergias, intolerâncias a glúten ou escolhas veganas.
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/15 text-xs text-neutral-300 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                <span>Rua Capitão Cassiano Ricardo de Toledo, 191 · Chácara Urbana, Jundiaí/SP</span>
              </div>
            </div>

            {/* Right Column: Booking Form */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6 bg-white">
              <div className="space-y-1.5 border-b border-neutral-100 pb-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-medium block">
                  Agenda Exclusiva
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-950">
                  Reserve a Data da sua Prova
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light">
                  Atendimento privativo para casais e anfitriões com data reservada ou pré-agendada.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                    Nome Completo dos Anfitriões *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Mariana & Carlos Eduardo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-sm px-4 py-3 rounded-sm outline-none transition-colors"
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
                      className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                      Tipo de Celebração
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-sm px-4 py-3 rounded-sm outline-none transition-colors cursor-pointer"
                    >
                      <option value="Casamento">Casamento</option>
                      <option value="Festa de 15 Anos">Festa de 15 Anos</option>
                      <option value="Mini Wedding">Mini Wedding</option>
                      <option value="Gala / Corporativo">Gala / Corporativo</option>
                      <option value="Bodas & Celebração">Bodas & Celebração</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                      Data Prevista do Evento
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Outubro / 2026"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                      Preferência de Dia para Degustar
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Terça à tarde ou Sábado"
                      value={tastingDate}
                      onChange={(e) => setTastingDate(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                    />
                  </div>
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
                      Solicitação preparada com sucesso!
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-4 px-4 bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.15em] rounded-sm shadow-xl transition-all"
                    >
                      <Send className="w-4 h-4 text-white" />
                      Confirmar Horário no WhatsApp
                    </a>
                  </div>
                ) : (
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.18em] py-4 px-6 rounded-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4 text-white" />
                      Solicitar Horário de Degustação no WhatsApp
                    </button>
                    <p className="text-[11px] text-neutral-500 text-center mt-2 font-light">
                      Espaço com estacionamento privativo e recepção acolhedora na Chácara Urbana em Jundiaí.
                    </p>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
