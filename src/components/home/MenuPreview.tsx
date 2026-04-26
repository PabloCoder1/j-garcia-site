"use client";

import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { menuData } from "@/data/menuData";

export default function MenuPreview() {
  // Pegamos apenas os pratos marcados como destaque (limitado a 6)
  const featuredItems = menuData.filter(item => item.featured).slice(0, 6);

  // Variantes para a animação em cascata (stagger)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionTitle
              subtitle="Nossas Especialidades"
              title="Sabores do Mar em Destaque"
              centered={false}
            />
          </div>
          <div className="pb-4">
            <Button href="/menu" variant="outline">
              Ver Menu Completo
            </Button>
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredItems.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemAnim}
              className="group bg-surface rounded-none overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-surface/5"
            >
              {/* Container da Imagem com overflow hidden para o efeito de scale */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-textDark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-surface px-4 py-1 text-sm font-medium text-primary tracking-widest shadow-md">
                  R$ {item.price.toFixed(2).replace(".", ",")}
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-8">
                <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-serif text-primary mb-3 group-hover:text-secondary transition-colors">
                  {item.name}
                </h3>
                <p className="text-textLight text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}