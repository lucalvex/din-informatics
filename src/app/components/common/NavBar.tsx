'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NavLink } from '@/types/navigations';
import Menu from '../ui/Menu';

type NavBarProps = {
  navLinks?: NavLink[];
};

export default function Navbar({ navLinks = [] }: NavBarProps) {
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

        <Menu navLinks={navLinks} />
      </div>
    </nav>
  );
}
