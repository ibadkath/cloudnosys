'use client';
import { useState } from 'react';
import ShinyText from "./ShinyText";
import { BlogCard, type Blog } from "./BlogCard";
import Carousel from "./Carousel";
import { useMeasuredWidth } from "./useMeasuredWidth";

const VISIBLE        = 3;
const VISIBLE_TABLET = 2;

export default function BlogsSection({ blogs }: { blogs: Blog[] }) {
  const [start, setStart] = useState(0);
  const [mobileWrapperRef, mobileWidth] = useMeasuredWidth<HTMLDivElement>();

  /* ── Desktop / Tablet — shared position, different visible count ── */
  const prev = () => setStart(s => Math.max(0, s - 1));
  const next = (count: number) => setStart(s => Math.min(blogs.length - count, s + 1));
  const visible       = blogs.slice(start, start + VISIBLE);
  const visibleTablet = blogs.slice(start, start + VISIBLE_TABLET);

  return (
    <section id="blogs" className="w-full px-4 md:px-16 py-10 md:py-20">

      {/* ── Header ── */}
      <div
        className="flex items-center justify-between mb-6 md:mb-10 w-full md:w-auto md:max-w-327 2xl:max-w-417"
      >
        <h2 className="HeroHeading" style={{ fontWeight: 300 }}>
          <ShinyText text="Featured" speed={3} />{' '}
          <ShinyText text="Blogs" className="font-medium!" speed={3} />
        </h2>

        {/* Desktop arrows */}
        <div className="hidden md:flex" style={{ gap: 28, alignItems: 'center' }}>
          {[
            { icon: '/images/home/blog/Vector.png',     alt: 'Previous', action: prev,               disabled: start === 0 },
            { icon: '/images/home/blog/Vector (1).png', alt: 'Next',     action: () => next(VISIBLE), disabled: start >= blogs.length - VISIBLE },
          ].map(({ icon, alt, action, disabled }) => (
            <button
              key={alt}
              onClick={action}
              disabled={disabled}
              style={{
                background: 'none', border: 'none', padding: 0,
                cursor: disabled ? 'default' : 'pointer',
                opacity: disabled ? 0.3 : 1,
                transition: 'opacity 0.2s',
              }}
            >
              <img
                src={icon} alt={alt}
                style={{ width: 17, height: 29, objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)' }}
              />
            </button>
          ))}
        </div>

        {/* Tablet arrows */}
        <div className="hidden tb:flex md:hidden" style={{ gap: 28, alignItems: 'center' }}>
          {[
            { icon: '/images/home/blog/Vector.png',     alt: 'Previous', action: prev,                      disabled: start === 0 },
            { icon: '/images/home/blog/Vector (1).png', alt: 'Next',     action: () => next(VISIBLE_TABLET), disabled: start >= blogs.length - VISIBLE_TABLET },
          ].map(({ icon, alt, action, disabled }) => (
            <button
              key={alt}
              onClick={action}
              disabled={disabled}
              style={{
                background: 'none', border: 'none', padding: 0,
                cursor: disabled ? 'default' : 'pointer',
                opacity: disabled ? 0.3 : 1,
                transition: 'opacity 0.2s',
              }}
            >
              <img
                src={icon} alt={alt}
                style={{ width: 17, height: 29, objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)' }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Desktop: 3 cards ── */}
      <div className="hidden md:flex" style={{ gap: 24 }}>
        {visible.map((blog, i) => (
          <div key={start + i} style={{ flexShrink: 0 }}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      {/* ── Tablet: 2 cards ── */}
      <div className="hidden tb:flex md:hidden mb-10" style={{ gap: 12 }}>
        {visibleTablet.map((blog, i) => (
          <div key={start + i} style={{ flex: 1, minWidth: 0 }}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      {/* ── Mobile: Carousel component (drag + spring physics, built-in dots) ── */}
      <div className="tb:hidden mb-10" ref={mobileWrapperRef}>
        {mobileWidth > 0 && (
          <Carousel
            items={blogs}
            baseWidth={mobileWidth}
            containerPadding={0}
            frameless
            dotGap={10}
            renderItem={(blog: Blog) => <BlogCard blog={blog} />}
          />
        )}
      </div>

    </section>
  );
}
