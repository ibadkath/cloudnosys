"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CTASection from "@/components/CTASection";
import { ShineBorder } from "./ui/shine-border";
import ShinyText from "./ShinyText";

export default function VisualizationSection() {
  return (
    <motion.section
      className="w-full flex flex-col items-center py-10 md:py-20 mt-6 md:mt-12 relative"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >

      <div className=" w-full px-4 md:px-0 md:w-[1073px]">
        <h2 className="HeroHeading relative z-10" style={{ fontWeight: 300 }}>
          <ShinyText text="Visualize." speed={3} /> <br className="md:hidden" />
          <ShinyText text="Prioritize." className="font-medium!" speed={3} /> <br className="hidden md:block" />
          <ShinyText text="Secure." className="font-medium!" speed={3} />
        </h2>

        <p className="label mt-4 relative z-10" style={{ color: '#FFFFFF' }}>
          Map your cloud like a living blueprint. Instantly see how resources connect, <br className="hidden md:inline" />identify weak links, and trace attack paths before they&apos;re exploited.
        </p>
      </div>

      <motion.div
        className="mt-6 md:mt-12 relative w-full px-4 md:px-0 md:w-[1073px]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >

        {/* Top-left glow — outside image */}
        <div className="pointer-events-none absolute hidden md:block" style={{
          width: 500, height: 400, left: 0, top: 0,
          transform: 'translate(-15%, -35%)',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(49,75,206,0.45) 0%, rgba(49,75,206,0.18) 45%, transparent 72%)',
          filter: 'blur(80px)',
        }} />
        {/* Bottom-right lighter glow — outside image */}
        <div className="pointer-events-none absolute hidden md:block" style={{
          width: 420, height: 320, right: 0, bottom: 0,
          transform: 'translate(15%, 35%)',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(49,75,206,0.22) 0%, rgba(49,75,206,0.08) 50%, transparent 74%)',
          filter: 'blur(90px)',
        }} />

        <motion.div
          style={{ position: "relative", overflow: "hidden", borderRadius: 12 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Image
            src="/images/home/inventory/inventory-topology.png"
            alt="Inventory Topology Visualization"
            width={1200}
            height={700}
            loading="eager"
            className="w-full rounded-xl"
          />
          {/* Top-left inner glow */}
          <div className="pointer-events-none absolute hidden md:block" style={{
            width: 420, height: 320, left: 0, top: 0,
            background: 'radial-gradient(ellipse at 0% 0%, rgba(49,75,206,0.35) 0%, rgba(49,75,206,0.12) 50%, transparent 74%)',
            filter: 'blur(60px)',
            mixBlendMode: 'screen',
          }} />
          {/* Bottom-right inner glow */}
          <div className="pointer-events-none absolute hidden md:block" style={{
            width: 340, height: 260, right: 0, bottom: 0,
            background: 'radial-gradient(ellipse at 100% 100%, rgba(49,75,206,0.18) 0%, rgba(49,75,206,0.06) 55%, transparent 76%)',
            filter: 'blur(70px)',
            mixBlendMode: 'screen',
          }} />
          <ShineBorder shineColor="#1567FF" duration={6} />
        </motion.div>

      </motion.div>

      {/* Glow below image bleeding into CTA area */}
      <div className="pointer-events-none w-full hidden md:block" style={{ position: 'relative', height: 0, overflow: 'visible' }}>
        <div style={{
          position: 'absolute', width: 1600, height: 650,
          left: '50%', top: 120, transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at center top, rgba(49,75,206,0.28) 0%, rgba(49,75,206,0.10) 50%, transparent 76%)',
          filter: 'blur(100px)',
        }} />
      </div>

      <div className="mt-12 w-full">
        <CTASection />
      </div>

    </motion.section>
  );
}
