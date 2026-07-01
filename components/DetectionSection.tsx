import Image from "next/image";

export default function DetectionSection() {
  return (
    <div className="w-full flex flex-col items-center pt-32">
      <h2 className="feature-hero-heading">
        <span>Detect More. Respond</span><br />
        Faster. Secure Confidently.
      </h2>
      <p className="label mt-4 text-center" style={{ color: "#888", maxWidth: 500 }}>
        From misconfigurations and malware to known vulnerabilities (CVEs), Cloudnosys scans every layer
        of your cloud infrastructure ensuring nothing slips through the cracks.
      </p>
      <div className="relative mt-10 w-full max-w-3xl">
        <Image
          src="/images/home/detection/detection.png"
          alt="Detect More. Respond Faster. Secure Confidently."
          width={780}
          height={560}
          className="w-full"
        />
        <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-white/88 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white/88 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-linear-to-r from-white/88 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-linear-to-l from-white/88 to-transparent" />
      </div>
    </div>
  );
}
