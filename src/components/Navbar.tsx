import React, { useState } from 'react';
import { Shield, Radio, Sparkles, Facebook, Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  scanlinesEnabled: boolean;
  onToggleScanlines: () => void;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  scanlinesEnabled,
  onToggleScanlines,
  reducedMotion,
  onToggleReducedMotion,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#050706]/85 border-b border-[#00ff66]/15 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white hover:text-[#00ff66] transition-colors whitespace-nowrap shrink-0 group"
        >
          <span className="w-8 h-8 rounded border border-[#00ff66]/40 bg-[#00ff66]/10 flex items-center justify-center text-[#00ff66] group-hover:border-[#00ff66] transition-all">
            <Shield className="w-4 h-4" />
          </span>
          <span className="tracking-wider uppercase font-mono">PROSANTO CHAKMA</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium tracking-wide uppercase font-mono text-neutral-300">
          <a
            href="#about"
            className="hover:text-[#00ff66] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            About Me
          </a>
          <a
            href="#focus-areas"
            className="hover:text-[#00ff66] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Focus Areas
          </a>
          <a
            href="#facebook"
            className="hover:text-[#00ff66] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Facebook Page
          </a>
          <a
            href="#provider"
            className="hover:text-[#00ff66] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Provider Credit
          </a>
        </nav>

        {/* Zone 3: 1 primary action + ambient toggles */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Scanline toggle */}
          <button
            onClick={onToggleScanlines}
            title={scanlinesEnabled ? "Disable CRT Scanlines" : "Enable CRT Scanlines"}
            className={`p-2 rounded border text-xs font-mono transition-all ${
              scanlinesEnabled
                ? 'border-[#00ff66]/40 text-[#00ff66] bg-[#00ff66]/10'
                : 'border-neutral-800 text-neutral-400 hover:text-neutral-200'
            }`}
            aria-label="Toggle Scanlines"
          >
            <Radio className="w-4 h-4" />
          </button>

          {/* Matrix Rain motion toggle */}
          <button
            onClick={onToggleReducedMotion}
            title={reducedMotion ? "Resume Matrix Animation" : "Pause Matrix Animation"}
            className={`p-2 rounded border text-xs font-mono transition-all ${
              !reducedMotion
                ? 'border-[#00ff66]/40 text-[#00ff66] bg-[#00ff66]/10'
                : 'border-neutral-800 text-neutral-400 hover:text-neutral-200'
            }`}
            aria-label="Toggle Matrix Motion"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-[#00ff66] hover:bg-[#22c55e] rounded border border-[#00ff66] transition-all whitespace-nowrap shrink-0 shadow-[0_0_15px_rgba(0,255,102,0.3)] hover:shadow-[0_0_20px_rgba(0,255,102,0.6)] cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white rounded border border-neutral-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#00ff66]/20 bg-[#070b09] px-6 py-4 space-y-3 font-mono text-xs uppercase">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#00ff66] py-1"
          >
            About Me
          </a>
          <a
            href="#focus-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#00ff66] py-1"
          >
            Focus Areas
          </a>
          <a
            href="#facebook"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#00ff66] py-1"
          >
            Facebook Page
          </a>
          <a
            href="#provider"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#00ff66] py-1"
          >
            Provider Credit
          </a>
          
          <div className="pt-3 border-t border-neutral-800 flex items-center justify-between gap-2">
            <button
              onClick={onToggleScanlines}
              className="text-neutral-400 hover:text-[#00ff66] flex items-center gap-1.5 py-1"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Scanlines: {scanlinesEnabled ? 'ON' : 'OFF'}</span>
            </button>
            <button
              onClick={onToggleReducedMotion}
              className="text-neutral-400 hover:text-[#00ff66] flex items-center gap-1.5 py-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Motion: {!reducedMotion ? 'ON' : 'OFF'}</span>
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full text-center mt-2 px-4 py-2.5 text-xs font-mono uppercase font-semibold text-black bg-[#00ff66] rounded"
          >
            Contact Specialist
          </button>
        </div>
      )}
    </header>
  );
};
