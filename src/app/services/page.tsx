import Link from 'next/link';

type Service = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  body: string;
  included: string[];
};

const services: Service[] = [
  {
    id: 'surveying',
    title: 'Land & Topographical Surveying',
    tag: 'Surveying',
    summary: 'Accurate boundaries and terrain data, captured in the field and delivered survey-grade.',
    body: 'We carry out cadastral mapping, RTK topographic surveys, and boundary verification for landowners, developers, and county governments across Kenya. Every survey is grounded in GPS/UTM coordinates captured with Hi-Target RTK GNSS receivers and cross-checked against existing title records, so the result holds up in registration, subdivision, or dispute resolution.',
    included: [
      'Boundary surveys and beacon placement',
      'Cadastral and boundary verification surveys',
      'RTK topographic and site surveys, contour mapping',
      'GPS surveys and mapping',
      'Survey and demarcation of plots',
      'Chainage and profile modeling for roads and pipelines',
      'Cut-and-fill analysis for site earthworks',
    ],
  },
  {
    id: 'gis',
    title: 'Geographic Information Systems (GIS)',
    tag: 'GIS Mapping',
    summary: 'Spatial data turned into maps and models that inform real decisions.',
    body: 'We build custom spatial databases and analysis for transport planning, utility mapping, and terrain modeling — from raw survey and satellite data through to finished cartographic layouts and interactive WebGIS tools. Deliverables range from a single A0 map layout to a full digital elevation model of a project area.',
    included: [
      'Spatial network analysis and transport planning support',
      'Digital elevation modeling (DEM)',
      'GIS mapping and land records management',
      'Custom cartographic layout production (A1/A0 print-ready maps)',
      'Interactive WebGIS for internal or public-facing use',
    ],
  },
  {
    id: 'structural',
    title: 'Structural Engineering',
    tag: 'Structural',
    summary: 'Structural audits and design grounded in site-verified data.',
    body: 'We assess the structural integrity of existing buildings and design reinforced concrete and steel structures for new ones, with site supervision through construction. Our structural work is tied directly to our survey and GIS capability — meaning pipeline and utility mapping data feeds straight into design decisions, rather than being sourced separately.',
    included: [
      'Structural integrity audits for existing buildings',
      'Reinforced concrete and steel structural design',
      'Site supervision through construction',
      'Pipeline profile and utility mapping for infrastructure projects',
    ],
  },
  {
    id: 'advisory',
    title: 'Land Development & Advisory',
    tag: 'Land Advisory',
    summary: 'Guidance through subdivision, title, and land-use compliance.',
    body: 'Subdividing, developing, or formalizing land in Kenya involves survey work, paperwork, and planning approval in roughly equal measure. We advise landowners and developers through all three — from initial subdivision planning through title processing support and physical land-use compliance — so the legal and spatial sides of a project stay aligned.',
    included: [
      'Land subdivision and mutation plans',
      'Title deed processing assistance',
      'County planning approvals',
      'Land Control Board consent',
      'Lease extension and renewal services',
      'Land consolidation and amalgamation',
      'Physical land use planning and compliance review',
      'Liaison with government agencies',
      'Environmental spatial assessment support',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#2B2B28]">
      <section className="bg-[#1B2A38] px-6 py-24 text-[#F5F2EA] sm:py-32 border-b border-[#B08D57]/30">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
            What We Do
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#F5F2EA]/85">
            Four disciplines, one dataset — every survey, model, and design
            we produce for a project draws on the same underlying spatial
            data, so nothing gets re-measured or re-mapped between stages.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 gap-8 border-t border-[#1B2A38]/10 pt-12 first:border-t-0 first:pt-0 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <p className="font-mono text-xs text-[#B08D57] font-medium">
                  0{index + 1} · {service.tag}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[#1B2A38] leading-tight">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-[#2B2B28]/70">
                  {service.summary}
                </p>
              </div>

              <div className="lg:col-span-8">
                <p className="text-base leading-relaxed text-[#2B2B28]/85">
                  {service.body}
                </p>

                <div className="mt-6 rounded-sm border-l-4 border-l-[#3D5C46] bg-[#FAFAF7] p-5 border-y border-r border-y-[#1B2A38]/10 border-r-[#1B2A38]/10">
                  <p className="font-mono text-[10px] uppercase text-[#1B2A38]/60 font-semibold tracking-wider mb-3">
                    What&apos;s Included
                  </p>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#2B2B28]/85">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#B08D57]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[#1B2A38]">
          Not sure which service fits your project?
        </h2>
        <p className="mt-3 text-base text-[#2B2B28]/80 max-w-xl mx-auto">
          Tell us what you&apos;re working on and we&apos;ll point you to the
          right team — or combine disciplines if the project needs more than one.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-sm bg-[#B08D57] px-6 py-3 font-medium text-[#1B2A38] transition-colors hover:bg-[#c49f68]"
          >
            Request a Consultation
          </Link>
          <Link
            href="/projects"
            className="rounded-sm border border-[#1B2A38]/30 px-6 py-3 font-medium text-[#1B2A38] transition-colors hover:border-[#1B2A38]"
          >
            See Completed Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
