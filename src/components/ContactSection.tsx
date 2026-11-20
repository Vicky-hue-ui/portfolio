import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  MessageSquare,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface ContactSectionProps {
  onCopyEmail: () => void;
  isCopied: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail, isCopied }) => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    sound.playConfirm();
    setIsSent(true);

    // Launch Gmail Web Compose in a new browser tab with pre-filled fields
    const mailSubject = formState.subject.trim() 
      ? formState.subject 
      : `Portfolio Inquiry from ${formState.name || 'Visitor'}`;

    const mailBody = `Hi Vicky,

Sender Name: ${formState.name || 'Not provided'}
Sender Email: ${formState.email}

Message:
${formState.message}

---
Transmitted via Vicky Samal Portfolio Quick Dispatch (Bengaluru)`;

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    
    // Open Gmail web compose in a new tab
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSent(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleOpenDirectGmail = () => {
    sound.playConfirm();
    window.open(PERSONAL_INFO.gmailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#23232e] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
              <span>// 05. DIRECT COMMUNICATIONS</span>
              <span className="text-zinc-600">[ GMAIL_DISPATCH ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight">
              LET'S BUILD <span className="text-[#0df2c9]">TOGETHER</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400">
            <span>‹PREFERRED: GMAIL WEB COMPOSE/›</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Gmail Credentials & Availability */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Gmail Dispatch Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#111116] border border-[#23232e] hover:border-[#EA4335]/60 transition-all shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-[#EA4335] flex items-center justify-center p-0.5">
                    <Mail className="w-3.5 h-3.5 text-white" />
                  </div>
                  <strong className="text-white">GMAIL DISPATCH</strong>
                </span>
                <span className="text-[10px] font-mono text-[#EA4335] bg-[#EA4335]/10 border border-[#EA4335]/30 px-2 py-0.5 rounded-full font-bold">
                  DIRECT COMPOSE
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#161622] border border-[#252536] flex items-center justify-between gap-3 mb-4">
                <div className="truncate">
                  <span className="text-[10px] text-zinc-500 font-mono block">PRIMARY GMAIL ADDRESS</span>
                  <span className="text-sm sm:text-base font-mono font-bold text-white select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  onClick={onCopyEmail}
                  className={`p-2.5 rounded-xl transition-all flex items-center gap-1.5 font-mono text-xs ${
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

              {/* One-click open Gmail Web Compose button */}
              <button
                onClick={handleOpenDirectGmail}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#EA4335] to-[#f87171] hover:opacity-95 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(234,67,53,0.4)] transition-all"
              >
                <span>Compose in Gmail Web</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 rounded-3xl bg-[#111116] border border-[#23232e] shadow-xl">
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
                  className="px-3.5 py-1.5 rounded-xl bg-[#181824] hover:bg-[#0df2c9] hover:text-[#08080a] text-zinc-300 text-xs font-mono font-semibold transition-colors"
                >
                  Direct Call
                </a>
              </div>
            </div>

            {/* Shift & Bengaluru Location Badge */}
            <div className="p-6 rounded-3xl bg-[#111116] border border-[#23232e] font-mono text-xs space-y-3 shadow-xl">
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
                <span className="text-[#0df2c9] font-bold">Night Shifts / Flexible Remote</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#161622] border border-[#242436] text-[11px] text-zinc-400 font-sans leading-normal">
                Open for full-time internships, night-shift software engineer roles, full-stack MERN development, and machine learning projects.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Gmail Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#111116] border border-[#23232e] shadow-2xl relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-[#00f0ff]">
                  <MessageSquare className="w-4 h-4" />
                  <span>QUICK DISPATCH // GMAIL COMPOSE</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EA4335]/10 border border-[#EA4335]/30 text-[#EA4335] text-[10px] font-mono font-bold">
                  LAUNCHES GMAIL
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-2">
                Send a project proposal or hire inquiry.
              </h3>
              <p className="text-xs text-zinc-400 font-mono mb-6">
                Fill the fields below — clicking transmit immediately opens Gmail compose with your message formatted and ready to send.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-[#252538] focus:border-[#EA4335] text-white placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-[#252538] focus:border-[#EA4335] text-white placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1.5">Subject / Role / Project Title</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Software Developer Opportunity / MERN Project"
                    className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-[#252538] focus:border-[#EA4335] text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1.5">Message / Requirements</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell Vicky about your team, tech stack, or night-shift software role..."
                    className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-[#252538] focus:border-[#EA4335] text-white placeholder-zinc-600 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Primary Submit Button: Launches Gmail */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#EA4335] via-[#f87171] to-[#EA4335] hover:opacity-95 text-white font-bold font-mono text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_-5px_rgba(234,67,53,0.5)]"
                >
                  {isSent ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>OPENING GMAIL COMPOSE...</span>
                    </>
                  ) : (
                    <>
                      <div className="w-5 h-5 rounded bg-white flex items-center justify-center p-0.5">
                        <Mail className="w-3.5 h-3.5 text-[#EA4335]" />
                      </div>
                      <span>Send via Gmail ‹GMAIL/›</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-zinc-500 text-center font-sans">
                  Clicking will open a pre-filled draft directly in Google Mail.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
