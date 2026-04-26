"use client";

import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { FaWhatsapp, FaMotorcycle, FaStar } from "react-icons/fa";

export default function DeliverySection() {
  const whatsappLink = "https://wa.me/5513991560814?text=Olá! Quero fazer um pedido no J. Garcia";

  const platforms = [
    { name: "WhatsApp", link: whatsappLink, desc: "Atendimento direto", icon: FaWhatsapp, hoverColor: "group-hover:text-whatsapp group-hover:border-whatsapp" },
    { name: "iFood", link: "https://www.ifood.com.br", desc: "Entrega rápida", icon: FaMotorcycle, hoverColor: "group-hover:text-[#EA1D2C] group-hover:border-[#EA1D2C]" },
    { name: "Rappi", link: "https://www.rappi.com.br", desc: "Clube Prime", icon: FaStar, hoverColor: "group-hover:text-[#FF441F] group-hover:border-[#FF441F]" },
    { name: "Keeta", link: "https://www.keeta.com.br", desc: "Novidade na região", icon: FaMotorcycle, hoverColor: "group-hover:text-accent group-hover:border-accent" },
  ];

  return (
    <section className="py-24 md:py-32 bg-primary border-t border-surface/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionTitle
          subtitle="Delivery"
          title="O Sabor do Mar na Sua Casa"
          centered={true}
          light={true}
        />

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {platforms.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className={`group flex flex-col items-center justify-center p-10 border border-surface/20 bg-surface/5 hover:bg-surface transition-all duration-300 ${platform.hoverColor}`}
            >
              <platform.icon className="text-4xl text-surface/80 mb-4 transition-colors duration-300 group-hover:inherit" />
              <h3 className="text-xl font-serif text-surface mb-2 transition-colors duration-300 group-hover:inherit">
                {platform.name}
              </h3>
              <span className="text-surface/60 text-sm uppercase tracking-widest transition-colors duration-300 group-hover:inherit">
                {platform.desc}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}