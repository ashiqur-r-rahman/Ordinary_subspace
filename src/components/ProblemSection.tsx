import { AlertTriangle, Database, Clock, DollarSign } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Database,
      title: "Data Volume Bottleneck",
      description: "Traditional satellites send massive raw data files, overwhelming ground infrastructure and delaying insights.",
    },
    {
      icon: Clock,
      title: "Latency & Slow Processing",
      description: "Ground-based processing creates hours or days of lag—too slow for time-critical commercial operations.",
    },
    {
      icon: AlertTriangle,
      title: "Space Debris Risk",
      description: "Growing orbital congestion threatens satellite operations and long-term sustainability.",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">The Challenge</h2>
          <p className="text-xl text-muted-foreground">
            Current satellite operations face critical bottlenecks that limit commercial potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="glass-panel rounded-2xl p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
