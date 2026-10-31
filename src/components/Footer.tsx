import React from 'react';
import { Shield, Facebook, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="provider" className="relative border-t border-[#00ff66]/20 bg-[#050706] pt-14 pb-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Provider / Developed By Section */}
        <div className="mb-10 text-center">
          <div className="inline-block p-6 sm:p-8 rounded-xl bg-[#070b09] border border-[#00ff66]/35 shadow-[0_0_20px_rgba(0,255,102,0.1)] relative max-w-xl mx-auto">
            {/* Subtle glow border */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#00ff66] to-transparent" />

            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#00ff66] mb-3">
              PROVIDER / DEVELOPED BY
            </h3>

            <p className="text-lg sm:text-xl font-bold font-mono tracking-wide text-white mb-2">
              Designed & Developed by Prosanto Chakma
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 font-normal">
              Built with passion for technology and digital security.
            </p>

            <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center justify-center gap-2 text-xs font-mono text-neutral-400">
              <span>© {currentYear} Prosanto Chakma</span>
              <span>·</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>

        {/* Bottom Nav / Utility Bar */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2 text-neutral-300">
            <Shield className="w-3.5 h-3.5 text-[#00ff66]" />
            <span>Cyber Security Specialist Portfolio</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/prosantochakma5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ff66] transition-colors flex items-center gap-1.5"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook Page</span>
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-[#00ff66] transition-colors flex items-center gap-1 cursor-pointer"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
