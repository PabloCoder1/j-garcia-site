"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { menuData, categories } from "@/data/menuData";
import Button from "@/components/common/Button";
import { FaWhatsapp } from "react-icons/fa";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Filtra os itens com base na categoria selecionada
  const filteredMenu = activeCategory === "Todos" 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Nosso Cardápio"
          title="Descubra Nossos Sabores"
          centered={true}
        />

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 uppercase text-xs font-bold tracking-[0.15em] transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-surface" // Categoria ativa
                  : "bg-transparent text-primary border border-primary/20 hover:border-primary" // Categorias inativas
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Pratos com Animação de Reorganização */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group bg-surface rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-surface/5 flex flex-col"
              >
                {/* Imagem do Prato */}
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

                {/* Detalhes do Prato */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-serif text-primary mb-3">
                    {item.name}
                  </h3>
                  <p className="text-textLight text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action Final */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center border-t border-surface/20 pt-16"
        >
          <h3 className="text-2xl font-serif text-primary mb-6">Já escolheu seu prato favorito?</h3>
          <Button href="https://wa.me/5513991560814" variant="whatsapp">
            <FaWhatsapp className="text-xl mr-2" /> Fazer Pedido Agora
          </Button>
        </motion.div>
      </div>
    </main>
  );
}