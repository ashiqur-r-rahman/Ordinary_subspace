import { Leaf, Recycle, Shield, CheckCircle2 } from "lucide-react";

export const SustainabilitySection = () => {
  const commitments = [
    {
      icon: Recycle,
      title: "90% Deorbit Rate",
      description: "90% of satellites deorbit within 5 years, exceeding industry standards.",
    },
    {
      icon: Shield,
      title: "Debris Mitigation",
      description: "Active debris avoidance and end-of-life disposal protocols.",
    },
    {
      icon: Leaf,
      title: "Environmental Compliance",
      description: "Full adherence to NASA and international space debris guidelines.",
    },
  ];

  return (
    <section id="sustainability" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Sustainable{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              by Design
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Designed to meet ODPO guidance — 90% of satellites deorbit within 5 years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {commitments.map((item, index) => (
            <div 
              key={item.title}
              className="glass-panel rounded-2xl p-8 hover-lift text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-card flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-6">Our Environmental Commitments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Controlled deorbit for all satellites",
              "Collision avoidance maneuvers (DAS integration)",
              "Transparent orbit tracking data",
              "Minimal propellant emissions",
              "Compliance with FCC, NASA, and ODPO guidelines",
              "Active participation in space sustainability forums",
            ].map((commitment) => (
              <div key={commitment} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{commitment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
