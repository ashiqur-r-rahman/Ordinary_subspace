import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ProductSection } from "@/components/ProductSection";
import { BusinessSection } from "@/components/BusinessSection";
import { SustainabilitySection } from "@/components/SustainabilitySection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductSection />
      <BusinessSection />
      <SustainabilitySection />
      <RoadmapSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
