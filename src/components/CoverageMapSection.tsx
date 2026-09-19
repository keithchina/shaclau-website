'use client';

import dynamic from 'next/dynamic';

const LocationMap = dynamic(() => import('@/components/LocationMap'), {
  ssr: false,
  loading: () => <div className="h-96 w-full animate-pulse rounded-sm bg-[#1B2A38]/5" />,
});

export default function CoverageMapSection() {
  return (
    <section className="bg-[#F5F2EA] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
          Where We Operate
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[#1B2A38] sm:text-4xl">
          Our headquarters &amp; coverage
        </h2>
        <p className="mt-3 max-w-xl text-[#2B2B28]/80">
          Based at Ambwere Plaza, Kitale serving Trans-Nzoia, the North
          Rift, Western Kenya, and nationwide.
        </p>

        <div className="mt-10">
          <LocationMap />
        </div>
      </div>
    </section>
  );
}