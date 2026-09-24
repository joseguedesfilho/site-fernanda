import { useState } from 'react';
import { 
  Sparkles, 
  Users, 
  UtensilsCrossed, 
  Send, 
  Check, 
  Calendar, 
  Wine, 
  Heart, 
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Briefcase,
  CalendarCheck,
  ChefHat,
  Clock
} from 'lucide-react';
import { CONTACT_INFO } from '../data/buffetData';

interface BudgetState {
  eventType: string;
  guestCount: number;
  serviceStyle: string;
  extras: string[];
  dietaryNeeds: string[];
  clientName: string;
  clientPhone: string;
  eventDate: string;
  eventCity: string;
}

const EVENT_TYPES = [
  { id: 'casamento', label: 'Casamento', desc: 'Campo, praia, fazenda ou espaço clássico', iconType: 'heart' },
  { id: '15anos', label: 'Festa de 15 Anos', desc: 'Alta gastronomia e pista vibrante para jovens e adultos', iconType: 'sparkles' },
  { id: 'miniwedding', label: 'Mini Wedding', desc: 'Até 100 convidados com serviço intimista e exclusivo', iconType: 'wine' },
  { id: 'corporativo', label: 'Gala & Corporativo', desc: 'Brunches executivos, almoços de diretoria ou coquetéis', iconType: 'briefcase' },
  { id: 'bodas', label: 'Bodas & Celebrações', desc: 'Celebrações de família com gastronomia afetiva autoral', iconType: 'calendar' }
];

const SERVICE_STYLES = [
  {
    id: 'ilha_completa',
    name: 'Ilha Gastronômica Nobre + Jantar Franco-Americano',
    tag: 'Assinatura Fernanda Prado (Mais Escolhido)',
    desc: 'Mesa monumental de antepastos nobres, queijos premiados, favos de mel e charcutaria na recepção + Jantar quente com 2 carnes nobres (ex: Filé Mignon ao Demi-Glace), massa artesanal recheada e risoto clássico.',
    recommendedFor: 'Casamentos & 15 Anos com fartura ininterrupta'
  },
  {
    id: 'jantar_empratado',
    name: 'Jantar Empratado À la Carte (Alta Gastronomia Francesa)',
    tag: 'Máxima Exclusividade & Requinte',
    desc: 'Serviço sincronizado à mesa com entrada autoral, prato principal requintado (como Tornedor com Aligot Trufado ou Robalo em Crosta de Ervas) e sobremesa empratada com finalização artística individual.',
    recommendedFor: 'Eventos de gala, Mini Weddings e celebrações intimistas'
  },
  {
    id: 'coquetel_finger',
    name: 'Coquetel Volante Sofisticado + Ilhas Temáticas Quentes',
    tag: 'Moderno & Dinâmico',
    desc: 'Mais de 14 tipos de finger foods quentes e frios circulando continuamente + 2 ilhas gastronômicas ativas para os convidados degustarem pratos quentes e risotos com fluidez na pista.',
    recommendedFor: 'Casamentos modernos, festas de 15 anos e coquetéis noturnos'
  },
  {
    id: 'corporativo_premium',
    name: 'Brunch & Almoço Executivo de Alta Hotelaria',
    tag: 'Corporativo & Institucional',
    desc: 'Pães de fermentação natural, croissants artesanais, tábuas de frios finos, quiches, saladas contemporâneas, carnes laminadas, cafés especiais e confeitaria fina.',
    recommendedFor: 'Convenções, reuniões de diretoria e lançamentos imobiliários'
  }
];

const EXTRAS_OPTIONS = [
  { id: 'madrugada', label: 'Lanchinho da Madrugada Gourmet', desc: 'Mini burgers de costela angus no brioche artesanal + mini churros quentinhos na pista' },
  { id: 'mar', label: 'Estação de Ceviches & Frutos do Mar', desc: 'Ceviche de robalo ao leite de tigre, tartar de salmão com gergelim torrado e lâminas de polvo' },
  { id: 'verrines', label: 'Mesa de Verrines & Pâtisserie Francesa', desc: 'Taças individuais com chocolate belga Callebaut, fava de baunilha, coulis de frutas vermelhas' },
  { id: 'showcooking', label: 'Show Cooking de Risotos e Massas ao Vivo', desc: 'Chef executivo finalizando pratos fumegantes diante dos convidados em réchauds de prata' },
  { id: 'welcome', label: 'Welcome Drink Gastronômico', desc: 'Recepção com mocktails botânicos, água aromatizada em ânforas de cristal e espumante de boas-vindas' }
];

