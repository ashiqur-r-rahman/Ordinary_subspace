import { Calendar, Rocket, Satellite, Globe } from "lucide-react";

export const RoadmapSection = () => {
  const milestones = [
    {
      icon: Calendar,
      phase: "Phase 0",
      title: "Research & Design",
      description: "Complete feasibility studies, AI model selection, and hardware specification.",
    },
    {
      icon: Calendar,
      phase: "Phase 1",
      title: "Prototype & Testing",
      description: "Build and ground-test integrated AI processing units and satellite bus.",
    },
    {
      icon: Rocket,
      phase: "Phase 2",
      title: "First Launch & Validation",
      description: "Deploy initial satellite to LEO and validate on-orbit AI capabilities.",
    },
    {
      icon: Satellite,
      phase: "Phase 3",
      title: "Constellation & Scale",
      description: "Expand to 4-8 satellites and begin full commercial operations with enterprise customers.",
    },
  ];

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Roadmap</h2>
          <p className="text-xl text-muted-foreground">
            From prototype to full commercial operations in 24 months.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.phase}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-panel rounded-2xl p-6 hover-lift inline-block w-full max-w-md">
                    <div className="flex items-center gap-3 mb-3">
                      {index % 2 === 0 ? (
                        <>
                          <div>
                            <div className="text-sm font-semibold text-accent">{milestone.phase}</div>
                            <h3 className="text-xl font-bold">{milestone.title}</h3>
                          </div>
                          <div className="w-12 h-12 rounded-xl gradient-card flex items-center justify-center flex-shrink-0 ml-auto">
                            <milestone.icon className="h-6 w-6 text-white" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-12 h-12 rounded-xl gradient-card flex items-center justify-center flex-shrink-0">
                            <milestone.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-accent">{milestone.phase}</div>
                            <h3 className="text-xl font-bold">{milestone.title}</h3>
                          </div>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>

                <div className="w-4 h-4 rounded-full bg-accent glow-accent relative z-10 flex-shrink-0" />

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
