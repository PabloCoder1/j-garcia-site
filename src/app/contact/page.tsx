"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Fale Conosco"
          title="Estamos à sua disposição"
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Lado Esquerdo: Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-serif text-primary mb-6">Informações</h3>
              <ul className="space-y-6 text-textLight">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0 text-accent">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <strong className="block text-primary font-medium mb-1">Endereço</strong>
                    <span>Av. Rei Pelé, 77 - Ponta da Praia<br />Santos - SP, 11030-400</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0 text-accent">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <strong className="block text-primary font-medium mb-1">WhatsApp / Telefone</strong>
                    <span>(13) 99156-0814</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0 text-accent">
                    <FaEnvelope />
                  </div>
                  <div>
                    <strong className="block text-primary font-medium mb-1">E-mail</strong>
                    <span>contato@jgarcia.com.br</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-primary mb-6">Horário de Funcionamento</h3>
              <ul className="space-y-4 text-textLight">
                <li className="flex items-center gap-4">
                  <FaClock className="text-accent flex-shrink-0" />
                  <span><strong>Terça a Quinta:</strong> 11h30 às 23h00</span>
                </li>
                <li className="flex items-center gap-4">
                  <FaClock className="text-accent flex-shrink-0" />
                  <span><strong>Sexta e Sábado:</strong> 11h30 às 00h00</span>
                </li>
                <li className="flex items-center gap-4">
                  <FaClock className="text-accent flex-shrink-0" />
                  <span><strong>Domingo:</strong> 11h30 às 17h00</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Lado Direito: Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-background p-8 md:p-10 border border-surface/10"
          >
            <h3 className="text-2xl font-serif text-primary mb-8">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Nome Completo</label>
                <input type="text" id="name" className="w-full bg-surface border border-surface/20 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-textDark" placeholder="Seu nome completo" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">E-mail</label>
                <input type="email" id="email" className="w-full bg-surface border border-surface/20 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-textDark" placeholder="seu@email.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Assunto</label>
                <select id="subject" className="w-full bg-surface border border-surface/20 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-textDark appearance-none">
                  <option value="">Selecione um assunto</option>
                  <option value="reserva">Reserva de Mesa / Eventos</option>
                  <option value="duvida">Dúvidas Gerais</option>
                  <option value="feedback">Feedback</option>
                  <option value="trabalhe">Trabalhe Conosco</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Mensagem</label>
                <textarea id="message" rows={4} className="w-full bg-surface border border-surface/20 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-textDark resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              
              <div className="pt-4 flex flex-col gap-4">
                <Button variant="primary" className="w-full">
                  Enviar Mensagem
                </Button>
                <p className="text-xs text-textLight text-center font-light">
                  Para reservas imediatas, prefira utilizar nosso <a href="https://wa.me/5513991560814" className="text-accent hover:underline">WhatsApp</a>.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}