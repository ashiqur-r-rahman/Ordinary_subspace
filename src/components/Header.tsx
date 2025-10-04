import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <Rocket className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            OrbitX
          </span>
        </div>
        
        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold glow-accent"
        >
          Get in Touch
        </Button>
      </div>
    </header>
  );
};
