import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onCopyEmail
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-zinc-300">
          <p className="text-[#00f0ff] font-bold">
            ‹VS/› VICKY SAMAL SHELL [Version 2.4.0 — Bengaluru Node]
          </p>
          <p className="text-xs text-zinc-400">
            Type <span className="text-[#0df2c9] font-bold">help</span> to view available system commands.
          </p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    sound.playClick(850);

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <p className="text-[#00f0ff] font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-[#0df2c9] w-24 inline-block font-mono">whoami</span> Display Vicky's professional bio & identity</p>
            <p><span className="text-[#0df2c9] w-24 inline-block font-mono">skills</span> List technical stack & competencies</p>
            <p><span className="text-[#0df2c9] w-24 inline-block font-mono">projects</span> List featured repositories (CineSphere, foodiee...)</p>
            <p><span className="text-[#0df2c9] w-24 inline-block font-mono">shift</span> Operational schedule & night-shift availability</p>
            <p><span className="text-[#0df2c9] w-24 inline-block font-mono">edu</span> Academic qualifications & college details</p>
            <p><span className="text-[#0df2c9] w-24 inline-block font-mono">certs</span> Industry certifications (Forage, IBM)</p>
            <p><span className="text-[#0df2c9] w-24 inline-block font-mono">contact</span> Display email, phone, and direct links</p>
            <p><span className="text-[#0df2c9] w-24 inline-block font-mono">email</span> Copy vickyff699@gmail.com to clipboard</p>
            <p><span className="text-[#0df2c9] w-24 inline-block font-mono">clear</span> Reset terminal screen</p>
            <p><span className="text-[#0df2c9] w-24 inline-block font-mono">exit</span> Close terminal drawer</p>
          </div>
        );
        break;

      case 'whoami':
      case 'bio':
        output = (
          <div className="space-y-1 text-xs text-zinc-300 leading-relaxed">
            <p className="text-white font-bold">{PERSONAL_INFO.name}</p>
            <p className="text-[#00f0ff]">{PERSONAL_INFO.role}</p>
            <p>{PERSONAL_INFO.bio}</p>
            <p className="text-zinc-500">Location: {PERSONAL_INFO.location} ({PERSONAL_INFO.coordinates})</p>
          </div>
        );
        break;

      case 'shift':
      case 'availability':
        output = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <p className="text-[#0df2c9] font-bold">OPERATIONAL SHIFT AVAILABILITY:</p>
            <p>• <span className="text-white font-semibold">Morning BCA Academics:</span> 08:00 AM – 01:00 PM IST (Aditya IMS)</p>
            <p>• <span className="text-[#0df2c9] font-semibold">Software Engineering Availability:</span> Afternoon, Evening & Full Night-Shift roles</p>
            <p>• <span className="text-zinc-400">Notice Period: Immediate joiner for internships & developer roles</span></p>
          </div>
        );
        break;

      case 'skills':
      case 'stack':
        output = (
          <div className="space-y-2 text-xs text-zinc-300">
            <p className="text-[#00f0ff] font-bold">CORE TECHNICAL ARSENAL:</p>
            <p><span className="text-zinc-400 font-mono">Languages:</span> JavaScript (ES6+), Python, C, C++, SQL</p>
            <p><span className="text-zinc-400 font-mono">Full-Stack MERN:</span> React.js, Node.js, Express.js, MongoDB, RESTful APIs, Tailwind CSS</p>
            <p><span className="text-zinc-400 font-mono">AI & ML:</span> Scikit-learn, Pandas, NumPy, Predictive Modeling</p>
            <p><span className="text-zinc-400 font-mono">Developer Tools:</span> GitHub Copilot, Cursor, LLM APIs, Git, GitHub, VS Code</p>
          </div>
        );
        break;

      case 'projects':
      case 'repos':
        output = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <p className="text-[#00f0ff] font-bold">FEATURED GITHUB REPOSITORIES:</p>
            {PROJECTS.map((p) => (
              <p key={p.id}>
                • <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#0df2c9] hover:underline font-bold">{p.title}</a>: {p.tagline} ({p.tags.slice(0, 3).join(', ')})
              </p>
            ))}
          </div>
        );
        break;

      case 'edu':
      case 'education':
        output = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <p className="text-[#38bdf8] font-bold">ACADEMIC TIMELINE:</p>
            {EDUCATION.map((e) => (
              <p key={e.id}>
                • <span className="text-white font-semibold">{e.institution}</span> — {e.degree} ({e.period}) {e.score ? `[${e.score}]` : ''}
              </p>
            ))}
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-[#fbbf24] font-bold">VERIFIED CERTIFICATIONS:</p>
            {CERTIFICATIONS.map((c) => (
              <p key={c.id}>
                • <span className="text-white font-semibold">{c.title}</span> ({c.issuer}, {c.date})
              </p>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-[#00f0ff] font-bold">DIRECT COMMUNICATIONS:</p>
            <p>• Email: <span className="text-white">vickyff699@gmail.com</span></p>
            <p>• Phone: <span className="text-white">+91 8310506391</span></p>
            <p>• GitHub: <a href="https://github.com/Vicky-hue-ui" target="_blank" rel="noopener noreferrer" className="text-[#0df2c9] hover:underline">https://github.com/Vicky-hue-ui</a></p>
          </div>
        );
        break;

      case 'email':
      case 'copy email':
        onCopyEmail();
        output = (
          <p className="text-xs text-[#0df2c9]">
            ✓ Copied vickyff699@gmail.com to clipboard!
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-xs text-red-400">
            command not found: {cmd}. Type <span className="text-[#00f0ff] underline">help</span> for valid directives.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: inputVal, output }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl h-[520px] rounded-2xl bg-[#0a0a0e] border border-[#262635] flex flex-col font-mono text-zinc-200 shadow-2xl overflow-hidden">
        
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-[#111116] border-b border-[#23232f] flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#f43f5e] cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
              <span className="w-3 h-3 rounded-full bg-[#0df2c9]" />
            </div>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-300 font-bold flex items-center gap-1">
              <TerminalIcon className="w-3.5 h-3.5 text-[#00f0ff]" />
              vicky@bengaluru:~ (zsh)
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1 rounded hover:bg-[#1f1f2a] text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Scroll Body */}
        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-mono">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-[#0df2c9]">vicky@samal:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-[#0d0d12] border-t border-[#23232f] flex items-center gap-2">
          <span className="text-[#0df2c9] text-xs font-bold font-mono pl-2">vicky@samal:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type 'help', 'projects', 'skills', 'contact'..."
            className="flex-1 bg-transparent border-none text-xs font-mono text-white outline-none placeholder-zinc-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-[#161622] hover:bg-[#202030] text-[#00f0ff] transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
};
