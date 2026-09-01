import React from 'react';
import {
  PERSONAL_INFO,
  EXPERIENCES,
  PROJECTS,
  SKILL_CATEGORIES,
  EDUCATION,
  CERTIFICATIONS,
} from '@/data/portfolioData';

export function PrintResume() {
  const parulExp = EXPERIENCES.find((e) => e.company.includes('Parul')) || EXPERIENCES[0];
  const sofconExp = EXPERIENCES.find((e) => e.company.includes('Sofcon')) || EXPERIENCES[1];

  return (
    <div className="hidden print:block bg-white text-slate-900 font-sans w-full max-w-[210mm] mx-auto text-left leading-tight">
      {/* ====================================================================
          PAGE 1: Profile, Competencies & Current Executive Role
          ==================================================================== */}
      <div className="resume-page resume-page-1 flex flex-col justify-start">
        {/* Header Banner */}
        <header className="border-b-2 border-slate-900 pb-2.5 mb-3">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-black uppercase tracking-wider text-slate-950">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-0.5">
                {PERSONAL_INFO.headline}
              </p>
            </div>
            <div className="text-right text-[10px] font-semibold text-slate-600 font-mono">
              <span>Vadodara, Gujarat, India</span>
            </div>
          </div>

          {/* Contact Details Bar with LinkedIn */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 mt-2 border-t border-slate-200 text-[10.5px] text-slate-800 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-950">Phone:</span>
              <span>{PERSONAL_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-950">Email:</span>
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-950">LinkedIn:</span>
              <span>linkedin.com/in/sharmatushar0703</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-950">GitHub:</span>
              <span>github.com/sharmatushar0703</span>
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-3.5 avoid-break">
          <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5 flex items-center justify-between">
            <span>Executive Professional Summary</span>
            <span className="text-[9.5px] font-mono text-slate-600 font-normal">5+ Years Experience</span>
          </h2>
          <p className="text-[10px] text-slate-700 leading-relaxed text-justify">
            Result-driven <strong>System Executive</strong> with 3+ years of specialized experience at <strong>Parul University</strong> and overall professional experience beginning in 2019. Proven track record in overseeing enterprise CRM operations, large-scale admissions workflows, MIS management reporting, and process automation. Expert in managing high-volume data validation (150K+ records with 99.8% reporting accuracy), anomaly detection, deduplication pipelines, and designing executive presentation scorecards for university leadership. Adept at cross-functional coordination, turning raw data into strategic operational intelligence, and eliminating manual spreadsheet redundancies.
          </p>
        </section>

        {/* Core Competencies Matrix */}
        <section className="mb-3.5 avoid-break">
          <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5">
            Core Competencies & Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10px]">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title} className="p-1.5 rounded-sm bg-slate-50 border border-slate-200">
                <p className="font-bold text-slate-950 text-[10px] uppercase tracking-wider mb-0.5">
                  {category.title}
                </p>
                <p className="text-slate-700 leading-normal">
                  {category.skills.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Primary Experience: Parul University */}
        {parulExp && (
          <section className="mb-2 avoid-break flex-1">
            <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5 flex items-center justify-between">
              <span>Professional Experience — Current Primary Role</span>
              <span className="text-[9.5px] font-mono text-slate-600 font-normal">{parulExp.period}</span>
            </h2>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-[11px] font-black text-slate-950">
                  {parulExp.role}
                </h3>
                <span className="text-[10px] font-bold text-slate-700 font-mono">
                  {parulExp.company} — {parulExp.location}
                </span>
              </div>
              <p className="text-[10px] italic text-slate-600 mt-0.5 mb-1.5">
                {parulExp.summary}
              </p>

              <ul className="list-disc list-outside pl-4 text-[10px] text-slate-700 space-y-1 leading-relaxed">
                {parulExp.bulletPoints.map((bullet, idx) => (
                  <li key={idx} className="text-justify">{bullet}</li>
                ))}
              </ul>

              <div className="pt-2 mt-1.5 text-[9.5px] font-mono text-slate-600">
                <strong>Core Tech: </strong>{parulExp.technologies.join(' • ')}
              </div>
            </div>
          </section>
        )}

        {/* Page 1 Footer Note */}
        <div className="pt-2 mt-auto text-right text-[9px] font-mono text-slate-400 border-t border-slate-100">
          Tushar Sharma — Curriculum Vitae (Page 1 of 2)
        </div>
      </div>

      {/* ====================================================================
          PAGE 2: Experience (Sofcon India), Case Studies & Credentials
          ==================================================================== */}
      <div className="resume-page resume-page-2 flex flex-col justify-start pt-2">
        {/* Header Mini Banner for Page 2 */}
        <div className="flex justify-between items-center border-b border-slate-300 pb-1 mb-3">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-950">
            {PERSONAL_INFO.name} — Curriculum Vitae
          </span>
          <span className="text-[9.5px] font-mono text-slate-600">
            {PERSONAL_INFO.email} • {PERSONAL_INFO.phone}
          </span>
        </div>

        {/* Secondary Experience: Sofcon India */}
        {sofconExp && (
          <section className="mb-3.5 avoid-break">
            <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5 flex items-center justify-between">
              <span>Career History — Center Head & MIS Operations</span>
              <span className="text-[9.5px] font-mono text-slate-600 font-normal">{sofconExp.period}</span>
            </h2>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-[11px] font-black text-slate-950">
                  {sofconExp.role}
                </h3>
                <span className="text-[10px] font-bold text-slate-700 font-mono">
                  {sofconExp.company}
                </span>
              </div>
              <p className="text-[10px] italic text-slate-600 mt-0.5 mb-1.5">
                {sofconExp.summary}
              </p>

              <ul className="list-disc list-outside pl-4 text-[10px] text-slate-700 space-y-1 leading-relaxed">
                {sofconExp.bulletPoints.map((bullet, idx) => (
                  <li key={idx} className="text-justify">{bullet}</li>
                ))}
              </ul>

              <div className="pt-1.5 text-[9.5px] font-mono text-slate-600">
                <strong>Core Tech: </strong>{sofconExp.technologies.join(' • ')}
              </div>
            </div>
          </section>
        )}

        {/* Key Project Architectures & Platforms */}
        <section className="mb-3.5 avoid-break">
          <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5">
            Key Project Architectures & Analytical Solutions
          </h2>
          <div className="space-y-2 text-[10px]">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="p-1.5 rounded-sm bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-950 text-[10.5px]">{proj.title}</span>
                  <span className="text-[9px] font-mono font-bold text-slate-700 uppercase">
                    {proj.category}
                  </span>
                </div>
                <p className="text-slate-700 mt-0.5 leading-relaxed text-justify">
                  {proj.tagline} {proj.impact}
                </p>
                <div className="text-[9px] font-mono text-slate-600 mt-1">
                  <strong>Impact: </strong>{proj.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Verified Credentials */}
        <section className="mb-3 avoid-break">
          <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5">
            Education & Verified Certifications
          </h2>
          <div className="grid grid-cols-2 gap-3 text-[10px]">
            {/* Education */}
            <div className="p-1.5 rounded-sm bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-950 uppercase tracking-wider text-[9.5px] mb-1">
                Academic Degrees
              </h3>
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="mb-1.5 last:mb-0">
                  <p className="font-bold text-slate-900">{edu.degree}</p>
                  <p className="text-slate-600 text-[9.5px]">{edu.institution} ({edu.year})</p>
                  <p className="text-slate-500 text-[9px]">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="p-1.5 rounded-sm bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-950 uppercase tracking-wider text-[9.5px] mb-1">
                Industry Certifications
              </h3>
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.title} className="mb-1.5 last:mb-0">
                  <div className="flex justify-between items-baseline">
                    <p className="font-bold text-slate-900">{cert.title}</p>
                    <span className="text-[8.5px] font-mono font-bold bg-slate-200 px-1 rounded-xs">{cert.badge}</span>
                  </div>
                  <p className="text-slate-600 text-[9.5px]">{cert.issuer}</p>
                  <p className="text-slate-500 text-[9px]">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Strengths Banner */}
        <div className="p-2 rounded-sm bg-slate-100 border border-slate-300 text-[9.5px] text-slate-800 text-center font-medium avoid-break">
          <strong>Key Strengths: </strong> Cross-Functional Leadership • Analytical Problem Solving • High-Volume Data Validation • Executive Reporting • Process Automation • Stakeholder Management
        </div>

        {/* Page 2 Footer Note */}
        <div className="pt-2 mt-auto text-right text-[9px] font-mono text-slate-400 border-t border-slate-100">
          Tushar Sharma — Curriculum Vitae (Page 2 of 2)
        </div>
      </div>
    </div>
  );
}
