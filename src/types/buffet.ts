export type EventType = 
  | 'casamento'
  | '15anos'
  | 'miniwedding'
  | 'corporativo'
  | 'bodas'
  | 'aniversario';

export type ServiceFormat = 
  | 'ilha_gastronomica'
  | 'jantar_empratado'
  | 'franco_americano'
  | 'coquetel_finger'
  | 'brunch_coffee';

export interface MenuItem {
  id: string;
  name: string;
  category: 'ilhas' | 'jantares' | 'finger_foods' | 'sobremesas' | 'madrugada' | 'corporativo' | 'especiais';
  description: string;
  highlight?: string;
  tags?: string[];
  dietary?: ('vegano' | 'vegetariano' | 'sem_gluten' | 'sem_lactose')[];
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  date: string;
  rating: number;
  avatar?: string;
  quote: string;
  event: string;
  location: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'casamentos' | 'ilhas' | 'gastronomia' | '15anos_corporativo';
  image: string;
  caption: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
