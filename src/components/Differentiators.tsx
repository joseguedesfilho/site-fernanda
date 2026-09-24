import { 
  ShieldCheck, 
  ChefHat, 
  Users, 
  Sparkles, 
  HeartHandshake, 
  Check, 
  X as XIcon, 
  Clock, 
  Award,
  ArrowRight
} from 'lucide-react';
import { CONTACT_INFO } from '../data/buffetData';

interface DifferentiatorsProps {
  onOpenTastingModal: () => void;
}

export default function Differentiators({ onOpenTastingModal }: DifferentiatorsProps) {
  const comparisonList = [
    {
      topic: "Brigada de Atendimento & Garçons",
      fernanda: "Equipe 100% própria, fixa e uniformizada com treinamento em alta hotelaria e etiqueta de salão. Proporção premium de 1 garçom para cada 10 a 12 convidados.",
      conventional: "Garçons terceirizados contratados por aplicativo na véspera, sem alinhamento com a identidade do evento."
    },
    {
      topic: "Temperatura e Ponto dos Alimentos",
      fernanda: "Cozinha móvel profissional com fornos combinados no local do evento. Carnes no ponto exato e massas saindo fumegantes a cada reposição.",
      conventional: "Alimentos preparados horas antes em transporte térmico ou longas filas em réchauds que ressecam o prato."
    },
    {
      topic: "Flexibilidade & Personalização de Cardápio",
      fernanda: "Cardápio 100% autoral e customizado às memórias afetivas da família, com menus completos para celíacos, veganos e restrições sem contaminação.",
      conventional: "Pacotes engessados (Opção A, B ou C) onde qualquer alteração gera sobretaxas abusivas ou recusa da cozinha."
    },
    {
      topic: "Fartura Ininterrupta de Serviço",
      fernanda: "Ilhas gastronômicas ativas e reposição contínua de canapés e bebidas até o encerramento do evento. Zero escassez na pista de dança.",
      conventional: "Buffet recolhido cedo para forçar o encerramento do evento ou canapés servidos com lentidão calculada."
    },
    {
      topic: "Degustação & Certeza de Contratação",
      fernanda: "Atelier de Degustação Privativo na Chácara Urbana em Jundiaí, com mesa posta para os noivos e aprovação direta com o chef executivo.",
      conventional: "Provas coletivas com dezenas de casais desconhecidos ou assinatura de contrato sem experimentar os pratos contratados."
    }
  ];

  const pillars = [
    {
      num: "01",
      title: "Maître Exclusivo dos Noivos & Anfitriões",
      desc: "Um profissional de alta hospitalidade dedicado exclusivamente aos noivos durante toda a festa, garantindo que vocês comam com calma e tenham suas bebidas preferidas servidas na temperatura exata."
    },
    {
      num: "02",
      title: "Montagem com 5 Horas de Antecedência",
      desc: "Nossa equipe chega horas antes do início da cerimônia para montar réchauds, prataria, ilhas e checar toda a infraestrutura elétrica e de gás. Zero correria de última hora."
    },
    {
      num: "03",
      title: "Ingredientes com Denominação de Origem",
      desc: "Filé mignon certificado, queijos premiados da Serra da Canastra e importados europeus, chocolates belgas Callebaut e hortaliças hidropônicas selecionadas no dia."
    },
    {
      num: "04",
      title: "Rigor Absoluto em Segurança Alimentar",
      desc: "Manipulação com padrões de higiene hospitalar, controle rigoroso de cadeia fria e estações separadas para convidados celíacos e alérgicos severos."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-neutral-500 block font-medium">
            O Padrão Fernanda Prado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950">
            Por que os anfitriões mais exigentes{' '}
            <span className="italic text-neutral-600">não trocam o nosso serviço</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Contratar o buffet de um casamento ou grande gala não é apenas escolher receitas; 
            é confiar a tranquilidade e a reputação da sua família a uma equipe que não tolera falhas.
          </p>
        </div>

        {/* 1. Comparative Analysis */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
              Comparativo de Excelência Operacional
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950 mt-1">
              A diferença entre um evento comum e uma celebração impecável
            </h3>
          </div>

          <div className="bg-white border border-neutral-200 rounded-sm overflow-hidden shadow-lg">
            {/* Header row (Desktop) */}
            <div className="hidden md:grid md:grid-cols-12 border-b border-neutral-200 bg-neutral-900 text-xs font-semibold uppercase tracking-wider text-neutral-300">
              <div className="md:col-span-4 p-4 text-neutral-300">Critério de Qualidade</div>
              <div className="md:col-span-4 p-4 text-white bg-black/40 border-l border-neutral-800 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-white" />
                Fernanda Prado Buffet
              </div>
              <div className="md:col-span-4 p-4 text-neutral-400 border-l border-neutral-800">
                Buffets Convencionais do Mercado
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-neutral-200">
              {comparisonList.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm">
                  {/* Topic */}
                  <div className="md:col-span-4 p-4 sm:p-5 bg-neutral-50 flex items-center border-b md:border-b-0 border-neutral-200">
                    <span className="font-serif text-base text-neutral-950 font-medium">
                      {row.topic}
                    </span>
                  </div>

                  {/* Fernanda Prado column */}
                  <div className="md:col-span-4 p-4 sm:p-5 bg-white md:border-l border-b md:border-b-0 border-neutral-200 text-neutral-800 font-light leading-relaxed flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-neutral-950 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div className="space-y-1">
                      <span className="md:hidden inline-block text-[10px] uppercase font-bold tracking-wider text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded-xs">
                        Fernanda Prado Buffet
                      </span>
                      <p>{row.fernanda}</p>
                    </div>
                  </div>

                  {/* Conventional column */}
                  <div className="md:col-span-4 p-4 sm:p-5 bg-neutral-50/50 md:border-l border-neutral-200 text-neutral-600 font-light leading-relaxed flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <XIcon className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <div className="space-y-1">
                      <span className="md:hidden inline-block text-[10px] uppercase font-medium tracking-wider text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-xs">
                        Buffets Convencionais
                      </span>
                      <p>{row.conventional}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. 4 Pillars of Operational Peace of Mind */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAF9] border border-neutral-200 p-7 rounded-sm space-y-3 hover:border-neutral-400 hover:bg-white transition-all shadow-2xs"
            >
              <span className="font-serif text-2xl text-neutral-400 block font-normal">
                {pillar.num}
              </span>
              <h4 className="font-serif text-lg font-medium text-neutral-950">
                {pillar.title}
              </h4>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="p-6 sm:p-10 bg-[#F5F5F4] border border-neutral-200 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-medium block">
              Garantia de Excelência Fernanda Prado
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-neutral-950">
              Viva a experiência gastronômica antes de assinar o contrato
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light">
              Agende uma visita ao nosso espaço privativo de degustação na Chácara Urbana em Jundiaí e conheça nossa equipe.
            </p>
          </div>

          <button
            onClick={onOpenTastingModal}
            className="w-full md:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-neutral-950 text-white hover:bg-black text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] rounded-sm transition-all shadow-md text-center shrink-0"
          >
            Agendar Atelier de Degustação
            <ArrowRight className="w-4 h-4 text-white shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
}
