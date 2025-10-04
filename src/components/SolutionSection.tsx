import { Brain, Zap, Layers, CheckCircle2, Repeat, DollarSign, Server } from "lucide-react";

export const SolutionSection = () => {
  const features = [
    {
      icon: Brain,
      title: "On-Orbit AI Processing",
      description: "Integrated LLMs process imagery in space, sending only actionable insights.",
    },
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "Get sub-hour notifications with median response time of just 15 minutes.",
    },
    {
      icon: Layers,
      title: "Massive Data Reduction",
      description: "Reduce downlink from 100MB to 0.7MB—cutting costs by up to 70%.",
    },
  ];

  const productTiles = [
    {
      icon: Repeat,
      title: "Subscriptions",
      description: "Continuous monitoring for enterprise customers with recurring revenue.",
    },
    {
      icon: DollarSign,
      title: "On-Demand Tasking",
      description: "Pay-per-use imaging requests and instant analysis.",
    },
    {
      icon: Layers,
      title: "Hosted Payloads",
      description: "Third-party sensors and instruments generate additional revenue.",
    },
    {
      icon: Server,
      title: "On-Orbit Compute",
      description: "Rent processing capacity for customer AI models.",
    },
  ];

  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              OrbitX
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The first satellite network with integrated AI for intelligent, cost-effective operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-panel rounded-2xl p-8 hover-lift text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 glow-accent">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Product Offerings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productTiles.map((product, index) => (
              <div 
                key={product.title}
                className="glass-panel rounded-2xl p-6 hover-lift text-center"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/80 to-accent flex items-center justify-center mx-auto mb-4 glow-accent">
                  <product.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
