import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Cpu } from 'lucide-react';
import { sound } from '../utils/sound';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const steps = [
    "BOOTSTRAP_KERNEL: INITIALIZING...",
    "GEOLOC: BENGALURU, INDIA [13.03° N, 77.63° E]",
    "ACADEMIC_SYS: BCA @ ADITYA INSTITUTE OF MGMT STUDIES",
    "STACK_MOUNT: FULL-STACK MERN + PYTHON + ML",
    "SECURITY_PROTO: FORAGE CYBERSECURITY VERIFIED",
    "WEBGL_PIPELINE: THREE.JS 3D HERO COMPILED",
    "STATUS: OPEN FOR NIGHT-SHIFT & REMOTE ROLES",
    "PORTFOLIO READY — LAUNCHING ‹VS/›"
  ];

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800; // Fast and snappy 1.8s load

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);
      const stepIndex = Math.min(steps.length - 1, Math.floor((rawProgress / 100) * steps.length));
      setCurrentStep(stepIndex);

      if (rawProgress >= 100) {
        clearInterval(interval);
        sound.playConfirm();
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 500);
        }, 200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    sound.playClick();
    setIsExiting(true);
    setTimeout(onComplete, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-6 md:p-12 bg-[#08080a] text-[#ededf2] transition-transform duration-500 ease-in-out font-mono select-none ${
        isExiting ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Background scanline subtle overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

      {/* Top Bar: Diagnostic Headers */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#23232d] pb-4 text-xs md:text-sm text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="text-[#ededf2] font-semibold tracking-wider">VICKY SAMAL // DEV.SYS</span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:inline text-zinc-500">BCA 2024–2027</span>
        </div>

        <button
          onClick={handleSkip}
          className="group flex items-center gap-1.5 px-3 py-1 rounded border border-[#2e2e3d] hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors text-xs text-zinc-400"
        >
          <span>[SKIP INTRO]</span>
          <span className="text-[10px] text-zinc-500 group-hover:text-[#00f0ff]">ESC</span>
        </button>
      </div>

      {/* Center: Big Adrien Quechon-style percentage & step */}
      <div className="relative z-10 my-auto py-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Micro binary badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111116] border border-[#23232e] text-[#00f0ff] text-xs mb-6">
            <Cpu className="w-3.5 h-3.5 text-[#0df2c9]" />
            <span className="tracking-widest">SYSTEM INITIALIZING 01011001</span>
          </div>

          {/* Huge Progress Number */}
          <div className="text-7xl sm:text-9xl md:text-[11rem] font-bold tracking-tighter text-[#ededf2] font-display flex items-baseline justify-center">
            <span>{String(progress).padStart(2, '0')}</span>
            <span className="text-[#00f0ff] text-4xl sm:text-6xl md:text-7xl font-mono ml-2">%</span>
          </div>

          {/* Active Diagnostic Log */}
          <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-zinc-400 h-6">
            <Terminal className="w-4 h-4 text-[#00f0ff]" />
            <span className="text-[#00f0ff]">&gt;</span>
            <span className="text-zinc-200 tracking-wide font-mono truncate max-w-xs sm:max-w-md">
              {steps[currentStep]}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Progress track & system spec */}
      <div className="relative z-10 border-t border-[#23232d] pt-4 flex flex-col gap-3">
        {/* Progress bar line */}
        <div className="w-full bg-[#16161d] h-1.5 rounded-full overflow-hidden border border-[#23232e]">
          <div
            className="h-full bg-gradient-to-r from-[#00f0ff] via-[#0df2c9] to-[#38bdf8] transition-all duration-75 ease-out glow-cyan"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0df2c9]" />
              VERIFIED PROFILE
            </span>
            <span>BENGALURU, KARNATAKA (560077)</span>
          </div>
          <div>MERN STACK • PYTHON • ML • REST APIS</div>
        </div>
      </div>
    </div>
  );
};
