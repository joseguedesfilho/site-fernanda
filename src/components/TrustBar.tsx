import { Star, ChefHat, Users, Award } from 'lucide-react';
import { CONTACT_INFO } from '../data/buffetData';

export default function TrustBar() {
  const metrics = [
    {
      value: "5.0 ★",
      kicker: "Google Reviews",
      title: "Avaliação Máxima Unânime",
      desc: `Nota 5.0 estrelas com mais de ${CONTACT_INFO.reviewsCount} depoimentos verificados no Google e Casamentos.com.br`
    },
    {
      value: `${CONTACT_INFO.yearsExperience} Anos`,
      kicker: "Tradição & Excelência",
      title: "Autoridade em Eventos",
      desc: "Mais de uma década de alta gastronomia autoral em Jundiaí, Campinas e Capital"
    },
    {
      value: `+${CONTACT_INFO.eventsDone}`,
      kicker: "Trajetória Comprovada",
      title: "Eventos Exclusivos",
      desc: "Casamentos inesquecíveis, festas de 15 anos e encontros corporativos de prestígio"
    },
    {
      value: "100%",
      kicker: "Padrão Operacional",
      title: "Brigada Própria & Fixa",
      desc: "Maitres, chefs e garçons alinhados aos mais rigorosos padrões da alta hotelaria"
    }
  ];

  return (
    <div className="bg-white border-y border-neutral-200 py-10 text-neutral-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-neutral-200">
          {metrics.map((item, idx) => (
            <div key={idx} className="space-y-2 lg:px-8 first:lg:pl-0 last:lg:pr-0">
              <div className="flex items-baseline justify-between sm:justify-start gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight">
                  {item.value}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-medium">
                  {item.kicker}
                </span>
              </div>
              <h4 className="text-sm font-medium text-neutral-900">
                {item.title}
              </h4>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
