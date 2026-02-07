'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border-2 rounded-4xl border-primary bg-primary">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center p-4 font-bold text-on-primary gap-3 cursor-pointer"
      >
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />

        <span className="flex-1 text-left">{title}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-2 text-sm text-muted-foreground bg-background rounded-b-4xl ">
          {children}
        </div>
      </div>
    </div>
  );
}
