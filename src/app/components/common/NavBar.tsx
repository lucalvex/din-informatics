'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NavLink } from '@/types/navigations';

type NavBarProps = {
  navLinks?: NavLink[];
};

export default function Navbar({ navLinks = [] }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hasLinks = navLinks.length > 0;

  return (
    <nav className="bg-primary text-on-primary shadow-md">
      <div
        className="
          container-page
          flex
          items-center
          justify-between
          py-4
        "
      >
        <Link href="/" className="z-50">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-light.png"
              alt="Infortics logo"
              width={120}
              height={45}
              className="h-8 w-auto object-contain"
              priority
            />
            <span className="text-lg font-bold tracking-tight sm:text-xl">
              Infortics
            </span>
          </div>
        </Link>

        {hasLinks && (
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
                    text-sm
                    font-medium
                    transition-colors
                    hover:opacity-80
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {hasLinks && (
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
        )}
      </div>

      {hasLinks && isMenuOpen && (
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
    </nav>
  );
}
