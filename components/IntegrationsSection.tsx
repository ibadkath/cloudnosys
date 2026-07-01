/* eslint-disable @next/next/no-img-element */
import { ShineBorder } from "./ui/shine-border";
import { AnimatedGradientText } from "./ui/animated-gradient-text";

const R  = 28;
const CR = 70;
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
    // Left near (r=38, icons enlarged — Jira icon stays same)
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
    <section className="w-full flex flex-col items-center py-20"
      style={{ backgroundColor: '#060606', color: '#ffffff' }}>

      <div className="w-full flex flex-col items-center px-16">

      <h2 className="HeroHeading text-center">
        <AnimatedGradientText speed={1} style={{ backgroundImage: "linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)", backgroundSize: "300% 100%" }}>
          Integrate Your <span>Stack</span><br />
          <span>Automate</span> Your Security
        </AnimatedGradientText>
      </h2>
      <p className="label mt-4 text-center" style={{ color: '#aaaaaa' }}>
        Cloudnosys works seamlessly with the tools your team already trusts
      </p>

      <div className="relative -mt-4" style={{ width: 900, height: 520 }}>

        {/* Figma: ambient blue glow behind diagram */}
        <div className="pointer-events-none absolute" style={{
          width: 560, height: 400, left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse at center, rgba(26,90,255,0.14) 0%, rgba(20,60,200,0.06) 50%, transparent 72%)',
          filter: 'blur(70px)', zIndex: 0,
        }} />

        <svg className="absolute inset-0" width="900" height="520" style={{ overflow: 'visible' }}>

          {/* ══ RIGHT SIDE ══ */}

          {/* Row 1 — Azure (x=660, r=38): stub + diagonal */}
          <DblLine x1={602} y1={130} x2={660 - RN} y2={130} />
          <DblLine x1={503} y1={215} x2={602}       y2={130} />

          {/* Row 2 — GCP (x=715, r=38): horizontal to center */}
          <DblLine x1={CX + CR} y1={CY} x2={715 - RN} y2={CY} />

          {/* Row 3 — AWS (x=660, r=38): stub + diagonal */}
          <DblLine x1={602} y1={390} x2={660 - RN} y2={390} />
          <DblLine x1={503} y1={305} x2={602}       y2={390} />

          {/* NR-T → FR-T → right page edge */}
          <DblLine x1={660 + RN} y1={130} x2={900 - R} y2={130} />
          <DblLine x1={900 + R}  y1={130} x2={1600}    y2={130} />
          {/* NR-M → FR-M → right page edge */}
          <DblLine x1={715 + RN} y1={260} x2={955 - R} y2={260} />
          <DblLine x1={955 + R}  y1={260} x2={1600}    y2={260} />
          {/* NR-B → FR-B → right page edge */}
          <DblLine x1={660 + RN} y1={390} x2={900 - R} y2={390} />
          <DblLine x1={900 + R}  y1={390} x2={1600}    y2={390} />

          {/* ══ LEFT SIDE ══ */}

          {/* Row 1 — NL-T (x=240, r=38): stub + diagonal */}
          <DblLine x1={240 + RN} y1={130} x2={298} y2={130} />
          <DblLine x1={298}      y1={130} x2={397} y2={215} />

          {/* Row 2 — NL-M (x=185, r=38): horizontal to center */}
          <DblLine x1={185 + RN} y1={CY} x2={CX - CR} y2={CY} />

          {/* Row 3 — NL-B (x=240, r=38): stub + diagonal */}
          <DblLine x1={240 + RN} y1={390} x2={298} y2={390} />
          <DblLine x1={298}      y1={390} x2={397} y2={305} />

          {/* left page edge → FL-T → NL-T */}
          <DblLine x1={-700}    y1={130} x2={  0 - R}  y2={130} />
          <DblLine x1={  0 + R} y1={130} x2={240 - RN} y2={130} />
          {/* left page edge → FL-M → NL-M */}
          <DblLine x1={-700}    y1={260} x2={-55 - R}  y2={260} />
          <DblLine x1={-55 + R} y1={260} x2={185 - RN} y2={260} />
          {/* left page edge → FL-B → NL-B */}
          <DblLine x1={-700}    y1={390} x2={  0 - R}  y2={390} />
          <DblLine x1={  0 + R} y1={390} x2={240 - RN} y2={390} />

          {/* ══ CENTER CROSSHAIR ══ */}
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
          boxShadow: '0 0 70px 24px rgba(26,111,255,0.32)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src="/images/icons/cloud-icon.png" alt="Cloudnosys" style={{ width: 83, height: 67 }} />
        </div>

        {icons.map(([cx, cy, src, alt, filter, size, imgOffset, r], i) => (
          <IconCircle key={i} cx={cx} cy={cy} src={src} alt={alt} filter={filter}
            size={size as [number,number] | undefined}
            imgOffset={imgOffset as [number,number] | undefined}
            r={r as number | undefined} />
        ))}
      </div>

      <div className="relative flex flex-col items-center text-center mt-20 w-full overflow-hidden" style={{ paddingBottom: 80 }}>

        {/* Figma: massive cyan blob behind bottom CTA */}
        <div className="pointer-events-none absolute inset-0" style={{ zIndex: 0 }}>
          <div style={{
            position: 'absolute', width: 900, height: 650, left: '50%', top: '50%',
            transform: 'translate(-55%, -45%)',
            background: 'radial-gradient(ellipse at 42% 48%, rgba(0,218,255,0.62) 0%, rgba(0,190,245,0.42) 28%, rgba(0,160,230,0.2) 55%, transparent 78%)',
            filter: 'blur(72px)',
          }} />
          <div style={{
            position: 'absolute', width: 700, height: 500, left: '50%', top: '50%',
            transform: 'translate(-30%, -55%)',
            background: 'radial-gradient(ellipse at 55% 40%, rgba(0,200,255,0.45) 0%, rgba(0,170,240,0.25) 40%, transparent 72%)',
            filter: 'blur(80px)',
          }} />
        </div>

        <h2 className="HeroHeading text-center relative" style={{ zIndex: 1 }}>
          <AnimatedGradientText speed={1} style={{ backgroundImage: "linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)", backgroundSize: "300% 100%" }}>
            Secure Your Cloud<br />
            <span>Start Free Today</span>
          </AnimatedGradientText>
        </h2>
        <p className="label mt-4 text-center relative" style={{ zIndex: 1 }}>
          Experience full access to Cloudnosys for 14 days.
        </p>
      </div>

      </div>{/* end padded wrapper */}

      {/* Full-width line through button — direct child of section (no px padding) */}
      <div className="w-full flex items-center mt-8">
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.15)' }} />
        <button className="StartButton" style={{ flexShrink: 0 }}>
          <ShineBorder shineColor="#1567FF" duration={6} />
          START FREE TRIAL
        </button>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.15)' }} />
      </div>
    </section>
  );
}
