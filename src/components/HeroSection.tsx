import React from 'react';
import { ArrowDownRight, Terminal, Github, Mail, Phone, Sparkles, MapPin, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3DCanvas } from './Hero3DCanvas';
import { sound } from '../utils/sound';

interface HeroSectionProps {
  reducedMotion: boolean;
  onOpenTerminal: () => void;
  onCopyEmail: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  reducedMotion,
  onOpenTerminal,
  onCopyEmail
}) => {
  return (
    <section className="relative min-h-[92vh] pt-24 pb-12 flex flex-col justify-center overflow-hidden">
      {/* Background ambient radial gradients & grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Editorial Headline & Identity */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Binary / System Identifier Accent */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-400">
              <span className="px-2.5 py-1 rounded bg-[#111116] border border-[#23232e] text-[#00f0ff] flex items-center gap-1.5 font-semibold">
                <Code2 className="w-3.5 h-3.5 text-[#0df2c9]" />
                ‹HI/› 01100010
              </span>
              <span className="text-zinc-600">//</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                Bengaluru, India
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
              BCA student at <span className="text-zinc-200 font-semibold">Aditya Institute of Management Studies, Bengaluru</span>. Crafting resilient web architectures with MongoDB, Express, React, and Node.js, combined with predictive Python & ML models.
            </p>

            {/* Quick Shift Availability Callout Badge */}
            <div className="p-3.5 rounded-xl bg-[#111116]/90 border border-[#23232e] max-w-xl flex items-start gap-3 text-xs font-mono">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0df2c9] mt-1 shrink-0 animate-pulse" />
              <div className="flex flex-col gap-1">
                <span className="text-zinc-200 font-semibold flex items-center gap-2">
                  <span>Shift Availability:</span>
                  <span className="text-[#0df2c9] bg-[#0df2c9]/10 px-2 py-0.5 rounded text-[10px]">
                    NIGHT-SHIFTS & REMOTE
                  </span>
                </span>
                <span className="text-zinc-400 text-[11px] leading-normal font-sans">
                  Attending morning BCA classes (8:00 AM – 1:00 PM IST); fully available for evening/night engineering shifts, international client overlap, and remote developer roles.
                </span>
              </div>
            </div>

            {/* Action Buttons & Terminal Trigger */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={() => sound.playClick(700)}
                className="group px-5 py-3 rounded-xl bg-[#00f0ff] hover:bg-[#0df2c9] text-[#08080a] font-mono text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_-5px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_-5px_rgba(13,242,201,0.6)]"
              >
                <span>EXPLORE WORK</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <button
                onClick={() => {
                  sound.playConfirm();
                  onCopyEmail();
                }}
                className="px-4 py-3 rounded-xl bg-[#13131a] hover:bg-[#1a1a24] border border-[#282836] hover:border-[#00f0ff] text-zinc-200 font-mono text-xs sm:text-sm flex items-center gap-2 transition-colors"
                title="Copy email to clipboard"
              >
                <Mail className="w-4 h-4 text-[#00f0ff]" />
                <span>vickyff699@gmail.com</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onOpenTerminal();
                }}
                className="px-3.5 py-3 rounded-xl bg-[#13131a] hover:bg-[#1a1a24] border border-[#282836] hover:border-[#0df2c9] text-zinc-300 font-mono text-xs flex items-center gap-2 transition-colors"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-4 h-4 text-[#0df2c9]" />
                <span className="hidden sm:inline">TERMINAL</span>
                <span className="text-[10px] text-zinc-500 font-mono">‹CLI/›</span>
              </button>
            </div>

            {/* Quick Social & Contact Links */}
            <div className="flex items-center gap-4 pt-2 font-mono text-xs text-zinc-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playHover()}
                className="flex items-center gap-1.5 hover:text-[#00f0ff] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub @Vicky-hue-ui</span>
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
            </div>
          </div>

          {/* Right Column: Interactive 3D WebGL Centerpiece */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Adrien Quechon spatial frame */}
            <div className="w-full relative rounded-2xl bg-gradient-to-b from-[#131319]/80 to-[#0c0c10]/80 border border-[#232330] p-1 shadow-2xl backdrop-blur-sm">
              {/* Corner tech accents */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#00f0ff]" />
                <span>SPATIAL.STAGE_3D</span>
              </div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-zinc-600">
                [ 0x7E1 ]
              </div>

              {/* 3D Canvas Element */}
              <Hero3DCanvas reducedMotion={reducedMotion} />

              {/* Bottom Card Annotation */}
              <div className="px-4 py-3 bg-[#0e0e13]/90 border-t border-[#1e1e28] rounded-b-xl flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>INTERACTIVE NODE MESH</span>
                <span className="text-[#00f0ff]">REACT • THREE.JS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
