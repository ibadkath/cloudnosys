import { ShineBorder } from "./ui/shine-border";
import ShinyText from "./ShinyText";

export default function CTASection() {
  const g = 18;

  type Pt = [number, number, number?];

  const LEFT: Pt[] = [
    [  -20, 380],
    [  720, 380,   0.268],
    [  760, 356.9, 0.268],
    [  870, 356.9, 0.4663],
    [ 1059, 131.7, 0.4663],
    [ 1200, 131.7,  0.268],
    [ 1240, 108.6,  0.268],
    [ 1460, 108.6],
  ];

  const RIGHT: Pt[] = [
    [ 1460,  70],
    [  720,  70,   0.268],
    [  680,  93.1, 0.268],
    [  570,  93.1, 0.4663],
    [  381, 318.3, 0.4663],
    [  240, 318.3,  0.268],
    [  200, 341.4,  0.268],
    [  -20, 341.4],
  ];

  const smoothD = (path: Pt[], n: number, smoothAt: Set<number>, r = 30) => {
    const coords = path.map(([x, y, kc], i) =>
      i === 0 || i === path.length - 1
        ? [x, y + n * g] as [number, number]
        : [x + n * g * kc!, y + n * g] as [number, number]
    );

    let d = `M ${coords[0][0]},${coords[0][1]}`;

    for (let i = 1; i < coords.length; i++) {
      const curr = coords[i];
      if (i === coords.length - 1 || !smoothAt.has(i)) {
        d += ` L ${curr[0].toFixed(2)},${curr[1].toFixed(2)}`;
      } else {
        const prev = coords[i - 1];
        const next = coords[i + 1];

        const d1x = curr[0] - prev[0], d1y = curr[1] - prev[1];
        const len1 = Math.sqrt(d1x * d1x + d1y * d1y);
        const d2x = next[0] - curr[0], d2y = next[1] - curr[1];
        const len2 = Math.sqrt(d2x * d2x + d2y * d2y);

        const rr = Math.min(r, len1 / 2, len2 / 2);
        const ax = curr[0] - (d1x / len1) * rr;
        const ay = curr[1] - (d1y / len1) * rr;
        const bx = curr[0] + (d2x / len2) * rr;
        const by = curr[1] + (d2y / len2) * rr;

        d += ` L ${ax.toFixed(2)},${ay.toFixed(2)} Q ${curr[0].toFixed(2)},${curr[1].toFixed(2)} ${bx.toFixed(2)},${by.toFixed(2)}`;
      }
    }
    return d;
  };

  // Index 4 in LEFT = where the long diagonal flattens back to horizontal ("becomes straighter")
  const LEFT_SMOOTH = new Set([3, 4]);

  const colors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff'];

  return (
    <section className="w-full relative flex flex-col items-center justify-center pt-12 pb-28 md:py-28 xl:py-36 2xl:py-44 overflow-hidden">

<svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 450"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {([0, 1, 2, 3] as const).map(n => (
          <g key={n}>
            {/* <path d={smoothD(RIGHT, n)} fill="none" stroke={colors[n]} strokeWidth="0.2" /> */}
            <path d={smoothD(LEFT, n, LEFT_SMOOTH)} fill="none" stroke={colors[n]} strokeWidth="0.2" />
          </g>
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center pb-16">
        <h2 className="HeroHeading text-center" style={{ fontWeight: 300 }}>
          <ShinyText text="Secure Your Cloud" speed={3} /> <br />
          <ShinyText text="Start Free Today" className="font-extralight!" speed={3} />
        </h2>
        <p className="label mt-4 text-center" style={{ color: '#FFFFFF' }}>
          Experience full access to <br className="tb:hidden" />
          Cloudnosys for 14 days.
        </p>
        <button className="StartButton mt-8">
          <ShineBorder shineColor="#1567FF" duration={6} />
          START FREE TRIAL
        </button>
      </div>

    </section>
  );
}
