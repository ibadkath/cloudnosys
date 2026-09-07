'use client';
import ShinyText from "./ShinyText";
import Carousel from "./Carousel";
import { useMeasuredWidth } from "./useMeasuredWidth";

const CARD_COUNT = 5;
const CAROUSEL_ITEMS = Array.from({ length: CARD_COUNT }, (_, i) => ({ id: i }));

function TestimonialCard({ fullWidth = false, width }: { fullWidth?: boolean; width?: number }) {
  return (
    <div style={{
      width: fullWidth ? '100%' : (width ?? 420),
      height: fullWidth ? undefined : 310,
      minHeight: fullWidth ? 280 : undefined,
      flexShrink: 0,
      background: '#0d1520', border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 16, padding: '32px 20px 20px',
      display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14,
      boxSizing: 'border-box',
    }}>
      {/* Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/compliance/image (2).png" alt="CISO"
          style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <p className="feature-card-heading" style={{ textAlign: 'left', margin: 0 }}>CISO</p>
          <p className="feature-card-para"    style={{ textAlign: 'left', margin: 0 }}>FintechCorp</p>
        </div>
      </div>
      {/* Divider */}
      <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.15)' }} />
      {/* Review */}
      <p className="review-card-para" style={{ textAlign: 'left', margin: 0, marginTop: 8 }}>
        Cloudnosys Gave Us Real-Time Visibility Into Our Cloud Posture.
        We Identified Critical Risks In Minutes&nbsp; Not Days
      </p>
      {/* Stars */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/home/compliance/stars.png" alt="5 stars" style={{ height: 18, filter: 'brightness(0) invert(1)', marginTop: 8 }} />
    </div>
  );
}

