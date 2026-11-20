import React from 'react';
import { ArrowDownRight, Github, Mail, Phone, MapPin, Code2, Copy, Check, Send } from 'lucide-react';
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
    <section className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      {/* Three.js Ambient 3D Geometric WebGL Background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <Hero3DCanvas reducedMotion={reducedMotion} />
      </div>

      {/* Ambient radial gradients & subtle grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-gradient pointer-events-none z-0" />

      {/* Main Centered Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center gap-6">
        
        {/* Top System Tag Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111116]/90 border border-[#23232e] text-[#00f0ff] font-semibold shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#0df2c9] animate-pulse" />
            <Code2 className="w-3.5 h-3.5 text-[#0df2c9]" />
            <span>‹HI/› VICKY SAMAL</span>
          </div>
          <span className="text-zinc-600">//</span>
          <span className="flex items-center gap-1.5 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
            Bengaluru, India (560077)
          </span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#0df2c9] text-xs font-mono font-medium">
            BCA • ADITYA IMS
          </span>
        </div>

        {/* Massive Bold Centered Display Headline */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-black font-display tracking-tight text-white leading-[1.05] text-center">
            VICKY{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#0df2c9] to-[#38bdf8]">
              SAMAL
            </span>
          </h1>
          <p className="font-mono text-sm sm:text-lg md:text-xl text-zinc-300 tracking-wide mt-2 text-center">
            Software Developer <span className="text-[#00f0ff]">|</span> Full-Stack MERN <span className="text-[#0df2c9]">|</span> Machine Learning
          </p>
        </div>

        {/* Centered Lead Narrative Summary */}
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans text-center">
          BCA student at <span className="text-zinc-200 font-semibold">Aditya Institute of Management Studies, Bengaluru</span>. Architecting high-throughput web applications with MongoDB, Express, React, and Node.js, combined with predictive Python & ML models.
        </p>

        {/* Centered Shift Availability Callout Badge */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#111116]/90 border border-[#23232e] max-w-xl w-full mx-auto flex items-start gap-3.5 text-xs font-mono shadow-xl backdrop-blur-md text-left">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0df2c9] mt-1 shrink-0 animate-pulse" />
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="text-zinc-200 font-bold">Shift Availability:</span>
              <span className="text-[#0df2c9] bg-[#0df2c9]/10 border border-[#0df2c9]/30 px-2 py-0.5 rounded text-[10px] font-bold">
                NIGHT-SHIFTS & REMOTE
              </span>
            </div>
            <span className="text-zinc-400 text-[11px] leading-relaxed font-sans">
              Attending morning BCA classes (8:00 AM – 1:00 PM IST); fully available for evening & nocturnal software engineering shifts, US/European team overlap, and flexible remote work.
            </span>
          </div>
        </div>

        {/* Centered Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {/* Primary Gmail Compose Action */}
          <button
            onClick={handleOpenGmail}
            className="group px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#EA4335] via-[#f87171] to-[#f43f5e] hover:opacity-95 text-white font-mono text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all shadow-[0_0_25px_-5px_rgba(234,67,53,0.5)] hover:shadow-[0_0_30px_-5px_rgba(234,67,53,0.7)]"
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
            className="px-4 py-3.5 rounded-xl bg-[#13131a] hover:bg-[#1a1a24] border border-[#282836] hover:border-[#00f0ff] text-zinc-200 font-mono text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
            title="Copy email to clipboard"
          >
            {isCopied ? <Check className="w-4 h-4 text-[#0df2c9]" /> : <Copy className="w-4 h-4 text-[#00f0ff]" />}
            <span>{isCopied ? 'Copied to Clipboard!' : 'vickyff699@gmail.com'}</span>
          </button>

          {/* Explore Projects Button */}
          <a
            href="#projects"
            onClick={() => sound.playClick(700)}
            className="group px-4 py-3.5 rounded-xl bg-[#111116] hover:bg-[#181822] border border-[#262635] hover:border-[#0df2c9] text-zinc-300 hover:text-white font-mono text-xs sm:text-sm font-medium flex items-center gap-2 transition-all"
          >
            <span>EXPLORE WORK</span>
            <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-[#0df2c9]" />
          </a>
        </div>

        {/* Centered Quick Contact & Profile Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs text-zinc-400">
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
    </section>
  );
};
