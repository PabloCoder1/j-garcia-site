"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "whatsapp";
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = "primary", className = "", onClick }: ButtonProps) {
  const baseStyles = "group relative inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-primary text-surface hover:bg-textDark",
    outline: "border border-primary text-primary hover:bg-primary hover:text-surface",
    whatsapp: "bg-whatsapp text-surface hover:bg-[#20bd5a] shadow-lg shadow-whatsapp/20",
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Efeito de hover preenchendo o botão (apenas para outline) */}
      {variant === 'outline' && (
        <div className="absolute inset-0 h-full w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full z-0"></div>
      )}
    </>
  );

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {buttonContent}
    </button>
  );
}