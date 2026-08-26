import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { PROJECTS, type Project } from '@/data/portfolioData';
import { Card3D } from '@/components/ui/Card3D';
import { ProjectModal } from './ProjectModal';
import { cn } from '@/lib/cn';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Platform', 'CRM', 'MIS', 'Analytics'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Layers className="h-3.5 w-3.5" />
            <span>3D Interactive Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Architected Solutions & Data Platforms
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Hover over cards to experience real-time 3D parallax tilt and explore detailed architectural breakdowns.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs font-bold transition-all font-mono whitespace-nowrap',
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <Card3D
              key={project.id}
              glowColor={`${project.color}35`}
              className="space-y-4"
            >
              <div className="space-y-4">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono"
                    style={{ backgroundColor: `${project.color}20`, color: project.color }}
                  >
                    {project.category}
                  </span>
                  <div className="h-2.5 w-2.5 rounded-full animate-ping" style={{ backgroundColor: project.color }} />
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="text-sm sm:text-base font-bold font-mono text-cyan-400">
                        {m.value}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-mono"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
