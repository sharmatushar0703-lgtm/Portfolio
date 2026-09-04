import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Download } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Case Studies', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills Galaxy', href: '#skills' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-2xl border-b border-slate-800/80 transition-all screen-only">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 text-black font-black text-xs sm:text-sm flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            TS
          </div>
          <div>
            <span className="font-extrabold text-sm sm:text-base text-white tracking-tight block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[9px] sm:text-[10px] text-cyan-400 font-mono uppercase tracking-widest block -mt-0.5">
              Executive Analytics & Systems
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-full border border-slate-800 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Executive Resume Modal Trigger */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold bg-slate-900/90 text-cyan-400 hover:text-white hover:bg-slate-800 border border-cyan-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              title="Download Executive ATS Resume"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume</span>
            </button>
          )}

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Connect</span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 sm:px-6 py-4 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-cyan-400 block transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-2">
              {onOpenResume && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-slate-900 text-cyan-400 border border-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </button>
              )}

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 text-center text-xs font-black rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-md block"
              >
                Connect Directly
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
