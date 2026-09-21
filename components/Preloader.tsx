"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setIsExiting(true), 2000);
    const removeTimer = window.setTimeout(() => setIsVisible(false), 2300);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`preloader${isExiting ? " preloader-exiting" : ""}`} aria-label="Loading">
      <div className="preloader-icon" aria-hidden="true">
        <Image src="/images/icons/Home.png" alt="" width={149} height={37} priority />
      </div>
    </div>
  );
}
