'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavLink } from '@/types/navigations';

interface MenuProps {
  navLinks: NavLink[];
  hasLinks?: boolean;
}

export default function Menu({ navLinks, hasLinks = true }: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!hasLinks) return null;

  return (
    <div className="relative flex items-center">
      <ul className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-80"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="z-50 p-2 md:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-expanded={isMenuOpen}
        aria-label="Toggle menu"
      >
        <div className="relative h-6 w-6">
          <span
            className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
              isMenuOpen ? 'top-3 rotate-45' : 'top-1'
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 top-3 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
              isMenuOpen ? 'top-3 -rotate-45' : 'top-5'
            }`}
          />
        </div>
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-sm md:hidden">
          <ul className="flex h-full flex-col items-center justify-center gap-8 text-xl font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-colors hover:opacity-80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
