"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({ subtitle, title, centered = false, light = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${centered ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <span className="block text-accent uppercase tracking-[0.3em] text-sm font-medium mb-4">
          {subtitle}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif ${light ? "text-surface" : "text-primary"}`}>
        {title}
      </h2>
    </motion.div>
  );
}