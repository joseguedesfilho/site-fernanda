import { useState } from 'react';
import { 
  Sparkles, 
  HeartHandshake, 
  Award, 
  MessageCircle, 
  Calendar,
  Quote,
  CheckCircle2,
  Camera
} from 'lucide-react';
import { CONTACT_INFO } from '../data/buffetData';

interface AboutFounderProps {
  onOpenSimulator?: () => void;
  onOpenTastingModal?: () => void;
}

export default function AboutFounder({ onOpenSimulator, onOpenTastingModal }: AboutFounderProps) {
  // Allow user to provide a custom photo URL if desired, with a high-end luxury portrait default
  const [founderPhoto, setFounderPhoto] = useState<string>(
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80'
  );
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [newPhotoUrl, setNewPhotoUrl] = useState('');

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Estava conhecendo a história da Fernanda Prado no site e gostaria de conversar com a equipe para entender como podemos estruturar o buffet do meu evento.'
  )}`;

  const handleUpdatePhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPhotoUrl.trim()) {
      setFounderPhoto(newPhotoUrl.trim());
      setIsEditingPhoto(false);
      setNewPhotoUrl('');
    }
  };

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#FAFAF9] text-neutral-900 border-t border-b border-neutral-200/80 relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neutral-200/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Photograph of Fernanda Prado */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Luxury Frame Border Accent */}
              <div className="relative rounded-sm overflow-hidden border border-neutral-300/80 shadow-2xl bg-white p-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xs bg-neutral-100">
                  <img
                    src={founderPhoto}
                    alt="Fernanda Prado - Fundadora e Diretora Geral do Buffet"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-102"
                  />
                  
                  {/* Subtle Gradient Shade at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Identification Pill */}
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-0.5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-200 block font-light">
                      Liderança & Visão
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-white">
                      Fernanda Prado
                    </h3>
                    <p className="text-xs text-neutral-300 font-light">
                      Fundadora & Diretora Geral
                    </p>
                  </div>
                </div>

                {/* Edit Photo Quick Button (Helpful for the client to swap photo) */}
                <button
                  type="button"
                  onClick={() => setIsEditingPhoto(!isEditingPhoto)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-neutral-800 hover:text-black p-2 rounded-full shadow-md backdrop-blur-xs transition-all cursor-pointer text-xs flex items-center gap-1.5"
                  title="Alterar foto da Fernanda Prado"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-medium pr-1">Trocar foto</span>
                </button>
              </div>

              {/* Experience Floating Badge */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-white border border-neutral-200 p-4 rounded-sm shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-950 text-white flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-serif text-lg font-bold text-neutral-950 block leading-none">
                    12+ Anos
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                    De Excelência & Dedicação
                  </span>
                </div>
              </div>

              {/* Satisfaction Floating Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white border border-neutral-200 py-2.5 px-3.5 rounded-sm shadow-lg items-center gap-2">
                <Sparkles className="w-4 h-4 text-neutral-950" />
                <span className="text-[11px] font-medium text-neutral-800 uppercase tracking-wider">
                  Mais de 600 Eventos Realizados
                </span>
              </div>
            </div>

            {/* In-place Photo URL Modal / Box */}
            {isEditingPhoto && (
              <form onSubmit={handleUpdatePhoto} className="p-4 bg-white border border-neutral-300 rounded-sm shadow-lg space-y-2 mt-4 animate-in fade-in duration-200">
                <label className="block text-xs font-semibold text-neutral-800">
                  Inserir link da foto da Fernanda Prado:
                </label>
                <input
                  type="url"
                  placeholder="https://... (URL da imagem)"
                  value={newPhotoUrl}
                  onChange={(e) => setNewPhotoUrl(e.target.value)}
                  className="w-full text-xs p-2.5 bg-neutral-50 border border-neutral-300 rounded-sm focus:border-neutral-950 outline-none"
                  required
                />
                <div className="flex gap-2 justify-end pt-1">
                  <button
                    type="button"
                    onClick={() => setIsEditingPhoto(false)}
                    className="px-3 py-1.5 text-xs text-neutral-600 hover:text-neutral-950 cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs bg-neutral-950 hover:bg-black text-white font-medium rounded-sm cursor-pointer"
                  >
                    Salvar Foto
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Editorial Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6 pt-4 lg:pt-0">
            
            <div className="space-y-3">
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-neutral-500 block font-medium">
                A Alma & O Olhar por Trás da Marca
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950 leading-tight">
                A paixão pela arte de receber e o{' '}
                <span className="italic text-neutral-600">cuidado obsessivo por cada detalhe</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              <p>
                À frente da empresa há mais de uma década, <strong className="font-medium text-neutral-950">Fernanda Prado</strong> fundou o buffet 
                movida por um propósito claro: elevar a experiência gastronômica de eventos sociais e corporativos 
                a um patamar de alta hospitalidade, combinando sabor memorável, requinte visual e respeito absoluto 
                ao sonho de cada família.
              </p>
              
              <p>
                Como proprietária e diretora executiva, Fernanda não encara eventos como números em uma planilha. 
                Ela supervisiona pessoalmente o planejamento de cada celebração, definindo os padrões de serviço junto 
                ao nosso <strong className="font-medium text-neutral-950">chef executivo</strong>, coordenando os maîtres 
                e garantindo que a equipe própria trabalhe com sincronia impecável.
              </p>
            </div>

            {/* Signature Quote Box */}
            <div className="p-6 bg-white border-l-2 border-neutral-950 border-t border-r border-b border-neutral-200 rounded-sm shadow-2xs space-y-3">
              <Quote className="w-6 h-6 text-neutral-400 rotate-180" />
              <p className="font-serif text-base sm:text-lg italic text-neutral-900 leading-relaxed">
                "Receber bem não é apenas servir pratos extraordinários. É acolher cada convidado com generosidade 
                e permitir que os anfitriões vivam o dia mais importante de suas vidas com serenidade absoluta, 
                sabendo que tudo está em mãos dedicadas."
              </p>
              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="font-serif text-sm font-semibold text-neutral-950 block">
                    Fernanda Prado
                  </span>
                  <span className="text-[11px] text-neutral-500 uppercase tracking-wider block">
                    Diretora & Fundadora
                  </span>
                </div>
              </div>
            </div>

            {/* Key Pillars of her Leadership */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white border border-neutral-200 rounded-sm space-y-1.5 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-950 mb-2">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-neutral-950">
                  Atendimento Próximo
                </h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Escuta atenta das expectativas dos noivos desde a primeira reunião até o brinde final.
                </p>
              </div>

              <div className="p-4 bg-white border border-neutral-200 rounded-sm space-y-1.5 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-950 mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-neutral-950">
                  Rigor Operacional
                </h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Comando direto de equipe própria, uniformes alinhados e montagem com horas de antecedência.
                </p>
              </div>

              <div className="p-4 bg-white border border-neutral-200 rounded-sm space-y-1.5 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-950 mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-neutral-950">
                  Estética & Louçaria
                </h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Curadoria de réchauds modernos, taças de cristal e arranjos florais nas ilhas gastronômicas.
                </p>
              </div>
            </div>

            {/* Conversion Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
              {onOpenTastingModal && (
                <button
                  type="button"
                  onClick={onOpenTastingModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-neutral-950 hover:bg-black text-white text-xs font-bold uppercase tracking-[0.16em] rounded-sm transition-all shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  Agendar Degustação dos Noivos
                </button>
              )}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 border border-neutral-300 hover:border-neutral-950 text-neutral-900 hover:bg-white text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-neutral-900" />
                Conversar no WhatsApp
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
