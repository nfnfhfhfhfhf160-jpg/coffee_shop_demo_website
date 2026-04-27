
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Gallery() {
  const images = PlaceHolderImages.filter(img => img.id.startsWith('gallery-') || img.id === 'coffee-1' || img.id === 'dessert-1');

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Glimpse the <span className="text-primary">Vibes</span></h2>
            <p className="text-muted-foreground max-w-md">Every corner at Aura is designed for inspiration, comfort, and enchantment.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden group">
            <Image
              src={images[0]?.imageUrl || ""}
              alt="Gallery item large"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-headline font-bold text-xl">The Main Aura Hall</span>
            </div>
          </div>
          
          {images.slice(1, 5).map((img, idx) => (
            <div key={idx} className="relative h-[200px] md:h-[292px] rounded-[2rem] overflow-hidden group">
              <Image
                src={img.imageUrl}
                alt={`Gallery item ${idx}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                <span className="font-headline font-bold text-sm">{img.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
