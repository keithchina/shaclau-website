'use client';

import dynamic from 'next/dynamic';
import ContactForm from '@/components/ContactForm';

// Dynamically import ContactMap with SSR disabled to prevent Leaflet window errors
const ContactMap = dynamic(() => import('@/components/LocationMap'), {
  ssr: false,
  loading: () => (
    <div className="h-96 w-full animate-pulse rounded-sm border border-[#1B2A38]/15 bg-[#FAFAF7] flex items-center justify-center text-xs font-mono uppercase tracking-wider text-[#1B2A38]/50">
      Loading interactive map...
    </div>
  ),
});

const officeCoordinates = '1.0149396439395928,35.00065476779693';
const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${officeCoordinates}`;

const details = [
  {
    label: 'Address',
    value: 'Ambwere Plaza, Kitale\nTrans-Nzoia County, Kenya',
    href: googleMapsDirectionsUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Coverage',
    value: 'Trans-Nzoia, North Rift,\nWestern Kenya & Nationwide',
    href: undefined,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'shaclaultd@gmail.com',
    href: 'mailto:shaclaultd@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+254 759 388 987',
    href: 'tel:+254759388987',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#2B2B28]">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#1B2A38] px-6 py-24 text-[#F5F2EA] sm:py-32 border-b border-[#B08D57]/30">
        <ContourPattern />
        <div className="relative mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
            Get In Touch
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#F5F2EA]/85">
            Reach out for a survey quote, structural consultation, or to
            discuss a project—our team responds within one business day.
          </p>
        </div>
      </section>

      {/* Form + Details */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
              Send a Message
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[#1B2A38]">
              Tell us about your project
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Office details */}
          <div className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
              Our Office
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[#1B2A38]">
              Ambwere Plaza, Kitale
            </h2>

            <div className="mt-6 space-y-3">
              {details.map((item) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-sm border-l-4 border-l-[#3D5C46] bg-[#FAFAF7] p-4 border-y border-r border-y-[#1B2A38]/10 border-r-[#1B2A38]/10 transition-shadow hover:shadow-sm">
                    <span className="mt-0.5 shrink-0 text-[#B08D57]">{item.icon}</span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#1B2A38]/50">
                        {item.label}
                      </p>
                      <p className="mt-1 whitespace-pre-line text-sm font-medium text-[#1B2A38]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8">
              <ContactMap />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContourPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {[60, 110, 160, 210, 260].map((r, i) => (
        <path
          key={r}
          d={`M ${-50 + i * 10} 400 C ${150 + i * 20} ${320 - r}, ${500 - i * 15} ${340 - r}, ${850 - i * 10} ${140 - i * 20}`}
          fill="none"
          stroke="#B08D57"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}