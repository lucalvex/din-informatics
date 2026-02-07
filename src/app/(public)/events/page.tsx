'use client';

import Image from 'next/image';
import { Search } from 'lucide-react';
import { ImageCarousel } from '@/app/components/ui/ImageCarousel';
import { events } from '@/app/data/events';
import { useRouter } from 'next/navigation';

export default function EventPage() {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col mb-10">
      <section className="h-full max-h-1/2 flex">
        <div className="flex flex-col p-20 gap-5 bg-primary w-full text-on-primary">
          <h2 className="font-black text-2xl"> Nossos eventos </h2>
          <p className="text-justify">
            Fique por dentro da nossa programação! Aqui você encontra os
            principais eventos, encontros e atividades especiais preparados para
            você. São momentos de aprendizado, troca de experiências e diversão
            que reúnem pessoas com os mesmos interesses.
          </p>
        </div>

        <div className="relative w-full h-full max-w-1/3">
          <Image
            src="/images/logo-din.jpg"
            alt="Logo DIN"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="flex flex-col items-center px-44 gap-6">
        <div className="p-6 flex w-full items-center gap-4">
          <hr className="flex-1 border-t border-primary" />

          <span className="w-1 h-1 rounded-full bg-primary"></span>

          <hr className="flex-1 border-t border-primary" />
        </div>

        <div className="flex items-center gap-4">
          <h2 className="text-4xl font-semibold"> Encontre eventos </h2>
          <Search className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </div>

        <div className="mt-10 w-full flex justify-center min-h-96">
          <ImageCarousel
            events={events}
            onSelect={(event) => router.push(`/events/${event.id}`)}
          />
        </div>
      </section>
    </div>
  );
}
