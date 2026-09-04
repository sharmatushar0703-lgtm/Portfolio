import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#030712] border-t border-slate-900 text-xs text-slate-500 w-full">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-300">{PERSONAL_INFO.name}</span>
          <span>•</span>
          <span className="font-mono">3D Executive Portfolio</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-mono"
        >
          <span>Back to Top</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}
