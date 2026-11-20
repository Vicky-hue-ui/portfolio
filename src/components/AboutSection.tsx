import React from 'react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Clock, 
  Globe2, 
  Dumbbell, 
  Compass, 
  BookOpen, 
  Utensils, 
  CheckCircle2, 
  Mail,
  Send,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const AboutSection: React.FC = () => {
  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'dumbbell': return <Dumbbell className="w-4 h-4 text-[#00f0ff]" />;
      case 'compass': return <Compass className="w-4 h-4 text-[#0df2c9]" />;
      case 'book-open': return <BookOpen className="w-4 h-4 text-[#38bdf8]" />;
      case 'utensils': return <Utensils className="w-4 h-4 text-[#fbbf24]" />;
      default: return <User className="w-4 h-4 text-[#00f0ff]" />;
    }
  };

  return (
    <section id="about" className="py-24 border-b border-[#1b1b24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#23232e] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0df2c9]" />
              <span>// 01. PROFILE OVERVIEW</span>
              <span className="text-zinc-600">[ BENTO_GRID ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight">
              ENGINEERED FOR <span className="text-[#0df2c9]">PERFORMANCE</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400">
            <span>‹STATUS: READY_TO_BUILD/›</span>
          </div>
        </div>

        {/* Bento Grid Architecture (ui-ux-pro-max-skill inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Cell 1: Main Narrative (Col span 7) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#111116] border border-[#23232e] relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#00f0ff]/10 via-transparent to-transparent pointer-events-none rounded-tr-3xl" />
            
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-[#181824] border border-[#262638] text-[#00f0ff]">
                  BIOGRAPHY // SUMMARY
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-4 leading-snug">
                Full-Stack Developer bridging scalable MERN applications with Machine Learning intelligence.
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans mb-4">
                {PERSONAL_INFO.bio}
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                Currently pursuing a <span className="text-zinc-200 font-semibold">Bachelor of Computer Applications (BCA)</span> at Aditya Institute of Management Studies in Bengaluru. Combining strong fundamentals in C/C++, algorithms, and computer systems with practical modern engineering in React, Node.js, Express, MongoDB, and Python-driven predictive modeling.
              </p>
            </div>

            {/* Core Capability Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-[#1f1f2a]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0df2c9] mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-zinc-200 block">Modern MERN Architecture</span>
                  <span className="text-zinc-400">REST APIs, state management & modular React</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-zinc-200 block">Machine Learning Pipelines</span>
                  <span className="text-zinc-400">Scikit-learn, Pandas, NumPy data preprocessing</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-zinc-200 block">Security Mindset</span>
                  <span className="text-zinc-400">Vulnerability assessment & threat mitigation</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#fbbf24] mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-zinc-200 block">Night-Shift Availability</span>
                  <span className="text-zinc-400">Open for global time-zone & nocturnal shifts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Cell 2: Verified Developer Portrait Card (Col span 5) */}
          <div className="md:col-span-5 p-6 rounded-3xl bg-[#111116] border border-[#23232e] flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#00f0ff]" />
                VERIFIED DEVELOPER
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#0df2c9]/10 border border-[#0df2c9]/30 text-[#0df2c9] text-[10px] font-mono font-bold">
                BENGALURU • 560077
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#262635] aspect-[4/3] group">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt="Vicky Samal"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white font-sans">{PERSONAL_INFO.name}</h4>
                  <span className="text-xs font-mono text-[#00f0ff]">BCA Student & Full-Stack Dev</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#0df2c9] animate-ping" />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#1f1f2a] flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-zinc-400">Preferred Communication:</span>
                <span className="text-xs font-mono text-white font-semibold">Gmail Compose</span>
              </div>
              <a
                href={PERSONAL_INFO.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playConfirm()}
                className="px-3.5 py-2 rounded-xl bg-[#EA4335] hover:bg-[#d93025] text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-md transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Mail via Gmail</span>
                <Send className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Bento Cell 3: Schedule & Shift Window (Col span 6) */}
          <div className="md:col-span-6 p-6 sm:p-7 rounded-3xl bg-[#111116] border border-[#23232e] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#0df2c9] mb-4">
                <Clock className="w-4 h-4" />
                <span>DAILY OPERATIONAL SCHEDULE</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-[#161620] border border-[#262635] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-200 font-semibold flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#00f0ff]" />
                      Morning Academics (BCA Batch)
                    </span>
                    <span className="text-[10px] text-zinc-400 bg-[#21212e] px-2.5 py-0.5 rounded-full font-bold">
                      08:00 – 13:00 IST
                    </span>
                  </div>
                  <span className="text-zinc-400 text-[11px] font-sans">
                    Aditya Institute of Management Studies, Bengaluru. Computer Science, DBMS & System Architectures.
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#161620] border border-[#262635] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0df2c9] font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Engineering & Night-Shift Window
                    </span>
                    <span className="text-[10px] text-[#0df2c9] bg-[#0df2c9]/10 px-2.5 py-0.5 rounded-full font-bold border border-[#0df2c9]/20">
                      OPEN / READY
                    </span>
                  </div>
                  <span className="text-zinc-400 text-[11px] font-sans">
                    Full availability for remote software development, US/European team overlap, and nocturnal operational shifts.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1f1f2c] flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                Location Pincode
              </span>
              <span className="text-zinc-200 font-bold">560077 (Bengaluru, India)</span>
            </div>
          </div>

          {/* Bento Cell 4: Languages Spoken & Personal Interests (Col span 6) */}
          <div className="md:col-span-6 p-6 sm:p-7 rounded-3xl bg-[#111116] border border-[#23232e] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-4">
                <Globe2 className="w-4 h-4 text-[#0df2c9]" />
                <span>LANGUAGES SPOKEN // MULTI-LINGUAL</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                {PERSONAL_INFO.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 rounded-xl bg-[#16161f] border border-[#23232e] flex flex-col gap-1"
                  >
                    <span className="text-xs font-bold text-white font-sans">{lang.name}</span>
                    <span className="text-[10px] font-mono text-[#00f0ff] truncate">{lang.level}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-3">
                <span>INTERESTS & ACTIVITIES // OFF-SCREEN LIFE</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {PERSONAL_INFO.interests.map((interest) => (
                  <div
                    key={interest.name}
                    className="p-2.5 rounded-xl bg-[#16161f] border border-[#23232e] flex items-center gap-2.5"
                  >
                    <div className="p-1.5 rounded-lg bg-[#111116] border border-[#262633] shrink-0">
                      {getInterestIcon(interest.icon)}
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="text-xs font-bold text-white font-sans truncate">{interest.name}</span>
                      <span className="text-[10px] text-zinc-400 font-sans truncate">
                        {interest.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1f1f2c] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Disciplined lifestyle</span>
              <span className="text-[#0df2c9]">Continuous Growth Mindset</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
