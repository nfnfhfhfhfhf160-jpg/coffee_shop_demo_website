"use client";

import { useState, useEffect } from "react";
import { Coffee, Instagram } from "lucide-react";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
        scrolled ? "glass-morphism rounded-full px-8 py-3 translate-y-2" : "bg-transparent"
      )}>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-3 bg-gradient-to-br from-[#4A3228] to-[#8B5E3C] rounded-2xl group-hover:rotate-[15deg] transition-transform duration-500 shadow-lg shadow-primary/10">
            <Coffee className="w-6 h-6 text-white" />
          </div>
          <span className="font-headline font-bold text-2xl tracking-tighter text-[#4A3228]">
            Heritage <span className="text-secondary">Brews</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#4A3228]">
          <a href="#menu" className="hover:text-secondary transition-colors relative group">
            Menu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
          </a>
          <a href="#gallery" className="hover:text-secondary transition-colors relative group">
            Vibe
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
          </a>
          <a href="#reservations" className="hover:text-secondary transition-colors relative group">
            Book
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
          </a>
          <a href="#about" className="hover:text-secondary transition-colors relative group">
            Story
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 px-5 py-2.5 glass-card rounded-full border-white/20 group cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#4A3228] hidden sm:inline">Open Now</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
             <Instagram className="w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
}
