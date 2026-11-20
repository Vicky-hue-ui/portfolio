import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Menu, X, Clock, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface NavbarProps {
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  reducedMotion,
  onToggleReducedMotion
}) => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeIST, setTimeIST] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Live Bengaluru (IST) clock updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTimeIST(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener for glassmorphism elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    sound.setMuted(next);
    if (!next) sound.playClick(900);
  };

  const navLinks = [
    { label: "About", href: "#about", tag: "01" },
    { label: "Projects", href: "#projects", tag: "02" },
    { label: "Experience", href: "#experience", tag: "03" },
    { label: "Skills", href: "#skills", tag: "04" },
    { label: "Contact", href: "#contact", tag: "05" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono ${
          isScrolled
            ? 'bg-[#08080a]/92 backdrop-blur-md border-b border-[#23232e]/80 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity with Avatar thumbnail */}
          <a
            href="#"
            onClick={() => sound.playClick(600)}
            className="group flex items-center gap-3 text-inherit no-underline"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[#282836] group-hover:border-[#00f0ff] transition-colors shrink-0">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt="Vicky Samal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-[#00f0ff] transition-colors font-sans flex items-center gap-1.5">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-zinc-400 tracking-wider">
                MERN • ML DEV
              </span>
            </div>
          </a>

          {/* Bengaluru Live IST Pill */}
          <div className="hidden lg:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#111116]/80 border border-[#23232e] text-xs shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0df2c9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0df2c9]"></span>
            </span>
            <Clock className="w-3 h-3 text-zinc-400" />
            <span className="text-zinc-300 font-mono text-[11px]">
              BLR {timeIST || '01:35 AM IST'}
            </span>
            <span className="text-zinc-600">|</span>
            <span
              className="text-[#0df2c9] text-[10px] tracking-wide font-semibold"
              title="BCA classes in morning; open for night-shift roles"
            >
              NIGHT-SHIFT READY
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => sound.playHover()}
                className="text-xs text-zinc-400 hover:text-[#00f0ff] transition-colors flex items-center gap-1 group"
              >
                <span className="text-zinc-600 group-hover:text-[#0df2c9] text-[10px] transition-colors">
                  {link.tag}.
                </span>
                <span className="font-sans font-medium">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Control Utility Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Direct Gmail Action */}
            <a
              href={PERSONAL_INFO.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playConfirm()}
              title="Compose message directly in Gmail (Web)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1a1114] border border-[#EA4335]/40 hover:border-[#EA4335] text-zinc-200 hover:text-white transition-all text-xs font-mono shadow-[0_0_12px_-3px_rgba(234,67,53,0.3)]"
            >
              <div className="w-4 h-4 rounded bg-[#EA4335] flex items-center justify-center p-0.5">
                <Mail className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-[11px] font-semibold text-zinc-200">Gmail</span>
            </a>

            {/* 3D Reduced Motion / High Performance Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                onToggleReducedMotion();
              }}
              title={reducedMotion ? "Switch to 3D WebGL Mode" : "Switch to 2D Lite Mode"}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs transition-colors ${
                reducedMotion
                  ? 'bg-[#1b1b24] border-[#fbbf24] text-[#fbbf24]'
                  : 'bg-[#111116] border-[#23232e] hover:border-[#00f0ff] text-zinc-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0df2c9]" />
              <span className="text-[11px] font-mono">
                {reducedMotion ? '2D LITE' : '3D CORE'}
              </span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={isMuted ? "Unmute UI Audio" : "Mute UI Audio"}
              className="p-2 rounded-xl bg-[#111116] border border-[#23232e] hover:border-[#00f0ff] hover:text-[#00f0ff] text-zinc-400 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-zinc-500" /> : <Volume2 className="w-4 h-4 text-[#00f0ff]" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-xl bg-[#111116] border border-[#23232e] text-zinc-300"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#08080a]/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 font-mono">
          <div className="flex flex-col gap-6">
            <div className="border-b border-[#23232e] pb-3 flex items-center justify-between text-xs text-zinc-500">
              <span>// NAVIGATION INDEX</span>
              <span className="text-[#0df2c9]">BLR: {timeIST}</span>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    sound.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between py-2 text-xl font-display font-semibold text-zinc-200 hover:text-[#00f0ff] border-b border-[#1b1b24] transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-zinc-500 font-mono">/{link.tag}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#23232e]">
            <a
              href={PERSONAL_INFO.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#EA4335] text-white text-xs font-bold font-mono flex items-center justify-center gap-2 shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Compose Email in Gmail</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#111116] border border-[#23232e] text-zinc-200 text-xs font-semibold"
            >
              <span>Explore GitHub Repositories</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00f0ff]" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
