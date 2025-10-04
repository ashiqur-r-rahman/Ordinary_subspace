import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TeamSection = () => {
  const team = [
    {
      name: "Ashiqur Rahman",
      role: "Team Lead & Vision",
      bio: "Leads project direction and strategy. Coordinates across technical and business tracks to ensure OrbitX is both innovative and practical.",
    },
    {
      name: "Abdullah Ash Shafi",
      role: "Technical Lead (AI & Systems)",
      bio: "Specializes in onboard AI/LLM integration and system architecture. Focuses on turning raw orbital data into actionable insights.",
    },
    {
      name: "Md Golam Rabbani",
      role: "Business & Market Development",
      bio: "Works on business model design, customer segments, and go-to-market strategy. Ensures commercial viability and scalability.",
    },
    {
      name: "Md. Badruddin Tasnim",
      role: "Operations & Sustainability",
      bio: "Oversees orbital operations, debris mitigation, and compliance with international guidelines (ODPO, DAS). Ensures sustainability is built into OrbitX.",
    },
    {
      name: "Ruhul Amin Pappo",
      role: "Prototype & UI/UX",
      bio: "Responsible for interactive demos, user interface design, and storytelling. Translates technical features into engaging, human-friendly experiences.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
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
