import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "J. Garcia | Restaurante de Frutos do Mar em Santos",
  description: "A verdadeira essência dos frutos do mar na Ponta da Praia. Experiência gastronômica inesquecível unindo tradição caiçara e alta culinária.",
  keywords: ["restaurante santos", "frutos do mar", "ponta da praia", "j garcia", "alta gastronomia", "ostras", "moqueca"],
  authors: [{ name: "J. Garcia" }],
  openGraph: {
    title: "J. Garcia | Alta Gastronomia em Santos",
    description: "A verdadeira essência dos frutos do mar na Ponta da Praia.",
    url: "https://jgarcia-santos.vercel.app", // Substitua pelo domínio final depois
    siteName: "J. Garcia Restaurante",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background text-textDark antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}