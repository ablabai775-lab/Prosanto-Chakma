import React, { useState } from 'react';
import { Facebook, ExternalLink, ShieldCheck, AlertCircle, RefreshCw, Send, Eye } from 'lucide-react';

export const FacebookSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'embed' | 'card'>('embed');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const facebookPageUrl = "https://www.facebook.com/prosantochakma5";
  const messengerUrl = "https://m.me/prosantochakma5";
  const encodedUrl = encodeURIComponent(facebookPageUrl);
  
  // Official Facebook Page Plugin URL
  const fbPluginUrl = `https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <section id="facebook" className="py-20 border-t border-[#00ff66]/15 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#00ff66] mb-2">
            <Facebook className="w-3.5 h-3.5 text-[#00ff66]" />
            <span>Social Presence & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase font-mono tracking-tight text-white">
            OUR FACEBOOK PAGE
          </h2>
          <div className="w-16 h-0.5 bg-[#00ff66] mx-auto mt-3 shadow-[0_0_10px_#00ff66]" />
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto mt-3">
            Connect with Prosanto Chakma on Facebook for announcements, cybersecurity updates, and direct inquiries.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="inline-flex p-1 bg-[#090e0b] border border-[#00ff66]/30 rounded-lg">
            <button
              onClick={() => setActiveTab('embed')}
              className={`px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'embed'
                  ? 'bg-[#00ff66] text-black font-semibold shadow-[0_0_12px_rgba(0,255,102,0.4)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Official Live Embed</span>
            </button>
            <button
              onClick={() => setActiveTab('card')}
              className={`px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'card'
                  ? 'bg-[#00ff66] text-black font-semibold shadow-[0_0_12px_rgba(0,255,102,0.4)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Preview Card</span>
            </button>
          </div>
        </div>

        {/* Cyber Outer Frame */}
        <div className="bg-[#070c09] border border-[#00ff66]/30 rounded-xl p-4 sm:p-8 relative shadow-[0_0_35px_rgba(0,255,102,0.1)]">
          
          {/* Header Bar within container */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1877F2]/10 border border-[#1877F2]/40 flex items-center justify-center text-[#1877F2]">
                <Facebook className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-bold font-mono text-white">
                    Prosanto Chakma
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/30">
                    Official Page
                  </span>
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  facebook.com/prosantochakma5
                </div>
              </div>
            </div>

            {/* Direct Open Button */}
            <a
              href={facebookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded text-xs font-mono uppercase font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-[#00ff66]/40 hover:border-[#00ff66] transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer"
            >
              <span>Visit Page</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00ff66]" />
            </a>
          </div>

          {/* Embedded View vs Fallback Card */}
          {activeTab === 'embed' ? (
            <div className="flex flex-col items-center">
              
              {/* Privacy warning / Fallback note for iframe blockers */}
              <div className="w-full max-w-lg mb-4 p-3 rounded bg-[#0b140f] border border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-200 font-medium">Official Facebook Page Plugin</span>
                  <p className="mt-0.5 text-neutral-400">
                    If your browser or privacy extension blocks third-party social widgets, use the "Verified Preview Card" tab or click "Visit Page" to open directly.
                  </p>
                </div>
              </div>

              {/* Official Facebook Page Plugin IFrame */}
              <div className="w-full max-w-[500px] min-h-[500px] rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden flex items-center justify-center relative shadow-inner">
                {!iframeLoaded && !iframeError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070b09] text-xs font-mono text-neutral-400 p-6 space-y-3">
                    <RefreshCw className="w-6 h-6 text-[#00ff66] animate-spin" />
                    <span>Connecting to Facebook Page Plugin...</span>
                  </div>
                )}

                <iframe
                  title="Prosanto Chakma Facebook Page"
                  src={fbPluginUrl}
                  width="500"
                  height="500"
                  style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  onLoad={() => setIframeLoaded(true)}
                  onError={() => setIframeError(true)}
                  className="w-full"
                />
              </div>

              <div className="mt-4 text-center">
                <a
                  href={facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00ff66] hover:underline"
                >
                  <span>Open directly in Facebook app / browser</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ) : (
            /* Fallback & Verified Preview Card */
            <div className="max-w-xl mx-auto py-6">
              <div className="bg-[#09120d] border border-[#00ff66]/40 rounded-xl p-6 sm:p-8 shadow-[0_0_25px_rgba(0,255,102,0.15)] relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  
                  {/* Cyber Facebook Emblem */}
                  <div className="w-20 h-20 rounded-2xl bg-[#0d1c14] border-2 border-[#00ff66] p-1 shadow-[0_0_15px_rgba(0,255,102,0.3)] flex items-center justify-center shrink-0">
                    <Facebook className="w-10 h-10 text-[#00ff66]" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <h3 className="text-xl font-bold font-mono text-white">
                        Prosanto Chakma
                      </h3>
                      <span className="text-[11px] font-mono text-[#00ff66] bg-[#00ff66]/10 px-2 py-0.5 rounded border border-[#00ff66]/30 self-center sm:self-auto">
                        Cyber Security Specialist
                      </span>
                    </div>

                    <p className="text-xs font-mono text-neutral-400">
                      @prosantochakma5 · Official Page
                    </p>

                    <p className="text-sm text-neutral-300 pt-1 leading-relaxed">
                      Official Facebook Page for cybersecurity insights, announcements, ethical research publications, and technology discussions.
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs font-mono text-neutral-400">
                    Public Facebook Profile & Page
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={messengerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-4 py-2 text-xs font-mono uppercase font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#00ff66]" />
                      <span>Message</span>
                    </a>
                    <a
                      href={facebookPageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-5 py-2 text-xs font-mono uppercase font-bold text-black bg-[#00ff66] hover:bg-[#22c55e] border border-[#00ff66] rounded transition-all shadow-[0_0_15px_rgba(0,255,102,0.4)] flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Visit Facebook Page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