const DIETARY_OPTIONS = [
  { id: 'celiacos', label: 'Menu Seguro para Celíacos (Sem Glúten & Sem Contaminação)' },
  { id: 'veganos', label: 'Opções Autênticas Veganas e Vegetarianas de Alta Gastronomia' },
  { id: 'lactose', label: 'Opções Sem Lactose com Queijos e Molhos Especiais' },
  { id: 'infantil', label: 'Cardápio Especial Kids com Ingredientes Saudáveis e Frescos' }
];

export default function BudgetCalculator() {
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState<BudgetState>({
    eventType: 'casamento',
    guestCount: 150,
    serviceStyle: 'ilha_completa',
    extras: ['madrugada', 'verrines'],
    dietaryNeeds: ['celiacos', 'veganos'],
    clientName: '',
    clientPhone: '',
    eventDate: '',
    eventCity: 'Jundiaí / Região'
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleExtra = (id: string) => {
    setBudget(prev => {
      const exists = prev.extras.includes(id);
      return {
        ...prev,
        extras: exists ? prev.extras.filter(item => item !== id) : [...prev.extras, id]
      };
    });
  };

  const toggleDietary = (id: string) => {
    setBudget(prev => {
      const exists = prev.dietaryNeeds.includes(id);
      return {
        ...prev,
        dietaryNeeds: exists ? prev.dietaryNeeds.filter(item => item !== id) : [...prev.dietaryNeeds, id]
      };
    });
  };

  // Operational metrics calculated in real-time
  const estimatedWaiters = Math.max(4, Math.ceil(budget.guestCount / 11));
  const estimatedKitchen = Math.max(3, Math.ceil(budget.guestCount / 35) + 2);
  const estimatedStations = budget.guestCount > 200 ? '2 Ilhas Monumentais Duplas' : '1 Ilha Nobre Central Panorâmica';

  const renderEventIcon = (type: string, isSelected: boolean) => {
    const iconClass = `w-5 h-5 ${isSelected ? 'text-white' : 'text-neutral-800'}`;
    switch (type) {
      case 'heart':
        return <Heart className={iconClass} />;
      case 'wine':
        return <Wine className={iconClass} />;
      case 'briefcase':
        return <Briefcase className={iconClass} />;
      case 'calendar':
        return <Calendar className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const getWhatsAppMessage = () => {
    const selectedEvent = EVENT_TYPES.find(e => e.id === budget.eventType)?.label || budget.eventType;
    const selectedStyle = SERVICE_STYLES.find(s => s.id === budget.serviceStyle)?.name || budget.serviceStyle;
    const selectedExtras = EXTRAS_OPTIONS.filter(e => budget.extras.includes(e.id)).map(e => `  • ${e.label}`).join('\n');
    const selectedDietary = DIETARY_OPTIONS.filter(d => budget.dietaryNeeds.includes(d.id)).map(d => d.label).join(', ');

    return `*SOLICITAÇÃO DE PROPOSTA VIP - BUFFET FERNANDA PRADO*\n\n` +
      `Olá, equipe do Buffet Fernanda Prado!\n` +
      `Gostaria de uma proposta personalizada estruturada através do simulador do site:\n\n` +
      `*Nome:* ${budget.clientName || 'Cliente'}\n` +
      `*WhatsApp:* ${budget.clientPhone || 'A informar'}\n` +
      `*Tipo de Evento:* ${selectedEvent}\n` +
      `*Convidados Estimados:* ${budget.guestCount} pessoas\n` +
      `*Formato Gastronômico:* ${selectedStyle}\n` +
      `*Data Prevista:* ${budget.eventDate || 'A definir'}\n` +
      `*Cidade/Local do Evento:* ${budget.eventCity || 'Jundiaí / Região'}\n\n` +
      (selectedExtras ? `*Módulos Especiais Selecionados:*\n${selectedExtras}\n\n` : '') +
      (selectedDietary ? `*Restrições Alimentares na Família:* ${selectedDietary}\n\n` : '') +
      `*Estimativa de Estrutura Simulada:*\n` +
      `  - Brigada de Garçons: ~${estimatedWaiters} profissionais\n` +
      `  - Brigada de Cozinha: ~${estimatedKitchen} chefs e auxiliares\n` +
      `  - Estações Gastronômicas: ${estimatedStations}\n\n` +
      `Gostaria de verificar a disponibilidade na agenda e agendar uma Degustação Privativa dos Noivos no espaço de Jundiaí.`;
  };

  const whatsappGeneratedUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage())}`;

  const handleValidateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!budget.clientName.trim() || !budget.clientPhone.trim()) {
      setErrorMessage('Por favor, informe seu nome completo e WhatsApp para prosseguir com a proposta.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  const stepsList = [
    { num: 1, label: 'Celebração', shortLabel: 'Evento' },
    { num: 2, label: 'Convidados & Brigada', shortLabel: 'Pessoas' },
    { num: 3, label: 'Formato Gastronômico', shortLabel: 'Formato' },
    { num: 4, label: 'Módulos Autorais', shortLabel: 'Módulos' },
    { num: 5, label: 'Proposta Sob Medida', shortLabel: 'Proposta' }
  ];

  return (
    <section id="simulador" className="py-20 sm:py-28 bg-[#FAFAF9] text-neutral-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-neutral-500 block font-medium">
            Atelier Gastronômico Sob Medida
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950">
            Conceba a estrutura do seu evento em{' '}
            <span className="italic text-neutral-600">poucos cliques</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Simule convidados, formato e módulos especiais. Nosso simulador calcula o dimensionamento operacional 
            da brigada e envia o detalhamento direto para o WhatsApp para uma proposta formal.
          </p>
        </div>

        {/* Minimalist Editorial Step Progress */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
          {/* Mobile step progress summary */}
          <div className="sm:hidden flex items-center justify-between mb-2 text-xs">
            <span className="font-serif font-medium text-neutral-950">
              Etapa {step} de 5: <span className="font-sans font-normal text-neutral-600">{stepsList[step - 1].label}</span>
            </span>
            <span className="text-[11px] text-neutral-500 font-mono font-medium">{Math.round((step / 5) * 100)}%</span>
          </div>

          <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center">
            {stepsList.map((s) => {
              const isActive = step === s.num;
              const isPast = step > s.num;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setStep(s.num)}
                  className="group flex flex-col items-center cursor-pointer focus:outline-none py-1"
                  aria-label={`Ir para etapa ${s.num}: ${s.label}`}
                >
                  <div className={`w-full h-[2.5px] mb-2 sm:mb-3 transition-colors rounded-full ${
                    isActive ? 'bg-neutral-950' : (isPast ? 'bg-neutral-600' : 'bg-neutral-200')
                  }`} />
                  <span className={`text-[8px] sm:text-xs tracking-tight sm:tracking-wider uppercase font-medium transition-colors truncate max-w-full ${
                    isActive ? 'text-neutral-950 font-semibold' : 'text-neutral-400 group-hover:text-neutral-800'
                  }`}>
                    <span className="sm:hidden">{s.num}. {s.shortLabel}</span>
                    <span className="hidden sm:inline">{s.num}. {s.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Content Container */}
        <div className="bg-white border border-neutral-200 rounded-sm p-4 sm:p-10 shadow-xl">
          
          {/* STEP 1: Tipo de Evento */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="border-b border-neutral-100 pb-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 block font-medium">
                  Etapa 01 de 05
                </span>
                <h3 className="font-serif text-2xl text-neutral-950 mt-1">
                  Qual tipo de celebração você está planejando?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Adequamos o ritmo de serviço, o perfil das louças e a montagem das ilhas à essência de cada comemoração.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {EVENT_TYPES.map((type) => {
                  const isSelected = budget.eventType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setBudget({ ...budget, eventType: type.id })}
                      className={`text-left p-5 rounded-sm border transition-all cursor-pointer relative ${
                        isSelected
                          ? 'border-neutral-950 bg-neutral-950 text-white shadow-lg'
                          : 'border-neutral-200 bg-neutral-50/60 hover:border-neutral-400 hover:bg-white text-neutral-900'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-sm border flex items-center justify-center mb-3 ${
                        isSelected ? 'bg-neutral-900 border-neutral-700' : 'bg-white border-neutral-200'
                      }`}>
                        {renderEventIcon(type.iconType, isSelected)}
                      </div>
                      <h4 className={`font-serif text-lg font-medium mb-1 ${isSelected ? 'text-white' : 'text-neutral-900'}`}>
                        {type.label}
                      </h4>
                      <p className={`text-xs font-light leading-relaxed ${isSelected ? 'text-neutral-300' : 'text-neutral-600'}`}>{type.desc}</p>
                      {isSelected && (
                        <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-white flex items-center justify-center text-neutral-950">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.15em] px-6 sm:px-7 py-3.5 rounded-sm transition-all cursor-pointer shadow-md text-center"
                >
                  Próximo: Convidados & Estrutura
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Número de Convidados & Dimensionamento Operacional */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="border-b border-neutral-100 pb-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 block font-medium">
                  Etapa 02 de 05
                </span>
                <h3 className="font-serif text-2xl text-neutral-950 mt-1">
                  Quantos convidados você planeja receber?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Nossa cozinha calcula a proporção de réchauds, fornos móveis e brigada de salão para garantir zero filas e pratos na temperatura ideal.
                </p>
              </div>

              <div className="py-4 space-y-8 max-w-2xl mx-auto">
                {/* Guest counter box */}
                <div className="text-center space-y-2">
                  <span className="font-serif text-6xl sm:text-7xl font-light text-neutral-950 tracking-tight">
                    {budget.guestCount}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 block">
                    Convidados Estimados
                  </span>
                </div>

                {/* Slider */}
                <div className="space-y-3">
                  <input
                    type="range"
                    min="30"
                    max="500"
                    step="10"
                    value={budget.guestCount}
                    onChange={(e) => setBudget({ ...budget, guestCount: Number(e.target.value) })}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-500">
                    <span>30 (Mini Wedding)</span>
                    <span>150 (Casamento Médio)</span>
                    <span>300 (Grande Festa)</span>
                    <span>500+ (Gala)</span>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap justify-center gap-2">
                  {[50, 80, 120, 150, 200, 250, 300].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setBudget({ ...budget, guestCount: count })}
                      className={`text-xs px-3.5 py-1.5 rounded-sm border cursor-pointer transition-colors ${
                        budget.guestCount === count
                          ? 'bg-neutral-950 text-white font-semibold border-neutral-950'
                          : 'bg-neutral-100 text-neutral-800 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {count} pessoas
                    </button>
                  ))}
                </div>

                {/* Operational Dimensioning Box */}
                <div className="bg-[#F9F9F8] border border-neutral-200 p-5 rounded-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-800">
                    <ChefHat className="w-4 h-4 text-neutral-950" />
                    Dimensionamento Operacional Previsto para {budget.guestCount} Pessoas:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                    <div className="bg-white p-3 rounded-sm border border-neutral-200 shadow-2xs">
                      <span className="text-neutral-500 block text-[10px] uppercase">Brigada de Garçons:</span>
                      <span className="text-neutral-950 font-medium text-sm mt-0.5 block">~{estimatedWaiters} garçons dedicados</span>
                      <span className="text-[10px] text-neutral-500">Proporção de 1 para ~10 convidados</span>
                    </div>
                    <div className="bg-white p-3 rounded-sm border border-neutral-200 shadow-2xs">
                      <span className="text-neutral-500 block text-[10px] uppercase">Chefs & Cozinha:</span>
                      <span className="text-neutral-950 font-medium text-sm mt-0.5 block">~{estimatedKitchen} chefs e auxiliares</span>
                      <span className="text-[10px] text-neutral-500">Cocção e finalização no local</span>
                    </div>
                    <div className="bg-white p-3 rounded-sm border border-neutral-200 shadow-2xs">
                      <span className="text-neutral-500 block text-[10px] uppercase">Ilhas Gastronômicas:</span>
                      <span className="text-neutral-950 font-medium text-sm mt-0.5 block">{estimatedStations}</span>
                      <span className="text-[10px] text-neutral-500">Fluxo livre sem formação de filas</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-stretch sm:items-center gap-3 pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-950 px-4 py-3 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.15em] px-6 sm:px-7 py-3.5 rounded-sm transition-all cursor-pointer shadow-md text-center"
                >
                  Próximo: Formato Gastronômico
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Formato do Cardápio */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="border-b border-neutral-100 pb-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 block font-medium">
                  Etapa 03 de 05
                </span>
                <h3 className="font-serif text-2xl text-neutral-950 mt-1">
                  Qual formato gastronômico traduz seu sonho?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Você poderá degustar todas as receitas escolhidas em nosso espaço exclusivo de degustação antes de aprovar.
                </p>
              </div>

              <div className="space-y-4">
                {SERVICE_STYLES.map((style) => {
                  const isSelected = budget.serviceStyle === style.id;
                  return (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setBudget({ ...budget, serviceStyle: style.id })}
                      className={`w-full text-left p-4 sm:p-6 rounded-sm border transition-all cursor-pointer relative ${
                        isSelected
                          ? 'border-neutral-950 bg-neutral-950 text-white shadow-xl'
                          : 'border-neutral-200 bg-neutral-50/60 hover:border-neutral-400 hover:bg-white text-neutral-900'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
                        <h4 className={`font-serif text-base sm:text-lg font-medium ${isSelected ? 'text-white' : 'text-neutral-950'}`}>
                          {style.name}
                        </h4>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 sm:py-1 rounded-sm w-fit uppercase tracking-wider ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-800'
                        }`}>
                          {style.tag}
                        </span>
                      </div>
                      <p className={`text-xs sm:text-sm font-light leading-relaxed mb-3 ${
                        isSelected ? 'text-neutral-300' : 'text-neutral-600'
                      }`}>
                        {style.desc}
                      </p>
                      <div className={`text-[11px] ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        Indicado para: <span className={`font-medium ${isSelected ? 'text-white' : 'text-neutral-900'}`}>{style.recommendedFor}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-stretch sm:items-center gap-3 pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-950 px-4 py-3 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.15em] px-6 sm:px-7 py-3.5 rounded-sm transition-all cursor-pointer shadow-md text-center"
                >
                  Próximo: Módulos Especiais
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Módulos Extras & Restrições */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="border-b border-neutral-100 pb-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 block font-medium">
                  Etapa 04 de 05
                </span>
                <h3 className="font-serif text-2xl text-neutral-950 mt-1">
                  Personalize com experiências que encantam seus convidados
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Selecione módulos adicionais que agregam sofisticação e garantem acolhimento a todas as idades.
                </p>
              </div>

              {/* Extras list */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-neutral-800 uppercase tracking-wider block">
                  Módulos de Experiência Gastronômica:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EXTRAS_OPTIONS.map((extra) => {
                    const isChecked = budget.extras.includes(extra.id);
                    return (
                      <div
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className={`p-4 rounded-sm border cursor-pointer transition-all flex items-start gap-3 ${
                          isChecked
                            ? 'border-neutral-950 bg-neutral-950 text-white shadow-md'
                            : 'border-neutral-200 bg-neutral-50/60 hover:border-neutral-400 hover:bg-white text-neutral-900'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-sm flex items-center justify-center mt-0.5 border ${
                          isChecked ? 'bg-white border-white text-neutral-950' : 'border-neutral-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <h5 className={`text-sm font-medium ${isChecked ? 'text-white' : 'text-neutral-900'}`}>{extra.label}</h5>
                          <p className={`text-xs font-light mt-0.5 ${isChecked ? 'text-neutral-300' : 'text-neutral-600'}`}>{extra.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dietary Needs */}
              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <span className="text-xs font-semibold text-neutral-800 uppercase tracking-wider block">
                  Atenção e Inclusão Alimentar (Sem Custos Abusivos):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {DIETARY_OPTIONS.map((diet) => {
                    const isChecked = budget.dietaryNeeds.includes(diet.id);
                    return (
                      <div
                        key={diet.id}
                        onClick={() => toggleDietary(diet.id)}
                        className={`p-3 rounded-sm border cursor-pointer transition-all flex items-center gap-3 text-xs ${
                          isChecked
                            ? 'border-neutral-950 bg-neutral-950 text-white font-medium'
                            : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-sm flex items-center justify-center border ${
                          isChecked ? 'bg-white border-white text-neutral-950' : 'border-neutral-300'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{diet.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-stretch sm:items-center gap-3 pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-950 px-4 py-3 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={() => setStep(5)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.15em] px-6 sm:px-7 py-3.5 rounded-sm transition-all cursor-pointer shadow-md text-center"
                >
                  Próximo: Finalizar Proposta
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Finalizar e Enviar para WhatsApp */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="border-b border-neutral-100 pb-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 block font-medium">
                  Etapa 05 de 05
                </span>
                <h3 className="font-serif text-2xl text-neutral-950 mt-1">
                  Sua proposta personalizada está pronta!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Preencha seus dados para receber o PDF detalhado do cardápio e agendar sua degustação presencial.
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-[#F7F7F6] border border-neutral-200 p-4 sm:p-6 rounded-sm space-y-3 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200/60 pb-2">
                  <span className="text-neutral-600">Tipo de Evento:</span>
                  <span className="font-medium text-neutral-950 capitalize">{budget.eventType}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200/60 pb-2">
                  <span className="text-neutral-600">Convidados Estimados:</span>
                  <span className="font-medium text-neutral-950">{budget.guestCount} pessoas</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200/60 pb-2">
                  <span className="text-neutral-600">Formato Gastronômico:</span>
                  <span className="font-medium text-neutral-950 text-left sm:text-right max-w-sm">
                    {SERVICE_STYLES.find(s => s.id === budget.serviceStyle)?.name}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200/60 pb-2">
                  <span className="text-neutral-600">Brigada de Atendimento:</span>
                  <span className="font-medium text-neutral-950 text-left sm:text-right">
                    ~{estimatedWaiters} garçons + ~{estimatedKitchen} chefs e auxiliares
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200/60 pb-2">
                  <span className="text-neutral-600">Módulos Adicionais:</span>
                  <span className="font-medium text-neutral-950 text-left sm:text-right">
                    {budget.extras.length > 0 ? `${budget.extras.length} módulos selecionados` : 'Cardápio Padrão'}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1">
                  <span className="text-neutral-800 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-neutral-950 shrink-0" />
                    Degustação Privativa dos Noivos:
                  </span>
                  <span className="text-neutral-950 font-medium">Disponível em Jundiaí (Chácara Urbana)</span>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleValidateAndSubmit} className="space-y-4 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Silveira & Carlos Eduardo"
                      value={budget.clientName}
                      onChange={(e) => {
                        setBudget({ ...budget, clientName: e.target.value });
                        setErrorMessage('');
                      }}
                      className="w-full bg-white border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-base sm:text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 98765-4321"
                      value={budget.clientPhone}
                      onChange={(e) => {
                        setBudget({ ...budget, clientPhone: e.target.value });
                        setErrorMessage('');
                      }}
                      className="w-full bg-white border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-base sm:text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                      Data Prevista (ou Mês/Ano)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Novembro / 2026 ou 15/11/2026"
                      value={budget.eventDate}
                      onChange={(e) => setBudget({ ...budget, eventDate: e.target.value })}
                      className="w-full bg-white border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-base sm:text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-medium">
                      Cidade ou Espaço do Evento
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Jundiaí, Itatiba, Campinas, Fazenda..."
                      value={budget.eventCity}
                      onChange={(e) => setBudget({ ...budget, eventCity: e.target.value })}
                      className="w-full bg-white border border-neutral-300 focus:border-neutral-950 text-neutral-900 text-base sm:text-sm px-4 py-3 rounded-sm outline-none transition-colors"
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
                    <div className="inline-flex items-center gap-2 text-neutral-950 font-semibold text-sm">
                      <Check className="w-5 h-5 text-neutral-950 stroke-[3]" />
                      Proposta estruturada com sucesso!
                    </div>
                    <p className="text-xs text-neutral-600">
                      Clique no botão abaixo para abrir a conversa no WhatsApp oficial do Buffet Fernanda Prado com todos os itens já organizados:
                    </p>
                    <a
                      href={whatsappGeneratedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-4 px-4 sm:px-6 bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.12em] sm:tracking-[0.15em] rounded-sm shadow-xl transition-all text-center"
                    >
                      <Send className="w-4 h-4 text-white shrink-0" />
                      Enviar Proposta no WhatsApp
                    </a>
                  </div>
                ) : (
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] py-4 px-4 sm:px-6 rounded-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01] text-center"
                    >
                      <Send className="w-4 h-4 text-white shrink-0" />
                      Gerar Proposta e Enviar para o WhatsApp
                    </button>
                    <p className="text-[11px] text-neutral-500 text-center mt-2.5 font-light">
                      Seus dados são confidenciais e utilizados exclusivamente para a elaboração da sua proposta.
                    </p>
                  </div>
                )}
              </form>

              <div className="flex justify-start pt-2 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-950 px-2 py-2 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar e revisar itens
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
