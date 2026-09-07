import HeroSection from "@/components/HeroSection";
import InventorySection from "@/components/InventorySection";
import TrustedSection from "@/components/TrustedSection";
import FeaturesSection from "@/components/FeaturesSection";
import VisualizationSection from "@/components/VisualizationSection";
import CloudIQSection from "@/components/CloudIQSection";
import ComplianceSection from "@/components/ComplianceSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import BlogsSection from "@/components/BlogsSection";
import ScrollToBlogsOnFlag from "@/components/ScrollToBlogsOnFlag";
import { getBlogPosts } from "@/lib/strapi";

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <main className="flex flex-1 flex-col">
      <ScrollToBlogsOnFlag />
      <HeroSection />
      <InventorySection/>
      <TrustedSection />
      <FeaturesSection />
      <VisualizationSection />
      <CloudIQSection />
      <ComplianceSection />
      <IntegrationsSection />
      <BlogsSection blogs={posts} />
    </main>
  );
}
