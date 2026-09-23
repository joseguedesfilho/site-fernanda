import { MenuItem, Testimonial, GalleryItem, FaqItem } from '../types/buffet';

export const CONTACT_INFO = {
  name: "Fernanda Prado Buffet & Eventos",
  phone: "+55 11 95050-2188",
  phoneDisplay: "(11) 95050-2188",
  whatsappNumber: "5511950502188",
  email: "contato@fernandapradobuffeteventos.com.br",
  address: {
    street: "Rua Capitão Cassiano Ricardo de Toledo, 191",
    complement: "Sala 506",
    neighborhood: "Chácara Urbana",
    city: "Jundiaí",
    state: "SP",
    cep: "13201-840",
  },
  operatingHours: {
    weekdays: "Segunda a Sexta: 09:00 às 18:30",
    saturday: "Sábado: 09:00 às 13:30",
    sunday: "Domingo: Sob agendamento para eventos",
  },
  serviceAreas: [
    "Jundiaí e Região Metropolitana",
    "Campinas, Vinhedo, Valinhos e Itatiba",
    "São Paulo Capital e Grande SP",
    "Sorocaba, Itu e Cabreúva",
    "Atendimento em todo o Estado de SP"
  ],
  googleRating: 5.0,
  reviewsCount: 48,
  yearsExperience: "12+",
  eventsDone: "600+"
};

export const IMAGES = {
  hero: "/src/assets/images/buffet_hero_wedding_1790198858799.jpg",
  grazingTable: "/src/assets/images/grazing_table_luxury_1790198869162.jpg",
  platedDish: "/src/assets/images/plated_gourmet_dish_1790198879793.jpg",
  dessertStation: "/src/assets/images/luxury_dessert_station_1790198892021.jpg",
  weddingPhoto: "/src/assets/images/buffet_hero_wedding_1790198858799.jpg"
};

