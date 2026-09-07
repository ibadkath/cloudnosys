import Image from "next/image";
import DetectionSection from "./DetectionSection";

export default function FeaturesSection() {
  return (
    <section className=" bg-white flex flex-col pt-20 md:pt-36 pb-4 px-4 md:px-16" style={{ borderRadius: 30 }}>

      <h2 className="HeroHeading text-center mx-auto max-w-[89%] sm:max-w-[70%] tb:max-w-max" style={{ fontWeight: 500, color: '#060606' }}>
        Everything <span className="font-extralight!">You Need<br className="hidden tb:block" /> To Secure</span>{' '}
        <span className="font-extralight!">The</span> Cloud
      </h2>

      <p className="label mt-4 text-center" style={{ color: '#060606', maxWidth: 700, margin: '16px auto 0' }}>
        From visibility and compliance to automation and remediation all in one unified<br className="hidden md:inline" /> platform designed for modern cloud environments.
      </p>

      {/* Row 1 — desktop: 3 cards | mobile: 4 cards | tablet: 2x2 grid */}
      <div className="features-row1 flex flex-col md:flex-row gap-4 md:gap-5 mt-8 md:mt-14 w-full">

        {/* Card 1 */}
        <div className="feature-card-tb md:flex-1 h-[240px] md:h-[308px] rounded-xl bg-[#070707] overflow-hidden flex flex-col">
          <div className="flex-1 min-h-[120px] relative overflow-hidden" style={{ boxShadow: "inset -1px -1px 23.5px 0px #000000F2" }}>
            <Image src="/images/home/features/Clouds.png" alt="Secure Every Cloud" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#070707]" />
          </div>
          <div className="px-5 py-4 text-center">
            <p className="feature-card-heading text-white">Secure Every Cloud</p>
            <p className="feature-card-para mt-1">Scan AWS, Azure, and GCP for vulnerabilities,<br className="tb:hidden" /> malware, and misconfigurations all without agents</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="feature-card-tb md:flex-1 h-[240px] md:h-[308px] rounded-xl bg-[#070707] overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden">
            <Image src="/images/home/features/Audits.png" alt="Stay Audit-Ready 24/7" width={693} height={223} className="translate-y-12" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent from-80% to-[#070707]" />
          </div>
          <div className="px-5 py-4 text-center">
            <p className="feature-card-heading text-white">Stay Audit-Ready 24/7</p>
            <p className="feature-card-para mt-1">Instantly align with NIST, HIPAA, PCI-DSS,<br />SOC 2, and more.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="feature-card-tb md:flex-1 h-[240px] md:h-[308px] rounded-xl bg-[#070707] overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden flex gap-x-3">
            <Image src="/images/home/features/workflow.png" alt="Workflow" width={231} height={232} className="" />
            <Image src="/images/home/features/playbook-node.png" alt="Playbook Nodes" width={186} height={255} className="translate-y-10" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent from-70% to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent from-70% to-[#070707]" />
          </div>
          <div className="px-5 py-4 text-center">
            <p className="feature-card-heading text-white">Click. Trigger. Resolve.</p>
            <p className="feature-card-para mt-1">Minimize risk with pre-built workflows. Automatically<br className="hidden tb:block" /> respond to incidents via integrations</p>
          </div>
        </div>

        {/* Card 4 — mobile only (also rendered in Row 2 for desktop) */}
        <div className="feature-card-tb md:hidden h-[240px] rounded-xl bg-[#070707] overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden flex items-start">
            <Image src="/images/home/features/cloud-topology.png" alt="Cloud Topology" width={210} height={152} className="translate-y-10 shrink-0" />
            <Image src="/images/home/features/graph-filters.png" alt="Graph Filters" width={260} height={141} className="translate-y-6 shrink-0" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent from-70% to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent from-70% to-[#070707]" />
          </div>
          <div className="px-5 py-4 text-center">
            <p className="feature-card-heading text-white">See Your Cloud Like Never Before</p>
            <p className="feature-card-para mt-1">Explore your infrastructure visually. Identify risk paths, and exposed nodes in seconds</p>
          </div>
        </div>

      </div>

      {/* Row 2 — desktop: Card 4 + Card 5 | mobile: Card 5 only */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 mt-4 md:mt-5 w-full">

        {/* Card 4 — desktop only */}
        <div className="hidden md:flex h-[350px] rounded-xl bg-[#070707] overflow-hidden flex-col" style={{ flex: '602 602 0' }}>
          <div className="flex-1 relative overflow-hidden flex">
            <Image src="/images/home/features/cloud-topology.png" alt="Cloud Topology" width={373} height={269} className="translate-y-12" />
            <Image src="/images/home/features/graph-filters.png" alt="Graph Filters" width={565} height={307} className="translate-y-12 -ml-28" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent from-70% to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent from-70% to-[#070707]" />
          </div>
          <div className="px-5 py-4 text-center">
            <p className="feature-card-heading text-white">See Your Cloud Like Never Before</p>
            <p className="feature-card-para mt-1">Explore your infrastructure visually. Identify risk paths, over-privileged access,<br />and exposed nodes in seconds with interactive graphs</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="feature-card-tb-wide h-[280px] md:h-[350px] md:flex-[706_706_0] rounded-xl bg-[#070707] overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden flex justify-center">
            <Image src="/images/home/features/dashboard.png" alt="Dashboard" width={654} height={321} className="translate-y-4" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-[#070707]" />
          </div>
          <div className="px-5 py-4 text-center">
            <p className="feature-card-heading text-white">Custom Views For Every Team</p>
            <p className="feature-card-para mt-1">Visualize your security posture in real-time with dashboards designed for<br />CISOs, DevOps, and compliance teams all in one place</p>
          </div>
        </div>

      </div>

      <DetectionSection />

    </section>
  );
}
