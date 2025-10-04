import { Satellite, FileDown, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Satellite className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">OrbitX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Smart satellites with on-orbit AI processing for real-time insights and 70% lower data costs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#problem" className="hover:text-primary transition-colors">Problem</a>
              <a href="#solution" className="hover:text-primary transition-colors">Solution</a>
              <a href="#product" className="hover:text-primary transition-colors">Demo</a>
              <a href="#business" className="hover:text-primary transition-colors">Business</a>
              <a href="#sustainability" className="hover:text-primary transition-colors">Sustainability</a>
              <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
              <a href="#team" className="hover:text-primary transition-colors">Team</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                size="sm"
                className="justify-start"
                asChild
              >
                <a href="/OrbitX-2.pdf" download>
                  <FileDown className="h-4 w-4 mr-2" />
                  Download Project PDF
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start"
                asChild
              >
                <a href="https://github.com/orbitx" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub Repository
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start"
                asChild
              >
                <a href="/api/docs" target="_blank" rel="noopener noreferrer">
                  <Code className="h-4 w-4 mr-2" />
                  API Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-muted text-center text-sm text-muted-foreground">
          <p>© 2025 OrbitX. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Based on: OrbitX Project Plan — Establishing a Satellite Network System with Integrated LLMs for Commercial Operations in LEO (Oct 2, 2025)
          </p>
        </div>
      </div>
    </footer>
  );
};