export const MENU_ITEMS: MenuItem[] = [
  // ILHAS GASTRONÔMICAS
  {
    id: "ilha-1",
    name: "Ilha de Grazing Table & Charcutaria Nobre",
    category: "ilhas",
    highlight: "Queridinha dos Noivos",
    description: "Composição artística com Queijo Brie envolto em massa folhada e castanhas caramelizadas, Gorgonzola Dolce, Prosciutto di Parma curado, salames artesanais italianos, favo de mel puro, figos frescos, uvas rubi, damascos recheados e pães de fermentação natural.",
    dietary: ["vegetariano"],
    image: IMAGES.grazingTable,
    tags: ["Apresentação de Impacto", "Entrada Livre", "Fartura Contínua"]
  },
  {
    id: "ilha-2",
    name: "Ilha do Mar & Ceviches Refrescantes",
    category: "ilhas",
    highlight: "Leveza e Requinte",
    description: "Ceviche clássico de robalo com leite de tigre artesanal e chips de batata doce roxa, tartar de salmão fresco com crocante de gergelim negro e mini burratas artesanais com pesto de manjericão e tomates confitados.",
    dietary: ["sem_gluten"],
    tags: ["Alta Refrescância", "Ceviches", "Robalo & Salmão"]
  },
  {
    id: "ilha-3",
    name: "Ilha Quente de Risotos & Massas Artesanais",
    category: "ilhas",
    highlight: "Show Cooking ao Vivo",
    description: "Preparação ao vivo diante dos convidados: Risoto de cogumelos selvagens com azeite trufado e Risoto de limão siciliano com camarões grelhados no tomilho, finalizados em queijo grana padano original.",
    dietary: ["vegetariano", "sem_gluten"],
    tags: ["Show Cooking", "Finalização na Hora", "Grana Padano"]
  },

  // JANTARES & EMPRATADOS
  {
    id: "jantar-1",
    name: "Tornedor de Filé Mignon ao Demi-Glace Trufado",
    category: "jantares",
    highlight: "Prato Principal Assinatura",
    description: "Filé mignon selado no ponto perfeito, regado com autêntica redução demi-glace de vinho tinto do Porto e trufas negras, servido com aligot cremoso de mandioquinha e aspargos salteados na manteiga clarificada.",
    dietary: ["sem_gluten"],
    image: IMAGES.platedDish,
    tags: ["Prato Clássico", "Mignon Trufado", "Aligot Francês"]
  },
  {
    id: "jantar-2",
    name: "Salmão Nobre em Crosta de Ervas Finas e Pistache",
    category: "jantares",
    highlight: "Elegância Gastronômica",
    description: "Lombo de salmão fresco grelhado com crosta crocante de pistaches e ervas aromáticas, acompanhado de mousseline aveludada de cenouras glaceadas e emulsão suave de maracujá e capim-limão.",
    dietary: ["sem_gluten"],
    tags: ["Pescado Nobre", "Pistache", "Molho Autoral"]
  },
  {
    id: "jantar-3",
    name: "Ravióli Artesanal de Burrata com Fonduta de Queijo Serra da Canastra",
    category: "jantares",
    highlight: "Opção Vegetariana Sofisticada",
    description: "Massa fresca produzida artesanalmente recheada com burrata pura e raspas de limão siciliano, servida com fonduta aveludada de Queijo Canastra artesanal, tomatinhos tostados e crocante de castanha-de-caju.",
    dietary: ["vegetariano"],
    tags: ["Massa Artesanal", "Queijo Nacional Premiado", "100% Autoral"]
  },

  // FINGER FOODS & COQUETEL VOLANTE
  {
    id: "finger-1",
    name: "Dadinho de Tapioca Dourado com Geleia de Pimenta Defumada",
    category: "finger_foods",
    highlight: "Inconfundível",
    description: "Crocante por fora e macio por dentro, com queijo coalho artesanal e toque de melaço de cana picante desenvolvido na nossa cozinha.",
    dietary: ["vegetariano", "sem_gluten"],
    tags: ["Clássico Brasileiro", "Toque Picante Doce"]
  },
  {
    id: "finger-2",
    name: "Cone Crocante com Tartar de Salmão e Flor de Sal",
    category: "finger_foods",
    highlight: "Coquetel Volante",
    description: "Mini cornetto artesanal de gergelim recheado com cubos de salmão fresco temperado com azeite de gergelim torrado, cebolete fresca e finalizado com ovas ou brotos comestíveis.",
    tags: ["Finger Food Moderno", "Salmão Fresco"]
  },
  {
    id: "finger-3",
    name: "Brie Envolto em Massa Filo com Geleia de Damasco",
    category: "finger_foods",
    highlight: "Crocância Perfeita",
    description: "Pequenos trouxinhas douradas de massa filo crocante recheadas com queijo brie cremoso e suave redução de damascos turcos com raspas de laranja.",
    dietary: ["vegetariano"],
    tags: ["Massa Filo", "Brie Francês"]
  },
  {
    id: "finger-4",
    name: "Cestinha de Siri com Pesto de Coentro e Aioli de Limão Cravo",
    category: "finger_foods",
    highlight: "Toque Litorâneo Sofisticado",
    description: "Carne nobre de siri refogada em azeite de urucum com alho-poró, servida em cestinha crocante com emulsão fresca de limão cravo.",
    tags: ["Frutos do Mar", "Sabor Brasileiro"]
  },

  // LANCHE DA MADRUGADA
  {
    id: "madrugada-1",
    name: "Mini Burgers Gourmet com Cheddar Inglês e Bacon Caramelizado",
    category: "madrugada",
    highlight: "Sucesso Absoluto na Pista",
    description: "Blend bovino artesanal de 60g grelhado ao ponto, queijo cheddar inglês derretido, cebola caramelizada na cerveja preta e maionese defumada do chef em pão brioche dourado.",
    tags: ["Energia na Pista", "Mini Burger", "Brioche Francês"]
  },
  {
    id: "madrugada-2",
    name: "Mini Churros Quentinhos com Doce de Leite Uruguaio",
    category: "madrugada",
    highlight: "Momento Doçura",
    description: "Churros fritos e passados em canela e açúcar mascavo, servidos em mini copinhos com generoso doce de leite cremoso uruguaio e calda de chocolate belga.",
    dietary: ["vegetariano"],
    tags: ["Serviço Quentinho", "Doce de Leite", "Pista de Dança"]
  },
  {
    id: "madrugada-3",
    name: "Batata Rústica com Sal de Ervas e Maionese Trufada",
    category: "madrugada",
    highlight: "Snack Delicioso",
    description: "Batatas rústicas com casca fatiadas finas, estaladiças, aromatizadas com alecrim fresco e acompanhadas de aioli trufado artesanal.",
    dietary: ["vegetariano", "sem_gluten"],
    tags: ["Crocante", "Molho Trufado"]
  },

  // SOBREMESAS & DOCES FINOS
  {
    id: "sobremesa-1",
    name: "Mesa de Verrines & Sobremesas Autorais",
    category: "sobremesas",
    highlight: "Finalização Memorável",
    description: "Verrines individuais de mousse de chocolate belga 70% com praliné de avelãs, pannacotta de baunilha de Madagascar com coulis de frutas vermelhas e mini tartelettes de limão siciliano com merengue suíço tostado.",
    dietary: ["vegetariano"],
    image: IMAGES.dessertStation,
    tags: ["Chocolate Belga", "Frutas Vermelhas", "Verrines Finas"]
  },
  {
    id: "sobremesa-2",
    name: "Mil-Folhas Montado na Hora com Creme Diplomata",
    category: "sobremesas",
    highlight: "Experiência Gastronômica",
    description: "Lâminas levíssimas e crocantes de massa folhada francesa intercaladas com creme diplomata aveludado e morangos frescos macerados no Cointreau.",
    dietary: ["vegetariano"],
    tags: ["Massa Folhada", "Creme Francês", "Show de Montagem"]
  },

  // DIETAS ESPECIAIS & INCLUSIVAS
  {
    id: "especial-1",
    name: "Menu 100% Inclusivo (Vegano, Sem Glúten & Zero Lactose)",
    category: "especiais",
    highlight: "Cuidado e Respeito aos Convidados",
    description: "Criamos variações dedicadas com o mesmo padrão visual e requinte: Risoto de palmito pupunha com trufas e leite de castanhas, Moqueca contemporânea de cogumelos com banana-da-terra e sobremesas sem traços de glúten.",
    dietary: ["vegano", "vegetariano", "sem_gluten", "sem_lactose"],
    tags: ["Sem Contaminação", "Segurança Alimentar", "Inclusão Real"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "dep-1",
    name: "Mariana & Carlos Eduardo",
    role: "Noivos (Casamento para 220 pessoas)",
    date: "Casamento realizado em Maio / 2026",
    rating: 5,
    event: "Casamento no Campo",
    location: "Fazenda em Itatiba / Região de Jundiaí",
    quote: "A Fernanda Prado superou absolutamente tudo o que sonhamos! Nossos convidados até hoje comentam sobre a Ilha Gastronômica e a perfeição do filé mignon. O serviço foi impecável, ninguém ficou com copo vazio ou esperando prato. E o carinho com minha mãe que é celíaca foi emocionante. Melhor escolha da nossa vida!"
  },
  {
    id: "dep-2",
    name: "Camila Guimarães",
    role: "Mãe da Debutante (Festa de 15 Anos)",
    date: "Festa realizada em Abril / 2026",
    rating: 5,
    event: "Festa de 15 Anos",
    location: "Espaço de Eventos em Jundiaí",
    quote: "Fazer festa de 15 anos dá um frio na barriga porque precisa agradar os jovens exigentes e os adultos com alta gastronomia. A Fernanda conseguiu essa mágica com perfeição! A ilha de burgers e churros na pista levou os adolescentes à loucura e o jantar dos adultos foi digno de restaurante 5 estrelas. Equipe uniformizada, educada e rápida."
  },
  {
    id: "dep-3",
    name: "Rodrigo Alencar",
    role: "Diretor de Operações e RH",
    date: "Convenção Anual de Liderança (180 pessoas)",
    rating: 5,
    event: "Evento Corporativo & Coquetel",
    location: "Jundiaí / Polo Empresarial",
    quote: "Contratamos a Fernanda Prado Buffet para o almoço e coquetel de encerramento da nossa convenção de executivos. A pontualidade foi britânica, a louça e apresentação de altíssimo nível, e a flexibilidade para dietas especiais foi formidável. Nossa diretoria elogiou unanimemente."
  },
  {
    id: "dep-4",
    name: "Beatriz & Guilherme",
    role: "Mini Wedding (70 pessoas)",
    date: "Celebração Íntima em Março / 2026",
    rating: 5,
    event: "Mini Wedding Elegante",
    location: "Chácara Urbana, Jundiaí",
    quote: "Queríamos um jantar empratado extremamente intimista e sofisticado. A degustação prévia que fizemos no espaço da Fernanda nos deu 100% de segurança. No grande dia, os pratos saíram quentes, sincronizados e com apresentação artística. Fernanda esteve presente garantindo cada detalhe!"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Banquete Imperial de Casamento",
    category: "casamentos",
    image: IMAGES.hero,
    caption: "Mesa posta imperial com prataria fina, cristais e gastronomia refinada para 250 convidados."
  },
  {
    id: "gal-2",
    title: "Ilha Gastronômica & Grazing Table Nobre",
    category: "ilhas",
    image: IMAGES.grazingTable,
    caption: "Mesa de antepastos com queijos nobres, favo de mel, charcutaria italiana e frutas selecionadas."
  },
  {
    id: "gal-3",
    title: "Alta Gastronomia Empratada: Mignon Trufado",
    category: "gastronomia",
    image: IMAGES.platedDish,
    caption: "Tornedor ao demi-glace com aligot trufado e brotos, finalizado no local do evento."
  },
  {
    id: "gal-4",
    title: "Mesa de Verrines & Patisserie Fina",
    category: "15anos_corporativo",
    image: IMAGES.dessertStation,
    caption: "Seleção autoral de sobremesas em taças e chocolates belgas para finalização do evento."
  },
  {
    id: "gal-5",
    title: "Ilhas de Ceviches & Frutos do Mar",
    category: "ilhas",
    image: IMAGES.grazingTable,
    caption: "Ceviches refrescantes com apresentação contemporânea em cerâmica artesanal."
  },
  {
    id: "gal-6",
    title: "Jantar de Gala & Ambientação Acolhedora",
    category: "casamentos",
    image: IMAGES.hero,
    caption: "Cuidado e harmonia entre a decoração do espaço e a apresentação dos pontos de buffet."
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: "Como funciona a degustação dos cardápios?",
    answer: "A degustação é uma experiência especial e privativa realizada no nosso espaço em Jundiaí (Chácara Urbana). Durante o encontro, vocês experimentam entradas, pratos principais e sobremesas, além de alinharmos preferências de tempero, harmonizações e a identidade do seu evento diretamente com a nossa equipe gastronômica."
  },
  {
    question: "O Buffet Fernanda Prado leva toda a estrutura de louças, taças e equipe?",
    answer: "Sim! Trabalhamos com solução completa e de alto padrão. Fornecemos louças nobres, talheres em inox de linha pesada, taças de cristal para as bebidas, réchauds modernos de inox/vidro, bandejas e toda a equipe necessária de garçons uniformizados, copeiras, chef executivo e maitre para coordenar o serviço."
  },
  {
    question: "Vocês atendem em espaços sem cozinha industrial, como sítios, praias ou fazendas?",
    answer: "Com certeza! Temos vasta experiência em casamentos em fazendas, sítios e espaços campestres em toda a região de Jundiaí, Campinas, Itatiba e Grande SP. Levamos nossa própria estrutura de fornos e estações móveis para finalizar os pratos na hora com o mesmo frescor e temperatura de um restaurante 5 estrelas."
  },
  {
    question: "Como vocês cuidam de convidados com intolerâncias, celíacos ou veganos?",
    answer: "Tratamos restrições alimentares com rigor absoluto e sem custos abusivos. Desenvolvemos pratos exclusivos para convidados celíacos (sem contaminação cruzada), veganos, vegetarianos, diabéticos e intolerantes a lactose, garantindo que eles se sintam acolhidos e comam com o mesmo requinte dos demais."
  },
  {
    question: "Com quanta antecedência devemos reservar nossa data?",
    answer: "Para casamentos e festas de 15 anos nos fins de semana mais concorridos (especialmente entre setembro e dezembro e aos sábados), recomendamos reservar com 8 a 18 meses de antecedência para garantir a sua data exclusiva. Para eventos corporativos e menores, consulte disponibilidade da nossa agenda."
  },
  {
    question: "Quais são as formas de pagamento e condições?",
    answer: "Oferecemos condições facilitadas e flexíveis, com entrada e parcelamento ao longo dos meses que antecedem o seu evento via boleto, transferência bancária ou Pix, tudo formalizado em contrato transparente e seguro."
  }
];
