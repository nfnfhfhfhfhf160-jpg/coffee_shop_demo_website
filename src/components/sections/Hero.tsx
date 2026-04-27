
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Aura Brews Interior"
          fill
          priority
          className="object-cover opacity-40 scale-105"
          data-ai-hint="cafe interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full text-primary text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Sparkles className="w-4 h-4" />
          <span>The Most Enchanting Cafe in Downtown</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-headline font-bold tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Sip the <span className="text-gradient">Magic</span>,<br />
          Taste the <span className="text-primary">Love</span>.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          Welcome to Aura Brews & Bites, where every cup tells a story and every bite is a journey through enchanted flavors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-400">
          <Button size="lg" className="rounded-full px-8 h-14 text-lg font-semibold group shadow-lg shadow-primary/20">
            View Menu
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg font-semibold glass-card">
            Our Location
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
