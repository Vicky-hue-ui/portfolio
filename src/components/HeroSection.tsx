import React from 'react';
import { ArrowDownRight, Github, Mail, Phone, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface HeroSectionProps {
  onCopyEmail: () => void;
  isCopied: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCopyEmail,
  isCopied
}) => {
  const handleOpenGmail = () => {
    sound.playConfirm();
    window.open(PERSONAL_INFO.gmailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[88vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Ambient background styling */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-radial-gradient pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
            
            {/* Top Status Capsule */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111118] border border-[#232332] text-xs font-mono text-zinc-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0df2c9] animate-pulse" />
              <span>Welcome to my portfolio</span>
              <span className="text-zinc-600">//</span>
              <span className="text-[#00f0ff] font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#00f0ff]" />
                Bengaluru, IST
              </span>
            </div>

            {/* Small Name Intro */}
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-zinc-400 font-medium flex items-center gap-2">
              <span>HELLO, I'M</span>
              <span className="text-white font-bold tracking-widest text-sm bg-gradient-to-r from-white to-zinc-300 bg-clip-text">
                VICKY SAMAL
              </span>
            </p>

            {/* Display Headline */}
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-brand tracking-tight text-white leading-[1.1]">
                Creative Mind.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#0df2c9]">
                  MERN Stack Developer.
                </span>
              </h1>
            </div>

            {/* Narrative Summary */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              I am an enthusiastic <span className="text-white font-semibold">BCA student</span> at Aditya Institute of Management Studies, Bengaluru and an aspiring <span className="text-[#00f0ff] font-semibold">Full-Stack MERN & Machine Learning Developer</span> who loves building modern, creative, and user-friendly web applications. Focused on scalable APIs, predictive models, and clean architecture.
            </p>

            {/* Shift Availability Card */}
            <div className="p-3.5 rounded-2xl bg-[#111118]/90 border border-[#23232e] max-w-xl w-full flex items-start gap-3 text-xs font-mono shadow-md backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#0df2c9] mt-1 shrink-0 animate-pulse" />
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

            {/* Action Buttons: Gmail Web Compose & Copy */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
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

            {/* Quick Contact & Profile Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-1 font-mono text-xs text-zinc-400">
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

          {/* Right Column: Circular Portrait with Glowing Aura Ring */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer Glowing Cyan/Emerald Aura Halo */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-[#00f0ff]/50 via-[#38bdf8]/40 to-[#0df2c9]/50 blur-xl opacity-75 animate-pulse-slow pointer-events-none" />

              {/* Decorative Concentric Rings */}
              <div className="absolute -inset-1.5 sm:-inset-2 rounded-full border border-[#00f0ff]/40 pointer-events-none" />

              {/* Main Circular Image Frame */}
              <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-[#00f0ff] via-[#38bdf8] to-[#0df2c9] shadow-[0_0_50px_rgba(0,240,255,0.35)] overflow-hidden">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt="Vicky Samal"
                  className="w-full h-full object-cover object-[50%_18%] rounded-full select-none transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Bottom Identifier Badge */}
              <div className="absolute -bottom-3 sm:bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#0a0a0f]/95 border border-[#28283c] backdrop-blur-md shadow-2xl flex items-center gap-2 whitespace-nowrap text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#0df2c9] animate-ping" />
                <span className="text-white font-bold font-brand">Vicky Samal</span>
                <span className="text-zinc-600">|</span>
                <span className="text-[#00f0ff]">BCA • Bengaluru</span>
              </div>

              {/* Floating Top-Right Tech Tag */}
              <div className="absolute -top-2 right-2 sm:right-6 px-3 py-1 rounded-full bg-[#111118]/90 border border-[#0df2c9]/50 backdrop-blur-md shadow-lg text-[10px] font-mono text-[#0df2c9] font-bold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#0df2c9]" />
                <span>MERN + ML</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
