"use client";

import { motion } from "framer-motion";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface flex flex-col items-center justify-center px-6 relative overflow-hidden pt-20">
      {/* Elemento Decorativo de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif text-background font-bold opacity-50 z-0 pointer-events-none">
        404
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center max-w-2xl"
      >
        <span className="block text-accent uppercase tracking-[0.3em] text-sm font-medium mb-6">
          Página não encontrada
        </span>
        
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
          Parece que navegamos para <br/><span className="italic">águas desconhecidas.</span>
        </h1>
        
        <p className="text-textLight text-lg mb-12 font-light">
          A página que você está procurando pode ter sido movida, excluída ou talvez nunca tenha existido. Mas não se preocupe, os melhores sabores ainda estão à sua espera.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button href="/" variant="primary">
            Voltar ao Início
          </Button>
          <Button href="/menu" variant="outline">
            Ver Cardápio
          </Button>
        </div>
      </motion.div>
    </main>
  );
}