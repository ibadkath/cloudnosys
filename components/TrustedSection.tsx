export default function TrustedSection() {
  return (
    <section className="w-full flex flex-col items-center gap-2 py-8">
      <p className="label">TRUSTED BY</p>
      <div className="overflow-hidden w-235.75">
        <div style={{ display: 'flex', width: 'max-content', animation: 'marquee-left 18s linear infinite' }}>
          <img src="/images/home/clients/logos.png?v=5" alt="Trusted by" className="h-32.5" style={{ display: 'block', marginRight: 80 }} />
          <img src="/images/home/clients/logos.png?v=5" alt="" aria-hidden="true" className="h-32.5" style={{ display: 'block', marginRight: 80 }} />
        </div>
      </div>
    </section>
  );
}
