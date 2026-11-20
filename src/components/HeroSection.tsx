import React from 'react';
import { ArrowDownRight, Github, Mail, Phone, Sparkles, MapPin, Code2, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3DCanvas } from './Hero3DCanvas';
import { sound } from '../utils/sound';

interface HeroSectionProps {
  reducedMotion: boolean;
  onCopyEmail: () => void;
  isCopied: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  reducedMotion,
  onCopyEmail,
  isCopied
}) => {
  const handleOpenGmail = () => {
    sound.playConfirm();
    window.open(PERSONAL_INFO.gmailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[92vh] pt-24 pb-12 flex flex-col justify-center overflow-hidden">
      {/* Background ambient radial gradients & grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Editorial Headline & Identity */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Binary / System Identifier Accent with Avatar micro-chip */}
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#111116] border border-[#23232e] text-[#00f0ff] font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0df2c9] animate-pulse" />
                <Code2 className="w-3.5 h-3.5 text-[#0df2c9]" />
                <span>‹HI/› VICKY SAMAL</span>
              </div>
              <span className="text-zinc-600">//</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                Bengaluru, India (560077)
              </span>
              <span className="text-zinc-600">//</span>
              <span className="text-[#0df2c9] text-[11px] font-mono">
                BCA • ADITYA IMS
              </span>
            </div>

            {/* Display Headline (Adrien Quechon brutalist scale) */}
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-display tracking-tight text-white leading-[1.05]">
                VICKY <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#0df2c9] to-[#38bdf8]">
                  SAMAL
                </span>
              </h1>
              <p className="font-mono text-sm sm:text-base md:text-lg text-zinc-300 tracking-wide mt-2">
                Software Developer <span className="text-[#00f0ff]">|</span> Full-Stack MERN <span className="text-[#0df2c9]">|</span> Machine Learning
              </p>
            </div>

            {/* Lead Narrative Summary */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              BCA student at <span className="text-zinc-200 font-semibold">Aditya Institute of Management Studies, Bengaluru</span>. Architecting high-throughput web applications with MongoDB, Express, React, and Node.js, combined with predictive Python & ML models.
            </p>

            {/* Quick Shift Availability Callout Badge */}
            <div className="p-4 rounded-2xl bg-[#111116]/90 border border-[#23232e] max-w-xl flex items-start gap-3.5 text-xs font-mono shadow-lg backdrop-blur-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0df2c9] mt-1 shrink-0 animate-pulse" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-200 font-bold">Shift Availability:</span>
                  <span className="text-[#0df2c9] bg-[#0df2c9]/10 border border-[#0df2c9]/30 px-2 py-0.5 rounded text-[10px] font-bold">
                    NIGHT-SHIFTS & REMOTE
                  </span>
                </div>
                <span className="text-zinc-400 text-[11px] leading-normal font-sans">
                  Attending morning BCA classes (8:00 AM – 1:00 PM IST); fully available for evening & nocturnal software engineering shifts, US/European team overlap, and flexible remote work.
                </span>
              </div>
            </div>

            {/* Primary Action Buttons: Gmail Web Compose & Explore Work */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Gmail Compose Action */}
              <button
                onClick={handleOpenGmail}
                className="group px-5 py-3 rounded-xl bg-gradient-to-r from-[#EA4335] via-[#f87171] to-[#f43f5e] hover:opacity-95 text-white font-mono text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all shadow-[0_0_25px_-5px_rgba(234,67,53,0.5)] hover:shadow-[0_0_30px_-5px_rgba(234,67,53,0.7)]"
                title="Compose email directly in Gmail (web)"
              >
                <div className="w-5 h-5 rounded-md bg-white flex items-center justify-center p-0.5 shadow-sm">
                  <Mail className="w-3.5 h-3.5 text-[#EA4335]" />
                </div>
                <span>Email via Gmail</span>
                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* 1-Click Copy Email Address */}
              <button
                onClick={onCopyEmail}
                className="px-4 py-3 rounded-xl bg-[#13131a] hover:bg-[#1a1a24] border border-[#282836] hover:border-[#00f0ff] text-zinc-200 font-mono text-xs sm:text-sm flex items-center gap-2 transition-all"
                title="Copy email to clipboard"
              >
                {isCopied ? <Check className="w-4 h-4 text-[#0df2c9]" /> : <Copy className="w-4 h-4 text-[#00f0ff]" />}
                <span>{isCopied ? 'Copied to Clipboard!' : 'vickyff699@gmail.com'}</span>
              </button>

              {/* Explore Projects Button */}
              <a
                href="#projects"
                onClick={() => sound.playClick(700)}
                className="group px-4 py-3 rounded-xl bg-[#111116] hover:bg-[#181822] border border-[#262635] hover:border-[#0df2c9] text-zinc-300 hover:text-white font-mono text-xs sm:text-sm font-medium flex items-center gap-2 transition-all"
              >
                <span>EXPLORE WORK</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-[#0df2c9]" />
              </a>
            </div>

            {/* Quick Contact & Profile Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-zinc-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playHover()}
                className="flex items-center gap-1.5 hover:text-[#00f0ff] transition-colors"
              >
                <Github className="w-4 h-4 text-[#00f0ff]" />
                <span>GitHub Repositories</span>
              </a>
              <span className="text-zinc-700">|</span>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                onClick={() => sound.playHover()}
                className="flex items-center gap-1.5 hover:text-[#0df2c9] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0df2c9]" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className="text-zinc-700">|</span>
              <span className="text-zinc-500">
                Notice: <strong className="text-zinc-300">Immediate Joiner</strong>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D WebGL Centerpiece with Vicky's Avatar */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Spatial stage frame */}
            <div className="w-full relative rounded-3xl bg-gradient-to-b from-[#131319]/90 to-[#0c0c10]/95 border border-[#232330] p-1.5 shadow-2xl backdrop-blur-md">
              {/* Corner tech accents */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-zinc-400 flex items-center gap-1.5 z-20 bg-[#0c0c10]/80 px-2.5 py-1 rounded-full border border-[#22222d]">
                <Sparkles className="w-3 h-3 text-[#00f0ff]" />
                <span>3D HOLOGRAPHIC CORE</span>
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-[#0df2c9] z-20 bg-[#0c0c10]/80 px-2.5 py-1 rounded-full border border-[#22222d]">
                VICKY SAMAL
              </div>

              {/* 3D Canvas Element with Vicky's Image in Node Mesh */}
              <Hero3DCanvas reducedMotion={reducedMotion} />

              {/* Bottom Card Annotation */}
              <div className="px-4 py-3 bg-[#0e0e13]/90 border-t border-[#1e1e28] rounded-b-2xl flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                  INTERACTIVE NODE MESH
                </span>
                <span className="text-[#00f0ff]">REACT • THREE.JS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