export default function ComplianceSection() {
  const [mobileWrapperRef, mobileWidth] = useMeasuredWidth<HTMLDivElement>();

  return (
    <>
    {/* ── Compliance info section ── */}
    <section
      className="w-full flex flex-col md:flex-row items-center px-6 md:px-16 py-12 md:py-20 gap-10 md:gap-20 mt-16 md:mt-32"
      // style={{ backgroundColor: '#060606', color: '#ffffff' }}
    >
      {/* Image — order-2 on mobile (shows after text) */}
      <div className="flex-1 flex items-center justify-center overflow-visible order-2 md:order-1">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/compliance/compliance.png" alt="Compliance Dashboard"
            style={{ width: '100%', maxWidth: '528px', height: 'auto', display: 'block' }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/compliance/Group 628802.png" alt="CIS"
            className="compliance-badge compliance-badge-tl"
            style={{ position: 'absolute', width: 88, height: 88, top: -28, left: -55 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/compliance/Group 628804.png" alt="ISO 27001"
            className="compliance-badge compliance-badge-tr"
            style={{ position: 'absolute', width: 88, height: 88, top: -28, right: -55 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/compliance/Group 628806.png" alt="HIPAA"
            className="compliance-badge compliance-badge-ml"
            style={{ position: 'absolute', width: 80, height: 80, top: '40%', left: -44, transform: 'translateY(-50%)' }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/compliance/Group 628803.png" alt="FedRAMP"
            className="compliance-badge compliance-badge-mr"
            style={{ position: 'absolute', width: 80, height: 80, top: '40%', right: -44, transform: 'translateY(-50%)' }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/compliance/Group 628805.png" alt="GDPR"
            className="compliance-badge compliance-badge-bl"
            style={{ position: 'absolute', width: 80, height: 80, bottom: 70, left: -28 }} />
        </div>
      </div>

      {/* Text — order-1 on mobile (shows first) */}
      <div className="flex-1 flex flex-col order-1 md:order-2">
        <h2 className="HeroHeading  max-w-75 sm:max-w-[76.5%]" style={{ fontWeight: 300 }}>
          <ShinyText  text="Built-In" speed={3} /> <br className="hidden tb:block" />
          <ShinyText text="Compliance" className="font-medium!" speed={3} /> <br className="hidden md:block" />
          <ShinyText text="Zero Guesswork" speed={3} />
        </h2>
        <div style={{ maxWidth: 500 }}>
          <p className="label mt-6" style={{ color: '#FFFFFF' }}>
            Stay ahead of audits with automated compliance<br className="hidden md:inline" /> tracking across major frameworks like
          </p>
          <p className="label mt-2" style={{ fontWeight: 700, color: '#FFFFFF' }}>
            ISO 27001, SOC 2, GDPR, HIPAA, CIS, PCI-DS
          </p>

          <p className="label mt-5" style={{ fontWeight: 700, color: '#FFFFFF' }}>
            From policy enforcement to pass-ready reports Cloudnosys does the heavy lifting.
          </p>
        </div>
      </div>
    </section>

    {/* ── Trusted By section ── */}
    <section 
      className="w-full flex flex-col items-center text-center pt-16 md:pt-36 pb-10 md:pb-20"
      // style={{ backgroundColor: '#060606', color: '#ffffff' }}
    >
      <h2 className="HeroHeading mx-auto max-w-[360px] sm:max-w-[82%] tb:max-w-max px-4 md:px-16" style={{ fontWeight: 300 }}>
        <ShinyText text="Trusted By" speed={3} />{' '}
        <ShinyText text="Security" className="font-medium!" speed={3} />{' '}
        <br className="hidden tb:block" />
        <ShinyText text="Teams" className="font-medium!" speed={3} />{' '}
        <ShinyText text="Around The World" speed={3} />
      </h2>
      <p className="label mt-4 px-16" style={{ color: '#FFFFFF' }}>
        Cloudnosys powers compliance and protection for teams of every size from startups to enterprise.
      </p>

      {/* Desktop: two infinite marquee rows */}
      <div className="hidden md:flex w-full flex-col mt-20 relative overflow-hidden" style={{ gap: 20 }}>
        <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: 160, zIndex: 10, background: 'linear-gradient(to right, #070707, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: 160, zIndex: 10, background: 'linear-gradient(to left, #070707, transparent)' }} />
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 20, width: 'max-content', animation: 'marquee-left 30s linear infinite' }}>
            {[...Array(5)].map((_, i) => <TestimonialCard key={`r1a-${i}`} />)}
            {[...Array(5)].map((_, i) => <TestimonialCard key={`r1b-${i}`} />)}
          </div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 20, width: 'max-content', animation: 'marquee-right 30s linear infinite' }}>
            {[...Array(5)].map((_, i) => <TestimonialCard key={`r2a-${i}`} />)}
            {[...Array(5)].map((_, i) => <TestimonialCard key={`r2b-${i}`} />)}
          </div>
        </div>
      </div>

      {/* Tablet: horizontal marquee animation, ~2 cards visible, no dots */}
      <div className="hidden tb:flex md:hidden w-full mt-10 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: 80, zIndex: 10, background: 'linear-gradient(to right, #070707, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: 80, zIndex: 10, background: 'linear-gradient(to left, #070707, transparent)' }} />
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div style={{ display: 'flex', gap: 16, width: 'max-content', animation: 'marquee-left 24s linear infinite' }}>
            {[...Array(CARD_COUNT)].map((_, i) => <TestimonialCard key={`tba-${i}`} width={360} />)}
            {[...Array(CARD_COUNT)].map((_, i) => <TestimonialCard key={`tbb-${i}`} width={360} />)}
          </div>
        </div>
      </div>

      {/* Mobile: scroll-snap carousel, one full-width card at a time */}
      <div className="tb:hidden w-full mt-10 px-4" ref={mobileWrapperRef}>
        {mobileWidth > 0 && (
          <Carousel
            items={CAROUSEL_ITEMS}
            baseWidth={mobileWidth}
            containerPadding={0}
            frameless
            dotGap={10}
            renderItem={() => <TestimonialCard fullWidth />}
          />
        )}
      </div>
    </section>
    </>
  );
}
