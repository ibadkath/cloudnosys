"use client";

import { useState, useRef, useEffect } from "react";
import { ShineBorder } from "./ui/shine-border";
import { subscribeToLenisScroll } from "./SmoothScroll";
import Link from "next/link";
import Image from "next/image";

const platformLeft = [
  { title: "CSPM", desc: "Ensure continuous cloud security with proactive posture monitoring and automated remediation." },
  { title: "Cloud IQ", desc: "Empower your cloud security with AI-driven insights and intelligent recommendations." },
  { title: "Attack Path", desc: "Visualize and mitigate potential attack paths across your cloud environment before exploitation." },
];

const platformRight = [
  { title: "Playbooks", desc: "Streamline incident response with automated, customizable security workflows." },
  { title: "Compliances", desc: "Achieve and maintain compliance across multiple regulatory frameworks with continuous monitoring." },
];

const navLinks = ["Platform", "Solutions", "Pricing", "Resources", "Company"];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string>("Playbooks");
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const platformRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (platformRef.current && navRef.current) {
      const btnRect = platformRef.current.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      setDropdownLeft(btnRect.left - navRect.left);
    }
  }, [openDropdown]);

  useEffect(() => {
    const unsubscribe = subscribeToLenisScroll(({ direction, scroll }) => {
      if (scroll <= 10 || direction < 0) {
        setIsHidden(false);
      } else if (direction > 0) {
        setIsHidden(true);
      }

    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="h-16 md:h-20" aria-hidden="true" />
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#000207]/55 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-transform duration-300 ease-out ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
        onMouseLeave={() => setOpenDropdown(null)}
      >
      <div className="w-full px-4 md:pl-16 md:pr-16 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <CloudLogo />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((item) => (
            <button
              key={item}
              ref={item === "Platform" ? platformRef : undefined}
              className="BodyLabel flex items-center gap-1 hover:text-white transition-colors py-4"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button className="BodyLabel flex items-center gap-2 px-4 py-2 hover:text-white transition-colors">
            <LoginIcon />
            Login
          </button>
          <button
            className="StartButton flex items-center justify-center gap-2 transition-colors hover:bg-[#1567FF]/10"
            style={{ width: 125, height: 40, textTransform: 'none' }}
          >
            <ShineBorder shineColor="#1567FF" duration={6} />
            <UserIcon />
            Sign Up
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white transition-all" style={{ transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
          <span className="block w-6 h-0.5 bg-white transition-all" style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-white transition-all" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col px-6 py-6 gap-4" style={{ backgroundColor: "#000207", borderTop: "1px solid #ffffff14" }}>
          {navLinks.map((item) => (
            <button key={item} className="BodyLabel text-left py-2 hover:text-white transition-colors">
              {item}
            </button>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <button className="BodyLabel flex items-center gap-2 py-2 hover:text-white transition-colors">
              <LoginIcon />
              Login
            </button>
            <button
              className="StartButton flex items-center justify-center gap-2 transition-colors"
              style={{ width: '100%', height: 44, textTransform: 'none' }}
            >
              <ShineBorder shineColor="#1567FF" duration={6} />
              <UserIcon />
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Desktop dropdown */}
      {openDropdown === "Platform" && (
        <div
          className="hidden md:block absolute left-0 right-0 top-full w-full z-50"
          style={{ background: "linear-gradient(292.92deg, rgba(94,94,94,0.14) 34.36%, rgba(94,94,94,0.07) 102.73%)", backdropFilter: "blur(112.2px)", WebkitBackdropFilter: "blur(112.2px)", boxShadow: "0px 15px 27.4px 0px #00000024", height: 300, paddingLeft: dropdownLeft, paddingTop: 36, paddingBottom: 36 }}
        >
          <div>
            <p className="DropdownHeading" style={{ color: "#888", lineHeight: "1.2", marginBottom: 8 }}>Explore Platform</p>
            <div style={{ width: 40, height: 1, backgroundColor: "#2a3050", marginBottom: 20 }} />
            <div className="flex gap-20">
              <div className="flex flex-col gap-8" style={{ width: 260 }}>
                {platformLeft.map((item) => (
                  <button key={item.title} className="text-left" onMouseEnter={() => setActiveItem(item.title)}>
                    <p className="DropdownSubHeading text-white mb-1.5">{item.title}</p>
                    <p className="DropdownPara">{item.desc}</p>
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-5" style={{ width: 260 }}>
                {platformRight.map((item) => (
                  <button
                    key={item.title}
                    className="text-left relative rounded-lg px-3 py-2 transition-all"
                    style={activeItem === item.title ? { backgroundColor: "#111827", border: "1px solid #1e2d4a" } : { border: "1px solid transparent" }}
                    onMouseEnter={() => setActiveItem(item.title)}
                  >
                    <p className="DropdownSubHeading text-white mb-1.5">{item.title}</p>
                    <p className="DropdownPara">{item.desc}</p>
                    {activeItem === item.title && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white" style={{ fontSize: 16 }}>›</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      </nav>
    </>
  );
}

function LoginIcon() { return <Image src="/images/icons/login.png" alt="login" width={16} height={16} />; }
function UserIcon() { return <Image src="/images/icons/signup.png" alt="sign up" width={16} height={16} />; }
function CloudLogo() {
  return (
    <>
      <Image src="/images/icons/Home.png" alt="Cloudnosys" width={110} height={27} loading="eager" style={{ width: "auto", height: "auto" }} className="md:hidden" />
      <Image src="/images/icons/Home.png" alt="Cloudnosys" width={149} height={37} loading="eager" style={{ width: "auto", height: "auto" }} className="hidden md:block" />
    </>
  );
}
