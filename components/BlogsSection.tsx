/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { AnimatedGradientText } from "./ui/animated-gradient-text";

const blogs = [
  {
    image: '/images/home/blog/bog1.png',
    title: 'What to Consider When Choosing a Cloud Security Provider',
    excerpt:
      'Why Cloud Security Providers Matter in 2025 Imagine your business\'s data as a vault. Without a skilled guard, even the strongest lock can be picked.',
    date: 'May 23, 2025',
  },
  {
    image: '/images/home/blog/blog2.png',
    title: 'What is Role-Based Access Control (RBAC) in Cloud Security?',
    excerpt:
      'In today\'s digital world, protecting sensitive data requires careful attention, especially in a cloud setting. Role-Based Access Control or RBAC is one of the powerful',
    date: 'May 21, 2025',
  },
  {
    image: '/images/home/blog/blog3.png',
    title: 'What You Need to Know About The Growing Importance of CSPM',
    excerpt:
      'In today\'s fast-moving digital landscape where remote work and multi-cloud strategies have become the norm.',
    date: 'May 20, 2025',
  },
];

const VISIBLE = 3;

export default function BlogsSection() {
  const [start, setStart] = useState(0);

  const prev = () => setStart(s => Math.max(0, s - 1));
  const next = () => setStart(s => Math.min(blogs.length - VISIBLE, s + 1));

  const visible = blogs.slice(start, start + VISIBLE);

  return (
    <section
      className="w-full px-16 py-20"
      // style={{ backgroundColor: '#060606', color: '#ffffff' }}
    >
      {/* Header row — width constrained to cards width so arrows align with 3rd card */}
      <div style={{ width: 'fit-content' }}>
      <div className="flex items-center justify-between mb-10" style={{ width: `${3 * 420 + 2 * 24 - 40}px` }}>
        <h2 className="HeroHeading">
          <AnimatedGradientText speed={1} style={{ backgroundImage: "linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)", backgroundSize: "300% 100%" }}>
            Featured <span>Blogs</span>
          </AnimatedGradientText>
        </h2>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[
            { icon: '/images/home/blog/Vector.png',     alt: 'Previous', action: prev, disabled: start === 0 },
            { icon: '/images/home/blog/Vector (1).png', alt: 'Next',     action: next, disabled: start >= blogs.length - VISIBLE },
          ].map(({ icon, alt, action, disabled }) => (
            <button
              key={alt}
              onClick={action}
              disabled={disabled}
              style={{ background: 'none', border: 'none', padding: 0, cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.3 : 1 }}
            >
              <img src={icon} alt={alt} style={{ width: 17, height: 29, objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)' }} />
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', gap: 24 }}>
        {visible.map((blog, i) => (
          <div
            key={start + i}
            style={{
              width: 420,
              height: 483,
              flexShrink: 0,
              background: '#0d1520',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Image — fills entire card */}
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img
                src={blog.image}
                alt={blog.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />

              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, #0E1117 0%, rgba(14,17,23,0.6) 50%, transparent 100%)',
              }} />

              {/* Text overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '0 20px 24px',
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <h3 className="blog-card-text" style={{ margin: 0 }}>
                  {blog.title}
                </h3>
                <p className="blog-card-para" style={{ margin: 0, color: 'rgba(255,255,255,0.75)' }}>
                  {blog.excerpt}
                </p>
                <p className="blog-card-para" style={{ margin: 0, color: 'rgba(255,255,255,0.45)' }}>
                  {blog.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
