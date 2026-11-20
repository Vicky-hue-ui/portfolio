import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  Clock, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface ContactSectionProps {
  onCopyEmail: () => void;
  isCopied: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail, isCopied }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    sound.playConfirm();
    setIsSent(true);

    // Create mailto fallback url
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSent(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#23232e] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] mb-2">
              <span>// 05. DIRECT COMMUNICATIONS</span>
              <span className="text-zinc-600">[ CONTACT_LINK ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight">
              LET'S BUILD <span className="text-[#0df2c9]">TOGETHER</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400">
            <span>‹RESPONSIVE: SUB-24H/›</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Credentials & Availability */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick 1-Click Email Action Card */}
            <div className="p-6 rounded-2xl bg-[#111116] border border-[#23232e] hover:border-[#00f0ff]/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00f0ff]" />
                  EMAIL DISPATCH
                </span>
                <span className="text-[10px] font-mono text-[#0df2c9] bg-[#0df2c9]/10 px-2 py-0.5 rounded">
                  ONE-CLICK COPY
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#161622] border border-[#252536] flex items-center justify-between gap-3 mb-4">
                <div className="truncate">
                  <span className="text-[10px] text-zinc-500 font-mono block">PRIMARY INBOX</span>
                  <span className="text-sm sm:text-base font-mono font-bold text-white select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  onClick={onCopyEmail}
                  className={`p-2.5 rounded-lg transition-all flex items-center gap-1.5 font-mono text-xs ${
                    isCopied
                      ? 'bg-[#0df2c9] text-[#08080a] font-bold'
                      : 'bg-[#1e1e2d] hover:bg-[#00f0ff] hover:text-[#08080a] text-zinc-300'
                  }`}
                  title="Copy email to clipboard"
                >
                  {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isCopied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full py-2.5 rounded-xl bg-[#1b1b26] hover:bg-[#252538] border border-[#2c2c3e] text-zinc-200 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open in Mail Client</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00f0ff]" />
              </a>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#111116] border border-[#23232e]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0df2c9]" />
                  TELEPHONE // CALL
                </span>
                <span className="text-[10px] font-mono text-zinc-500">VOICE & WHATSAPP</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-base font-mono font-bold text-white">
                  {PERSONAL_INFO.phone}
                </span>

                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="px-3 py-1.5 rounded-lg bg-[#181824] hover:bg-[#0df2c9] hover:text-[#08080a] text-zinc-300 text-xs font-mono transition-colors"
                >
                  Direct Call
                </a>
              </div>
            </div>

            {/* Shift & Bengaluru Location Badge */}
            <div className="p-6 rounded-2xl bg-[#111116] border border-[#23232e] font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                  Base Location
                </span>
                <span className="text-white font-semibold">Bengaluru (560077)</span>
              </div>

              <div className="flex items-center justify-between text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0df2c9]" />
                  Working Shift
                </span>
                <span className="text-[#0df2c9] font-bold">Night Shifts / Flexible</span>
              </div>

              <div className="p-3 rounded-xl bg-[#161622] border border-[#242436] text-[11px] text-zinc-400 font-sans leading-normal">
                Open for full-time internships, night-shift software engineer roles, full-stack MERN development, and machine learning projects.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111116] border border-[#23232e] relative">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00f0ff] mb-4">
                <MessageSquare className="w-4 h-4" />
                <span>QUICK DISPATCH MESSAGE</span>
              </div>

              <h3 className="text-xl font-bold font-sans text-white mb-2">
                Send a direct note or project proposal.
              </h3>
              <p className="text-xs text-zinc-400 font-mono mb-6">
                Fill the fields below to initiate an immediate mail exchange.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-zinc-400 mb-1.5">Your Name or Organization</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Morgan / Acme Corp"
                    className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-[#252538] focus:border-[#00f0ff] text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1.5">Your Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-[#252538] focus:border-[#00f0ff] text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1.5">Project Scope / Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your application, tech stack requirements, or team..."
                    className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-[#252538] focus:border-[#00f0ff] text-white placeholder-zinc-600 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0df2c9] hover:opacity-95 text-[#08080a] font-bold font-mono text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_-5px_rgba(0,240,255,0.4)]"
                >
                  {isSent ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>DISPATCH INITIATED...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>TRANSMIT MESSAGE ‹SEND/›</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
