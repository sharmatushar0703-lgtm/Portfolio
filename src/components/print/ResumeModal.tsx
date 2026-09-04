import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Printer,
  Download,
  Eye,
  FileCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { PrintResume } from './PrintResume';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrint?: () => void;
}

export function ResumeModal({ isOpen, onClose, onPrint }: ResumeModalProps) {
  const [activePage, setActivePage] = useState<'all' | 1 | 2>('all');
  const [zoom, setZoom] = useState<number>(100);
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 screen-only">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: 'spring', duration: 0.35, bounce: 0.12 }}
          className="relative w-full max-w-5xl h-[95vh] sm:h-[92vh] mx-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-3 sm:px-6 py-3 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md z-20">
            {/* Title & Badge */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-black flex items-center justify-center font-black text-xs shadow-md shrink-0">
                CV
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xs sm:text-base font-bold text-white tracking-tight">
                    {PERSONAL_INFO.name} — Executive ATS Resume
                  </h2>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>ATS Verified</span>
                  </span>
                </div>
                <p className="text-[10.5px] text-slate-400 font-mono hidden sm:block">
                  Standard 2-Page Executive Curriculum Vitae • Ready for A4 Print & PDF Export
                </p>
              </div>
            </div>

            {/* Quick Actions & Controls */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Page Filter Tabs (All / Page 1 / Page 2) */}
              <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-[11px] sm:text-xs">
                <button
                  onClick={() => setActivePage('all')}
                  className={`px-2 sm:px-2.5 py-1 rounded-md font-medium transition-colors ${
                    activePage === 'all'
                      ? 'bg-cyan-500 text-black font-bold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Both
                </button>
                <button
                  onClick={() => setActivePage(1)}
                  className={`px-2 sm:px-2.5 py-1 rounded-md font-medium transition-colors ${
                    activePage === 1
                      ? 'bg-cyan-500 text-black font-bold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Page 1
                </button>
                <button
                  onClick={() => setActivePage(2)}
                  className={`px-2 sm:px-2.5 py-1 rounded-md font-medium transition-colors ${
                    activePage === 2
                      ? 'bg-cyan-500 text-black font-bold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Page 2
                </button>
              </div>

              {/* Zoom Controls */}
              <div className="hidden md:flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg border border-slate-700 text-xs text-slate-300">
                <button
                  onClick={() => setZoom((prev) => Math.max(65, prev - 10))}
                  className="p-1 hover:text-white transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-[11px] w-10 text-center font-bold text-cyan-400">{zoom}%</span>
                <button
                  onClick={() => setZoom((prev) => Math.min(140, prev + 10))}
                  className="p-1 hover:text-white transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoom(100)}
                  className={`px-2 py-0.5 rounded font-mono font-bold text-[10px] transition-colors cursor-pointer ${
                    zoom === 100 ? 'bg-cyan-500 text-black' : 'hover:bg-slate-700 text-slate-300'
                  }`}
                  title="100% Readable Size"
                >
                  100%
                </button>
                <button
                  onClick={() => setZoom(80)}
                  className={`px-2 py-0.5 rounded font-mono font-bold text-[10px] transition-colors cursor-pointer ${
                    zoom === 80 ? 'bg-cyan-500 text-black' : 'hover:bg-slate-700 text-slate-300'
                  }`}
                  title="Fit Page to Screen"
                >
                  Fit
                </button>
                <button
                  onClick={() => setZoom(100)}
                  className="p-1 hover:text-cyan-400 text-slate-400 transition-colors ml-0.5 cursor-pointer"
                  title="Reset Zoom to 100%"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>

              {/* Print / Download Button */}
              <button
                onClick={handlePrint}
                className="px-3 sm:px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / Save PDF</span>
                <span className="sm:hidden">Print</span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 bg-slate-800/80 border border-slate-700/60 transition-colors cursor-pointer"
                aria-label="Close modal"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sub-Header Notice Bar */}
          <div className="bg-slate-950/70 border-b border-slate-800/80 px-3 sm:px-6 py-1.5 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>
                💡 <strong>Tip for Best Output:</strong> In your print dialog, select <strong>"Save as PDF"</strong>, Paper: <strong>A4</strong>, and check <strong>"Background graphics"</strong>.
              </span>
            </div>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors ml-auto mt-1 sm:mt-0 font-medium cursor-pointer"
            >
              <Share2 className="w-3 h-3" />
              <span>{copied ? 'Portfolio URL Copied!' : 'Share Portfolio'}</span>
            </button>
          </div>

          {/* Scrollable Document Container */}
          <div className="flex-1 overflow-y-auto bg-slate-950/60 p-3 sm:p-6 flex justify-center">
            <div
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center', transition: 'transform 0.15s ease-out' }}
              className="w-full flex flex-col items-center gap-6 py-2"
            >
              {/* Render Page 1 */}
              {(activePage === 'all' || activePage === 1) && (
                <div className="relative bg-white text-slate-900 rounded-sm shadow-2xl w-full max-w-[210mm] border border-slate-300 transition-shadow hover:shadow-cyan-500/10">
                  <div className="p-5 sm:p-8">
                    <PrintResume mode="preview" pageNumber={1} />
                  </div>
                </div>
              )}

              {/* Render Page 2 */}
              {(activePage === 'all' || activePage === 2) && (
                <div className="relative bg-white text-slate-900 rounded-sm shadow-2xl w-full max-w-[210mm] border border-slate-300 transition-shadow hover:shadow-cyan-500/10">
                  <div className="p-5 sm:p-8">
                    <PrintResume mode="preview" pageNumber={2} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Floating Bar */}
          <div className="px-4 sm:px-6 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-[11px] truncate mr-2">
              Tushar Sharma • System Executive & Operations Analyst
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrint}
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Executive PDF</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
