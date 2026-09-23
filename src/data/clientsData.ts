export interface ClientLogo {
  id: string;
  name: string;
  category: 'corporativo' | 'saude_financeiro' | 'espacos' | 'institucional';
  categoryLabel: string;
  segment: string;
  city: string;
  /**
   * Cole aqui a URL ou caminho da imagem do logo (PNG com fundo transparente, SVG ou JPG).
   * Se deixar vazio ou não preencher, o sistema gera automaticamente um monograma tipográfico de luxo.
   */
  logoUrl?: string;
  monogram?: string;
}

/**
 * CLIENTES & MARCAS ATENDIDAS PELO BUFFET FERNANDA PRADO
 * ========================================================
 * Para adicionar um novo cliente ou trocar os logos:
 * 1. Adicione um novo item na lista abaixo.
 * 2. Se tiver a imagem do logo, informe em 'logoUrl' (ex: '/logos/minha-marca.png' ou URL externa).
 * 3. Se não tiver imagem, apenas informe o 'name' e 'segment' — ele será exibido elegantemente em tipografia de luxo.
 */
export const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: 'logo-1',
    name: 'Alphaville Urbanismo',
    category: 'corporativo',
    categoryLabel: 'Corporativo & Imobiliário',
    segment: 'Desenvolvimento Urbano & Lançamentos',
    city: 'Jundiaí / SP',
    monogram: 'AL'
  },
  {
    id: 'logo-2',
    name: 'Unimed Jundiaí',
    category: 'saude_financeiro',
    categoryLabel: 'Saúde & Cooperativa',
    segment: 'Cooperativa Médica & Hospitalar',
    city: 'Jundiaí & Região',
    monogram: 'UN'
  },
  {
    id: 'logo-3',
    name: 'OAB São Paulo',
    category: 'institucional',
    categoryLabel: 'Institucional',
    segment: '33ª Subseção Jundiaí',
    city: 'Jundiaí / SP',
    monogram: 'OAB'
  },
  {
    id: 'logo-4',
    name: 'Sicredi',
    category: 'saude_financeiro',
    categoryLabel: 'Financeiro & Bancário',
    segment: 'Instituição Financeira Cooperativa',
    city: 'Campinas & Jundiaí',
    monogram: 'SIC'
  },
  {
    id: 'logo-5',
    name: 'Construtora FBF',
    category: 'corporativo',
    categoryLabel: 'Engenharia & Obras',
    segment: 'Engenharia & Incorporação',
    city: 'Jundiaí / SP',
    monogram: 'FBF'
  },
  {
    id: 'logo-6',
    name: 'Fazenda Vila Rica',
    category: 'espacos',
    categoryLabel: 'Espaço Nobre',
    segment: 'Fazenda Histórica para Casamentos',
    city: 'Itatiba / SP',
    monogram: 'FVR'
  },
  {
    id: 'logo-7',
    name: 'Terras de Clara',
    category: 'espacos',
    categoryLabel: 'Espaço Nobre',
    segment: 'Destination Weddings & Eventos de Luxo',
    city: 'Morungaba / SP',
    monogram: 'TC'
  },
  {
    id: 'logo-8',
    name: 'Haras Vila Real',
    category: 'espacos',
    categoryLabel: 'Espaço Nobre',
    segment: 'Espaço Campestre & Casamentos',
    city: 'Grande São Paulo',
    monogram: 'HVR'
  },
  {
    id: 'logo-9',
    name: 'Clube Jundiaiense',
    category: 'institucional',
    categoryLabel: 'Clube & Tradição',
    segment: 'Sede de Campo & Eventos Tradicionais',
    city: 'Jundiaí / SP',
    monogram: 'CJ'
  },
  {
    id: 'logo-10',
    name: 'Audi Brasil Concessionárias',
    category: 'corporativo',
    categoryLabel: 'Automotivo & Luxo',
    segment: 'Coquetéis VIP de Lançamento',
    city: 'Campinas & Jundiaí',
    monogram: 'AUDI'
  },
  {
    id: 'logo-11',
    name: 'Sociedade Hípica de Campinas',
    category: 'institucional',
    categoryLabel: 'Clube Hípico',
    segment: 'Galas & Torneios Hípicos',
    city: 'Campinas / SP',
    monogram: 'SHC'
  },
  {
    id: 'logo-12',
    name: 'Grupo CCR Rodovias',
    category: 'corporativo',
    categoryLabel: 'Infraestrutura',
    segment: 'Confraternizações & Encontros Corporativos',
    city: 'Região de Jundiaí',
    monogram: 'CCR'
  },
  {
    id: 'logo-13',
    name: 'Construtora Santa Angela',
    category: 'corporativo',
    categoryLabel: 'Engenharia & Obras',
    segment: 'Lançamentos Residenciais de Alto Padrão',
    city: 'Jundiaí / SP',
    monogram: 'CSA'
  },
  {
    id: 'logo-14',
    name: 'Fazenda Dona Inês',
    category: 'espacos',
    categoryLabel: 'Espaço Nobre',
    segment: 'Casamentos Nobres ao Ar Livre',
    city: 'Itatiba / SP',
    monogram: 'FDI'
  },
  {
    id: 'logo-15',
    name: 'Câmara Ítalo-Brasileira',
    category: 'institucional',
    categoryLabel: 'Institucional & Comércio',
    segment: 'Encontros Diplomáticos & Empresariais',
    city: 'São Paulo & Região',
    monogram: 'ITAL'
  },
  {
    id: 'logo-16',
    name: 'Rede D’Or / Hospitais',
    category: 'saude_financeiro',
    categoryLabel: 'Saúde & Medicina',
    segment: 'Jantares de Simpósios Médicos',
    city: 'São Paulo / Campinas',
    monogram: 'RD'
  }
];

export const CLIENTS_STATS = [
  { value: '+850', label: 'Eventos Executados', sub: 'Casamentos, galas e encontros corporativos' },
  { value: '+65.000', label: 'Convidados Servidos', sub: 'Com fartura contínua e brigada própria' },
  { value: '100%', label: 'Brigada Própria', sub: 'Treinamento de etiqueta e alta hospitalidade' },
  { value: '5.0 ★', label: 'Satisfação Máxima', sub: 'Avaliações máximas no Google e Casamentos' }
];
