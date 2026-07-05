import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionCTAProps {
  label: string;
  className?: string;
}

export function SectionCTA({ label, className = '' }: SectionCTAProps) {
  return (
    <div className={`flex justify-center mt-10 ${className}`}>
      <a
        href="#oferta"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 bg-primary/8 hover:bg-primary/15 hover:border-primary/60 rounded-xl px-6 py-3 transition-all duration-200 active:scale-[0.98]"
      >
        {label} <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
