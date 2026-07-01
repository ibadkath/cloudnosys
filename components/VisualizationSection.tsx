import Image from "next/image";
import CTASection from "@/components/CTASection";
import { ShineBorder } from "./ui/shine-border";
import { AnimatedGradientText } from "./ui/animated-gradient-text";

export default function VisualizationSection() {
  return (
    <section className="w-full flex flex-col px-16 py-20 mt-12" >

      <h2 className="HeroHeading">
        <AnimatedGradientText speed={1} style={{ backgroundImage: "linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)", backgroundSize: "300% 100%" }}>
          Visualize. <span style={{ fontWeight: 500 }}>Prioritize.</span><br />
          <span style={{ fontWeight: 500 }}>Secure.</span>
        </AnimatedGradientText>
      </h2>

      <p className="label mt-4" >
        Map your cloud like a living blueprint. Instantly see how resources connect,<br />
        identify weak links, and trace attack paths before they&apos;re exploited.
      </p>

      <div className="mt-12 w-full" style={{ position: "relative", overflow: "hidden", borderRadius: 12 }}>
        <Image
          src="/images/home/inventory/inventory-topology.png"
          alt="Inventory Topology Visualization"
          width={1200}
          height={700}
          className="w-full rounded-xl"
        />
        <ShineBorder shineColor="#FFFFFF" duration={6} />
      </div>

      <div className="mt-12 -mx-16">
        <CTASection />
      </div>

    </section>
  );
}
