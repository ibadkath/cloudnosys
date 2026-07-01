"use client";

import { useState, useRef, useEffect } from "react";
import { ShineBorder } from "./ui/shine-border";
import Link from "next/link";
import Image from "next/image";

const platformLeft = [
  {
    title: "CSPM",
    desc: "Ensure continuous cloud security with proactive posture monitoring and automated remediation.",
  },
  {
    title: "Cloud IQ",
    desc: "Empower your cloud security with AI-driven insights and intelligent recommendations.",
  },
  {
    title: "Attack Path",
    desc: "Visualize and mitigate potential attack paths across your cloud environment before exploitation.",
  },
];

const platformRight = [
  {
    title: "Playbooks",
    desc: "Streamline incident response with automated, customizable security workflows.",
  },
  {
    title: "Compliances",
    desc: "Achieve and maintain compliance across multiple regulatory frameworks with continuous monitoring.",
  },
];

const navLinks = ["Platform", "Solutions", "Pricing", "Resources", "Company"];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string>("Playbooks");
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const [hidden, setHidden] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const platformRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (platformRef.current && navRef.current) {
      const btnRect = platformRef.current.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      setDropdownLeft(btnRect.left - navRect.left);
    }
  }, [openDropdown]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY.current && currentY > 80);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="w-full px-8 flex items-center justify-between h-20" style={{ backgroundColor: "rgba(0, 2, 7, 0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderBottom: "1px solid #ffffff14" }}>

        {/* Logo + Nav Links grouped left */}
        <div className="flex items-center gap-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <CloudLogo />
            {/* <span style={{ fontFamily: '"Archivo", sans-serif', fontWeight: 700, fontSize: 20, color: "#fff", letterSpacing: "0.01em" }}>
              Cloudnosys
            </span> */}
          </Link>

          <div className="flex items-center gap-12">
            {navLinks.map((item) => (
              <button
                key={item}
                ref={item === "Platform" ? platformRef : undefined}
                className="BodyLabel flex items-center gap-1 hover:text-white transition-colors py-4"
                onMouseEnter={() => setOpenDropdown(item === "Platform" ? "Platform" : null)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="BodyLabel flex items-center gap-2 px-4 py-2 hover:text-white transition-colors">
            <LoginIcon />
            Login
          </button>
          <button
            className="StartButton flex items-center justify-center gap-2 lowercase! transition-colors hover:bg-[#1567FF]/10"
            style={{ width: 125, height: 40 }}
          >
            <ShineBorder shineColor="#1567FF" duration={6} />
            <UserIcon />
            Sign Up
          </button>
        </div>

      </div>

      {/* Full-width dropdown — direct child of nav so absolute spans 100% */}
      {openDropdown === "Platform" && (
        <div
          className="absolute left-0 right-0 top-full w-full z-50"
          style={{ backgroundColor: "rgba(7, 9, 15, 0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", height: 300, paddingLeft: dropdownLeft, paddingTop: 36, paddingBottom: 36 }}
        >
            {/* Content left-edge aligned exactly with Platform link */}
            <div>
              <p className="DropdownHeading" style={{ color: "#888", lineHeight: "1.2", marginBottom: 8 }}>
                Explore Platform
              </p>
              <div style={{ width: 40, height: 1, backgroundColor: "#2a3050", marginBottom: 20 }} />

              <div className="flex gap-20">
                {/* Left column */}
                <div className="flex flex-col gap-8" style={{ width: 260 }}>
                  {platformLeft.map((item) => (
                    <button
                      key={item.title}
                      className="text-left"
                      onMouseEnter={() => setActiveItem(item.title)}
                    >
                      <p className="DropdownSubHeading text-white mb-1.5">{item.title}</p>
                      <p className="DropdownPara">{item.desc}</p>
                    </button>
                  ))}
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-5" style={{ width: 260 }}>
                  {platformRight.map((item) => (
                    <button
                      key={item.title}
                      className="text-left relative rounded-lg px-3 py-2 transition-all"
                      style={
                        activeItem === item.title
                          ? { backgroundColor: "#111827", border: "1px solid #1e2d4a" }
                          : { border: "1px solid transparent" }
                      }
                      onMouseEnter={() => setActiveItem(item.title)}
                    >
                      <p className="DropdownSubHeading text-white mb-1.5">{item.title}</p>
                      <p className="DropdownPara">{item.desc}</p>
                      {activeItem === item.title && (
                        <span
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                          style={{ fontSize: 16 }}
                        >
                          ›
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
        </div>
      )}
    </nav>
  );
}


function LoginIcon() {
  return <Image src="/images/icons/login.png" alt="login" width={16} height={16} />;
}

function UserIcon() {
  return <Image src="/images/icons/signup.png" alt="sign up" width={16} height={16} />;
}

function CloudLogo() {
  return <Image src="/images/icons/Home.png" alt="Cloudnosys" width={149} height={37} />;
}
