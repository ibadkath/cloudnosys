'use client';
import { useEffect } from "react";

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function smoothScrollTo(targetY: number, duration: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function ScrollToBlogsOnFlag() {
  useEffect(() => {
    if (sessionStorage.getItem("scrollToBlogs") !== "1") return;
    sessionStorage.removeItem("scrollToBlogs");

    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      const el = document.getElementById("blogs");
      if (!el) return;
      const targetY = el.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetY, 1800);
    });
  }, []);

  return null;
}
