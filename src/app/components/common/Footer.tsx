import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div
        className="
          container-page
          flex
          flex-col
          items-center
          justify-between
          gap-4
          py-4
          sm:flex-row
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

        <span className="text-sm text-center sm:text-right">
          feito com ♡ por DIN Infortics
        </span>
      </div>
    </footer>
  );
}
