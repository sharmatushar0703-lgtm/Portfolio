import React from 'react';
import { Sparkles, BarChart3, Users, PieChart, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Card3D } from '@/components/ui/Card3D';

const categoryIcons: Record<string, React.ReactNode> = {
  'Data Analytics & MIS': <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />,
  'CRM & Operations': <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
  'Reporting & Strategy': <PieChart className="h-5 w-5 sm:h-6 sm:w-6" />,
  'Technology & Tools': <Cpu className="h-5 w-5 sm:h-6 sm:w-6" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative border-t border-slate-800/80 w-full overflow-hidden">
      {/* Dynamic Wide Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-12 sm:space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Expertise Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Core Technical & Analytical Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Engineered domain competencies across high-volume data cleansing, CRM pipelines, executive scorecards, and web dashboard platforms.
          </p>
        </div>

        {/* 4-Card Fluid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {SKILL_CATEGORIES.map((category) => (
            <Card3D
              key={category.title}
              glowColor={`${category.color}35`}
              className="space-y-4"
            >
              <div className="space-y-4">
                <div
                  className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: `${category.color}20`, color: category.color, border: `1px solid ${category.color}40` }}
                >
                  {categoryIcons[category.title] || <Sparkles className="h-5 w-5" />}
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
