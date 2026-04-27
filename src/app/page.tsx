
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { InteractiveMenu } from "@/components/sections/InteractiveMenu";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";
import { FloatingAction } from "@/components/sections/FloatingAction";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-primary/40">
      {/* Dynamic Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="glow-orb w-[600px] h-[600px] bg-primary/20 -top-48 -left-48" />
        <div className="glow-orb w-[500px] h-[500px] bg-secondary/10 bottom-0 -right-24" />
      </div>

      <Navbar />
      
      <div className="space-y-0">
        <Hero />
        
        {/* Curated Highlights Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { title: "Pure Beans", icon: "☕", desc: "Sourced from the ethereal heights of Ethiopia." },
              { title: "Artisan Soul", icon: "🎨", desc: "Crafted by baristas who see every cup as a canvas." },
              { title: "Aura Vibe", icon: "✨", desc: "A sanctuary for deep work and deeper connections." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-10 rounded-[3rem] text-center space-y-4 group">
                <div className="text-4xl group-hover:scale-125 transition-transform duration-500 inline-block">{item.icon}</div>
                <h3 className="text-2xl font-bold font-headline">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <InteractiveMenu />
        
        <Gallery />

        {/* Exclusive Reservation Section */}
        <section id="reservations" className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto glass-morphism p-12 md:p-24 rounded-[5rem] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-primary">
                  Limited Availability
                </div>
                <h2 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
                  Secure Your <br />
                  <span className="text-gradient">Sanctuary.</span>
                </h2>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  Join the elite circle of Aura guests. Experience dining redefined in the heart of Heritage Street.
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-14 h-14 rounded-full border-4 border-background overflow-hidden relative">
                        <Image src={`https://picsum.photos/seed/${i + 50}/100/100`} alt="Guest" fill className="object-cover" />
                      </div>
                    ))}
                    <div className="w-14 h-14 rounded-full border-4 border-background glass-morphism flex items-center justify-center text-xs font-black">
                      +1K
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">Loved by 1,000+ connoisseurs</p>
                </div>

                <button className="relative group/btn inline-flex items-center justify-center overflow-hidden h-20 px-12 rounded-full bg-white text-black font-black text-xl hover:scale-105 active:scale-95 transition-all">
                  <span className="relative z-10">Reserve a Table</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </button>
              </div>

              <div className="relative aspect-square md:aspect-auto md:h-full">
                <div className="relative w-full h-[500px] glass-morphism p-3 rounded-[4rem] group-hover:rotate-1 transition-transform duration-700">
                  <div className="relative w-full h-full overflow-hidden rounded-[3.5rem]">
                    <Image 
                      src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047"
                      alt="Aura Atmosphere"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[10s]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <FloatingAction />
    </main>
  );
}
