
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Star, Users, MapPin } from "lucide-react";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden hero-gradient pt-24">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Aura Brews Interior"
          fill
          priority
          className="object-cover opacity-60 scale-105 transition-transform duration-[30s] ease-linear hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 glass-morphism rounded-full text-primary text-xs font-black uppercase tracking-[0.2em]">
              <Sparkles className="w-4 h-4 animate-pulse text-secondary" />
              <span>Downtown's Enchanted Sanctuary</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-7xl md:text-9xl font-headline font-bold tracking-tighter leading-[0.95] text-white">
                Sip the <br />
                <span className="text-gradient">Magic.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl font-medium leading-relaxed">
                Where high-altitude beans meet ethereal design. Welcome to a sensory journey crafted for the extraordinary.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Button size="lg" className="rounded-full px-12 h-20 text-xl font-black group shadow-2xl shadow-primary/40 bg-white text-black hover:bg-white/90 hover:scale-105 active:scale-95 transition-all">
                Book a Table
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group cursor-pointer">
                <div className="w-14 h-14 rounded-full glass-morphism flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                   <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">Location</p>
                  <p className="text-sm font-bold">124, Heritage Street</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
            {/* Creative Image Layout: Glass Overlapping Panels */}
            <div className="relative z-10 perspective-1000">
              <div className="tilt-inner glass-morphism p-4 rounded-[4rem] border-white/20 shadow-2xl">
                <div className="relative h-[600px] w-full rounded-[3.5rem] overflow-hidden group">
                  <Image 
                    src={PlaceHolderImages.find(i => i.id === 'vibe-detail')?.imageUrl || ""}
                    alt="Signature Drink"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-10 left-10 space-y-2">
                    <div className="flex text-yellow-500 gap-1">
                       {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <h3 className="text-3xl font-black font-headline">Midnight Aura</h3>
                    <p className="text-white/60 font-medium">Signature Series No. 1</p>
                  </div>
                </div>

                {/* Floating Rating Card */}
                <div className="absolute -top-10 -right-10 glass-morphism p-8 rounded-[3rem] border-white/30 animate-float">
                  <div className="text-center">
                    <p className="text-4xl font-black font-headline text-primary">4.9</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">Global Rating</p>
                    <div className="mt-4 flex -space-x-3 justify-center">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative">
                           <Image src={`https://picsum.photos/seed/${i+20}/100/100`} alt="user" fill />
                         </div>
                       ))}
                    </div>
                    <p className="text-[9px] font-bold text-white/50 mt-2">1,000+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Dynamic Blobs */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-glow" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse-glow" />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">Scroll</p>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
