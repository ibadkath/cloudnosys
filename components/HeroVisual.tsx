export default function HeroVisual({ warningScale = 1, badgeScale = 1 }: { warningScale?: number; badgeScale?: number } = {}) {
  const HUB    = { cx: 870,  cy: 400, r: 60 };
  const AWS    = { cx: 1080, cy: 255, r: 36 };
  const GCP    = { cx: 1092, cy: 495, r: 36 };
  const AZURE  = { cx: 628,  cy: 520, r: 36 };
  const CHIP   = { cx: 1305, cy: 215, r: 36 };
  const LOCK   = { cx: 1305, cy: 545, r: 32 };
  const KEY    = { cx: 418,  cy: 548, r: 32 };

  // Warning icon positions: midpoints of each spoke that has icons on both ends
  const WARN_R = 10 * warningScale;
  const WARN2 = { cx: 945, cy: 472, r: WARN_R }; // midpoint of HUB->GCP diagonal
  const WARN3 = { cx: 736, cy: 459, r: WARN_R }; // midpoint of HUB->AZURE diagonal
  const WARN4 = { cx: 1210, cy: 188, r: WARN_R, bx: 1210, by: 215 }; // AWS->CHIP, branched up
  const WARN7 = { cx: 1400, cy: 240, r: WARN_R }; // CHIP->page-edge, branched down
  const WARN5 = { cx: 1220, cy: 553, r: WARN_R }; // GCP->LOCK, on horizontal segment
  const WARN6 = { cx: 490,  cy: 540, r: WARN_R }; // AZURE->KEY, near KEY on second horizontal
  const WARN_ICON = 14 * warningScale;
  const WARN_HALF = WARN_ICON / 2;

  // Three icons below GCP in a horizontal row
  const BADGE_R = 14 * badgeScale;
  const BADGE_ICON = 16 * badgeScale;
  const BADGE_HALF = BADGE_ICON / 2;
  const BELOW_GCP_Y = GCP.cy + GCP.r + 12 + 14 + 20;
  const SHIELD1 = { cx: GCP.cx - 35, cy: BELOW_GCP_Y, r: BADGE_R };
  const DOC1    = { cx: GCP.cx,      cy: BELOW_GCP_Y, r: BADGE_R };
  const BUG1    = { cx: GCP.cx + 35, cy: BELOW_GCP_Y, r: BADGE_R };

  // Shield below AZURE
  const BELOW_AZURE_Y = AZURE.cy + AZURE.r + 12 + 14 + 6;
  const SHIELD_AZURE = { cx: AZURE.cx, cy: BELOW_AZURE_Y, r: BADGE_R };

  // Bug + Shield below AWS
  const BELOW_AWS_Y = AWS.cy + AWS.r + 12 + 14 + 8;
  const BUG_AWS    = { cx: AWS.cx - 18, cy: BELOW_AWS_Y, r: BADGE_R };
  const SHIELD_AWS = { cx: AWS.cx + 18, cy: BELOW_AWS_Y, r: BADGE_R };

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{ transform: 'translateY(30px)' }}
      width="100%"
      height="100%"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1567FF" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1567FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hubBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0d1a35" />
          <stop offset="100%" stopColor="#060b18" />
        </radialGradient>
        <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#4381EC" />
          <stop offset="100%" stopColor="#4CD8ED" />
        </linearGradient>
        <mask id="lineMask">
          <rect x="-9999" y="-9999" width="19998" height="19998" fill="white" />
          {[WARN2, WARN3, WARN4, WARN7, WARN5, WARN6].map((w, i) => (
            <circle key={i} cx={w.cx} cy={w.cy} r={w.r} fill="black" />
          ))}
        </mask>
      </defs>

      {/* ── LINES ── */}
      <g mask="url(#lineMask)">
        <BentLines x1={HUB.cx} y1={HUB.cy} mx={975} my={AWS.cy}   x2={AWS.cx}   y2={AWS.cy}   gap={18} r1={HUB.r+18} r2={AWS.r+12}   />
        <BentLines x1={HUB.cx} y1={HUB.cy} mx={981} my={GCP.cy}   x2={GCP.cx}   y2={GCP.cy}   gap={18} r1={HUB.r+18} r2={GCP.r+12}   />
        <FourLines x1={HUB.cx} y1={HUB.cy} x2={AZURE.cx} y2={AZURE.cy} gap={18} r1={HUB.r+18} r2={AZURE.r+12} />
        <FourLines x1={HUB.cx} y1={HUB.cy} x2={HUB.cx}   y2={1400}     gap={18} r1={HUB.r+18} r2={0}          />
        <BentLines x1={AWS.cx} y1={AWS.cy} mx={1149} my={CHIP.cy} x2={CHIP.cx} y2={CHIP.cy} gap={18} r1={AWS.r+12} r2={CHIP.r+10} cr={0} />
        <FourLines x1={CHIP.cx} y1={CHIP.cy} x2={1920} y2={CHIP.cy} gap={18} r1={CHIP.r+10} r2={0} />
        <BentLines x1={GCP.cx} y1={GCP.cy} mx={1179} my={LOCK.cy} x2={LOCK.cx} y2={LOCK.cy} gap={18} r1={GCP.r+12} r2={LOCK.r+12} cr={0} />
        <FourLines x1={LOCK.cx} y1={LOCK.cy} x2={1920} y2={LOCK.cy} gap={18} r1={LOCK.r+12} r2={0} />
        <ZLines x1={AZURE.cx} y1={AZURE.cy} bx1={545} x2={KEY.cx} y2={KEY.cy} gap={18} r1={AZURE.r+12} r2={KEY.r+12} diagF={Math.sqrt(3)} />
        <FourLines x1={KEY.cx} y1={KEY.cy} x2={-300} y2={KEY.cy} gap={18} r1={KEY.r+12} r2={0} />
      </g>

      {/* ── CIRCLES & ICONS drawn on top of lines ── */}

      {/* Hub */}
      <circle cx={HUB.cx} cy={HUB.cy} r={HUB.r + 18} fill="none" stroke="#ffffff" strokeWidth="0.2" strokeOpacity="0.4" />
      <circle cx={HUB.cx} cy={HUB.cy} r={HUB.r} fill="#13213A" fillOpacity="0.37" stroke="#1567FF" strokeWidth="0.5" />
      <image href="/images/icons/cloud-icon.png" x={HUB.cx - 30} y={HUB.cy - 30} width="60" height="60" />

      {/* AWS */}
      <circle cx={AWS.cx} cy={AWS.cy} r={AWS.r + 12} fill="none" stroke="#ffffff" strokeWidth="0.2" strokeOpacity="0.4" />
      <circle cx={AWS.cx} cy={AWS.cy} r={AWS.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/aws.png" x={AWS.cx - 22} y={AWS.cy - 22} width="44" height="44" />

      {/* GCP */}
      <circle cx={GCP.cx} cy={GCP.cy} r={GCP.r + 12} fill="none" stroke="#ffffff" strokeWidth="0.2" strokeOpacity="0.4" />
      <circle cx={GCP.cx} cy={GCP.cy} r={GCP.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/Gcloud.png" x={GCP.cx - 22} y={GCP.cy - 22} width="44" height="44" />

      {/* Azure */}
      <circle cx={AZURE.cx} cy={AZURE.cy} r={AZURE.r + 12} fill="none" stroke="#ffffff" strokeWidth="0.2" strokeOpacity="0.4" />
      <circle cx={AZURE.cx} cy={AZURE.cy} r={AZURE.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/azure.png" x={AZURE.cx - 22} y={AZURE.cy - 22} width="44" height="44" />

      {/* Terminal: Chip */}
      <circle cx={CHIP.cx} cy={CHIP.cy} r={CHIP.r + 10} fill="none" stroke="#ffffff" strokeWidth="0.2" strokeOpacity="0.4" />
      <circle cx={CHIP.cx} cy={CHIP.cy} r={CHIP.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/chip.png" x={CHIP.cx - 16} y={CHIP.cy - 16} width="32" height="32" />

      {/* Terminal: Lock */}
      <circle cx={LOCK.cx} cy={LOCK.cy} r={LOCK.r + 12} fill="none" stroke="#ffffff" strokeWidth="0.2" strokeOpacity="0.4" />
      <circle cx={LOCK.cx} cy={LOCK.cy} r={LOCK.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/key.png" x={LOCK.cx - 16} y={LOCK.cy - 16} width="32" height="32" />

      {/* Terminal: Key */}
      <circle cx={KEY.cx} cy={KEY.cy} r={KEY.r + 12} fill="none" stroke="#ffffff" strokeWidth="0.2" strokeOpacity="0.4" />
      <circle cx={KEY.cx} cy={KEY.cy} r={KEY.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/key.png" x={KEY.cx - 16} y={KEY.cy - 16} width="32" height="32" />

{/* Warning 2 — HUB->GCP */}
      <circle cx={WARN2.cx} cy={WARN2.cy} r={WARN2.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/warning.png" x={WARN2.cx - WARN_HALF} y={WARN2.cy - WARN_HALF} width={WARN_ICON} height={WARN_ICON} />

      {/* Warning 3 — HUB->AZURE */}
      <circle cx={WARN3.cx} cy={WARN3.cy} r={WARN3.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/warning.png" x={WARN3.cx - WARN_HALF} y={WARN3.cy - WARN_HALF} width={WARN_ICON} height={WARN_ICON} />

      {/* Warning 4 — AWS->CHIP, branched up */}
      <circle cx={WARN4.cx} cy={WARN4.cy} r={WARN4.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/warning.png" x={WARN4.cx - WARN_HALF} y={WARN4.cy - WARN_HALF} width={WARN_ICON} height={WARN_ICON} />

      {/* Warning 7 — CHIP->page-edge */}
      <circle cx={WARN7.cx} cy={WARN7.cy} r={WARN7.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/warning.png" x={WARN7.cx - WARN_HALF} y={WARN7.cy - WARN_HALF} width={WARN_ICON} height={WARN_ICON} />

      {/* Warning 5 — GCP->LOCK */}
      <circle cx={WARN5.cx} cy={WARN5.cy} r={WARN5.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/warning.png" x={WARN5.cx - WARN_HALF} y={WARN5.cy - WARN_HALF} width={WARN_ICON} height={WARN_ICON} />

      {/* Warning 6 — AZURE->KEY */}
      <circle cx={WARN6.cx} cy={WARN6.cy} r={WARN6.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/warning.png" x={WARN6.cx - WARN_HALF} y={WARN6.cy - WARN_HALF} width={WARN_ICON} height={WARN_ICON} />

      {/* Three icons below GCP — bug (left), shield (middle), document (right) */}
      <circle cx={SHIELD1.cx} cy={SHIELD1.cy} r={SHIELD1.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/bug.png" x={SHIELD1.cx - BADGE_HALF} y={SHIELD1.cy - BADGE_HALF} width={BADGE_ICON} height={BADGE_ICON} style={{ filter: 'brightness(0) invert(1)' }} />

      <circle cx={DOC1.cx} cy={DOC1.cy} r={DOC1.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/shield.png" x={DOC1.cx - BADGE_HALF} y={DOC1.cy - BADGE_HALF} width={BADGE_ICON} height={BADGE_ICON} style={{ filter: 'brightness(0) invert(1)' }} />

      <circle cx={BUG1.cx} cy={BUG1.cy} r={BUG1.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/document.png" x={BUG1.cx - BADGE_HALF} y={BUG1.cy - BADGE_HALF} width={BADGE_ICON} height={BADGE_ICON} style={{ filter: 'brightness(0) invert(1)' }} />

      {/* Shield below AZURE */}
      <circle cx={SHIELD_AZURE.cx} cy={SHIELD_AZURE.cy} r={SHIELD_AZURE.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/shield.png" x={SHIELD_AZURE.cx - BADGE_HALF} y={SHIELD_AZURE.cy - BADGE_HALF} width={BADGE_ICON} height={BADGE_ICON} style={{ filter: 'brightness(0) invert(1)' }} />

      {/* Bug + Shield below AWS */}
      <circle cx={BUG_AWS.cx} cy={BUG_AWS.cy} r={BUG_AWS.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/bug.png" x={BUG_AWS.cx - BADGE_HALF} y={BUG_AWS.cy - BADGE_HALF} width={BADGE_ICON} height={BADGE_ICON} style={{ filter: 'brightness(0) invert(1)' }} />

      <circle cx={SHIELD_AWS.cx} cy={SHIELD_AWS.cy} r={SHIELD_AWS.r} fill="#1C2A42" fillOpacity="0.37" stroke="url(#nodeGrad)" strokeWidth="0.5" />
      <image href="/images/icons/shield.png" x={SHIELD_AWS.cx - BADGE_HALF} y={SHIELD_AWS.cy - BADGE_HALF} width={BADGE_ICON} height={BADGE_ICON} style={{ filter: 'brightness(0) invert(1)' }} />

    </svg>
  );
}

function FourLines({
  x1, y1, x2, y2, gap = 2, r1 = 0, r2 = 0,
}: {
  x1: number; y1: number; x2: number; y2: number;
  gap?: number; r1?: number; r2?: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const nx = dx / len;
  const ny = dy / len;
  const px = -ny;
  const py = nx;
  const offsets = [-1.5 * gap, -0.5 * gap, 0.5 * gap, 1.5 * gap];
  return (
    < >
      {offsets.map((o, i) => {
        const d1 = r1 > 0 ? Math.sqrt(Math.max(0, r1 * r1 - o * o)) : 0;
        const d2 = r2 > 0 ? Math.sqrt(Math.max(0, r2 * r2 - o * o)) : 0;
        return (
          <line
            key={i}
            x1={x1 + nx * d1 + px * o}
            y1={y1 + ny * d1 + py * o}
            x2={x2 - nx * d2 + px * o}
            y2={y2 - ny * d2 + py * o}
            stroke="#ffffff"
            strokeWidth="0.2"
          />
        );
      })}
    </>
  );
}

// Three-segment Z-shape: horizontal → diagonal → horizontal.
// diagF controls the diagonal angle: horizontal-span-per-vertical-unit.
// diagF=1/√3 → 120° interior angle (60° slope); diagF=√3 → 150° (30° slope).
// Bend intersection formula: k1x = bx1 + (f − √(f²+1)) * o  (derived from offset line geometry).
function ZLines({
  x1, y1, bx1, x2, y2, gap = 18, r1 = 0, r2 = 0, diagF = 1 / Math.sqrt(3),
}: {
  x1: number; y1: number; bx1: number;
  x2: number; y2: number; gap?: number; r1?: number; r2?: number; diagF?: number;
}) {
  const dy = Math.abs(y2 - y1);
  const f = diagF;
  const L = Math.sqrt(f * f + 1);
  const bendShift = f - L; // x-shift per offset unit at each bend intersection
  const bx2 = bx1 - dy * f;
  const offsets = [-1.5 * gap, -0.5 * gap, 0.5 * gap, 1.5 * gap];
  return (
    <>
      {offsets.map((o, i) => {
        const d1 = r1 > 0 ? Math.sqrt(Math.max(0, r1*r1 - o*o)) : 0;
        const sx = x1 - d1, sy = y1 - o;
        const d2 = r2 > 0 ? Math.sqrt(Math.max(0, r2*r2 - o*o)) : 0;
        const ex = x2 + d2, ey = y2 - o;
        const k1x = bx1 + bendShift * o, k1y = y1 - o;
        const k2x = bx2 + bendShift * o, k2y = y2 - o;
        return (
          <path key={i}
            d={`M ${sx} ${sy} L ${k1x} ${k1y} L ${k2x} ${k2y} L ${ex} ${ey}`}
            stroke="#ffffff" strokeWidth="0.2" fill="none" />
        );
      })}
    </>
  );
}

// Two-segment lines: diagonal from source to a bend point, then vertical to destination.
// Each parallel line's exact corner is computed as the intersection of its two offset lines.
function BentLines({
  x1, y1, mx, my, x2, y2, gap = 18, r1 = 0, r2 = 0, cr = 28,
}: {
  x1: number; y1: number; mx: number; my: number;
  x2: number; y2: number; gap?: number; r1?: number; r2?: number; cr?: number;
}) {
  const dx1 = mx-x1, dy1 = my-y1, l1 = Math.sqrt(dx1*dx1+dy1*dy1);
  const n1x = dx1/l1, n1y = dy1/l1, p1x = -n1y, p1y = n1x;
  const dx2 = x2-mx, dy2 = y2-my, l2 = Math.sqrt(dx2*dx2+dy2*dy2);
  const n2x = dx2/l2, n2y = dy2/l2, p2x = -n2y, p2y = n2x;
  const denom = n1x*n2y - n1y*n2x;
  const offsets = [-1.5*gap, -0.5*gap, 0.5*gap, 1.5*gap];
  return (
    <>
      {offsets.map((o, i) => {
        const d1 = r1 > 0 ? Math.sqrt(Math.max(0, r1*r1-o*o)) : 0;
        const sx = x1+n1x*d1+p1x*o, sy = y1+n1y*d1+p1y*o;
        const d2 = r2 > 0 ? Math.sqrt(Math.max(0, r2*r2-o*o)) : 0;
        const ex = x2-n2x*d2+p2x*o, ey = y2-n2y*d2+p2y*o;
        // Corner = intersection of the two offset lines at the bend
        const ax = mx+p1x*o, ay = my+p1y*o;
        const bx = mx+p2x*o, by = my+p2y*o;
        let kx, ky;
        if (Math.abs(denom) < 0.001) {
          kx = (ax+bx)/2; ky = (ay+by)/2;
        } else {
          const t = ((bx-ax)*n2y-(by-ay)*n2x)/denom;
          kx = ax+t*n1x; ky = ay+t*n1y;
        }
        // Rounded corner: approach bend, arc through it, then continue
        const b1x = kx - n1x * cr, b1y = ky - n1y * cr;
        const b2x = kx + n2x * cr, b2y = ky + n2y * cr;
        return (
          <path key={i}
            d={`M ${sx} ${sy} L ${b1x} ${b1y} Q ${kx} ${ky} ${b2x} ${b2y} L ${ex} ${ey}`}
            stroke="#ffffff" strokeWidth="0.2" fill="none" />
        );
      })}
    </>
  );
}
