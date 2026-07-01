import HeroSection from "@/components/HeroSection";
import InventorySection from "@/components/InventorySection";
import TrustedSection from "@/components/TrustedSection";
import FeaturesSection from "@/components/FeaturesSection";
import VisualizationSection from "@/components/VisualizationSection";
import CloudIQSection from "@/components/CloudIQSection";
import ComplianceSection from "@/components/ComplianceSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import BlogsSection from "@/components/BlogsSection";
export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <InventorySection/>
      <TrustedSection />
      <FeaturesSection />
      <VisualizationSection />
      <CloudIQSection />
      <ComplianceSection />
      <IntegrationsSection />
      <BlogsSection />
    </main>
  );
}
