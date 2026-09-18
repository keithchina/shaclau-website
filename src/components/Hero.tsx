import Link from 'next/link';

type HeroProps = {
  backgroundImage?: string;
};

export default function Hero({ backgroundImage }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#1B2A38] text-[#F5F2EA]"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(180deg, rgba(27,42,56,0.88), rgba(27,42,56,0.94)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <ContourPattern />

      <div className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36">
        <p className="font-mono text-sm tracking-wide text-[#B08D57]">
          Kitale, Trans-Nzoia County · North Rift &amp; Western Kenya
        </p>

        <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Precision land surveying, structural engineering, and geospatial intelligence
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#F5F2EA]/85">
          Shaclau Enterprise Ltd turns raw terrain and site data into cadastral
          certainty, structural assurance, and maps you can act on for
          county governments, developers, and landowners across Kenya.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-sm bg-[#B08D57] px-6 py-3 font-medium text-[#1B2A38] transition-colors hover:bg-[#c49f68]"
          >
            See completed projects
          </Link>
          <Link
            href="/contact"
            className="rounded-sm border border-[#F5F2EA]/40 px-6 py-3 font-medium text-[#F5F2EA] transition-colors hover:border-[#F5F2EA]"
          >
            Request a survey quote
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContourPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {[60, 110, 160, 210, 260].map((r, i) => (
        <path
          key={r}
          d={`M ${-50 + i * 10} 500 C ${150 + i * 20} ${400 - r}, ${500 - i * 15} ${420 - r}, ${850 - i * 10} ${180 - i * 20}`}
          fill="none"
          stroke="#B08D57"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}