"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeSectionProps {
  children: ReactNode;
  className?: string;
}

export default function FadeSection({ children, className = "" }: FadeSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "-8% 0px -8%" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`fade-section ${className}${isVisible ? " fade-section-visible" : ""}`}>
      {children}
    </div>
  );
}
