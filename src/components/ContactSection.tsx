import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data/buffetData';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const messageTemplate = `*CONTATO VIA SITE - BUFFET FERNANDA PRADO*\n\n` +
    `*Nome:* ${form.name}\n` +
    `*WhatsApp:* ${form.phone}\n` +
    (form.email ? `*E-mail:* ${form.email}\n` : '') +
    `*Mensagem:* ${form.message || 'Gostaria de saber mais sobre a disponibilidade de datas e orçamentos.'}`;

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(messageTemplate)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setErrorMessage('Por favor, informe seu nome e WhatsApp para contato.');
      return;
    }
    setErrorMessage('');
    setSent(true);
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#FAFAF9] text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details & Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-neutral-500 font-medium block">
                Atendimento Personalizado
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950">
                Estamos prontos para criar uma celebração{' '}
                <span className="italic text-neutral-600">inesquecível</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                Nossa assessoria gastronômica está pronta para desenhar uma proposta autoral sob medida 
                para o seu casamento, 15 anos ou gala corporativa.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-sm bg-white border border-neutral-200 shadow-2xs">
                <div className="w-10 h-10 rounded-sm bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-neutral-900" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-neutral-950">
                    Atelier de Degustação & Escritório
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light mt-0.5">
                    {CONTACT_INFO.address.street}, {CONTACT_INFO.address.complement}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light">
                    {CONTACT_INFO.address.neighborhood} - {CONTACT_INFO.address.city} / {CONTACT_INFO.address.state}
                  </p>
                  <span className="text-xs text-neutral-400 font-sans block mt-1">
                    CEP: {CONTACT_INFO.address.cep} · Estacionamento no local
                  </span>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4 p-5 rounded-sm bg-white border border-neutral-200 shadow-2xs">
                <div className="w-10 h-10 rounded-sm bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 flex-shrink-0">
                  <Phone className="w-5 h-5 text-neutral-900" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-neutral-950">
                    Telefone & WhatsApp Oficial
                  </h4>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-neutral-950 hover:underline block mt-0.5"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">
                    Atendimento rápido e esclarecimento de datas
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 rounded-sm bg-white border border-neutral-200 shadow-2xs">
                <div className="w-10 h-10 rounded-sm bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 flex-shrink-0">
                  <Clock className="w-5 h-5 text-neutral-900" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-neutral-950">
                    Horário de Atendimento
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light mt-0.5">
                    {CONTACT_INFO.operatingHours.weekdays}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light">
                    {CONTACT_INFO.operatingHours.saturday}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    {CONTACT_INFO.operatingHours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 bg-white text-neutral-900 p-8 sm:p-10 rounded-sm border border-neutral-200 shadow-xl space-y-6">
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-medium block">
                Mensagem Rápida
              </span>
              <h3 className="font-serif text-2xl font-normal text-neutral-950 mt-1">
                Envie uma solicitação direta para a nossa equipe
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nome completo"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      setErrorMessage('');
                    }}
                    className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    value={form.phone}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                      setErrorMessage('');
                    }}
                    className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                  Como podemos ajudar? (Data prevista, local ou detalhes do evento)
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte um pouco sobre o formato ou sonho do seu evento..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-sm px-4 py-3 rounded-sm outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-sm">
                  {errorMessage}
                </div>
              )}

              {sent ? (
                <div className="space-y-3 p-5 bg-neutral-50 border border-neutral-900 rounded-sm text-center">
                  <p className="text-xs text-neutral-950 font-semibold flex items-center justify-center gap-1.5">
                    <Check className="w-4 h-4 text-neutral-950 stroke-[3]" />
                    Mensagem preparada com sucesso!
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 px-4 bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.15em] rounded-sm shadow-xl transition-all"
                  >
                    <Send className="w-4 h-4 text-white" />
                    Abrir no WhatsApp da Equipe
                  </a>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.18em] py-4 px-6 rounded-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4 text-white" />
                  Iniciar Atendimento no WhatsApp
                </button>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
