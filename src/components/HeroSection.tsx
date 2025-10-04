import { Button } from "@/components/ui/button";
import { ArrowRight, Satellite } from "lucide-react";
import heroImage from "@/assets/hero-earth-satellite.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 16, 32, 0.85), rgba(11, 16, 32, 0.85)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 text-center z-10 py-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm">
            <Satellite className="h-4 w-4 text-secondary" />
            <span>Next-Gen Satellite Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            We put AI in orbit so you get{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              answers — not terabytes.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            OrbitX delivers on-orbit AI processing to reduce data costs by 70% and provide 
            sub-hour alerts for commercial operations in LEO.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection('product')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 glow-accent hover-lift"
            >
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Contact Sales
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              { value: "70%", label: "Downlink Reduction" },
              { value: "15min", label: "Median Alert Time" },
              { value: "90%", label: "Satellites Deorbit <5yr" },
            ].map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl p-6 hover-lift">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
