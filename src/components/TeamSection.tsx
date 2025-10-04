import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former NASA engineer with 15 years in satellite systems.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "AI researcher specializing in on-device machine learning.",
    },
    {
      name: "Dr. Elena Volkov",
      role: "Chief Scientist",
      bio: "PhD in Aerospace Engineering, 20+ publications in orbital mechanics.",
    },
    {
      name: "James Park",
      role: "VP of Operations",
      bio: "10 years managing commercial satellite deployments.",
    },
  ];

  return (
    <section id="team" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Team</h2>
          <p className="text-xl text-muted-foreground">
            World-class expertise in aerospace, AI, and commercial operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="glass-panel rounded-2xl p-6 hover-lift text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 rounded-full gradient-hero mx-auto mb-4 flex items-center justify-center">
                <div className="text-3xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <div className="text-sm text-accent mb-3">{member.role}</div>
              <p className="text-xs text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex gap-2 justify-center">
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
