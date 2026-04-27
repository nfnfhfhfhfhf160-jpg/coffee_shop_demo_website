
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Soup, Cake, Star } from "lucide-react";
import Image from "next/image";

const MENU_DATA = {
  Coffee: [
    { name: "Magic Lavender Latte", price: "$6.50", desc: "Our signature espresso with floral lavender notes and creamy oat milk.", popular: true, img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=400" },
    { name: "Ethereal Espresso", price: "$4.00", desc: "Double shot of our ethically sourced house blend.", popular: false, img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=400" },
    { name: "Cloud Cold Brew", price: "$5.50", desc: "24-hour steeped cold brew topped with vanilla sweet cream cold foam.", popular: true, img: "https://images.unsplash.com/photo-1461023233917-f5a6b86649fc?q=80&w=400" }
  ],
  Juices: [
    { name: "Solar Flare", price: "$7.00", desc: "Cold-pressed orange, carrot, ginger, and turmeric for a golden boost.", popular: true, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=400" },
    { name: "Forest Mist", price: "$7.50", desc: "Cucumber, green apple, spinach, celery, and lime juice.", popular: false, img: "https://images.unsplash.com/photo-1523472721958-978152f4d69b?q=80&w=400" }
  ],
  Desserts: [
    { name: "Lunar Velvet Cake", price: "$8.50", desc: "Soft red velvet layers with cosmic cream cheese frosting.", popular: true, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400" },
    { name: "Golden Macarons", price: "$12.00", desc: "Box of 6 handmade macarons with gold dust finish.", popular: false, img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400" }
  ]
};

export function InteractiveMenu() {
  return (
    <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">The Enchanted <span className="text-primary">Menu</span></h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Carefully curated selections prepared with love and a touch of magic.</p>
      </div>

      <Tabs defaultValue="Coffee" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 glass-panel p-1 rounded-full h-14">
          <TabsTrigger value="Coffee" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background transition-all">Coffee</TabsTrigger>
          <TabsTrigger value="Juices" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background transition-all">Juices</TabsTrigger>
          <TabsTrigger value="Desserts" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background transition-all">Desserts</TabsTrigger>
        </TabsList>

        {Object.entries(MENU_DATA).map(([category, items]) => (
          <TabsContent key={category} value={category} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-0 focus-visible:outline-none">
            {items.map((item, idx) => (
              <Card key={idx} className="glass-card overflow-hidden group border-none shadow-none">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.popular && (
                    <Badge className="absolute top-4 right-4 bg-primary text-background font-bold">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Popular
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold font-headline">{item.name}</h3>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
