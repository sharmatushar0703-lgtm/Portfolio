import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Printer, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Hero3DScene } from '@/components/canvas/Hero3DScene';
import { Card3D } from '@/components/ui/Card3D';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  const handlePrint = () => {
    if (onOpenResume) {
      onOpenResume();
    } else {
      window.print();
    }
  };

  return (
    <section id="about" className="pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 relative overflow-hidden w-full">
      {/* Dynamic Wide Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] lg:w-[900px] h-[350px] lg:h-[500px] bg-cyan-500/15 blur-[140px] pointer-events-none rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-20 right-1/4 w-[500px] lg:w-[800px] h-[350px] lg:h-[450px] bg-indigo-600/15 blur-[150px] pointer-events-none rounded-full animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold shadow-xs"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Executive Roles • System Executive & Analyst</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.12]"
            >
              Architecting{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Data Intelligence
              </span>{' '}
              & High-Impact Executive Systems
            </motion.h1>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl"
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
                  className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-semibold bg-slate-900/90 text-slate-300 border border-slate-800 font-mono hover:border-cyan-500/30 transition-colors"
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
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore 3D Case Studies</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Contact Directly</span>
              </a>

              <button
                onClick={handlePrint}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-slate-900/90 text-cyan-400 hover:text-white hover:bg-slate-800 border border-cyan-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/10 hover:scale-105 active:scale-95 group"
                title="View & Print ATS-Optimized Professional Resume"
              >
                <FileText className="h-4 w-4 text-cyan-400 group-hover:text-white transition-colors" />
                <span>View & Print Resume</span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  ATS
                </span>
              </button>
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 text-xs text-slate-400"
            >
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <Mail className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <span className="hidden sm:inline">•</span>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <Phone className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </motion.div>
          </div>

          {/* Right Column: Dynamic 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 xl:col-span-5 flex items-center justify-center w-full"
          >
            <div className="w-full aspect-square sm:aspect-[4/3] lg:aspect-square max-w-[560px] rounded-3xl relative border border-cyan-500/20 bg-slate-950/70 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 overflow-hidden group">
              <Hero3DScene />
            </div>
          </motion.div>
        </div>

        {/* 4-Column Fluid 3D Tilt Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 w-full">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card3D glowColor="rgba(56, 189, 248, 0.25)" className="text-center p-4 sm:p-6">
                <p className="text-2xl sm:text-4xl font-extrabold text-white font-mono tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  {stat.label}
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                  {stat.sub}
                </p>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
