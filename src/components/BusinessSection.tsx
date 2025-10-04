import { DollarSign, Repeat, Layers, Server } from "lucide-react";

export const BusinessSection = () => {
  const revenueStreams = [
    {
      icon: Repeat,
      title: "Subscriptions",
      description: "Recurring revenue from enterprise customers for continuous monitoring.",
    },
    {
      icon: DollarSign,
      title: "On-Demand Tasking",
      description: "Pay-per-use model for specific imaging requests and analysis.",
    },
    {
      icon: Layers,
      title: "Hosted Payloads",
      description: "Additional revenue from third-party sensors and instruments.",
    },
    {
      icon: Server,
      title: "On-Orbit Compute",
      description: "Rent processing capacity for customer AI models and algorithms.",
    },
  ];

  return (
    <section id="business" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Business Model</h2>
          <p className="text-xl text-muted-foreground">
            Multiple revenue streams create sustainable, scalable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {revenueStreams.map((stream, index) => (
            <div 
              key={stream.title}
              className="glass-panel rounded-2xl p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/80 to-accent flex items-center justify-center mb-4 glow-accent">
                <stream.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{stream.title}</h3>
              <p className="text-sm text-muted-foreground">{stream.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">5-Year Financial Snapshot</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-muted">
                  <th className="py-3 px-4 text-sm font-semibold">Year</th>
                  <th className="py-3 px-4 text-sm font-semibold">Revenue</th>
                  <th className="py-3 px-4 text-sm font-semibold">Customers</th>
                  <th className="py-3 px-4 text-sm font-semibold">Satellites</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground text-sm">
                <tr className="border-b border-muted/50">
                  <td className="py-3 px-4">Year 1</td>
                  <td className="py-3 px-4 font-semibold text-accent">$2.5M</td>
                  <td className="py-3 px-4">50</td>
                  <td className="py-3 px-4">1</td>
                </tr>
                <tr className="border-b border-muted/50">
                  <td className="py-3 px-4">Year 2</td>
                  <td className="py-3 px-4 font-semibold text-accent">$8M</td>
                  <td className="py-3 px-4">150</td>
                  <td className="py-3 px-4">4</td>
                </tr>
                <tr className="border-b border-muted/50">
                  <td className="py-3 px-4">Year 3</td>
                  <td className="py-3 px-4 font-semibold text-accent">$18M</td>
                  <td className="py-3 px-4">300</td>
                  <td className="py-3 px-4">8</td>
                </tr>
                <tr className="border-b border-muted/50">
                  <td className="py-3 px-4">Year 4</td>
                  <td className="py-3 px-4 font-semibold text-accent">$35M</td>
                  <td className="py-3 px-4">500</td>
                  <td className="py-3 px-4">12</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Year 5</td>
                  <td className="py-3 px-4 font-semibold text-primary">$60M</td>
                  <td className="py-3 px-4">800</td>
                  <td className="py-3 px-4">16</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            *Projections based on current market analysis and scaling assumptions.
          </p>
        </div>
      </div>
    </section>
  );
};
