"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

const MENU_DATA = {
  "Coffee": [
    { name: "Velvet Latte", price: "$7.50", desc: "Single-origin espresso with smooth vanilla bean and textured micro-foam.", popular: true, img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600" },
    { name: "Golden Brew", price: "$6.00", desc: "Rich double shot of sun-dried Ethiopian beans with deep nutty notes.", popular: false, img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600" },
    { name: "Artisan Cold", price: "$6.50", desc: "24-hour slow-extracted brew infused with subtle hints of dark chocolate.", popular: true, img: "https://images.unsplash.com/photo-1461023233917-f5a6b86649fc?q=80&w=600" }
  ],
  "Juices": [
    { name: "Citrus Bloom", price: "$8.50", desc: "Freshly squeezed blood orange, pink grapefruit, and lemon balm.", popular: true, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600" },
    { name: "Green Serenity", price: "$9.00", desc: "Cold-pressed kale, wild apple, ginger, and organic spirulina.", popular: false, img: "https://images.unsplash.com/photo-1523472721958-978152f4d69b?q=80&w=600" },
    { name: "Summer Spark", price: "$8.00", desc: "Watermelon, dragon fruit, and essence of wild berries.", popular: true, img: "https://images.unsplash.com/photo-1610632380989-68d199ff3cc3?q=80&w=600" }
  ],
  "Desserts": [
    { name: "Honey Tart", price: "$12.00", desc: "Wildflower honey custard in a buttery shortcrust pastry shell.", popular: true, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600" },
    { name: "Heritage Macarons", price: "$15.00", desc: "Bespoke selection of our finest almond macarons with seasonal fillings.", popular: false, img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600" },
    { name: "Silk Cake", price: "$14.00", desc: "Layered dark chocolate mousse with a hazelnut praline base.", popular: true, img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=600" }
  ]
};

export function InteractiveMenu() {
  return (
    <section id="menu" className="py-40 px-6 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-secondary/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-6">
            <Badge variant="outline" className="rounded-full px-6 py-1.5 text-secondary border-secondary/30 uppercase tracking-[0.3em] text-[10px] font-black">
              The Artisan Collection
            </Badge>
            <h2 className="text-6xl md:text-8xl font-headline font-bold leading-none text-primary">
              The <span className="text-gradient">Selection.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-xl leading-relaxed font-medium">
            Meticulously crafted recipes using only the finest organic ingredients.
          </p>
        </div>

        <Tabs defaultValue="Coffee" className="w-full">
          <TabsList className="flex w-fit mx-auto mb-20 glass-morphism p-2 rounded-full border-white/60 gap-2">
            {Object.keys(MENU_DATA).map((cat) => (
              <TabsTrigger 
                key={cat} 
                value={cat} 
                className="rounded-full px-12 py-4 text-xs font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-500 hover:bg-black/5"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    
                    {item.popular && (
                      <div className="absolute top-8 right-8 glass-morphism px-4 py-2 rounded-full border-white/60 flex items-center gap-2">
                        <Zap className="w-3 h-3 text-secondary fill-current" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Chef's Choice</span>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-10 space-y-6 flex-1 flex flex-col justify-between bg-white/40">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-3xl font-bold font-headline leading-tight text-primary group-hover:text-secondary transition-colors">{item.name}</h3>
                        <span className="text-secondary font-black text-2xl">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed font-medium">{item.desc}</p>
                    </div>
                    
                    <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-5 transition-all">
                      Discover Flavor <ArrowRight className="w-5 h-5" />
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
