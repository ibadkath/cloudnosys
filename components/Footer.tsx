/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const COMPANY = ['Platform', 'Solutions', 'Pricing', 'Resources', 'Company'];
const RESOURCES = ['Webinars', 'Case Studies', 'Blog', 'FAQs'];
const COMPLIANCES = ['CCPA', 'GDPR', 'ISO 27001', 'SOC 2', 'HIPAA'];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: '#DADADA', position: 'relative', overflow: 'hidden' }}>

      {/* Figma: bottom-left blue glow */}
      <div className="pointer-events-none absolute" style={{
        width: 1500, height: 450, left: -150, bottom: -150,
        background: 'radial-gradient(ellipse at 30% 70%, rgba(129,188,255,0.15) 0%, rgba(129,188,255,0.06) 55%, transparent 76%)',
        filter: 'blur(120px)',
      }} />

      <div className="footer-row w-full flex flex-wrap tb:flex-nowrap px-6 tb:px-16 py-12 tb:py-20 gap-y-10 tb:gap-x-12 tb:justify-between">

        {/* Logo + copyright — full-width row on mobile, first column on desktop */}
        <div className="footer-logo-col basis-full tb:basis-auto shrink-0 flex justify-center tb:flex-col tb:justify-between" style={{ minWidth: 160 }}>
          <Image src="/images/icons/Home.png" alt="Cloudnosys" width={149} height={37} />
          <p className="hidden tb:block" style={{ fontSize: 12, color: 'rgba(218,218,218,0.5)', marginTop: 'auto', paddingTop: 48 }}>
            Copyright 2025, Cloudnosys
          </p>
        </div>

        {/* Company */}
        <div className="shrink-0 flex flex-col gap-5 tb:gap-6">
          <span className="footer-heading" style={{ marginBottom: 8 }}>Company</span>
          {COMPANY.map(item => (
            <a key={item} href="#" className="footer-sub-heading" style={{ textDecoration: 'none' }}>{item}</a>
          ))}
        </div>

        {/* Resources — ml-auto pushes to right edge on mobile, resets on desktop */}
        <div className="shrink-0 flex flex-col gap-5 tb:gap-6 ml-auto tb:ml-0">
          <span className="footer-heading" style={{ marginBottom: 8 }}>Resources</span>
          {RESOURCES.map(item => (
            <a key={item} href="#" className="footer-sub-heading" style={{ textDecoration: 'none' }}>{item}</a>
          ))}
        </div>

        {/* Invisible row-break between the two pairs on mobile only */}
        <div className="basis-full tb:hidden" />

        {/* Compliances */}
        <div className="shrink-0 flex flex-col gap-5 tb:gap-6">
          <span className="footer-heading" style={{ marginBottom: 8 }}>Compliances</span>
          {COMPLIANCES.map(item => (
            <p key={item} className="footer-sub-heading" style={{ margin: 0, whiteSpace: 'nowrap' }}>
              <strong style={{ fontWeight: 700 }}>{item}</strong> Compliant
            </p>
          ))}
        </div>

        {/* Partner badges — ml-auto pushes to right edge on mobile, resets on desktop */}
        <div className="footer-badges shrink-0 flex flex-col gap-1.5 justify-end tb:justify-start ml-auto tb:ml-0">
          <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <img src="/images/footer/aws-advanced.png"   alt="AWS Advanced Tier Partner"    className="footer-badge-aws1 object-contain w-13 h-13 tb:w-16.5 tb:h-16.5" />
            <img src="/images/footer/aws-qualified.png"  alt="AWS Qualified Software"       className="footer-badge-aws2 object-contain w-13 h-13 tb:w-16.5 tb:h-16.5" />
            <img src="/images/footer/gcloud-partner.png" alt="Google Cloud Premier Partner" className="footer-badge-gcloud object-contain w-9.5 h-11 tb:w-11.75 tb:h-14.25" />
          </div>
          <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <div style={{ background: '#ffffff', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/footer/ms-partner.png" alt="Microsoft Solutions Partner" className="footer-badge-ms object-contain w-14 h-9.5 tb:w-17.5 tb:h-11.5" />
            </div>
            <img src="/images/footer/aws-security.png" alt="AWS Security Competency" className="footer-badge-awssec object-contain w-22 h-8 tb:w-29 tb:h-10.75" />
          </div>
        </div>

        {/* Copyright — mobile only */}
        <p className="basis-full tb:hidden" style={{ fontSize: 12, color: 'rgba(218,218,218,0.5)', textAlign: 'center', margin: 0 }}>
          Copyright 2025, Cloudnosys
        </p>

      </div>
    </footer>
  );
}
