import { Coffee, Instagram, Twitter, Facebook, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="about" className="relative bg-white/30 pt-40 pb-20 overflow-hidden border-t border-black/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-secondary/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
        <div className="md:col-span-5 space-y-12">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-br from-[#4A3228] to-[#8B5E3C] rounded-3xl shadow-xl shadow-primary/10">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <span className="font-headline font-bold text-4xl tracking-tighter text-primary">Heritage <span className="text-secondary">Brews</span></span>
          </div>
          <p className="text-muted-foreground text-xl leading-relaxed font-medium">
            Dedicated to the art of coffee. We bring the world's most exceptional beans to your cup with precision and passion.
          </p>
          <div className="flex items-center gap-6">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-14 h-14 glass-morphism rounded-2xl flex items-center justify-center text-primary hover:text-secondary hover:border-secondary/50 transition-all hover:-translate-y-2">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="space-y-8">
            <h4 className="font-headline font-bold text-xl uppercase tracking-widest text-secondary">Hours</h4>
            <ul className="space-y-6 text-muted-foreground font-medium">
              <li className="flex justify-between border-b border-black/5 pb-3"><span>Mon - Fri</span> <span className="text-primary font-bold">08:00 - 20:00</span></li>
              <li className="flex justify-between border-b border-black/5 pb-3"><span>Saturday</span> <span className="text-primary font-bold">09:00 - 22:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-primary font-bold">09:00 - 18:00</span></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-headline font-bold text-xl uppercase tracking-widest text-secondary">Contact</h4>
            <ul className="space-y-8 text-muted-foreground font-medium">
              <li className="flex items-start gap-4 group cursor-pointer">
                <Phone className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary transition-colors">+91 98765 88990</span>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <MapPin className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary transition-colors">124, Heritage Street, Downtown</span>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <Mail className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary transition-colors">hello@heritagebrews.com</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="font-headline font-bold text-xl uppercase tracking-widest text-secondary">Join Us</h4>
            <div className="space-y-4">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 h-16 focus:outline-none focus:border-secondary transition-all font-medium text-sm group-hover:bg-black/10 text-primary"
                />
                <button className="absolute right-2 top-2 h-12 w-12 bg-primary text-white rounded-xl flex items-center justify-center hover:scale-105 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Subscribe to our newsletter.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center pt-20 border-t border-black/5 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
        © 2024 Heritage Brews. Crafted with Care.
      </div>
    </footer>
  );
}
