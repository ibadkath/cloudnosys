/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const COMPANY = ['Platform', 'Solutions', 'Pricing', 'Resources', 'Company'];
const RESOURCES = ['Webinars', 'Case Studies', 'Blog', 'FAQs'];
const COMPLIANCES = ['CCPA', 'GDPR', 'ISO 27001', 'SOC 2', 'HIPAA'];

// Row 1: aws-advanced | aws-qualified | gcloud-partner
// Row 2: ms-partner   | (empty)        | aws-security
const BADGES: ({ src: string; alt: string; w?: number; h?: number } | null)[] = [
  { src: '/images/home/footer/aws-advanced.png',   alt: 'AWS Advanced Tier Partner',      w: 66,  h: 66  },
  { src: '/images/home/footer/aws-qualified.png',  alt: 'AWS Qualified Software',         w: 66,  h: 66  },
  { src: '/images/home/footer/gcloud-partner.png', alt: 'Google Cloud Premier Partner',   w: 47,  h: 57  },
  { src: '/images/home/footer/ms-partner.png',     alt: 'Microsoft Solutions Partner' },
  null,
  { src: '/images/home/footer/aws-security.png',   alt: 'AWS Security Competency',        w: 116, h: 43  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#060606', borderTop: '1px solid rgba(255,255,255,0.08)', color: '#DADADA' }}>
      <div className="w-full px-16 py-20 flex justify-between gap-12">

        {/* Logo + copyright */}
        <div className="flex flex-col justify-between" style={{ minWidth: 160 }}>
          <Image src="/images/icons/Home.png" alt="Cloudnosys" width={149} height={37} />
          <p style={{ fontSize: 12, color: 'rgba(218,218,218,0.5)', marginTop: 'auto', paddingTop: 48 }}>
            Copyright 2025, Cloudnosys
          </p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-6">
          <span className="footer-heading" style={{ marginBottom: 8 }}>Company</span>
          {COMPANY.map(item => (
            <a key={item} href="#" className="footer-sub-heading" style={{ textDecoration: 'none' }}>
              {item}
            </a>
          ))}
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-6">
          <span className="footer-heading" style={{ marginBottom: 8 }}>Resources</span>
          {RESOURCES.map(item => (
            <a key={item} href="#" className="footer-sub-heading" style={{ textDecoration: 'none' }}>
              {item}
            </a>
          ))}
        </div>

        {/* Compliances */}
        <div className="flex flex-col gap-6">
          <span className="footer-heading" style={{ marginBottom: 8 }}>Compliances</span>
          {COMPLIANCES.map(item => (
            <p key={item} className="footer-sub-heading" style={{ margin: 0 }}>
              <strong style={{ fontWeight: 700 }}>{item}</strong> Compliant
            </p>
          ))}
        </div>

        {/* Partner badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <img src="/images/home/footer/aws-advanced.png"  alt="AWS Advanced Tier Partner"    style={{ width: 66, height: 66, objectFit: 'contain' }} />
            <img src="/images/home/footer/aws-qualified.png" alt="AWS Qualified Software"       style={{ width: 66, height: 66, objectFit: 'contain' }} />
            <img src="/images/home/footer/gcloud-partner.png" alt="Google Cloud Premier Partner" style={{ width: 47, height: 57, objectFit: 'contain', marginLeft: 12 }} />
          </div>
          {/* Row 2 */}
          <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <div style={{ background: '#ffffff', borderRadius: 6, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/home/footer/ms-partner.png" alt="Microsoft Solutions Partner" style={{ width: 70, height: 46, objectFit: 'contain' }} />
            </div>
            <img src="/images/home/footer/aws-security.png" alt="AWS Security Competency" style={{ width: 116, height: 43, objectFit: 'contain', marginLeft: 12 }} />
          </div>
        </div>

      </div>
    </footer>
  );
}
