"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Gallery() {
  const images = [
    { 
      imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec41b5ec?q=80&w=2070&auto=format&fit=crop", 
      title: 'The Heritage Lounge' 
    },
    { 
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000c2f471fa9a98305a0c82dcda-phsOCWK7hfTkC62wl3oIWh6JlIWRSi.png", 
      title: 'Liquid Gold' 
    },
    { 
      imageUrl: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=2000&auto=format&fit=crop", 
      title: 'Nature Unfiltered' 
    },
    { 
      imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2000&auto=format&fit=crop", 
      title: 'Sweet Alchemy' 
    },
  ];

  return (
    <section id="gallery" className="py-40 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 space-y-8">
           <Badge variant="outline" className="rounded-full px-6 py-1.5 text-secondary border-secondary/30 uppercase tracking-[0.3em] text-[10px] font-black">
              Atmosphere
            </Badge>
            <h2 className="text-6xl md:text-9xl font-headline font-bold leading-none text-primary">
              The <span className="text-gradient">Vibe.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-medium leading-relaxed">
              A curated space where light, shadow, and the aroma of roasted beans harmonize.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 h-[1200px] md:h-[900px] perspective-1000">
          
          <div className="md:col-span-8 md:row-span-2 relative group glass-morphism p-4 rounded-[5rem] tilt-inner">
            <div className="relative w-full h-full rounded-[4rem] overflow-hidden">
              <Image
                src={images[0]?.imageUrl || ""}
                alt={images[0]?.title || ""}
                fill
                className="object-cover transition-transform duration-[20s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-12 text-center">
                <span className="font-headline font-bold text-5xl tracking-tight text-white mb-4">{images[0]?.title}</span>
                <p className="text-white/80 font-medium">An sanctuary for focus and refined taste.</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 relative group glass-morphism p-4 rounded-[4rem] tilt-inner">
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden">
              <Image
                src={images[1]?.imageUrl || ""}
                alt={images[1]?.title || ""}
                fill
                className="object-cover transition-transform duration-[15s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-headline font-bold text-2xl uppercase tracking-widest text-white">{images[1]?.title}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 relative group glass-morphism p-4 rounded-[4rem] tilt-inner">
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden">
              <Image
                src={images[3]?.imageUrl || ""}
                alt={images[3]?.title || ""}
                fill
                className="object-cover transition-transform duration-[15s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-headline font-bold text-2xl uppercase tracking-widest text-white">{images[3]?.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glow-orb w-[700px] h-[700px] bg-secondary/5 -bottom-48 -left-48" />
    </section>
  );
}
