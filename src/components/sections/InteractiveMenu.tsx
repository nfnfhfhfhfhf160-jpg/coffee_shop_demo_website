
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

const MENU_DATA = {
  "Coffee": [
    { name: "Nebula Latte", price: "$7.50", desc: "Butterfly pea flower espresso with vanilla bean and micro-foam.", popular: true, img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600" },
    { name: "Golden Aura", price: "$6.00", desc: "Double shot of high-altitude beans with activated charcoal.", popular: false, img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600" },
    { name: "Silk Brew", price: "$6.50", desc: "48-hour cold brew infused with nitrogen and cocoa nibs.", popular: true, img: "https://images.unsplash.com/photo-1461023233917-f5a6b86649fc?q=80&w=600" }
  ],
  "Juices": [
    { name: "Solar Flare", price: "$8.50", desc: "Dragon fruit, passion fruit, and golden turmeric extract.", popular: true, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600" },
    { name: "Forest Mist", price: "$9.00", desc: "Cold-pressed kale, wild apple, spirulina, and lime.", popular: false, img: "https://images.unsplash.com/photo-1523472721958-978152f4d69b?q=80&w=600" },
    { name: "Ruby Eclipse", price: "$8.00", desc: "Beetroot, ginger, pomegranate, and essence of rose.", popular: true, img: "https://images.unsplash.com/photo-1610632380989-68d199ff3cc3?q=80&w=600" }
  ],
  "Desserts": [
    { name: "Lunar Velvet", price: "$12.00", desc: "Dark cocoa sponge with white chocolate galaxy glaze.", popular: true, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600" },
    { name: "Stardust Macarons", price: "$15.00", desc: "Set of 4 hand-painted macarons with lavender honey center.", popular: false, img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600" },
    { name: "Crystal Tart", price: "$14.00", desc: "Clear jelly infused with yuzu and silver leaf.", popular: true, img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=600" }
  ]
};

export function InteractiveMenu() {
  return (
    <section id="menu" className="py-40 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-6">
            <Badge variant="outline" className="rounded-full px-6 py-1.5 text-primary border-primary/30 uppercase tracking-[0.3em] text-[10px] font-black">
              The Enchanted Collection
            </Badge>
            <h2 className="text-6xl md:text-8xl font-headline font-bold leading-none">
              The <span className="text-gradient">Selection.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-xl leading-relaxed font-medium">
            Curated alchemy for those who seek the extraordinary in every bite.
          </p>
        </div>

        <Tabs defaultValue="Coffee" className="w-full">
          <TabsList className="flex w-fit mx-auto mb-20 glass-morphism p-2 rounded-full border-white/10 gap-2">
            {Object.keys(MENU_DATA).map((cat) => (
              <TabsTrigger 
                key={cat} 
                value={cat} 
                className="rounded-full px-12 py-4 text-xs font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500 hover:bg-white/5"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(MENU_DATA).map(([category, items]) => (
            <TabsContent 
              key={category} 
              value={category} 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-0 perspective-1000"
            >
              {items.map((item, idx) => (
                <Card 
                  key={idx} 
                  className="glass-card group border-none shadow-none overflow-hidden rounded-[3.5rem] flex flex-col h-full hover:-translate-y-4 tilt-inner"
                >
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    
                    {item.popular && (
                      <div className="absolute top-8 right-8 glass-morphism px-4 py-2 rounded-full border-white/20 flex items-center gap-2">
                        <Zap className="w-3 h-3 text-secondary fill-current" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Aura Fav</span>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-10 space-y-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/40">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-3xl font-bold font-headline leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
                        <span className="text-primary font-black text-2xl">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed font-medium">{item.desc}</p>
                    </div>
                    
                    <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-5 transition-all">
                      Add to Journey <ArrowRight className="w-5 h-5" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
