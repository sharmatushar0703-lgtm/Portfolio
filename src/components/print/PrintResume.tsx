import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  BarChart3,
  CheckCircle2,
  Calendar,
  ExternalLink
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCES,
  PROJECTS,
  SKILL_CATEGORIES,
  EDUCATION,
  CERTIFICATIONS,
} from '@/data/portfolioData';

interface PrintResumeProps {
  mode?: 'print' | 'preview';
  pageNumber?: 1 | 2;
}

export function PrintResume({ mode = 'print', pageNumber }: PrintResumeProps) {
  const parulExp = EXPERIENCES.find((e) => e.company.includes('Parul')) || EXPERIENCES[0];
  const sofconExp = EXPERIENCES.find((e) => e.company.includes('Sofcon')) || EXPERIENCES[1];

  // Reusable Executive Header
  const renderHeader = (page: number) => (
    <header className="border-b-2 border-slate-900 pb-2 mb-2 relative">
      {/* Top Gradient Line for Executive Polish */}
      <div className="h-1.5 w-full bg-gradient-to-r from-sky-600 via-blue-700 to-slate-900 rounded-full mb-2" />

      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-[20px] sm:text-[22px] font-black tracking-tight text-slate-950 uppercase leading-none">
              {PERSONAL_INFO.name}
            </h1>
            <span className="text-[8.5px] font-mono font-bold bg-sky-100 text-sky-900 border border-sky-300 px-1.5 py-0.5 rounded-xs uppercase">
              Executive Profile
            </span>
          </div>
          <p className="text-[10px] font-bold text-sky-800 tracking-wide uppercase mt-0.5">
            {PERSONAL_INFO.headline}
          </p>
        </div>

        <div className="text-right">
          <span className="inline-block text-[8.5px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-300">
            Page {page} of 2
          </span>
          <p className="text-[8px] font-mono text-slate-500 mt-0.5">
            Curriculum Vitae
          </p>
        </div>
      </div>

      {/* Structured Contact Details Grid */}
      <div className="grid grid-cols-5 gap-1.5 pt-1.5 mt-1.5 border-t border-slate-200 text-[9px] text-slate-800">
        <div className="flex items-center gap-1">
          <Phone className="w-3 h-3 text-sky-700 shrink-0" />
          <span className="font-semibold text-slate-900 truncate">{PERSONAL_INFO.phone}</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail className="w-3 h-3 text-sky-700 shrink-0" />
          <span className="font-semibold text-slate-900 truncate">{PERSONAL_INFO.email}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-sky-700 shrink-0" />
          <span className="font-semibold text-slate-900 truncate">Vadodara, Gujarat</span>
        </div>
        <div className="flex items-center gap-1">
          <Linkedin className="w-3 h-3 text-sky-700 shrink-0" />
          <span className="font-semibold text-slate-900 truncate">linkedin.com/in/sharmatushar0703</span>
        </div>
        <div className="flex items-center gap-1">
          <Github className="w-3 h-3 text-sky-700 shrink-0" />
          <span className="font-semibold text-slate-900 truncate">github.com/sharmatushar0703</span>
        </div>
      </div>
    </header>
  );

  // Render Page 1 Content
  const renderPage1 = () => (
    <div className={`resume-page-content ${mode === 'print' ? 'print-page page-1' : ''} flex flex-col justify-start`}>
      {renderHeader(1)}

      {/* 4-Card Executive Metrics Ribbon (High Impact Eye-Catcher) */}
      <div className="grid grid-cols-4 gap-2 mb-2.5 avoid-break">
        <div className="bg-gradient-to-br from-sky-50 to-blue-50/60 p-1.5 rounded border border-sky-200 text-center">
          <span className="block text-[13px] font-black text-sky-900 leading-tight">5+ Years</span>
          <span className="block text-[8px] font-bold text-slate-700 uppercase tracking-wider mt-0.5">Professional Experience</span>
          <span className="block text-[7.5px] text-slate-500 font-mono">Since Sep 2019</span>
        </div>
        <div className="bg-gradient-to-br from-sky-50 to-blue-50/60 p-1.5 rounded border border-sky-200 text-center">
          <span className="block text-[13px] font-black text-sky-900 leading-tight">3+ Years</span>
          <span className="block text-[8px] font-bold text-slate-700 uppercase tracking-wider mt-0.5">Parul University</span>
          <span className="block text-[7.5px] text-slate-500 font-mono">System Executive</span>
        </div>
        <div className="bg-gradient-to-br from-sky-50 to-blue-50/60 p-1.5 rounded border border-sky-200 text-center">
          <span className="block text-[13px] font-black text-sky-900 leading-tight">150K+</span>
          <span className="block text-[8px] font-bold text-slate-700 uppercase tracking-wider mt-0.5">Records Reconciled</span>
          <span className="block text-[7.5px] text-slate-500 font-mono">Zero Discrepancy</span>
        </div>
        <div className="bg-gradient-to-br from-sky-50 to-blue-50/60 p-1.5 rounded border border-sky-200 text-center">
          <span className="block text-[13px] font-black text-sky-900 leading-tight">99.8%</span>
          <span className="block text-[8px] font-bold text-slate-700 uppercase tracking-wider mt-0.5">Reporting Accuracy</span>
          <span className="block text-[7.5px] text-slate-500 font-mono">Audit & SOP Verified</span>
        </div>
      </div>

      {/* Executive Professional Profile */}
      <section className="mb-2.5 avoid-break">
        <div className="flex items-center gap-1.5 border-b border-slate-300 pb-0.5 mb-1">
          <div className="w-1.5 h-3 bg-sky-700 rounded-xs" />
          <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-950">
            Executive Professional Profile
          </h2>
          <span className="text-[8px] font-mono text-slate-500 ml-auto">Operations & Analytics Leadership</span>
        </div>
        <p className="text-[9px] text-slate-800 leading-relaxed text-justify">
          Accomplished <strong>System Executive</strong> with <strong>3+ years at Parul University</strong> and 5+ years of total professional operations background starting in 2019. Proven track record in orchestrating high-volume <strong>CRM ecosystems, operational data analytics, admissions pipelines, and executive MIS architectures</strong>. Specialized in translating multi-source operational data into structured business logic, executive dashboards, and real-time scorecards. Demonstrated mastery in maintaining high-volume data integrity across <strong>150K+ operational records with 99.8% reporting accuracy</strong>, executing automated deduplication mechanisms, eliminating manual spreadsheet bottlenecks, and empowering university leadership with rapid, validated decision intelligence.
        </p>
      </section>

      {/* Core Competencies & Domain Expertise Matrix */}
      <section className="mb-2.5 avoid-break">
        <div className="flex items-center gap-1.5 border-b border-slate-300 pb-0.5 mb-1">
          <div className="w-1.5 h-3 bg-sky-700 rounded-xs" />
          <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-950">
            Core Competencies & Strategic Domain Expertise
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[9px]">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="p-1.5 px-2 rounded bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-0.5 pb-0.5 border-b border-slate-200">
                <span className="font-black text-slate-950 text-[9px] uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                  {category.title}
                </span>
              </div>
              <p className="text-slate-700 leading-snug text-[8.5px]">
                {category.skills.join(' • ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Primary Experience: Parul University */}
      {parulExp && (
        <section className="mb-1.5 avoid-break flex-1">
          <div className="flex items-center gap-1.5 border-b border-slate-300 pb-0.5 mb-1">
            <div className="w-1.5 h-3 bg-sky-700 rounded-xs" />
            <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-950">
              Professional Experience — Current Primary Role
            </h2>
            <span className="text-[8px] font-mono font-bold text-sky-800 ml-auto bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">
              {parulExp.period}
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded bg-slate-50 border border-slate-200">
            <div className="flex justify-between items-baseline mb-0.5">
              <div>
                <h3 className="text-[10.5px] font-black text-slate-950">
                  {parulExp.role}
                </h3>
                <span className="text-[9px] font-bold text-sky-900">
                  {parulExp.company}
                </span>
                <span className="text-[8.5px] text-slate-600"> — {parulExp.location}</span>
              </div>
              <span className="text-[8px] font-mono font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 px-1.5 py-0.5 rounded">
                Active Appointment
              </span>
            </div>

            <p className="text-[8.5px] text-slate-600 italic mb-1.5 border-l-2 border-sky-400 pl-2">
              {parulExp.summary}
            </p>

            <ul className="list-disc list-outside pl-3.5 text-[9px] text-slate-800 space-y-0.5 leading-snug">
              {parulExp.bulletPoints.map((bullet, idx) => {
                const parts = bullet.split(':');
                if (parts.length > 1) {
                  return (
                    <li key={idx} className="text-justify">
                      <strong className="text-slate-950">{parts[0]}:</strong>{parts.slice(1).join(':')}
                    </li>
                  );
                }
                return (
                  <li key={idx} className="text-justify">{bullet}</li>
                );
              })}
            </ul>

            <div className="pt-1.5 mt-1.5 text-[8px] font-mono text-slate-700 border-t border-slate-200 flex items-center justify-between">
              <span>
                <strong className="text-slate-950">Key Technologies: </strong>
                {parulExp.technologies.join(' • ')}
              </span>
              <span className="text-sky-800 font-bold">150K+ Records Reconciled</span>
            </div>
          </div>
        </section>
      )}

      {/* Page 1 Footer */}
      <div className="pt-1.5 mt-auto text-right text-[8px] font-mono text-slate-400 border-t border-slate-200 flex justify-between">
        <span>Tushar Sharma • Executive Curriculum Vitae</span>
        <span>Page 1 of 2</span>
      </div>
    </div>
  );

  // Render Page 2 Content
  const renderPage2 = () => (
    <div className={`resume-page-content ${mode === 'print' ? 'print-page page-2' : ''} flex flex-col justify-start`}>
      {renderHeader(2)}

      {/* Secondary Experience: Sofcon India */}
      {sofconExp && (
        <section className="mb-2.5 avoid-break">
          <div className="flex items-center gap-1.5 border-b border-slate-300 pb-0.5 mb-1">
            <div className="w-1.5 h-3 bg-sky-700 rounded-xs" />
            <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-950">
              Career History — Center Head & Operations Governance
            </h2>
            <span className="text-[8px] font-mono font-bold text-slate-700 ml-auto bg-slate-100 px-1.5 py-0.5 rounded border border-slate-300">
              {sofconExp.period}
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded bg-slate-50 border border-slate-200">
            <div className="flex justify-between items-baseline mb-0.5">
              <div>
                <h3 className="text-[10.5px] font-black text-slate-950">
                  {sofconExp.role}
                </h3>
                <span className="text-[9px] font-bold text-sky-900">
                  {sofconExp.company}
                </span>
                <span className="text-[8.5px] text-slate-600"> — India</span>
              </div>
              <span className="text-[8px] font-mono font-bold bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded">
                National Governance
              </span>
            </div>

            <p className="text-[8.5px] text-slate-600 italic mb-1.5 border-l-2 border-slate-400 pl-2">
              {sofconExp.summary}
            </p>

            <ul className="list-disc list-outside pl-3.5 text-[9px] text-slate-800 space-y-0.5 leading-snug">
              {sofconExp.bulletPoints.map((bullet, idx) => (
                <li key={idx} className="text-justify">{bullet}</li>
              ))}
            </ul>

            <div className="pt-1.5 mt-1.5 text-[8px] font-mono text-slate-700 border-t border-slate-200 flex items-center justify-between">
              <span>
                <strong className="text-slate-950">Core Competencies: </strong>
                {sofconExp.technologies.join(' • ')}
              </span>
              <span className="text-emerald-800 font-bold">100% SOP Audit Cleared</span>
            </div>
          </div>
        </section>
      )}

      {/* Key Project Architectures & Analytics Platforms */}
      <section className="mb-2.5 avoid-break">
        <div className="flex items-center gap-1.5 border-b border-slate-300 pb-0.5 mb-1">
          <div className="w-1.5 h-3 bg-sky-700 rounded-xs" />
          <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-950">
            Key Project Architectures & Analytical Platforms
          </h2>
          <span className="text-[8px] font-mono text-slate-500 ml-auto">Executive Systems</span>
        </div>

        <div className="space-y-1 text-[9px]">
          {PROJECTS.map((proj) => (
            <div key={proj.id} className="p-1.5 px-2 rounded bg-slate-50 border border-slate-200">
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-black text-slate-950 text-[9.5px]">
                  {proj.title}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-[7.5px] font-mono font-bold text-sky-900 bg-sky-100 border border-sky-200 px-1 py-0.2 rounded-xs uppercase">
                    {proj.category}
                  </span>
                </div>
              </div>

              <p className="text-slate-700 text-[8.5px] leading-snug text-justify">
                <strong>Solution: </strong>{proj.tagline} {proj.impact}
              </p>

              <div className="text-[8px] font-mono text-slate-600 mt-0.5 flex justify-between pt-0.5 border-t border-slate-200">
                <span>
                  <strong className="text-slate-950">Metrics: </strong>
                  {proj.metrics.map((m) => `${m.label}: ${m.value}`).join(' • ')}
                </span>
                <span>
                  <strong className="text-slate-950">Stack: </strong>
                  {proj.technologies.slice(0, 4).join(', ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Verified Industry Credentials */}
      <section className="mb-2 avoid-break">
        <div className="flex items-center gap-1.5 border-b border-slate-300 pb-0.5 mb-1">
          <div className="w-1.5 h-3 bg-sky-700 rounded-xs" />
          <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-950">
            Education & Verified Industry Credentials
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-1.5 text-[9px]">
          {/* Education */}
          <div className="p-1.5 px-2 rounded bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-950 uppercase tracking-wider text-[8.5px] mb-1 flex items-center gap-1">
              <GraduationCap className="w-3 h-3 text-sky-700" />
              Academic Degrees
            </h3>
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="mb-1 last:mb-0 pb-0.5 border-b border-slate-200 last:border-b-0">
                <p className="font-bold text-slate-950 text-[9px]">{edu.degree}</p>
                <p className="text-sky-900 text-[8px] font-medium">{edu.institution} ({edu.year})</p>
                <p className="text-slate-600 text-[8px]">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="p-1.5 px-2 rounded bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-950 uppercase tracking-wider text-[8.5px] mb-1 flex items-center gap-1">
              <Award className="w-3 h-3 text-sky-700" />
              Industry Certifications
            </h3>
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} className="mb-1 last:mb-0 pb-0.5 border-b border-slate-200 last:border-b-0">
                <div className="flex justify-between items-baseline">
                  <p className="font-bold text-slate-950 text-[9px]">{cert.title}</p>
                  <span className="text-[7.5px] font-mono font-bold bg-sky-100 text-sky-900 border border-sky-300 px-1 rounded-xs">
                    {cert.badge}
                  </span>
                </div>
                <p className="text-sky-900 text-[8px] font-medium">{cert.issuer}</p>
                <p className="text-slate-600 text-[8px]">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsement & Core Competency Tagline */}
      <div className="p-1.5 rounded bg-gradient-to-r from-slate-100 to-sky-50 border border-slate-300 text-[8.5px] text-slate-800 text-center font-medium avoid-break">
        <strong>Strategic Leadership Focus: </strong> CRM Operations • High-Volume Data Reconciliation • Executive Scorecards • Process Optimization • Cross-Functional Team Governance
      </div>

      {/* Page 2 Footer */}
      <div className="pt-1.5 mt-auto text-right text-[8px] font-mono text-slate-400 border-t border-slate-200 flex justify-between">
        <span>Tushar Sharma • Executive Curriculum Vitae • Verified & ATS-Optimized</span>
        <span>Page 2 of 2</span>
      </div>
    </div>
  );

  // In Preview mode, render either specific page or both
  if (mode === 'preview') {
    if (pageNumber === 1) return renderPage1();
    if (pageNumber === 2) return renderPage2();
    return (
      <div className="space-y-8">
        {renderPage1()}
        {renderPage2()}
      </div>
    );
  }

  // In Print mode, render both pages with strict print classes
  return (
    <div className="bg-white text-slate-900 font-sans w-full max-w-[210mm] mx-auto text-left leading-normal">
      {renderPage1()}
      {renderPage2()}
    </div>
  );
}
export default PrintResume;
