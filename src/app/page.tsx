import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { InteractiveMenu } from "@/components/sections/InteractiveMenu";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";
import { FloatingAction } from "@/components/sections/FloatingAction";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="glow-orb w-[600px] h-[600px] bg-secondary/10 top-0 left-0" />
        <div className="glow-orb w-[500px] h-[500px] bg-primary/5 bottom-0 right-0" />
      </div>

      <Navbar />
      
      <div className="space-y-0">
        <Hero />
        
        {/* Scrolling Marquee Section */}
        <section className="py-16 relative z-10 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex items-center gap-12 px-6">
                {[
                  "Direct Trade",
                  "Micro-Roasted Daily",
                  "Ethically Sourced",
                  "Artisan Crafted",
                  "Premium Quality",
                  "Small Batch",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-2xl md:text-3xl font-headline font-bold text-primary/80">{text}</span>
                    <span className="w-2 h-2 rounded-full bg-secondary/60" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <InteractiveMenu />
        
        <Gallery />

        {/* Membership Section */}
        <section id="reservations" className="py-32 px-6 relative bg-white/20">
          <div className="max-w-6xl mx-auto glass-morphism p-12 md:p-24 rounded-[5rem] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full border border-black/10 text-xs font-bold uppercase tracking-widest text-secondary">
                  Exclusive Invitation
                </div>
                <h2 className="text-5xl md:text-7xl font-headline font-bold leading-tight text-primary">
                  Reserve Your <br />
                  <span className="text-gradient">Experience.</span>
                </h2>
                <p className="text-muted-foreground text-xl leading-relaxed font-medium">
                  Secure your spot in our boutique cafe. Each reservation includes a complimentary tasting of our seasonal blend.
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-14 h-14 rounded-full border-4 border-background overflow-hidden relative">
                        <Image src={`https://picsum.photos/seed/${i + 80}/100/100`} alt="Guest" fill className="object-cover" />
                      </div>
                    ))}
                    <div className="w-14 h-14 rounded-full border-4 border-background glass-morphism flex items-center justify-center text-xs font-black text-primary">
                      +2K
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">Joined by 2,000+ members</p>
                </div>

                <button className="relative group/btn inline-flex items-center justify-center overflow-hidden h-20 px-12 rounded-full bg-primary text-white font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/10">
                  <span className="relative z-10">Reserve a Table</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </button>
              </div>

              <div className="relative aspect-square md:aspect-auto md:h-full">
                <div className="relative w-full h-[550px] glass-morphism p-3 rounded-[4rem] group-hover:rotate-1 transition-transform duration-700">
                  <div className="relative w-full h-full overflow-hidden rounded-[3.5rem]">
                    <Image 
                      src="/images/cafe-vibe.jpg"
                      alt="Heritage Vibe"
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
