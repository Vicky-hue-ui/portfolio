import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatusCapsuleMarquee } from './components/StatusCapsuleMarquee';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { SkillsMatrixSection } from './components/SkillsMatrixSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PERSONAL_INFO } from './data/portfolioData';
import { sound } from './utils/sound';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopyEmail = () => {
    sound.playConfirm();
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setIsCopied(true);
      triggerToast(`✓ Copied ${PERSONAL_INFO.email} to clipboard!`);
      
      // Fire celebratory cyber confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#00f0ff', '#0df2c9', '#EA4335', '#ffffff']
        });
      } catch {
        // ignore
      }

      setTimeout(() => setIsCopied(false), 2500);
    }).catch(() => {
      triggerToast(`Email: ${PERSONAL_INFO.email}`);
    });
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#ededf2] selection:bg-[#00f0ff] selection:text-[#08080a] relative overflow-x-hidden font-sans">
      
      {/* Preloader */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Portfolio Layout */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <HeroSection
            onCopyEmail={handleCopyEmail}
            isCopied={isCopied}
          />

          {/* Interactive Marquee Status Strip */}
          <StatusCapsuleMarquee />

          {/* About & Profile Narrative */}
          <AboutSection />

          {/* Projects & GitHub Showcase */}
          <ProjectsSection />

          {/* Experience, Education & Certifications Timeline */}
          <ExperienceEducationSection />

          {/* Technical Skills Matrix */}
          <SkillsMatrixSection />

          {/* Contact Section & Gmail Web Dispatch */}
          <ContactSection
            onCopyEmail={handleCopyEmail}
            isCopied={isCopied}
          />
        </main>

        {/* Editorial Footer */}
        <Footer />

        {/* Toast Alert Feedback */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#13131c] border border-[#00f0ff]/50 text-white font-mono text-xs shadow-2xl glow-cyan animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#0df2c9] animate-pulse" />
            <span>{toastMessage}</span>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;
