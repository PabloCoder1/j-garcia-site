"use client";

import { motion } from "framer-motion";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo com Overlay Escuro */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1920&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-textDark/70"></div>
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block text-accent uppercase tracking-[0.3em] text-sm font-medium mb-6"
        >
          Desde 1998 em Santos
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif text-surface mb-8 leading-tight"
        >
          A Verdadeira Essência dos <br/><span className="text-accent italic">Frutos do Mar</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-surface/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light"
        >
          Uma experiência gastronômica inesquecível à beira-mar, unindo tradição, frescor e alta culinária.
        </motion.p>

        {/* Botões usando nosso componente global */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button href="#reserva" variant="primary">
            Reservar Mesa
          </Button>
          <Button 
            href="/menu" 
            variant="outline" 
            className="border-surface text-surface hover:bg-surface hover:text-textDark"
          >
            Ver Cardápio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}