import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Zap } from 'lucide-react';
import type { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-y-auto z-10"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-slate-800 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 font-mono"
              style={{ backgroundColor: `${project.color}20`, color: project.color }}
            >
              {project.category}
            </span>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white pr-8">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {project.tagline}
            </p>

            {/* Metrics Chips */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center"
                >
                  <p className="text-base sm:text-xl font-bold font-mono text-cyan-400">
                    {m.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">
                  Operational Challenge
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                  Engineered Solution
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Key Accomplishments & Architecture
              </h3>
              <div className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Impact */}
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-start gap-3">
              <Zap className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase text-cyan-400 font-mono">
                  Business Impact
                </p>
                <p className="text-xs sm:text-sm text-white font-medium mt-1">
                  {project.impact}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                Technologies & Competencies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
