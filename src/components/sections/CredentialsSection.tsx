import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '@/data/portfolioData';
import { Card3D } from '@/components/ui/Card3D';

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-20 sm:py-28 relative w-full">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Academic Background & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">
              <GraduationCap className="h-4 w-4" />
              <span>Academic Degrees</span>
            </div>

            {EDUCATION.map((edu) => (
              <Card3D key={edu.degree} glowColor="rgba(56, 189, 248, 0.25)" className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-bold text-cyan-400 font-mono shrink-0">
                    {edu.year}
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-300">
                  {edu.institution} • {edu.location}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </Card3D>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">
              <Award className="h-4 w-4" />
              <span>Professional Certifications</span>
            </div>

            {CERTIFICATIONS.map((cert) => (
              <Card3D key={cert.title} glowColor="rgba(16, 185, 129, 0.25)" className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {cert.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-mono shrink-0 w-fit">
                    {cert.badge}
                  </span>
                </div>
                <p className="text-xs font-semibold text-emerald-400">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </Card3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
