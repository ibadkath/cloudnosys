/* eslint-disable @next/next/no-img-element */
import { ShineBorder } from "./ui/shine-border";
import ShinyText from "./ShinyText";

const R  = 28;
const CR = 100;
const CX = 450;
const CY = 260;

const ST = { stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 } as const;

function DblLine({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ox = (-dy / len) * 6;
  const oy = (dx / len) * 6;
  return (
    <>
      <line x1={x1 + ox} y1={y1 + oy} x2={x2 + ox} y2={y2 + oy} {...ST} />
      <line x1={x1 - ox} y1={y1 - oy} x2={x2 - ox} y2={y2 - oy} {...ST} />
    </>
  );
}

function IconCircle({ src, alt, cx, cy, filter, size, imgOffset, r }: {
  src?: string; alt?: string; cx: number; cy: number;
  filter?: string; size?: [number, number]; imgOffset?: [number, number]; r?: number;
}) {
  const radius = r ?? R;
  const [w, h] = size ?? [28, 28];
  const [ox, oy] = imgOffset ?? [0, 0];
  return (
    <div style={{
      position: 'absolute',
      width: radius * 2, height: radius * 2,
      left: cx - radius, top: cy - radius,
      borderRadius: '50%',
      background: '#0d1520',
      border: '1px solid rgba(255,255,255,0.12)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {src && <img src={src} alt={alt ?? ''} style={{ width: w, height: h, objectFit: 'contain', filter, transform: `translate(${ox}px, ${oy}px)` }} />}
    </div>
  );
}

export default function IntegrationsSection() {
  // [cx, cy, src, alt, filter, size, imgOffset, r]
  const icons: [number, number, string?, string?, string?, [number,number]?, [number,number]?, number?][] = [
    // Left far (r=28 default)
    [  0, 130, '/images/icons/openai.png',    'OpenAI', 'brightness(0) invert(1)'],
    [-55, 260, '/images/icons/gmail.png',     'Gmail'],
    [  0, 390, '/images/icons/teams.png',     'Microsoft Teams'],
    // Left near (r=38, icons enlarged â€” Jira icon stays same)
    [240, 130, '/images/icons/jira.png',      'Jira',      undefined, [38, 41.2], [-4, 0], 38],
    [185, 260, '/images/icons/terraform.png', 'Terraform', undefined, [52, 52],   undefined, 38],
    [240, 390, '/images/icons/slack.png',     'Slack',     undefined, [40, 40],   undefined, 38],
    // Right near (r=38, icons enlarged)
    [660, 130, '/images/icons/azure.png',     'Azure',       undefined, [40, 40], undefined, 38],
    [715, 260, '/images/icons/Gcloud.png',    'Google Cloud',undefined, [40, 40], undefined, 38],
    [660, 390, '/images/icons/aws.png',       'AWS',         undefined, [52, 52], undefined, 38],
    // Right far (r=28 default)
    [900, 130, '/images/icons/okta.png',      'Okta'],
    [955, 260, '/images/icons/linear.png',    'Linear'],
    [900, 390, '/images/icons/firebase.png',  'Firebase'],
  ];

  // Near-circle radius for SVG line calculations
  const RN = 38;

  return (
    <section className="w-full flex flex-col items-center pt-20 pb-32 md:pb-40"
      // style={{ backgroundColor: '#060606', color: '#ffffff' }}
      >

      <div className="w-full flex flex-col items-center px-4 md:px-16">

      <h2 className="HeroHeading text-center max-w-80 sm:max-w-[73.5%] tb:max-w-max " style={{ fontWeight: 300 }}>
        <ShinyText text="Integrate Your" speed={3} />{' '}
        <ShinyText text="Stack" className="font-medium!" speed={3} /> <br className="hidden tb:block" />
        <ShinyText text="Automate" className="font-medium!" speed={3} />{' '}
        <ShinyText text="Your Security" speed={3} />
      </h2>
      <p className="label mt-4 text-center" style={{ color: '#FFFFFF' }}>
        Cloudnosys works seamlessly with the tools your team already trusts
      </p>

      {/* Diagram: shown on all screens — CSS scales it for mobile */}
      <div className="integrations-diagram-wrapper w-full flex justify-center md:py-10">
      <div className="relative integrations-diagram" style={{ width: 900, height: 520 }}>

        {/* Ambient glow behind diagram */}
        <div className="pointer-events-none absolute integrations-ambient-glow" style={{
          width: 900, height: 650, left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse at center, rgba(210,215,225,0.22) 0%, rgba(190,200,215,0.08) 45%, transparent 72%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }} />

        <svg className="absolute inset-0" width="900" height="520" style={{ overflow: 'visible' }}>

          {/* â•â• RIGHT SIDE â•â• */}

          {/* Row 1 â€” Azure (x=660, r=38): stub + diagonal */}
          <DblLine x1={602} y1={130} x2={660 - RN} y2={130} />
          <DblLine x1={503} y1={215} x2={602}       y2={130} />

          {/* Row 2 â€” GCP (x=715, r=38): horizontal to center */}
          <DblLine x1={CX + CR} y1={CY} x2={715 - RN} y2={CY} />

          {/* Row 3 â€” AWS (x=660, r=38): stub + diagonal */}
          <DblLine x1={602} y1={390} x2={660 - RN} y2={390} />
          <DblLine x1={503} y1={305} x2={602}       y2={390} />

          {/* NR-T â†’ FR-T â†’ right page edge */}
          <DblLine x1={660 + RN} y1={130} x2={900 - R} y2={130} />
          <DblLine x1={900 + R}  y1={130} x2={1600}    y2={130} />
          {/* NR-M â†’ FR-M â†’ right page edge */}
          <DblLine x1={715 + RN} y1={260} x2={955 - R} y2={260} />
          <DblLine x1={955 + R}  y1={260} x2={1600}    y2={260} />
          {/* NR-B â†’ FR-B â†’ right page edge */}
          <DblLine x1={660 + RN} y1={390} x2={900 - R} y2={390} />
          <DblLine x1={900 + R}  y1={390} x2={1600}    y2={390} />

          {/* â•â• LEFT SIDE â•â• */}

          {/* Row 1 â€” NL-T (x=240, r=38): stub + diagonal */}
          <DblLine x1={240 + RN} y1={130} x2={298} y2={130} />
          <DblLine x1={298}      y1={130} x2={397} y2={215} />

          {/* Row 2 â€” NL-M (x=185, r=38): horizontal to center */}
          <DblLine x1={185 + RN} y1={CY} x2={CX - CR} y2={CY} />

          {/* Row 3 â€” NL-B (x=240, r=38): stub + diagonal */}
          <DblLine x1={240 + RN} y1={390} x2={298} y2={390} />
          <DblLine x1={298}      y1={390} x2={397} y2={305} />

          {/* left page edge â†’ FL-T â†’ NL-T */}
          <DblLine x1={-700}    y1={130} x2={  0 - R}  y2={130} />
          <DblLine x1={  0 + R} y1={130} x2={240 - RN} y2={130} />
          {/* left page edge â†’ FL-M â†’ NL-M */}
          <DblLine x1={-700}    y1={260} x2={-55 - R}  y2={260} />
          <DblLine x1={-55 + R} y1={260} x2={185 - RN} y2={260} />
          {/* left page edge â†’ FL-B â†’ NL-B */}
          <DblLine x1={-700}    y1={390} x2={  0 - R}  y2={390} />
          <DblLine x1={  0 + R} y1={390} x2={240 - RN} y2={390} />

          {/* â•â• CENTER CROSSHAIR â•â• */}
          <DblLine x1={CX} y1={20} x2={CX} y2={CY - CR} />
          <DblLine x1={CX} y1={CY + CR}  x2={CX} y2={590} />

        </svg>

        {/* Center cloud icon */}
        <div style={{
          position: 'absolute',
          width: CR * 2, height: CR * 2,
          left: CX - CR, top: CY - CR,
          borderRadius: '50%',
          background: '#0d1a30',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 0 110px 40px rgba(26,111,255,0.50)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src="/images/icons/cloud-icon.png" alt="Cloudnosys" style={{ width: 90, height: 73 }} />
        </div>

        {icons.map(([cx, cy, src, alt, filter, size, imgOffset, r], i) => (
          <IconCircle key={i} cx={cx} cy={cy} src={src} alt={alt} filter={filter}
            size={size as [number,number] | undefined}
            imgOffset={imgOffset as [number,number] | undefined}
            r={r as number | undefined} />
        ))}
      </div>
      </div>{/* end integrations-diagram-wrapper */}

      <div className="flex flex-col items-center text-center mt-8 md:mt-20">

        <h2 className="HeroHeading text-center" style={{ fontWeight: 300 }}>
          <ShinyText text="Secure Your Cloud" speed={3} /> <br className="hidden md:block" />
          <ShinyText text="Start Free Today" className="font-medium!" speed={3} />
        </h2>
        <p className="label mt-4 text-center" style={{ color: '#FFFFFF' }}>
          Experience full access to <br className="tb:hidden" />
          Cloudnosys for 14 days.
        </p>
      </div>

      </div>{/* end padded wrapper */}

      <div className="w-full flex items-center justify-center mt-8">
        <button className="StartButton" style={{ flexShrink: 0 }}>
          <ShineBorder shineColor="#1567FF" duration={6} />
          START FREE TRIAL
        </button>
      </div>
    </section>
  );
}
