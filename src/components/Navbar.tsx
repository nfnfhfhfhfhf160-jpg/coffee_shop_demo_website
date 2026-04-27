
"use client";

import { useState, useEffect } from "react";
import { Coffee, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-primary rounded-xl group-hover:rotate-12 transition-transform">
            <Coffee className="w-6 h-6 text-background" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">Aura <span className="text-primary">Brews</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-full text-xs">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft" />
            <span className="font-medium">Open Now</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
