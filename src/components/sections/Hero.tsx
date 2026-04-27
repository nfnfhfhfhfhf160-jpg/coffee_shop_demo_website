"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Star, MapPin } from "lucide-react";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-[105vh] w-full flex items-center justify-center overflow-hidden hero-gradient pt-24">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Heritage Brews Interior"
          fill
          priority
          className="object-cover opacity-80 scale-105 transition-transform duration-[30s] ease-linear hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 glass-morphism rounded-full text-primary text-xs font-black uppercase tracking-[0.2em]">
              <Sparkles className="w-4 h-4 animate-pulse text-secondary" />
              <span>Artisanal Coffee Mastery</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-7xl md:text-9xl font-headline font-bold tracking-tighter leading-[0.95] text-primary">
                Heritage <br />
                <span className="text-gradient">Brews.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl font-medium leading-relaxed">
                Where ethically sourced beans meet sophisticated design. Experience a ritual crafted for the true connoisseur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Button size="lg" className="rounded-full px-12 h-20 text-xl font-black group shadow-2xl shadow-primary/10 bg-primary text-white hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all">
                Book a Table
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <div className="flex items-center gap-3 text-primary/70 hover:text-primary transition-colors group cursor-pointer">
                <div className="w-14 h-14 rounded-full glass-morphism flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                   <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary">Location</p>
                  <p className="text-sm font-bold text-primary">124, Heritage Street</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
            <div className="relative z-10 perspective-1000">
              <div className="tilt-inner glass-morphism p-4 rounded-[4rem] border-white/60 shadow-2xl">
                <div className="relative h-[600px] w-full rounded-[3.5rem] overflow-hidden group">
                  <Image 
                    src={PlaceHolderImages.find(i => i.id === 'vibe-detail')?.imageUrl || ""}
                    alt="Signature Brew"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-40" />
                  
                  <div className="absolute bottom-12 left-12 space-y-2">
                    <div className="flex text-accent gap-1">
                       {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <h3 className="text-3xl font-black font-headline text-white">Signature Blend</h3>
                    <p className="text-white/80 font-medium">Batch No. 124</p>
                  </div>
                </div>

                {/* Floating Rating Card */}
                <div className="absolute -top-10 -right-10 glass-morphism p-8 rounded-[3rem] border-white/60 animate-float">
                  <div className="text-center">
                    <p className="text-4xl font-black font-headline text-secondary">4.9</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">Heritage Rating</p>
                    <div className="mt-4 flex -space-x-3 justify-center">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-white/50 overflow-hidden relative">
                           <Image src={`https://picsum.photos/seed/${i+20}/100/100`} alt="user" fill />
                         </div>
                       ))}
                    </div>
                    <p className="text-[9px] font-bold text-muted-foreground mt-2">1,000+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
