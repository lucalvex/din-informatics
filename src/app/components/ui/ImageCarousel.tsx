'use client';

import { Event } from '@/types/event';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ImageCarouselProps {
  events: Event[];
  onSelect: (event: Event) => void;
}

export function ImageCarousel({ events, onSelect }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = events.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);
  const getIndex = (offset: number) => (current + offset + total) % total;

  const Card = ({ event, isActive }: { event: Event; isActive: boolean }) => (
    <div
      className={`
        w-64 sm:w-72 md:w-80 lg:w-96 flex flex-col items-center bg-white rounded-2xl
        transition-all duration-500 ease-out
        ${isActive ? 'scale-110 border-2 border-primary shadow-xl' : 'scale-95 border border-primary/40 opacity-70'}
      `}
    >
      <div className="p-3">
        <img
          src={event.image}
          alt={event.title}
          className="rounded-xl object-cover w-full h-40 sm:h-48 md:h-52 lg:h-64 transition-transform duration-500 ease-out"
          draggable={false}
        />
      </div>

      <button
        type="button"
        className={`
          mb-4 px-4 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-full transition-colors duration-300 cursor-pointer
          ${isActive ? 'bg-primary text-white' : 'border border-primary text-primary hover:bg-primary hover:text-white'}
        `}
        onClick={() => onSelect(event)}
      >
        Saiba mais
      </button>
    </div>
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4">
      <button
        onClick={prev}
        className="p-2 sm:p-3 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition cursor-pointer"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-hidden">
        {[-1, 0, 1].map((offset) => {
          const event = events[getIndex(offset)];
          const isActive = offset === 0;
          return <Card key={event.id} event={event} isActive={isActive} />;
        })}
      </div>

      <button
        onClick={next}
        className="p-2 sm:p-3 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition cursor-pointer"
        aria-label="Próximo"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
