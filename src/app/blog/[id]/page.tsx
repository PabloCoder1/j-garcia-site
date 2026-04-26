"use client";

import { motion } from "framer-motion";
import { blogData } from "@/data/blogData";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { notFound } from "next/navigation";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // Busca o post específico pelo ID passado na URL
  const post = blogData.find((p) => p.id === params.id);

  // Se o usuário digitar um ID que não existe, mostra a página de erro 404
  if (!post) {
    notFound();
  }

  return (
    <main className="pt-24 pb-24 bg-surface min-h-screen">
      <article>
        {/* Cabeçalho do Post */}
        <header className="max-w-4xl mx-auto px-6 pt-12 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-textLight hover:text-primary transition-colors text-xs uppercase tracking-widest font-bold mb-10"
            >
              <FaArrowLeft /> Voltar para o Blog
            </Link>

            <div className="flex items-center justify-center gap-3 text-accent text-xs uppercase tracking-wider mb-6">
              <span>{post.category}</span>
              <span className="w-1 h-1 rounded-full bg-primary/20"></span>
              <span>{post.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
              {post.title}
            </h1>

            <p className="text-textLight text-lg md:text-xl font-light italic">
              Por {post.author}
            </p>
          </motion.div>
        </header>

        {/* Imagem de Destaque (Full-bleed restrito) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto px-6 mb-16"
        >
          <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Corpo do Texto */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto px-6 text-textDark leading-relaxed space-y-8"
        >
          {/* Aqui estamos simulando o conteúdo completo. Em um projeto real, 
              usaríamos um parser de Markdown ou Rich Text de um CMS */}
          <p className="text-xl font-serif text-primary italic border-l-2 border-accent pl-6 mb-8">
            {post.excerpt}
          </p>
          
          <p>
            A tradição caiçara vai muito além dos ingredientes; ela reside na forma como respeitamos o tempo e o mar. Quando idealizamos este prato, nossa principal preocupação era manter a integridade do sabor original, aquele que nos remete às refeições em família nos domingos de sol na Ponta da Praia.
          </p>
          
          <p>
            Utilizamos técnicas modernas de cocção para garantir que a textura seja perfeita, mas o tempero... ah, o tempero continua sendo aquele segredo passado de geração em geração. A mistura precisa de especiarias com o frescor do ingrediente principal cria uma explosão de sabores no paladar.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-12 mb-6">A importância dos ingredientes locais</h2>
          
          <p>
            Trabalhar com produtores e pescadores da nossa região não é apenas uma escolha sustentável, mas o verdadeiro pilar da nossa cozinha. {post.content} Cada elemento que compõe esta experiência foi cuidadosamente selecionado nas primeiras horas da manhã.
          </p>
        </motion.div>
      </article>
    </main>
  );
}