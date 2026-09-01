import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';
import { Card3D } from '@/components/ui/Card3D';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative w-full overflow-hidden">
      {/* Background Subtle Shimmer */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-10 sm:space-y-14 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Professional Experience & Milestones
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            A proven trajectory of continuous performance optimization, CRM data engineering, and executive reporting governance since 2019.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 w-full items-start">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card3D
                glowColor="rgba(16, 185, 129, 0.25)"
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-mono">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-cyan-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 pt-1">
                  {exp.bulletPoints.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-slate-800/80">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
