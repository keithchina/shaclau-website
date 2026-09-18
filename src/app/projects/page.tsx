'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Category = 'Surveying' | 'Survey & GIS' | 'Structural' | 'Land Advisory' | 'Surveying and Structural Engineering' | 'Surveying and Layout Design';

type Project = {
  id: string;
  title: string;
  location: string;
  category: Category;
  client: string;
  timeframe: string;
  challenge: string;
  approach: string;
  outcome: string;
  images: string[];
};

const projects: Project[] = [
  {
    id: 'suam-ahp',
    title: 'Suam Border Post Affordable Housing Programme (AHP)',
    location: 'Maili Tatu, Suam, Trans-Nzoia County',
    category: 'Surveying and Structural Engineering',
    client: 'National Government — Ministry of Lands, Public Works, Housing and Urban Development',
    timeframe: 'Ongoing',
    challenge:
      'Under Kenya\u2019s Affordable Housing Programme (Boma Yangu), the State Department for Housing and Urban Development needed the Suam Border Post site accurately set out on the ground before construction of new housing and related social and physical infrastructure could begin.',
    approach:
      'Our survey team carried out full site set-out using RTK GNSS positioning — placing beacons at boundary corners and building lines, and verifying cut-slope levels with a total station and leveling staff — directly from the architect\u2019s design, so the construction crew could break ground with a reliable reference grid.',
    outcome:
      'Accurate plot and building layouts set out on-site under Contract No. MLPWHUD/SDHUD/AHP/580/2024-2025, allowing phased construction to proceed without costly re-measurement or boundary disputes.',
    images: [
      '/images/projects/affordable-housing/01.jpg',
      '/images/projects/affordable-housing/02.jpg',
      '/images/projects/affordable-housing/03.jpg',
      '/images/projects/affordable-housing/04.jpg',
    ],
  },
  {
    id: 'cherangani-water',
    title: 'Cherangani Water Supply Layout',
    location: 'Cherangani, Trans-Nzoia County',
    category: 'Surveying and Layout Design',
    client: 'Government Client',
    timeframe: 'Done',
    challenge:
      'The County Government needed a redesigned water supply layout connecting the Cherangani source to community storage tanks, replacing an outdated network with a properly surveyed and engineered route.',
    approach:
      'We surveyed and mapped the full pipeline corridor from the river source through to storage — via the Police Station and Old Tank tie-in points through to Makutano Tank — verifying ground levels and gradients along the route, then produced complete CAD layout and pipe profile drawings ready for construction tender.',
    outcome:
      'A fully surveyed and engineered 2.24 km pipeline route (source to tank), with construction-ready layout and profile drawings approved by the County Director for Water Services.',
    images: [
      '/images/projects/water-project/05.jpeg',
      '/images/projects/water-project/02.jpg',
      '/images/projects/water-project/03.jpeg',
      '/images/projects/water-project/06.png',
    ],
  },
  {
    id: 'change-of-use',
    title: 'Change of Use — Suam Modern Market',
    location: 'Suam Modern Market, Trans-Nzoia County',
    category: 'Land Advisory',
    client: 'Private Client',
    timeframe: 'Done',
    challenge:
      'A private landowner needed a parcel\u2019s official land use reclassified in order to proceed with new development plans for the site.',
    approach:
      'We carried out site verification and boundary confirmation using RTK GNSS, secured Land Control Board consent, and liaised directly with the county planning office to guide the application through the statutory change-of-use approval process on the client\u2019s behalf.',
    outcome:
      'Cleared the path for the client\u2019s new development by securing the land use reclassification required to proceed.',
    images: [
      '/images/projects/change-of-use/01.jpg',
      '/images/projects/change-of-use/02.jpg',
      '/images/projects/change-of-use/03.jpg',
      '/images/projects/change-of-use/04.jpg',
    ],
  },
  {
    id: 'topographical-bomet',
    title: 'Topographical Survey & Analysis',
    location: 'Kimondo, Bomet',
    category: 'Survey & GIS',
    client: 'Private Client',
    timeframe: '',
    challenge:
      'Detailed ground data was needed for the site before any engineering design work could begin — the client had no reliable topographic record of the land.',
    approach:
      'Our survey team carried out an RTK topographic survey capturing ground levels, contours, and site features — including boreholes, tree cover, and existing structures — then processed the data into a full contour map and CAD basemap.',
    outcome:
      'Delivered a titled topographic map (Kimondo/Kimondo/BLK14, Parcel 5) at 1:2,500 scale, giving the client\u2019s design team a reliable ground-truth basis for further planning.',
    images: [
      '/images/projects/topographical-bomet/01.jpg',
      '/images/projects/topographical-bomet/02.jpg',
      '/images/projects/topographical-bomet/03.jpg',
      '/images/projects/topographical-bomet/04.jpeg',
    ],
  },
  {
    id: 'setting-out-turkana',
    title: 'Setting Out',
    location: 'Turkana',
    category: 'Survey & GIS',
    client: 'Private Client',
    timeframe: '',
    challenge:
      'A construction project in Turkana required precise staking out of the architectural design on site before building work could begin.',
    approach:
      'Working alongside partner firm Fortune One Solutions Ltd, our survey team used RTK GNSS to stake out the architectural design directly on the ground, translating design drawings into physical reference points for the construction crew.',
    outcome:
      'A fully staked-out site, giving the construction team accurate physical reference points matching the architectural design.',
    images: [
      '/images/projects/setting-out/01.jpg',
      '/images/projects/setting-out/02.jpg',
      '/images/projects/setting-out/03.jpg',
      '/images/projects/setting-out/09.jpg',
      
    ],
  },
  {
    id: 'leveling-amagoro',
    title: 'Leveling',
    location: 'Amagoro School, Trans-Nzoia',
    category: 'Survey & GIS',
    client: 'Private Client',
    timeframe: '',
    challenge:
      'Amagoro School needed ground levels checked and analyzed across the site — particularly around new trenching and earthworks — before construction could proceed safely.',
    approach:
      'Our team carried out a detailed leveling survey using RTK GNSS, verifying ground levels during active excavation and grading, and checking compaction as the site was rolled and prepared for construction.',
    outcome:
      'Verified, accurate level data delivered throughout construction, giving the site team confidence in cut depths, grading, and compaction as work progressed.',
    images: [
      '/images/projects/level-survey/01.jpg',
      '/images/projects/level-survey/02.jpg',
      '/images/projects/level-survey/03.jpg',
      '/images/projects/level-survey/07.jpg',
    ],
  },
];

