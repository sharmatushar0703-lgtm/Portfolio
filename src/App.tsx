import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { CredentialsSection } from '@/components/sections/CredentialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { PrintResume } from '@/components/print/PrintResume';

export function App() {
  return (
    <>
      {/* Dedicated Clean Executive Resume View for Print Mode */}
      <PrintResume />

      {/* Main 3D Interactive Web Application */}
      <div className="print:hidden min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
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
