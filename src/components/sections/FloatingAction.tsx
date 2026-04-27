
"use client";

import { MessageCircle, Calendar, ArrowUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingAction() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-12 right-12 z-[100] flex flex-col gap-6">
      <TooltipProvider>
        {/* WhatsApp Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a 
              href="https://wa.me/919876588990" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-500 animate-in slide-in-from-right-20 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="w-8 h-8" />
              <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/20 -z-10" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-black text-white border-none font-bold text-[10px] uppercase tracking-widest px-4 py-2">
            Instant Inquiry
          </TooltipContent>
        </Tooltip>

        {/* Scroll Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={cn(
            "w-16 h-16 glass-morphism text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-700",
            scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          )}
        >
          <ArrowUp className="w-7 h-7" />
        </button>
      </TooltipProvider>
    </div>
  );
}
