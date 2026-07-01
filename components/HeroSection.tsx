import HeroVisual from "./HeroVisual";
import { ShineBorder } from "./ui/shine-border";
import { AnimatedGradientText } from "./ui/animated-gradient-text";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] overflow-clip pb-64">
      {/* Top-right background glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: -120,
          right: -150,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(103,151,206,0.25) 0%, rgba(103,151,206,0.08) 40%, transparent 70%)",
          zIndex: 0,
        }}
      />
      <HeroVisual />
      <div className="relative z-10 flex flex-col gap-6 px-10 max-w-155 min-h-[calc(100vh-80px)] justify-center">
        <h1 className="HeroHeading">
          <AnimatedGradientText
            speed={1}
            style={{
              backgroundImage: "linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)",
              backgroundSize: "300% 100%",
            }}
          >
            Simplify Cloud<br />Security Without<br />Compromise
          </AnimatedGradientText>
        </h1>
        <p className="label">
          From compliance to remediation, manage everything with clarity, speed, and control.
        </p>
        <button
          className="StartButton BodyLabel text-white transition-colors mt-2"
          style={{ width: "161px" }}
        >
          <ShineBorder shineColor="#1567FF" duration={6} />
          GET STARTED
        </button>
      </div>
    </section>
  );
}
