
"use client";

import { MessageCircle, Calendar } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function FloatingAction() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a 
              href="https://wa.me/919876588990" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 animate-in slide-in-from-right-12"
            >
              <MessageCircle className="w-7 h-7" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-black text-white border-none font-medium">
            Chat with us
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              className="w-14 h-14 bg-primary text-background rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 animate-in slide-in-from-right-12 delay-100"
            >
              <Calendar className="w-7 h-7" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-black text-white border-none font-medium">
            Book a Table
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
