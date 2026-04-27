
import { Coffee, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="about" className="bg-card/40 pt-24 pb-12 border-t px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1 space-y-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="p-2 bg-primary rounded-xl">
              <Coffee className="w-6 h-6 text-background" />
            </div>
            <span className="font-headline font-bold text-2xl tracking-tight">Aura <span className="text-primary">Brews</span></span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Crafting magical moments since 2024. Your premium destination for exquisite brews and heavenly bites in Downtown.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="#" className="p-2 glass-card rounded-full hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="p-2 glass-card rounded-full hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-2 glass-card rounded-full hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h4 className="font-headline font-bold text-lg">Operating Hours</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Mon - Fri</span> <span>08:00 - 22:00</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span>09:00 - 23:00</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>09:00 - 20:00</span></li>
          </ul>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h4 className="font-headline font-bold text-lg">Contact Us</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span>+91 98765 88990</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>hello@aurabrews.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span>124, Heritage Street, Downtown</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h4 className="font-headline font-bold text-lg">Newsletter</h4>
          <p className="text-sm text-muted-foreground">Get weekly magic in your inbox.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-white/5 border border-white/10 rounded-full px-4 h-11 focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <button className="bg-primary text-background font-bold h-11 px-6 rounded-full hover:bg-primary/90 transition-all text-sm">Join</button>
          </div>
        </div>
      </div>
      
      <div className="text-center pt-12 border-t border-white/5 text-xs text-muted-foreground">
        © 2024 Aura Brews & Bites. All rights reserved. Designed for excellence.
      </div>
    </footer>
  );
}
