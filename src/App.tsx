import React, { useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { CredentialsSection } from '@/components/sections/CredentialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { PrintResume } from '@/components/print/PrintResume';
import { ResumeModal } from '@/components/print/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      {/* Dedicated Clean Executive Resume View for Browser Print Mode */}
      <div id="print-resume-root" className="hidden print:block">
        <PrintResume mode="print" />
      </div>

      {/* Interactive Executive Resume Modal for On-Screen Review */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onPrint={() => window.print()}
      />

      {/* Main 3D Interactive Web Application */}
      <div className="print:hidden min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        <main>
          <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <CredentialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
