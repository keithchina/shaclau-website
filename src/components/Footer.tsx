import Link from 'next/link';

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/shaclaultd/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/shaclaultd',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.89 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.76 4.9 4.9 0 01-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.76-1.15 4.9 4.9 0 01-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 015.44 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 8.54 4.27 8.86 4.27 12s.01 3.46.06 4.51c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.51s-.01-3.46-.06-4.51c-.04-.87-.18-1.34-.3-1.65-.16-.42-.35-.71-.66-1.02a2.76 2.76 0 00-1.02-.66c-.31-.12-.78-.26-1.65-.3-1.05-.05-1.37-.06-4.04-.06zM12 6.87A5.13 5.13 0 1112 17.13 5.13 5.13 0 0112 6.87zm0 1.8a3.33 3.33 0 100 6.66 3.33 3.33 0 000-6.66zm5.34-2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: 'https://x.com/shaclaultd',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.24 2H21l-6.5 7.43L22.15 22H16.1l-4.73-6.2L6.02 22H3.24l6.95-7.95L2.3 2h6.2l4.27 5.67L18.24 2zm-1.06 18h1.53L7.9 3.9H6.26l10.92 16.1z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@shaclaultd',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.6h-3.2v13.68a2.6 2.6 0 11-2.6-2.6c.24 0 .47.03.7.08V10.3a5.8 5.8 0 00-.7-.04A5.85 5.85 0 003.25 16.1 5.85 5.85 0 009.1 21.95a5.85 5.85 0 005.85-5.85V9.4a8.2 8.2 0 004.8 1.54V7.74a4.85 4.85 0 01-3.15-1.92z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B2A38] px-6 py-12 text-[#F5F2EA]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-[family-name:var(--font-space-grotesk)] font-semibold">
            Shaclau Enterprise Ltd
          </p>
          <p className="mt-1 text-xs text-[#F5F2EA]/60">
            Ambwere Plaza, Kitale · Trans-Nzoia County, Kenya
          </p>
        </div>

        <div className="flex gap-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F5F2EA]/20 text-[#F5F2EA]/80 transition-colors hover:border-[#B08D57] hover:text-[#B08D57]"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-[#F5F2EA]/40">
        © {new Date().getFullYear()} Shaclau Enterprise Ltd. All rights reserved.
      </p>
    </footer>
  );
}