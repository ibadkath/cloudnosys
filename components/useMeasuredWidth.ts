'use client';
import { useEffect, useRef, useState } from 'react';

// Measures an element's rendered width so fixed-pixel-width components (like
// Carousel, which takes a `baseWidth` prop) can still size fluidly to their
// container across different mobile screen widths.
export function useMeasuredWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setWidth(el.offsetWidth);
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, width] as const;
}
