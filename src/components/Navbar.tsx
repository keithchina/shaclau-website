'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1B2A38]/10 bg-[#F5F2EA]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[#1B2A38]"
        >
          Shaclau Enterprise Ltd
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-8 sm:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#B08D57]'
                      : 'text-[#2B2B28]/80 hover:text-[#1B2A38]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="h-0.5 w-6 bg-[#1B2A38]" />
          <span className="h-0.5 w-6 bg-[#1B2A38]" />
          <span className="h-0.5 w-6 bg-[#1B2A38]" />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-[#1B2A38]/10 px-6 py-4 sm:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    isActive ? 'text-[#B08D57]' : 'text-[#2B2B28]/80'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}