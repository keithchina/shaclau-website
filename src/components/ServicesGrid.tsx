import Link from 'next/link';

type Pillar = {
  title: string;
  description: string;
  href: string;
};

const pillars: Pillar[] = [
  {
    title: 'Land & Topographical Surveying',
    description: 'Cadastral mapping, RTK topo surveys, boundary verification, and cut-and-fill analysis.',
    href: '/services#surveying',
  },
  {
    title: 'GIS & Spatial Analytics',
    description: 'Spatial network analysis, terrain modeling, and custom WebGIS mapping tools.',
    href: '/services#gis',
  },
  {
    title: 'Structural Engineering',
    description: 'Structural integrity audits, reinforced concrete/steel design, and site supervision.',
    href: '/services#structural',
  },
  {
    title: 'Land Administration & Advisory',
    description: 'Subdivisions, title processing assistance, and land use compliance.',
    href: '/services#advisory',
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#F5F2EA] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
          Core Capabilities
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[#1B2A38] sm:text-4xl">
          What we deliver
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group flex flex-col rounded-sm border-l-4 border-l-[#3D5C46] bg-[#FAFAF7] p-6 shadow-sm border-y border-r border-y-[#1B2A38]/10 border-r-[#1B2A38]/10 transition-shadow hover:shadow-md"
            >
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[#1B2A38]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-[#2B2B28]/80 leading-relaxed">
                {pillar.description}
              </p>
              <span className="mt-4 text-sm font-medium text-[#B08D57] group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}