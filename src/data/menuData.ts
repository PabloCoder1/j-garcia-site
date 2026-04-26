export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
}

export const menuData: MenuItem[] = [
  {
    id: "1",
    name: "Ostras Frescas",
    description: "Porção com 6 unidades de ostras selecionadas, servidas no gelo com limão siciliano e tabasco.",
    price: 68.00,
    category: "Entradas",
    image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&q=80",
    featured: true
  },
  {
    id: "2",
    name: "Casquinha de Siri",
    description: "Nossa receita tradicional caiçara, gratinada com parmesão e farofa de dendê.",
    price: 35.00,
    category: "Entradas",
    image: "https://images.unsplash.com/photo-1623190823617-64987010e960?w=800&q=80",
    featured: true
  },
  {
    id: "3",
    name: "Polvo à Lagareiro",
    description: "Tentáculos de polvo assados no azeite, acompanhados de batatas ao murro, alho confit e brócolis.",
    price: 145.00,
    category: "Pratos Principais",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    featured: true
  },
  {
    id: "4",
    name: "Moqueca de Garoupa",
    description: "Postas de garoupa cozidas lentamente em panela de barro com leite de coco, azeite de dendê e pimentões.",
    price: 189.00,
    category: "Pratos Principais",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
    featured: true
  },
  {
    id: "5",
    name: "Risoto de Frutos do Mar",
    description: "Arroz arbório cremoso com lulas, polvos, mexilhões e camarões médios finalizado com vinho branco.",
    price: 112.00,
    category: "Pratos Principais",
    image: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=800&q=80",
    featured: true
  },
  {
    id: "6",
    name: "Camarão Pistola Grelhado",
    description: "Camarões gigantes grelhados na manteiga de ervas, servidos com risoto de limão siciliano.",
    price: 210.00,
    category: "Especiais",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&q=80",
    featured: true
  },
  {
    id: "7",
    name: "Pudim de Leite",
    description: "Receita clássica de família, com calda de caramelo escura e fava de baunilha.",
    price: 28.00,
    category: "Sobremesas",
    image: "https://images.unsplash.com/photo-1590137537618-1eaec009d18e?w=800&q=80",
    featured: false
  }
];

export const categories = ["Todos", "Entradas", "Pratos Principais", "Especiais", "Sobremesas"];