import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import MenuPreview from "@/components/home/MenuPreview";
import DeliverySection from "@/components/home/DeliverySection";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import ReservationCTA from "@/components/home/ReservationCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MenuPreview />
      <DeliverySection />
      <Testimonials />
      <BlogPreview />
      <ReservationCTA />
    </main>
  );
}