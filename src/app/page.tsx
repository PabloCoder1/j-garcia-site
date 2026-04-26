import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import MenuPreview from "@/components/home/MenuPreview";
import DeliverySection from "@/components/home/DeliverySection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MenuPreview />
      <DeliverySection />
    </main>
  );
}