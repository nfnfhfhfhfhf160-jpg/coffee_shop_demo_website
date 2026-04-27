
"use client";

import { useState, useEffect } from "react";
import { getPersonalizedMenuSuggestions, type PersonalizedMenuSuggestionsOutput } from "@/ai/flows/personalized-menu-suggestions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Loader2, CloudSun, Coffee } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AiAssistant() {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<PersonalizedMenuSuggestionsOutput | null>(null);
  const [currentTimeOfDay, setCurrentTimeOfDay] = useState<'morning' | 'late morning' | 'noon' | 'afternoon' | 'late afternoon' | 'evening' | 'night'>('morning');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 9) setCurrentTimeOfDay('morning');
    else if (hour >= 9 && hour < 12) setCurrentTimeOfDay('late morning');
    else if (hour >= 12 && hour < 14) setCurrentTimeOfDay('noon');
    else if (hour >= 14 && hour < 17) setCurrentTimeOfDay('afternoon');
    else if (hour >= 17 && hour < 19) setCurrentTimeOfDay('late afternoon');
    else if (hour >= 19 && hour < 22) setCurrentTimeOfDay('evening');
    else setCurrentTimeOfDay('night');
  }, []);

  async function handleGetSuggestions() {
    setLoading(true);
    try {
      const result = await getPersonalizedMenuSuggestions({
        timeOfDay: currentTimeOfDay,
        weatherCondition: 'warm' // Simulated, could be dynamic in a real app
      });
      setSuggestions(result);
    } catch (error) {
      console.error("AI Assistant Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card/20 overflow-hidden">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-[2rem] relative border-primary/20">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Sparkles className="w-32 h-32 text-primary" />
        </div>

        <div className="space-y-6 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            AI Aura Assistant
          </div>
          
          <h2 className="text-3xl md:text-5xl font-headline font-bold">What should I drink <span className="text-primary">right now?</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Our AI magic senses the vibes of the hour. It's {currentTimeOfDay}—let us suggest the perfect brew for your soul.
          </p>

          <Button 
            onClick={handleGetSuggestions} 
            disabled={loading}
            size="lg"
            className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : (
              <Sparkles className="w-5 h-5 mr-2" />
            )}
            Get Personalized Suggestion
          </Button>

          {suggestions && (
            <div className="grid md:grid-cols-2 gap-4 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {suggestions.suggestions.map((item, idx) => (
                <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {item.category}
                      </Badge>
                    </div>
                    <h4 className="text-xl font-bold font-headline">{item.name}</h4>
                    <p className="text-sm text-muted-foreground italic">"{item.reason}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