const categories: ('All' | Category)[] = [
  'All',
  'Surveying',
  'Survey & GIS',
  'Structural',
  'Land Advisory',
  'Surveying and Structural Engineering',
  'Surveying and Layout Design',
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | Category>('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#2B2B28]">
      {/* Hero */}
      <section className="bg-[#1B2A38] px-6 py-24 text-[#F5F2EA] sm:py-32 border-b border-[#B08D57]/30">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
            Our Work
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold sm:text-5xl md:text-6xl">
            Projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#F5F2EA]/85">
            A selection of surveying, GIS, and land advisory work delivered
            for government and private clients across Kenya.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="border-b border-[#1B2A38]/10 bg-[#F5F2EA]">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#1B2A38] text-[#F5F2EA]'
                    : 'bg-[#FAFAF7] text-[#2B2B28]/70 border border-[#1B2A38]/15 hover:border-[#1B2A38]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-20">
          {filtered.map((project, index) => (
            <article
              key={project.id}
              className="grid grid-cols-1 gap-8 border-t border-[#1B2A38]/10 pt-14 first:border-t-0 first:pt-0 lg:grid-cols-12"
            >
              {/* Images */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.images.map((src, i) => (
                    <div
                      key={src}
                      className={`relative overflow-hidden rounded-sm border border-[#1B2A38]/10 bg-white ${
                        project.images.length === 1 ? 'sm:col-span-2 aspect-[4/3]' : 'aspect-square'
                      } ${
                        project.images.length % 2 === 1 && i === 0 ? 'sm:col-span-2 aspect-[16/9]' : ''
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${project.title} — photo ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
                    0{index + 1} · {project.category}
                  </span>
                  {project.timeframe && (
                    <span className="rounded-full border border-[#1B2A38]/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#2B2B28]/60">
                      {project.timeframe}
                    </span>
                  )}
                </div>

                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[#1B2A38] leading-tight">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-[#2B2B28]/70">
                  {project.location} · {project.client}
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#1B2A38]/50 mb-1">
                      Challenge
                    </p>
                    <p className="text-sm leading-relaxed text-[#2B2B28]/85">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#1B2A38]/50 mb-1">
                      Our Approach
                    </p>
                    <p className="text-sm leading-relaxed text-[#2B2B28]/85">
                      {project.approach}
                    </p>
                  </div>
                  <div className="rounded-sm border-l-4 border-l-[#3D5C46] bg-[#FAFAF7] p-4 border-y border-r border-y-[#1B2A38]/10 border-r-[#1B2A38]/10">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#1B2A38]/50 mb-1">
                      Outcome
                    </p>
                    <p className="text-sm leading-relaxed text-[#1B2A38] font-medium">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-[#2B2B28]/60">
            No projects in this category yet.
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[#1B2A38]">
          Have a project in mind?
        </h2>
        <p className="mt-3 text-base text-[#2B2B28]/80 max-w-xl mx-auto">
          Tell us about it and we&apos;ll let you know how we can help —
          from a single boundary survey to a full multi-discipline project.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-[#B08D57] px-6 py-3 font-medium text-[#1B2A38] transition-colors hover:bg-[#c49f68]"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
