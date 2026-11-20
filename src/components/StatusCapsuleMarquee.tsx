import React from 'react';
import { STATUS_PILLS } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const StatusCapsuleMarquee: React.FC = () => {
  const handlePillClick = (text: string) => {
    sound.playClick(750);
    navigator.clipboard.writeText(text).catch(() => {});
  };

  // Duplicate pills for seamless infinite marquee loop
  const duplicatedPills = [...STATUS_PILLS, ...STATUS_PILLS];

  return (
    <div className="relative w-full overflow-hidden border-y border-[#23232e] bg-[#0c0c10] py-3.5 select-none font-mono">
      {/* Left/Right Vignette gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#08080a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#08080a] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4">
        {duplicatedPills.map((pill, idx) => (
          <div
            key={`${pill.label}-${idx}`}
            onClick={() => handlePillClick(pill.text)}
            className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#131319] border border-[#23232e] hover:border-[#00f0ff] transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_-3px_rgba(0,240,255,0.25)]"
            title="Click to copy snippet"
          >
            <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider group-hover:text-[#0df2c9] transition-colors">
              {pill.label}:
            </span>
            <span className="text-xs text-zinc-200 group-hover:text-white transition-colors whitespace-nowrap">
              {pill.text}
            </span>
            <span className="text-[10px] text-[#00f0ff]/80 bg-[#00f0ff]/10 px-1.5 py-0.5 rounded font-mono group-hover:bg-[#00f0ff] group-hover:text-[#08080a] transition-colors">
              {pill.code}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
