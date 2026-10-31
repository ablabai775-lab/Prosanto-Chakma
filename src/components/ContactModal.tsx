import React, { useState } from 'react';
import { X, Send, Facebook, Mail, Shield, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Open user's default email client prefilled, and show confirmation
    const subject = encodeURIComponent(`Security Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:prosantochakma5@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#070c09] border border-[#00ff66]/50 rounded-xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,255,102,0.25)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white rounded-md border border-neutral-800 hover:border-[#00ff66]/40 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded bg-[#00ff66]/10 border border-[#00ff66]/40 flex items-center justify-center text-[#00ff66]">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono text-white">
              CONTACT PROSANTO CHAKMA
            </h3>
            <p className="text-xs font-mono text-neutral-400">
              Cyber Security Specialist · Direct Communication
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#00ff66] mx-auto animate-bounce" />
            <h4 className="text-base font-bold font-mono text-white">
              Communication Initiated
            </h4>
            <p className="text-xs text-neutral-300 font-mono">
              Opening your secure mail client to transmit your inquiry to Prosanto Chakma.
            </p>
          </div>
        ) : (
          <div>
            {/* Quick direct channels */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href="https://m.me/prosantochakma5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded bg-neutral-900 border border-neutral-800 hover:border-[#00ff66]/50 transition-all flex items-center justify-center gap-2 text-xs font-mono text-neutral-200 hover:text-white"
              >
                <Facebook className="w-4 h-4 text-[#1877F2]" />
                <span>Messenger</span>
              </a>
              <a
                href="https://www.facebook.com/prosantochakma5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded bg-neutral-900 border border-neutral-800 hover:border-[#00ff66]/50 transition-all flex items-center justify-center gap-2 text-xs font-mono text-neutral-200 hover:text-white"
              >
                <Shield className="w-4 h-4 text-[#00ff66]" />
                <span>Facebook Page</span>
              </a>
            </div>

            <div className="relative flex py-2 items-center mb-4">
              <div className="flex-grow border-t border-neutral-800"></div>
              <span className="flex-shrink mx-3 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                Or Send Direct Message
              </span>
              <div className="flex-grow border-t border-neutral-800"></div>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-neutral-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jane Doe"
                  className="w-full px-3 py-2 rounded bg-neutral-900/90 border border-neutral-700 focus:border-[#00ff66] focus:outline-none text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-neutral-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. jane@example.com"
                  className="w-full px-3 py-2 rounded bg-neutral-900/90 border border-neutral-700 focus:border-[#00ff66] focus:outline-none text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-neutral-300 mb-1">Inquiry / Message</label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Security consulting, vulnerability inquiry, or technology collaboration..."
                  className="w-full px-3 py-2 rounded bg-neutral-900/90 border border-neutral-700 focus:border-[#00ff66] focus:outline-none text-white text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded bg-[#00ff66] hover:bg-[#22c55e] text-black font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,102,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Message</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
