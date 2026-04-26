"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detecta o scroll para mudar o fundo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Cardápio", href: "/menu" },
    { name: "Sobre Nós", href: "/#about" },
    { name: "Contato", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-surface/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-primary tracking-wider">
          J. Garcia
        </Link>

        {/* Links Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-textDark hover:text-accent transition-colors text-sm uppercase tracking-widest font-medium"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#reserva"
            className="border border-primary text-primary px-6 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-primary hover:text-surface transition-colors"
          >
            Reservar
          </a>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Menu Mobile com animação Framer Motion */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-surface shadow-lg md:hidden flex flex-col py-6 px-6 gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-textDark hover:text-accent uppercase tracking-widest text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}