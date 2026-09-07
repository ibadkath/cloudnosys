import Image from "next/image";

export default function DetectionSection() {
  return (
    <div className="w-full flex flex-col items-center pt-12 md:pt-32 md:px-0">
      <h2 className="HeroHeading text-center max-w-[390px] sm:max-w-[80%] tb:max-w-max" style={{ fontWeight: 500, color: '#060606' }}>
        <span className="font-extralight!">Detect More. Respond</span> <br className="hidden tb:block" />
        Faster. <span className="whitespace-nowrap tb:whitespace-normal">Secure Confidently.</span>
      </h2>
      <p className="label mt-4 text-center" style={{ color: '#060606' }}>
        From misconfigurations and malware to known vulnerabilities (CVEs), Cloudnosys scans every layer<br className="hidden md:inline" /> of your cloud infrastructure ensuring nothing slips through the cracks.
      </p>
      <div className="relative mt-10 w-full max-w-3xl">
        <Image
          src="/images/home/detection/detection.png"
          alt="Detect More. Respond Fas.pnter. Secure Confidently."
          width={780}
          height={560}
          className="w-full"
        />
        <div className="absolute top-0 left-0 right-0 h-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #FFFFFF, rgba(255,255,255,0))' }} />
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none" style={{ background: 'linear-gradient(to top, #FFFFFF, rgba(255,255,255,0))' }} />
        <div className="absolute top-0 bottom-0 left-0 w-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #FFFFFF, rgba(255,255,255,0))' }} />
        <div className="absolute top-0 bottom-0 right-0 w-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #FFFFFF 26.06%, rgba(255,255,255,0) 100%)' }} />
      </div> 
    </div>
  );
}
