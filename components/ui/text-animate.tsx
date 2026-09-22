"use client";

import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type TextAnimateProps = {
  as?: "p" | "div" | "span";
  by?: "word" | "character";
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  children: string;
};

export function TextAnimate({
  as = "p",
  by = "word",
  delay = 0,
  duration = 0.35,
  className,
  style,
  children,
}: TextAnimateProps) {
  const text = typeof children === "string" ? children : String(children ?? "");
  const segments = by === "character" ? Array.from(text) : text.split(" ");
  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: duration / 4, delayChildren: delay },
        },
      }}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {segment}
          {by === "word" && index < segments.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Component>
  );
}
