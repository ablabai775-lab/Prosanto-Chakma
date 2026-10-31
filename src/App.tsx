import React, { useState, useEffect } from 'react';
import { MatrixBackground } from './components/MatrixBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FacebookSection } from './components/FacebookSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [scanlinesEnabled, setScanlinesEnabled] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Check user system preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#050706] text-neutral-100 flex flex-col relative selection:bg-[#00ff66]/30 selection:text-[#00ff66]">
      {/* Animated Matrix Rain & Particles Canvas Background */}
      <MatrixBackground
        reducedMotion={reducedMotion}
        scanlinesEnabled={scanlinesEnabled}
      />

      {/* Main Foreground Container */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Top Bar Navigation Contract */}
        <Navbar
          scanlinesEnabled={scanlinesEnabled}
          onToggleScanlines={() => setScanlinesEnabled((prev) => !prev)}
          reducedMotion={reducedMotion}
          onToggleReducedMotion={() => setReducedMotion((prev) => !prev)}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* Hero Section */}
        <main className="flex-grow">
          <HeroSection onOpenContact={() => setContactModalOpen(true)} />
          <AboutSection />
          <FacebookSection />
        </main>

        {/* Footer with Provider Credit */}
        <Footer />
      </div>

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
