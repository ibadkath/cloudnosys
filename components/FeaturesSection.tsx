import Image from "next/image";
import DetectionSection from "./DetectionSection";

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center pt-36 pb-4 px-6" style={{ borderRadius: 30 }}>

      <h2 className="feature-hero-heading">
        Everything You Need<br />To Secure The Cloud
      </h2>

      <p className="label mt-4 text-center" style={{ color: "#888", maxWidth: 460 }}>
        From visibility and compliance to automation and remediation all in one unified
        platform designed for modern cloud environments.
      </p>

      {/* Row 1 — 3 equal cards */}
      <div className="flex gap-5 mt-14">

        {/* Card 1 */}
        <div className="w-[433px] h-[308px] rounded-xl bg-[#070707] overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden" style={{ boxShadow: "inset -1px -1px 23.5px 0px #000000F2" }}>
            <Image src="/images/home/features/Clouds.png" alt="Secure Every Cloud" fill className="object-cover object-top-left" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#070707]" />
          </div>
          <div className="px-5 py-4">
            <p className="feature-card-heading text-white">Secure Every Cloud</p>
            <p className="feature-card-para mt-1">Scan AWS, Azure, and GCP for vulnerabilities, malware, and misconfigurations all without agents</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[433px] h-[308px] rounded-xl bg-[#070707] overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden">
            <Image src="/images/home/features/Audits.png" alt="Stay Audit-Ready 24/7" width={693} height={223} className="translate-y-12" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent from-80% to-[#070707]" />
          </div>
          <div className="px-5 py-4">
            <p className="feature-card-heading text-white">Stay Audit-Ready 24/7</p>
            <p className="feature-card-para mt-1">Instantly align with NIST, HIPAA, PCI-DSS,<br />SOC 2, and more.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[433px] h-[308px] rounded-xl bg-[#070707] overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden flex gap-x-3">
            <Image src="/images/home/features/workflow.png" alt="Workflow" width={231} height={232} className="" />
            <Image src="/images/home/features/playbook-node.png" alt="Playbook Nodes" width={186} height={255} className="translate-y-10" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent from-70% to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent from-70% to-[#070707]" />
          </div>
          <div className="px-5 py-4">
            <p className="feature-card-heading text-white">Click. Trigger. Resolve.</p>
            <p className="feature-card-para mt-1">Minimize risk with pre-built workflows. Automatically respond to incidents via integrations</p>
          </div>
        </div>

      </div>

      {/* Row 2 — 2 wider cards */}
      <div className="flex gap-5 mt-5">

        {/* Card 4 */}
        <div className="w-[602px] h-[350px] rounded-xl bg-[#070707] overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden flex">
            <Image src="/images/home/features/cloud-topology.png" alt="Cloud Topology" width={373} height={269} className="translate-y-12" />
            <Image src="/images/home/features/graph-filters.png" alt="Graph Filters" width={565} height={307} className="translate-y-12 -ml-28" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent from-70% to-[#070707]" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent from-70% to-[#070707]" />
          </div>
          <div className="px-5 py-4">
            <p className="feature-card-heading text-white">See Your Cloud Like Never Before</p>
            <p className="feature-card-para mt-1">Explore your infrastructure visually. Identify risk paths, over-privileged access, and exposed nodes in seconds with interactive graphs</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-[706px] h-[350px] rounded-xl bg-[#070707] overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden flex justify-center">
            <Image src="/images/home/features/dashboard.png" alt="Dashboard" width={654} height={321} className=" translate-y-4" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-[#070707]" />
          </div>
          <div className="px-5 py-4">
            <p className="feature-card-heading text-white">Custom Views For Every Team</p>
            <p className="feature-card-para mt-1">Visualize your security posture in real-time with dashboards designed for CISOs, DevOps, and compliance teams all in one place</p>
          </div>
        </div>

      </div>

      <DetectionSection />

    </section>
  );
}
