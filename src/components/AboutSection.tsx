import React, { useState } from 'react';
import { ShieldAlert, Search, Code, Lock, Cpu, Check, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<number | null>(0);

  // Exact 5 minimal information tags from the prompt with authentic focus principles
  const infoTags = [
    {
      title: "Cybersecurity",
      icon: ShieldAlert,
      summary: "Protecting systems, networks, and software applications from evolving digital threats and vulnerabilities.",
    },
    {
      title: "Ethical Security Research",
      icon: Search,
      summary: "Conducting responsible vulnerability analysis and disclosure to enhance digital safety worldwide.",
    },
    {
      title: "Web & App Development",
      icon: Code,
      summary: "Building secure, high-performance, and modern web applications with security-first architecture.",
    },
    {
      title: "Digital Privacy",
      icon: Lock,
      summary: "Safeguarding confidentiality, protecting sensitive data, and upholding privacy rights in digital environments.",
    },
    {
      title: "Technology & Learning",
      icon: Cpu,
      summary: "Continuously mastering modern security tooling, emerging paradigms, and technological advancements.",
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-[#00ff66]/15 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#00ff66] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase font-mono tracking-tight text-white">
            ABOUT ME
          </h2>
          <div className="w-16 h-0.5 bg-[#00ff66] mx-auto mt-3 shadow-[0_0_10px_#00ff66]" />
        </div>

        {/* Central Introduction Card */}
        <div className="relative mb-14 bg-[#080d0b] border border-[#00ff66]/30 rounded-xl p-6 sm:p-10 shadow-[0_0_30px_rgba(0,255,102,0.08)]">
          {/* Subtle Cyber Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00ff66]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00ff66]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00ff66]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00ff66]" />

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00ff66]/80 block">
              Mission & Core Philosophy
            </span>
            <blockquote className="text-lg sm:text-xl text-neutral-200 leading-relaxed font-light italic">
              “Passionate about cybersecurity, digital privacy, ethical security research, and technology. Exploring vulnerabilities responsibly, learning continuously, and helping create a safer digital world.”
            </blockquote>
            <div className="pt-2 text-xs font-mono text-neutral-400">
              — <span className="text-white font-semibold">Prosanto Chakma</span>, Cyber Security Specialist
            </div>
          </div>
        </div>

        {/* Minimal Information Tags & Focus Areas */}
        <div id="focus-areas" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
            <div>
              <h3 className="text-sm sm:text-base font-bold font-mono uppercase tracking-wider text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00ff66]" />
                <span>Specialist Focus Areas</span>
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Authentic technical interests and research domains
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-500">
              5 Core Focus Areas
            </div>
          </div>

          {/* Interactive Tag Pills & Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {infoTags.map((tag, idx) => {
              const Icon = tag.icon;
              const isSelected = selectedTag === idx;
              return (
                <div
                  key={tag.title}
                  onClick={() => setSelectedTag(idx)}
                  className={`p-5 rounded-lg border transition-all cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#0b1410] border-[#00ff66] shadow-[0_0_20px_rgba(0,255,102,0.18)]'
                      : 'bg-[#070b09] border-neutral-800 hover:border-[#00ff66]/40 hover:bg-[#09100d]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2.5 rounded border transition-colors ${
                      isSelected
                        ? 'bg-[#00ff66]/20 border-[#00ff66] text-[#00ff66]'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 group-hover:text-[#00ff66] group-hover:border-[#00ff66]/30'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold font-mono tracking-wide uppercase text-white mb-2 group-hover:text-[#00ff66] transition-colors">
                    {tag.title}
                  </h4>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {tag.summary}
                  </p>

                  {/* Active bottom line indicator */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ff66] shadow-[0_0_8px_#00ff66]" />
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs font-mono text-neutral-500 mt-4">
            Committed to continuous study, defensive security practices, and responsible vulnerability disclosure.
          </p>
        </div>

      </div>
    </section>
  );
};
