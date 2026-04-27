
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { InteractiveMenu } from "@/components/sections/InteractiveMenu";
import { AiAssistant } from "@/components/sections/AiAssistant";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";
import { FloatingAction } from "@/components/sections/FloatingAction";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <InteractiveMenu />
      <AiAssistant />
      <Gallery />
      <Footer />
      <FloatingAction />
    </main>
  );
}
