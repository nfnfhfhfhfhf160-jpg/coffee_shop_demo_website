
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { InteractiveMenu } from "@/components/sections/InteractiveMenu";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";
import { FloatingAction } from "@/components/sections/FloatingAction";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <InteractiveMenu />
      <Gallery />
      <Footer />
      <FloatingAction />
    </main>
  );
}
