"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { blogData } from "@/data/blogData";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Nosso Blog"
          title="Histórias, Cultura e Gastronomia"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {blogData.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group flex flex-col h-full cursor-pointer"
            >
              {/* Imagem Dominante */}
              <div className="relative h-72 md:h-80 overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest shadow-md">
                  {post.category}
                </div>
              </div>
              
              {/* Conteúdo do Post */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-textLight text-xs uppercase tracking-wider mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-accent"></span>
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-secondary transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-textLight text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 text-accent uppercase text-xs font-bold tracking-[0.2em] mt-auto group-hover:text-primary transition-colors"
                >
                  Ler Artigo <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}