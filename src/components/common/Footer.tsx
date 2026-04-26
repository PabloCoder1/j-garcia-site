import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-surface py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-serif mb-4">J. Garcia</h2>
          <p className="text-surface/80 text-sm leading-relaxed">
            A verdadeira essência dos frutos do mar em Santos. Tradição, frescor e uma experiência inesquecível à beira-mar.
          </p>
        </div>

        {/* Contato & Endereço */}
        <div>
          <h3 className="text-lg uppercase tracking-widest mb-4 font-medium text-accent">Contato</h3>
          <ul className="space-y-3 text-surface/80 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-accent mt-1 text-lg flex-shrink-0" />
              <span>Av. Rei Pelé, 77 - Ponta da Praia<br />Santos - SP, 11030-400</span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-accent text-lg flex-shrink-0" />
              <span>(13) 99156-0814</span>
            </li>
          </ul>
        </div>

        {/* Horários e Redes */}
        <div>
          <h3 className="text-lg uppercase tracking-widest mb-4 font-medium text-accent">Horários</h3>
          <ul className="space-y-2 text-surface/80 text-sm mb-6">
            <li>Terça a Quinta: 11h30 às 23h00</li>
            <li>Sexta e Sábado: 11h30 às 00h00</li>
            <li>Domingo: 11h30 às 17h00</li>
          </ul>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-surface/30 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-surface/30 flex items-center justify-center hover:bg-whatsapp hover:border-whatsapp transition-all">
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-surface/10 text-center text-xs text-surface/60">
        <p>&copy; {new Date().getFullYear()} J. Garcia Restaurante. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}