
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export function Gallery() {
  const images = [
    { ...PlaceHolderImages.find(i => i.id === 'interior-corner'), title: 'The Velvet Sanctuary' },
    { ...PlaceHolderImages.find(i => i.id === 'coffee-art'), title: 'Pure Gold' },
    { ...PlaceHolderImages.find(i => i.id === 'juice-premium'), title: 'Botanical Bloom' },
    { ...PlaceHolderImages.find(i => i.id === 'dessert-luxury'), title: 'Heavenly Bites' },
  ];

  return (
    <section id="gallery" className="py-40 px-6 relative overflow-hidden bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 space-y-8">
           <Badge variant="outline" className="rounded-full px-6 py-1.5 text-secondary border-secondary/30 uppercase tracking-[0.3em] text-[10px] font-black">
              Visual Chronicle
            </Badge>
            <h2 className="text-6xl md:text-9xl font-headline font-bold leading-none">
              The <span className="text-gradient">Vibe.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-medium leading-relaxed">
              Step into a world where architecture and atmosphere dance in perfect harmony.
            </p>
        </div>

        {/* Bento Grid with Non-Ordinary Image Shapes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[1200px] md:h-[900px] perspective-1000">
          
          <div className="md:col-span-8 md:row-span-2 relative group glass-morphism p-3 rounded-[5rem] tilt-inner">
            <div className="relative w-full h-full rounded-[4.5rem] overflow-hidden">
              <Image
                src={images[0]?.imageUrl || ""}
                alt={images[0]?.title || ""}
                fill
                className="object-cover transition-transform duration-[20s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-12 text-center">
                <span className="font-headline font-bold text-5xl tracking-tight mb-4">{images[0]?.title}</span>
                <p className="text-white/60 font-medium">Where every corner tells a secret.</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 relative group glass-morphism p-3 rounded-[4rem] tilt-inner">
            <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden">
              <Image
                src={images[1]?.imageUrl || ""}
                alt={images[1]?.title || ""}
                fill
                className="object-cover transition-transform duration-[15s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-headline font-bold text-2xl uppercase tracking-widest">{images[1]?.title}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 relative group glass-morphism p-3 rounded-[4rem] tilt-inner">
            <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden">
              <Image
                src={images[3]?.imageUrl || ""}
                alt={images[3]?.title || ""}
                fill
                className="object-cover transition-transform duration-[15s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-headline font-bold text-2xl uppercase tracking-widest">{images[3]?.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Blob */}
      <div className="glow-orb w-[700px] h-[700px] bg-secondary/5 -bottom-48 -left-48" />
    </section>
  );
}
