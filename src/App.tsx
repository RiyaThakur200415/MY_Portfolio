import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIBuild } from './components/WhatIBuild';
import { FeaturedProjects } from './components/FeaturedProjects';
import { TechStack } from './components/TechStack';
import { DsaFundamentals } from './components/DsaFundamentals';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060913] text-[#e2e8f0] selection:bg-cyan-500 selection:text-black flex flex-col font-sans relative overflow-x-hidden">
      {/* Global Ambient Glow Highlights */}
      <div className="fixed top-0 left-1/4 w-[750px] h-[550px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 -right-24 w-[650px] h-[500px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 left-10 w-[600px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[700px] h-[450px] bg-blue-500/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Section */}
        <About />

        {/* What I Build - Capabilities */}
        <WhatIBuild />

        {/* Selected Projects with Search and Category Filtering */}
        <FeaturedProjects />

        {/* Tech Stack */}
        <TechStack />

        {/* DSA & Computer Science Core Fundamentals */}
        <DsaFundamentals />

        {/* Experience & Leadership Journey */}
        <Experience />

        {/* Industry Certifications */}
        <Certifications />

        {/* Final CTA & Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View/Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
