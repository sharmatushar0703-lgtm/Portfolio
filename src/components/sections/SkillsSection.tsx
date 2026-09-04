import React from 'react';
import { Award } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Card3D } from '@/components/ui/Card3D';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-slate-950/50 border-y border-slate-800/80 w-full">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Award className="h-3.5 w-3.5" />
            <span>Competency Galaxy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Core Technical & Analytical Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Engineered domain competencies across high-volume data cleansing, CRM pipelines, executive scorecards, and web dashboard platforms.
          </p>
        </div>

        {/* 4-Card Fluid 3D Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {SKILL_CATEGORIES.map((category) => (
            <Card3D
              key={category.title}
              glowColor={`${category.color}35`}
              className="space-y-4"
            >
              <div className="space-y-4">
                <div
                  className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl flex items-center justify-center font-mono font-extrabold text-sm sm:text-base shadow-lg"
                  style={{ backgroundColor: `${category.color}20`, color: category.color, border: `1px solid ${category.color}40` }}
                >
                  3D
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
