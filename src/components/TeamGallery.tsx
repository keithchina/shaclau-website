import Image from 'next/image';

type TeamMember = {
  name: string;
  title: string;
  image?: string;
  portfolio?: string;
};

const team: TeamMember[] = [
  { name: 'Clause Jesijeri', title: 'Head of GIS & Spatial Intelligence', image: '/images/team/clause.jpeg' },
  { name: 'Daniel Wabwire', title: 'Head of Town Planning & Advisory', image: '/images/team/daniel.jpeg' },
  { name: 'Collins Simiyu', title: 'Head Structural Engineering' },
  { name: 'Brian Lihanda', title: 'Surveyor', image: '/images/team/brian.jpeg' },
  { name: 'David Emuria', title: 'Surveyor', image: '/images/team/david.jpeg' },
  { name: 'Derrick Adika', title: 'Surveyor', image: '/images/team/derro.jpeg' },
  { name: 'Diophilas Wafula', title: 'Surveyor', image: '/images/team/wafula.jpeg' },
  { name: 'Faith Iminza', title: 'Geospatial Analyst', image: '/images/team/faith.jpeg' },
  { name: 'Herbert Wafula', title: 'Surveyor', image: '/images/team/herbert.jpeg' },
  { name: 'Humphery Kiliswa', title: 'Surveyor', image: '/images/team/hump.jpeg' },
  { name: 'Janipher Shango', title: 'Geospatial Analyst', image: '/images/team/shango.jpeg' },
  { 
    name: 'Keith China', 
    title: 'Geospatial Analyst', 
    image: '/images/team/keith.png',
    portfolio: 'https://china-keith-portfolio-j2gj.vercel.app/'
  },
  { name: 'Newton Saisi', title: 'Surveyor', image: '/images/team/newton.jpeg' },
  { name: 'Pamela Atieno', title: 'Surveyor', image: '/images/team/pamela.jpeg' },
  { name: 'Robert Wanyonyi', title: 'Surveyor', image: '/images/team/gen.jpeg' },
  { name: 'Sharlin Mmboga', title: 'Surveyor' }, 
];

export default function TeamGallery() {
  return (
    <section className="bg-[#FAFAF7] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
          Meet the Team
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[#1B2A38] sm:text-4xl">
          The people behind the work
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-full border-2 border-[#B08D57]/30 bg-[#1B2A38]/5">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[#1B2A38]/30">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <p className="mt-4 font-[family-name:var(--font-space-grotesk)] font-semibold text-[#1B2A38]">
                {member.portfolio ? (
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#B08D57] underline decoration-[#B08D57]/50 underline-offset-4"
                  >
                    {member.name}
                  </a>
                ) : (
                  member.name
                )}
              </p>
              <p className="mt-1 text-xs text-[#2B2B28]/70">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}