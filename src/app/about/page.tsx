import Image from 'next/image';
import Link from 'next/link';
import OrgChart from '@/components/OrgChart';
import TeamGallery from '@/components/TeamGallery';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#2B2B28]">
      <section className="relative overflow-hidden bg-[#1B2A38] px-6 py-24 text-[#F5F2EA] sm:py-32 border-b border-[#B08D57]/30">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 sm:flex-row sm:items-center">
          <div className="shrink-0">
            <Image
              src="/images/brand/logo.png"
              alt="Shaclau Enterprise Ltd logo"
              width={180}
              height={180}
              className="h-32 w-32 sm:h-44 sm:w-44"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
              Corporate Profile &amp; Mission
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold sm:text-5xl md:text-6xl">
              About Shaclau Enterprise Ltd
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#F5F2EA]/85">
              Shaclau Enterprise Ltd is a multi-disciplinary practice bringing together registered land surveyors, geospatial analysts, structural engineers, and physical planners. We turn complex spatial and structural challenges into clear, actionable, and legally sound outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[#1B2A38] leading-tight">
              Precision grounded in field data and engineering integrity.
            </h2>
            <p className="mt-4 font-mono text-xs text-[#B08D57] font-medium">
              HEADQUARTERED AT AMBWERE PLAZA, KITALE
            </p>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-[#2B2B28]/85 lg:col-span-7">
            <p>
              Founded to bridge the gap between field measurement, spatial analytics, and site construction, Shaclau Enterprise Ltd operates across Trans-Nzoia, the North Rift, Western Region, and nationwide. Every survey, model, and structural plan we produce draws from unified spatial datasets eliminating costly discrepancies between planning and execution.
            </p>
            <p>
              Whether establishing cadastral boundaries, designing reinforced concrete structures, modeling pipeline alignments, or guiding complex land subdivisions, our team delivers results that withstand legal scrutiny, structural audits, and time.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-sm border-l-4 border-l-[#3D5C46] bg-[#FAFAF7] p-6 shadow-sm border-y border-r border-y-[#1B2A38]/10 border-r-[#1B2A38]/10">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[#1B2A38]">
              Survey-Grade Accuracy
            </h3>
            <p className="mt-2 text-xs text-[#2B2B28]/80 leading-relaxed">
              Utilizing Hi-Target RTK GNSS receivers, total stations, and UAV photogrammetry to capture ground reality with absolute coordinate precision.
            </p>
          </div>

          <div className="rounded-sm border-l-4 border-l-[#3D5C46] bg-[#FAFAF7] p-6 shadow-sm border-y border-r border-y-[#1B2A38]/10 border-r-[#1B2A38]/10">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[#1B2A38]">
              Cross-Disciplinary Integration
            </h3>
            <p className="mt-2 text-xs text-[#2B2B28]/80 leading-relaxed">
              Integrating GIS mapping directly into structural engineering workflows so utility and terrain models inform structural decisions seamlessly.
            </p>
          </div>

          <div className="rounded-sm border-l-4 border-l-[#B08D57] bg-[#FAFAF7] p-6 shadow-sm border-y border-r border-y-[#1B2A38]/10 border-r-[#1B2A38]/10">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[#1B2A38]">
              Statutory Compliance
            </h3>
            <p className="mt-2 text-xs text-[#2B2B28]/80 leading-relaxed">
              Full alignment with national land regulations, physical planning frameworks, title processing requirements, and structural safety codes.
            </p>
          </div>
        </div>
      </section>

      <OrgChart />
      <TeamGallery />

      <section className="bg-[#1B2A38] text-[#F5F2EA] py-20 px-6 border-t border-[#B08D57]/30">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
                Software &amp; Equipment Ecosystem
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold">
                Technical Software &amp; Field Hardware
              </h2>
            </div>
            <p className="text-xs font-mono text-[#F5F2EA]/70">
              INDUSTRY-STANDARD COMPUTATIONAL &amp; SURVEY SUITE
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 font-mono text-xs">
            <div className="rounded-sm bg-[#FAFAF7]/5 p-4 border border-[#F5F2EA]/10">
              <span className="block text-[#B08D57] font-semibold">ArcGIS Pro &amp; QGIS</span>
              <span className="text-[#F5F2EA]/70 mt-1 block">Spatial Analytics &amp; WebGIS</span>
            </div>
            <div className="rounded-sm bg-[#FAFAF7]/5 p-4 border border-[#F5F2EA]/10">
              <span className="block text-[#B08D57] font-semibold">Autodesk Civil 3D</span>
              <span className="text-[#F5F2EA]/70 mt-1 block">Terrain &amp; Profile Modeling</span>
            </div>
            <div className="rounded-sm bg-[#FAFAF7]/5 p-4 border border-[#F5F2EA]/10">
              <span className="block text-[#B08D57] font-semibold">RTK GNSS &amp; Total Stations</span>
              <span className="text-[#F5F2EA]/70 mt-1 block">Hi-Target Field Data Collection</span>
            </div>
            <div className="rounded-sm bg-[#FAFAF7]/5 p-4 border border-[#F5F2EA]/10">
              <span className="block text-[#B08D57] font-semibold">Structural Auditing</span>
              <span className="text-[#F5F2EA]/70 mt-1 block">Concrete Integrity &amp; Steel Analysis</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[#1B2A38]">
          Ready to discuss your project requirements?
        </h2>
        <p className="mt-3 text-base text-[#2B2B28]/80 max-w-xl mx-auto">
          Visit our main office at Ambwere Plaza, Kitale, or request a preliminary consultation with our engineering and surveying team online.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-sm bg-[#B08D57] px-6 py-3 font-medium text-[#1B2A38] transition-colors hover:bg-[#c49f68]"
          >
            Contact Our Kitale Office
          </Link>
          <Link
            href="/services"
            className="rounded-sm border border-[#1B2A38]/30 px-6 py-3 font-medium text-[#1B2A38] transition-colors hover:border-[#1B2A38]"
          >
            View Our Services
          </Link>
        </div>
      </section>
    </main>
  );
}