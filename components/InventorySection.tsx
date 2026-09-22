"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShineBorder } from "./ui/shine-border";

export default function InventorySection() {
  return (
    <section
      className="w-full flex justify-center mt-0 px-4 md:px-0"
      style={{ position: 'relative' }}
    >

      {/* Figma: blue glow above inventory image */}
      <div className="pointer-events-none hidden md:block" style={{
        position: 'absolute', width: 700, height: 220,
        left: '50%', top: 0, transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(ellipse at center, rgba(49,75,206,0.5) 0%, rgba(49,75,206,0.18) 50%, transparent 76%)',
        filter: 'blur(137.7px)', zIndex: 1,
      }} />

      {/* /* Figma: blue glow outside and above the inventory image  */}
      <div className="pointer-events-none absolute hidden md:block" style={{
        width: 600, height: 100,
        left: '50%', bottom: '100%',
        transform: 'translateX(-50%)',
        background: '#314BCE',
        opacity: 0.23,
        filter: 'blur(137.7px)',
        borderRadius: '50%',
      }} />

      <motion.div
        className="inventory-container"
        style={{ position: "relative", overflow: "hidden", borderRadius: 12, display: "inline-block" }}
        whileHover={{ y: -4, scale: 1.005 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Image
          src="/images/home/inventory/inventory.png"
          alt="Inventory"
          width={1144}
          height={739}
          loading="eager"
          unoptimized
          className="inventory-img"
        />
        <ShineBorder shineColor="#1567FF" duration={6} />
      </motion.div>
    </section>
  );
}
