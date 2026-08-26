import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Sparkles, FileText, CheckCircle2, Database, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Hero3DScene } from '@/components/canvas/Hero3DScene';
import { Card3D } from '@/components/ui/Card3D';

export function HeroSection() {
  return (
    <section id="about" className="pt-28 sm:pt-36 pb-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Executive Roles • System Executive & Analyst</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
            >
              Architecting{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Data Intelligence
              </span>{' '}
              & High-Impact Executive Systems
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              System Executive with <strong>3+ years at Parul University</strong> and 5+ years overall expertise specializing in CRM operations, admissions data pipelines, MIS scorecards, and high-impact web visualization tools.
            </motion.p>

            {/* Target Roles Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {PERSONAL_INFO.availableFor.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/90 text-slate-300 border border-slate-800 font-mono"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl text-sm font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore 3D Case Studies</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Contact Directly</span>
              </a>

              <button
                onClick={() => window.print()}
                className="px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                <span>Print Resume</span>
              </button>
            </motion.div>

            {/* Direct Contact Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-400"
            >
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <Mail className="h-3.5 w-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span>•</span>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-rose-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="w-full aspect-square max-w-[480px] rounded-3xl relative border border-cyan-500/20 bg-slate-950/60 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 overflow-hidden group">
              <Hero3DScene />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between pointer-events-none">
                <span className="flex items-center gap-1.5 font-mono text-cyan-400">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                  3D Interactive Engine Active
                </span>
                <span>Drag to Rotate</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Column 3D Tilt Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <Card3D key={stat.label} glowColor="rgba(56, 189, 248, 0.2)" className="text-center p-5 sm:p-6">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {stat.sub}
              </p>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
