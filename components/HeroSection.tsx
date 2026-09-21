"use client";

import HeroVisual from "./HeroVisual";
import { ShineBorder } from "./ui/shine-border";
import ShinyText from "./ShinyText";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[calc(100vh-80px)] overflow-hidden md:pb-64">
      {/* Top-right background glow */}
      <div
        className="pointer-events-none absolute hidden md:block"
        style={{
          top: -120,
          right: -50,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, #6797CE 0%, rgba(103,151,206,0.3) 50%, transparent 100%)",
          filter: "blur(375.7px)",
          transform: "rotate(9.82deg)",
          opacity: 0.7,
          zIndex: 0,
        }}
      />
      {/* Left-side background glow */}
      <div
        className="pointer-events-none absolute hidden md:block"
        style={{
          top: 280,
          left: -60,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(60,100,255,0.22) 0%, rgba(80,120,240,0.09) 45%, transparent 70%)",
          filter: "blur(80px)",
          transform: "rotate(9.82deg)",
          zIndex: 0,
        }}
      />
      {/* Desktop: HeroVisual fills section background */}
     
      <div className="relative z-10 flex flex-col gap-6 px-4 md:pl-16 md:pr-10 md:max-w-2xl min-h-[50vh] md:min-h-[calc(100vh-80px)] justify-center xl:justify-start pt-16 md:pt-0 xl:pt-28 2xl:pt-36 pb-0 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="HeroHeading max-w-[92%] sm:max-w-[75%] tb:max-w-max" style={{ fontWeight: 300 }}>
            <ShinyText text="Simplify Cloud" speed={3} /> <br className="hidden tb:block" />
            <ShinyText text="Security Without" speed={3} /> <br className="hidden tb:block" />
            <ShinyText text="Compromise" speed={3} />
          </h1>
        </motion.div>

        <motion.p
          className="label"
          style={{ color: '#FFFFFF' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          From compliance to remediation, manage everything with clarity, speed, and control.
        </motion.p>

        <motion.button
          className="StartButton BodyLabel text-white transition-colors mt-2"
          style={{ width: "161px" }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <ShineBorder shineColor="#1567FF" duration={6} />
          GET STARTED
        </motion.button>
      </div>
 <div className="hidden tb:block absolute inset-0">
        <HeroVisual />
      </div>
      {/* Mobile: HeroVisual — scale 0.45, left=-195 centers HUB with AWS top-right and AZURE bottom-left */}
      <div className="md:hidden relative w-full overflow-hidden -mt-28" style={{ height: 360 }}>
        <div style={{
          position: 'absolute',
          width: 1400,
          height: 900,
          left: -205,
          top: 0,
          transform: 'scale(0.45)',
          transformOrigin: 'top left',
        }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
