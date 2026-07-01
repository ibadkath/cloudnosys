import { AnimatedGradientText } from "./ui/animated-gradient-text";

function TestimonialCard() {
  return (
    <div style={{
      width: 420,
      height: 310,
      flexShrink: 0,
      background: '#0d1520',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 16,
      padding: '32px 20px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 14,
    }}>
      {/* Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/compliance/image (2).png"
          alt="CISO"
          style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <p className="feature-card-heading" style={{ textAlign: 'left', margin: 0 }}>CISO</p>
          <p className="feature-card-para" style={{ textAlign: 'left', margin: 0 }}>FintechCorp</p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.15)' }} />

      {/* Review text */}
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
  return (
    <>
    <section
      className="w-full flex items-center px-16 py-20 gap-20 mt-32"
      style={{ backgroundColor: '#060606', color: '#ffffff' }}
    >

      {/* Left — compliance dashboard image + floating badges */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">

          {/* Main dashboard image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/compliance/compliance.png"
            alt="Compliance Dashboard"
            style={{ width: '528px', height: '439px', maxWidth: 'none', display: 'block' }}
          />

          {/* CIS — top left */}
          <img src="/images/home/compliance/Group 628802.png" alt="CIS"
            style={{ position: 'absolute', width: 88, height: 88, top: -28, left: -55 }} />

          {/* ISO 27001 — top right */}
          <img src="/images/home/compliance/Group 628804.png" alt="ISO 27001"
            style={{ position: 'absolute', width: 88, height: 88, top: -28, right: -55 }} />

          {/* HIPAA — left middle */}
          <img src="/images/home/compliance/Group 628806.png" alt="HIPAA"
            style={{ position: 'absolute', width: 80, height: 80, top: '40%', left: -44, transform: 'translateY(-50%)' }} />

          {/* FedRAMP — right middle */}
          <img src="/images/home/compliance/Group 628803.png" alt="FedRAMP"
            style={{ position: 'absolute', width: 80, height: 80, top: '40%', right: -44, transform: 'translateY(-50%)' }} />

          {/* GDPR — bottom left */}
          <img src="/images/home/compliance/Group 628805.png" alt="GDPR"
            style={{ position: 'absolute', width: 80, height: 80, bottom: 70, left: -28 }} />

        </div>
      </div>

      {/* Right — text */}
      <div className="flex-1 flex flex-col">
        <h2 className="HeroHeading">
          <AnimatedGradientText speed={1} style={{ backgroundImage: "linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)", backgroundSize: "300% 100%" }}>
            Built-In<br />
            Compliance<br />
            Zero Guesswork
          </AnimatedGradientText>
        </h2>

        <p className="label mt-6">
          Stay ahead of audits with automated compliance tracking across major frameworks like
        </p>

        <p className="label mt-2" style={{ fontWeight: 700, color: '#ffffff' }}>
          ISO 27001, SOC 2, GDPR, HIPAA, CIS, PCI-DS
        </p>

        <p className="label mt-5" style={{ fontWeight: 700, color: '#ffffff' }}>
          From policy enforcement to pass-ready reports Cloudnosys does the heavy lifting.
        </p>
      </div>

    </section>

    {/* Trusted By section */}
    <section
      className="w-full flex flex-col items-center text-center pt-36 pb-20 overflow-hidden"
      style={{ backgroundColor: '#060606', color: '#ffffff' }}
    >
      <h2 className="HeroHeading px-16">
        <AnimatedGradientText speed={1} style={{ backgroundImage: "linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)", backgroundSize: "300% 100%" }}>
          Trusted By <span>Security</span><br />
          <span>Teams</span> Around The World
        </AnimatedGradientText>
      </h2>
      <p className="label mt-4 px-16" style={{ color: '#aaaaaa' }}>
        Cloudnosys powers compliance and protection for teams of every size from startups to enterprise.
      </p>

      {/* Testimonial cards — two marquee rows */}
      <div className="w-full flex flex-col mt-20 relative" style={{ gap: 20 }}>

        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: 160, zIndex: 10, background: 'linear-gradient(to right, #070707, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: 160, zIndex: 10, background: 'linear-gradient(to left, #070707, transparent)' }} />

        {/* Row 1 — scrolls left */}
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            display: 'flex',
            gap: 20,
            width: 'max-content',
            animation: 'marquee-left 30s linear infinite',
          }}>
            {[...Array(5)].map((_, i) => <TestimonialCard key={`r1a-${i}`} />)}
            {[...Array(5)].map((_, i) => <TestimonialCard key={`r1b-${i}`} />)}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            display: 'flex',
            gap: 20,
            width: 'max-content',
            animation: 'marquee-right 30s linear infinite',
          }}>
            {[...Array(5)].map((_, i) => <TestimonialCard key={`r2a-${i}`} />)}
            {[...Array(5)].map((_, i) => <TestimonialCard key={`r2b-${i}`} />)}
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
