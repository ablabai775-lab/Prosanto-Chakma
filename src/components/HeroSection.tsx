import React, { useRef, useState, useEffect } from 'react';
import { Shield, Upload, RefreshCw, Terminal, ExternalLink, ArrowDown, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

const DEFAULT_LOGO = "/src/assets/images/cyber_security_logo_placeholder_1793430982385.jpg";

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [logoSrc, setLogoSrc] = useState<string>(DEFAULT_LOGO);
  const [isCustomLogo, setIsCustomLogo] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Typewriter effect for terminal text
  const [typedText, setTypedText] = useState('');
  const fullText = "INITIALIZING DEFENSE PROTOCOLS // EXPLORING VULNERABILITIES RESPONSIBLY";

  useEffect(() => {
    // Check localStorage for previously uploaded custom logo
    const savedLogo = localStorage.getItem('prosanto_custom_logo');
    if (savedLogo) {
      setLogoSrc(savedLogo);
      setIsCustomLogo(true);
    }
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setLogoSrc(result);
          setIsCustomLogo(true);
          localStorage.setItem('prosanto_custom_logo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetLogo = () => {
    setLogoSrc(DEFAULT_LOGO);
    setIsCustomLogo(false);
    localStorage.removeItem('prosanto_custom_logo');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="top" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Top Logo Placeholder Area */}
        <div className="inline-flex flex-col items-center mb-8 group">
          <div className="relative">
            {/* Outer Glowing Hex/Shield Ring */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-[#00ff66]/50 bg-[#080d0a] p-1.5 shadow-[0_0_25px_rgba(0,255,102,0.25)] group-hover:border-[#00ff66] group-hover:shadow-[0_0_35px_rgba(0,255,102,0.5)] transition-all duration-300 overflow-hidden flex items-center justify-center">
              <img
                src={logoSrc}
                alt="Prosanto Chakma Cyber Security Logo Placeholder"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            {/* Quick Upload Action Overlay */}
            <button
              onClick={() => fileInputRef.current?.click()}
              title="Upload your custom logo / emblem"
              className="absolute -bottom-2 -right-2 p-1.5 bg-[#00ff66] text-black hover:bg-white rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
              aria-label="Upload custom logo"
            >
              <Upload className="w-3.5 h-3.5" />
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
            aria-label="Upload logo file"
          />

          {/* Logo Status / Caption */}
          <div className="mt-2.5 flex items-center gap-2 text-[11px] font-mono text-neutral-400">
            <span>
              {isCustomLogo ? "Custom Logo Active" : "Logo Placeholder (Upload your custom logo anytime)"}
            </span>
            {isCustomLogo && (
              <button
                onClick={handleResetLogo}
                className="text-xs text-neutral-400 hover:text-red-400 underline underline-offset-2 ml-1"
                title="Reset to default logo emblem"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Terminal Line */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#0a110d] border border-[#00ff66]/30 text-xs font-mono text-[#00ff66] mb-6 shadow-[0_0_12px_rgba(0,255,102,0.15)]">
          <Terminal className="w-3.5 h-3.5 text-[#00ff66] shrink-0 animate-pulse" />
          <span className="tracking-wide">
            {typedText}
            <span className="inline-block w-1.5 h-3 bg-[#00ff66] ml-1 animate-pulse align-middle" />
          </span>
        </div>

        {/* Name Prominently Centered */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase font-mono text-white mb-3 glitch-hover cursor-default">
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">PROSANTO</span>{" "}
          <span className="text-[#00ff66] drop-shadow-[0_0_20px_rgba(0,255,102,0.7)]">CHAKMA</span>
        </h1>

        {/* Professional Title Directly Below */}
        <h2 className="text-lg sm:text-2xl font-bold tracking-[0.25em] uppercase font-mono text-[#00ff66] mb-8 neon-text-glow">
          CYBER SECURITY SPECIALIST
        </h2>

        {/* Subtle decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8 max-w-xs mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#00ff66]/40 to-transparent" />
          <div className="w-2 h-2 rotate-45 border border-[#00ff66] bg-[#00ff66]/20" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#00ff66]/40 to-transparent" />
        </div>

        {/* Short Introduction (Exact user brief text) */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mb-10 text-balance">
          “Passionate about cybersecurity, digital privacy, ethical security research, and technology. Exploring vulnerabilities responsibly, learning continuously, and helping create a safer digital world.”
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#facebook"
            className="px-6 py-3 rounded text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-black bg-[#00ff66] hover:bg-[#22c55e] border border-[#00ff66] transition-all shadow-[0_0_20px_rgba(0,255,102,0.35)] hover:shadow-[0_0_30px_rgba(0,255,102,0.6)] flex items-center gap-2 cursor-pointer"
          >
            <span>View Facebook Page</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="#about"
            className="px-6 py-3 rounded text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-neutral-200 hover:text-white bg-[#0a0f0d] hover:bg-[#111915] border border-neutral-700 hover:border-[#00ff66]/60 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Details</span>
            <ArrowDown className="w-4 h-4 text-[#00ff66]" />
          </a>
        </div>

      </div>
    </section>
  );
};
