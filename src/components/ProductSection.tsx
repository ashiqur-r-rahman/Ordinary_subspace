import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Upload } from "lucide-react";
import { SatelliteModel } from "@/components/SatelliteModel";
import satelliteImage from "@/assets/satellite-closeup.jpg";

export const ProductSection = () => {
  return (
    <section id="product" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">See It in Action</h2>
          <p className="text-xl text-muted-foreground">
            From natural language tasking to instant alerts—OrbitX makes satellite data simple.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-8">
            <Card className="glass-panel p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Interactive UI Mockup</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-muted/20 border border-muted">
                  <p className="text-sm text-muted-foreground mb-2">Natural Language Input:</p>
                  <p className="font-mono text-sm">"Monitor farmland for irrigation anomalies"</p>
                </div>
                
                <div className="flex items-center justify-center gap-4 py-4">
                  <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                  <p className="text-sm text-muted-foreground mb-2">OrbitX Alert:</p>
                  <p className="font-mono text-sm text-secondary">
                    "Anomaly detected in Sector 4B. Confidence: 94%"
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Upload className="h-3 w-3" />
                      <span className="text-muted-foreground line-through">Raw: 100MB</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-3 w-3 text-secondary" />
                      <span className="text-secondary font-semibold">Sent: 0.7MB</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">70%</div>
                <div className="text-xs text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-secondary mb-1">15min</div>
                <div className="text-xs text-muted-foreground">Median Response</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <SatelliteModel />
            
            <div className="rounded-2xl overflow-hidden glass-panel p-2">
              <img 
                src={satelliteImage} 
                alt="OrbitX Satellite Technology" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
