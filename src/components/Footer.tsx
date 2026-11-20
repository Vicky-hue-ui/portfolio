import React from 'react';
import { ArrowUp, Github, Mail, Phone, Heart, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    sound.playClick(600);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1e1e2b] bg-[#070709] py-12 font-mono text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#1b1b24]">
          {/* Col 1: Identity */}
          <div className="space-y-2">
            <span className="text-white font-bold text-sm block font-sans">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
              Software Developer specializing in Full-Stack MERN applications, Python scripting, and Machine Learning algorithms.
            </p>
            <span className="text-[#00f0ff] text-[10px] block">
              ADITYA IMS • BCA 2024–2027
            </span>
          </div>

          {/* Col 2: Coordinates */}
          <div className="space-y-1.5">
            <span className="text-zinc-300 font-semibold block">// GEOLOCATION</span>
            <p className="text-zinc-400">Bengaluru, Karnataka, India</p>
            <p className="text-zinc-500">Pincode: 560077</p>
            <p className="text-[#0df2c9] text-[11px]">{PERSONAL_INFO.coordinates} (IST)</p>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-1.5">
            <span className="text-zinc-300 font-semibold block">// REPOSITORIES & HUB</span>
            <a
              href="https://github.com/Vicky-hue-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@Vicky-hue-ui</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-zinc-400 hover:text-[#0df2c9] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="text-zinc-400 hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>

          {/* Col 4: Quick Terminal & Back to Top */}
          <div className="flex flex-col justify-between items-start md:items-end gap-4">
            <button
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111116] border border-[#23232e] hover:border-[#00f0ff] text-zinc-300 hover:text-[#00f0ff] transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>Launch Terminal ‹CLI/›</span>
            </button>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              title="Return to page top"
            >
              <span>RETURN TO TOP</span>
              <div className="p-1.5 rounded-lg bg-[#111116] border border-[#23232e] group-hover:border-[#0df2c9] text-zinc-400 group-hover:text-[#0df2c9] transition-colors">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Vicky Samal. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Designed with editorial brutalism & 3D WebGL</span>
            <span>•</span>
            <span className="text-[#00f0ff]">Adrien Quechon Inspired</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
