"use client";

import Lenis from "lenis";
import type { ReactNode } from "react";
import { Component } from "react";
import "lenis/dist/lenis.css";

let activeLenis: Lenis | null = null;
type LenisScrollEvent = { direction: number; scroll: number };
const scrollListeners = new Set<(event: LenisScrollEvent) => void>();

function notifyScrollListeners(event: LenisScrollEvent) {
  scrollListeners.forEach((listener) => listener(event));
}

export function subscribeToLenisScroll(listener: (event: LenisScrollEvent) => void) {
  scrollListeners.add(listener);
  return () => scrollListeners.delete(listener);
}

export function scrollWithLenis(target: HTMLElement | number, immediate = false) {
  activeLenis?.scrollTo(target, immediate ? { immediate: true } : { duration: 1.8 });
}

interface SmoothScrollProps {
  children: ReactNode;
}

export default class SmoothScroll extends Component<SmoothScrollProps> {
  private lenis: Lenis | null = null;
  private animationFrameId: number | null = null;

  componentDidMount() {
    this.lenis = new Lenis();
    activeLenis = this.lenis;
    this.lenis.on("scroll", notifyScrollListeners);
    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  componentWillUnmount() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.lenis?.off("scroll", notifyScrollListeners);
    this.lenis?.destroy();
    activeLenis = null;
    this.lenis = null;
  }

  private animate = (time: number) => {
    this.lenis?.raf(time);
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  render() {
    return this.props.children;
  }
}