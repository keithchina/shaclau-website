type Testimonial = {
  quote: string;
  author: string;
  role: string;
  organization?: string;
  location: string;
  projectType: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Shaclau Enterprise delivered exceptionally precise boundary set-outs and mutation plans for our housing development. Their RTK GNSS team ensured zero spatial disputes prior to site construction.',
    author: 'Eng. Peter Wafula',
    role: 'Project Lead',
    organization: 'Maili Tatu Housing Project',
    location: 'Trans-Nzoia County',
    projectType: 'Cadastral & Site Set-Out',
  },
  {
    quote:
      'Their topographical survey and pipeline corridor mapping were essential for our water network design. The CAD profile drawings met all county technical criteria on the first submission.',
    author: 'Francis Ochieng',
    role: 'Civil Infrastructure Supervisor',
    location: 'Cherangani, Kenya',
    projectType: 'Topographical & GIS Mapping',
  },
  {
    quote:
      'Guiding our commercial parcel through Land Control Board consents and statutory change-of-use approvals can be complex. Shaclau handled government agency liaison seamlessly from start to finish.',
    author: 'Mary Wanjala',
    role: 'Private Developer',
    location: 'Suam, Trans-Nzoia',
    projectType: 'Land Advisory & Planning',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#1B2A38] py-20 text-[#F5F2EA]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
            Client Feedback
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#F5F2EA]/80">
            Trusted by government bodies, private landowners, and civil engineers across Kenya for precision and statutory compliance.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-sm border border-[#B08D57]/20 bg-[#FAFAF7]/5 p-6 backdrop-blur-sm"
            >
              <div>
                <span className="font-mono text-xs text-[#B08D57] uppercase tracking-wider">
                  {item.projectType}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-[#F5F2EA]/90 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-[#F5F2EA]/10 pt-4">
                <p className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F5F2EA]">
                  {item.author}
                </p>
                <p className="text-xs text-[#F5F2EA]/70">
                  {item.role} {item.organization ? `· ${item.organization}` : ''}
                </p>
                <p className="mt-1 text-[11px] font-mono text-[#B08D57]">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}