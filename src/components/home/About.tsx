"use client";

import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Lado Esquerdo: Imagens Assimétricas */}
        <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center">
          {/* Imagem Principal (Fundo) */}
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
            alt="Chef preparando prato com frutos do mar"
            className="absolute left-0 top-0 w-3/4 h-[80%] object-cover z-10"
          />
          
          {/* Imagem Secundária (Frente, sobreposta) */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=800&q=80"
            alt="Ambiente sofisticado do restaurante"
            className="absolute right-0 bottom-0 w-2/3 h-[60%] object-cover border-8 border-surface z-20 shadow-2xl"
          />
          
          {/* Elemento Decorativo (Forma geométrica para compor) */}
          <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-background z-0"></div>
        </div>

        {/* Lado Direito: Textos */}
        <div className="lg:pl-10">
          <SectionTitle
            subtitle="Nossa História"
            title="Tradição e Frescor na Ponta da Praia"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 text-textLight leading-relaxed"
          >
            <p>
              Nascido do amor pelo mar e pela rica cultura caiçara, o J. Garcia abriu suas portas em 1998, aqui mesmo, em Santos. Desde o primeiro dia, nossa filosofia permanece inalterada: respeitar o tempo da natureza e oferecer apenas o que há de mais fresco.
            </p>
            <p>
              Nossa relação estreita com os pescadores locais nos permite selecionar diariamente os melhores frutos do mar, que chegam à nossa cozinha poucas horas após serem pescados no litoral paulista.
            </p>
            <p>
              Cada prato é uma celebração da gastronomia caiçara, unindo receitas tradicionais de família a toques contemporâneos de alta culinária. Uma experiência sensorial para quem exige o melhor.
            </p>

            <div className="pt-8">
              <Button href="#reserva" variant="outline">
                Faça sua Reserva
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}