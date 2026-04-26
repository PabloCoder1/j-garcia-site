"use client";

import { motion } from "framer-motion";
import Button from "../common/Button";
import { FaWhatsapp } from "react-icons/fa";

export default function ReservationCTA() {
  const whatsappLink = "https://wa.me/5513991560814?text=Olá! Gostaria de reservar uma mesa no J. Garcia.";

  return (
    <section id="reserva" className="relative py-32 flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo com Overlay Escuro */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80')] bg-cover bg-center bg-fixed"
      >
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="block text-accent uppercase tracking-[0.3em] text-sm font-medium mb-6"
        >
          Lugares Limitados
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-surface mb-8"
        >
          Garanta Sua Experiência
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-surface/80 text-lg mb-10 max-w-xl mx-auto font-light"
        >
          As noites na Ponta da Praia são concorridas. Reserve sua mesa com antecedência e prepare-se para momentos inesquecíveis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button href={whatsappLink} variant="whatsapp" className="px-10 py-5 text-base">
            <FaWhatsapp className="text-xl" /> Reservar via WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}