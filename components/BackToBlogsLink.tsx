'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackToBlogsLink() {
  const router = useRouter();

  return (
    <Link
      href="/"
      className="mb-6 inline-block"
      aria-label="Back to home"
      onClick={(e) => {
        e.preventDefault();
        sessionStorage.setItem("scrollToBlogs", "1");
        router.push("/");
      }}
    >
      <svg width={15} height={17} viewBox="0 0 15 17" fill="none" style={{ display: "block" }}>
        <path d="M10.5 2.5L4 8.5L10.5 14.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
