import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from '@/data/portfolioData';

export function PrintResume() {
  return (
    <div className="hidden print:block bg-white text-slate-900 font-sans p-2 max-w-4xl mx-auto text-left leading-normal">
      {/* Header */}
      <header className="border-b-2 border-slate-900 pb-3 mb-4">
        <h1 className="text-2xl font-black uppercase tracking-wider text-slate-950">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-sm font-bold text-slate-700 mt-0.5">
          {PERSONAL_INFO.headline}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-medium mt-2">
          <span>📧 {PERSONAL_INFO.email}</span>
          <span>•</span>
          <span>📞 {PERSONAL_INFO.phone}</span>
          <span>•</span>
          <span>📍 {PERSONAL_INFO.location}</span>
          <span>•</span>
          <span>🌐 github.com/sharmatushar0703</span>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="mb-4">
        <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
          Executive Summary
        </h2>
        <p className="text-[11px] text-slate-700 leading-relaxed text-justify">
          {PERSONAL_INFO.about}
        </p>
      </section>

      {/* Core Competencies Matrix */}
      <section className="mb-4">
        <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
          Core Competencies & Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <strong className="text-slate-900 font-bold">{cat.title}: </strong>
              <span className="text-slate-700">{cat.skills.join(', ')}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-4">
        <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Professional Experience
        </h2>
        <div className="space-y-3">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="page-break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs font-bold text-slate-950">
                  {exp.role} — <span className="font-semibold text-slate-800">{exp.company}</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-600 font-mono">
                  {exp.period} | {exp.location}
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 text-[10.5px] text-slate-700 space-y-1 mt-1 leading-relaxed">
                {exp.bulletPoints.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Case Studies & Technical Architectures */}
      <section className="mb-4 page-break-inside-avoid">
        <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Key Project Architectures & Analytics Platforms
        </h2>
        <div className="space-y-2">
          {PROJECTS.slice(0, 3).map((proj) => (
            <div key={proj.id} className="text-[11px]">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-slate-900">{proj.title}</span>
                <span className="text-[10px] text-slate-500 font-mono font-medium">
                  {proj.technologies.join(' • ')}
                </span>
              </div>
              <p className="text-[10.5px] text-slate-700 mt-0.5 leading-relaxed">
                {proj.description} {proj.impact}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="page-break-inside-avoid">
        <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
          Education & Verified Credentials
        </h2>
        <div className="grid grid-cols-2 gap-4 text-[11px]">
          <div>
            <h3 className="font-bold text-slate-900 mb-1">Academic Education</h3>
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="mb-1">
                <p className="font-semibold text-slate-950">{edu.degree}</p>
                <p className="text-[10px] text-slate-600">{edu.institution} ({edu.year})</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-1">Industry Certifications</h3>
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} className="mb-1">
                <p className="font-semibold text-slate-950">{cert.title}</p>
                <p className="text-[10px] text-slate-600">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
