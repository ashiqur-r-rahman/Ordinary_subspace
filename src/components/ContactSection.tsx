import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-card opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your satellite operations? Get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:2204034@student.ruet.ac.bd" className="text-sm text-muted-foreground hover:text-primary">
                      2204034@student.ruet.ac.bd
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+8801778432800" className="text-sm text-muted-foreground hover:text-secondary">
                      +880 1778 432 800
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-2">Investors & Partners</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in joining our mission? We'd love to hear from you.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full glow-accent">
                Request Pitch Deck
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-8 space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input 
                id="name" 
                placeholder="Your name" 
                required 
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@company.com" 
                required 
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">Company</label>
              <Input 
                id="company" 
                placeholder="Your company" 
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your needs..." 
                rows={4}
                required 
                className="bg-background/50"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold glow-accent"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
