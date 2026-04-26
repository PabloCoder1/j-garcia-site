export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: "O Segredo da Autêntica Casquinha de Siri Caiçara",
    excerpt: "Descubra os ingredientes locais que tornam a nossa casquinha de siri uma das mais pedidas de Santos, e porque a farofa de dendê faz toda a diferença.",
    content: "Conteúdo completo do post sobre a casquinha de siri...",
    date: "15 de Abril, 2026",
    author: "Chef J. Garcia",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?w=800&q=80",
    category: "Gastronomia Local"
  },
  {
    id: "2",
    title: "Harmonização: Vinhos e Frutos do Mar",
    excerpt: "Como escolher o vinho branco perfeito para acompanhar desde a suavidade de uma ostra fresca até a intensidade de uma moqueca de garoupa.",
    content: "Conteúdo completo sobre harmonização...",
    date: "02 de Abril, 2026",
    author: "Sommelier Ana",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    category: "Dicas"
  },
  {
    id: "3",
    title: "Ponta da Praia: A Tradição Viva",
    excerpt: "Conheça a história do bairro onde nosso restaurante nasceu e como a relação com os pescadores locais garante o frescor diário dos nossos pratos.",
    content: "Conteúdo completo sobre a Ponta da Praia...",
    date: "20 de Março, 2026",
    author: "Equipe J. Garcia",
    image: "https://images.unsplash.com/photo-1516089726-2815197bba53?w=800&q=80",
    category: "Nossa História"
  }
];