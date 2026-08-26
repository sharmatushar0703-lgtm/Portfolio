import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';
import { Card3D } from '@/components/ui/Card3D';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Experience & Milestones
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A track record of continuous performance optimization, CRM engineering, and executive reporting governance since 2019.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp) => (
            <Card3D
              key={exp.company}
              glowColor="rgba(16, 185, 129, 0.2)"
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-bold text-white">
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

                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-rose-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5">
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
          ))}
        </div>
      </div>
    </section>
  );
}
