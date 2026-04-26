"use client";

import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      review: "A moqueca de garoupa é simplesmente divinal. Sabor autêntico, atendimento impecável e a vista para o mar completa a experiência. O melhor de Santos.",
      date: "Avaliação no Google"
    },
    {
      name: "Camila Fernandes",
      review: "Comemorei meu aniversário no J. Garcia e foi inesquecível. As ostras são extremamente frescas e a carta de vinhos combina perfeitamente com os pratos.",
      date: "Cliente fiel"
    },
    {
      name: "Fernando Alves",
      review: "O polvo à lagareiro me fez lembrar a viagem que fiz a Portugal. Textura perfeita, ambiente sofisticado mas sem perder a alma caiçara.",
      date: "Guia Local do Google"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="O Que Dizem Nossos Clientes"
          title="Experiências Inesquecíveis"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="relative p-10 bg-background border border-surface/10 hover:shadow-xl transition-shadow duration-500 group"
            >
              {/* Aspas decorativas gigantes */}
              <div className="text-accent text-8xl font-serif absolute top-2 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                "
              </div>
              
              {/* Estrelas */}
              <div className="flex gap-1 mb-8 text-accent">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              
              {/* Texto do Depoimento */}
              <p className="text-textDark font-serif text-lg lg:text-xl italic mb-10 leading-relaxed relative z-10">
                "{item.review}"
              </p>
              
              {/* Autor */}
              <div className="mt-auto border-t border-primary/10 pt-6">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-1">
                  {item.name}
                </h4>
                <span className="text-textLight text-xs uppercase tracking-wider">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}