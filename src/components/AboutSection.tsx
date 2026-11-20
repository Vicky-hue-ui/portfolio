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
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

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
              <span className="text-zinc-600">[ ABOUT_ME ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-brand text-white tracking-tight">
              ENGINEERED FOR <span className="text-[#0df2c9]">PERFORMANCE</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400">
            <span>‹STATUS: READY_TO_BUILD/›</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Narrative & Core Engineering Pillars (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#111116] border border-[#23232e] relative overflow-hidden shadow-xl">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-4">
                <span className="px-3 py-1 rounded-md bg-[#181824] border border-[#262638] text-[#00f0ff]">
                  BIOGRAPHY // SUMMARY
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-brand text-white mb-4 leading-snug">
                Full-Stack Developer bridging scalable MERN applications with Machine Learning intelligence.
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans mb-4">
                {PERSONAL_INFO.bio}
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                Currently pursuing a <span className="text-zinc-200 font-semibold">Bachelor of Computer Applications (BCA)</span> at Aditya Institute of Management Studies in Bengaluru. Combining strong fundamentals in C/C++, algorithms, and computer systems with practical modern engineering in React, Node.js, Express, MongoDB, and Python-driven predictive modeling.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#1f1f2a]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0df2c9] mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-zinc-200 block text-sm">Modern MERN Architecture</span>
                    <span className="text-zinc-400">REST APIs, state management & modular React</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00f0ff] mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-zinc-200 block text-sm">Machine Learning Pipelines</span>
                    <span className="text-zinc-400">Scikit-learn, Pandas, NumPy data preprocessing</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#38bdf8] mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-zinc-200 block text-sm">Security Mindset</span>
                    <span className="text-zinc-400">Vulnerability assessment & threat mitigation</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#fbbf24] mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-zinc-200 block text-sm">Night-Shift Availability</span>
                    <span className="text-zinc-400">Open for global time-zone & nocturnal shifts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#111116] border border-[#23232e] shadow-xl">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-4">
                <Globe2 className="w-4 h-4 text-[#0df2c9]" />
                <span>LANGUAGES SPOKEN // MULTI-LINGUAL FLUENCY</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PERSONAL_INFO.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3.5 rounded-2xl bg-[#16161f] border border-[#23232e] flex flex-col gap-1"
                  >
                    <span className="text-sm font-bold text-white font-brand">{lang.name}</span>
                    <span className="text-[11px] font-mono text-[#00f0ff]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Schedule & Personal Interests (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Daily Operational Schedule */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#111116] border border-[#23232e] shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#0df2c9] mb-4">
                  <Clock className="w-4 h-4" />
                  <span>DAILY OPERATIONAL SCHEDULE</span>
                </div>

                <div className="space-y-3.5 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-[#161620] border border-[#262635] flex flex-col gap-1.5">
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

                  <div className="p-4 rounded-2xl bg-[#161620] border border-[#262635] flex flex-col gap-1.5">
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

              <div className="mt-5 pt-4 border-t border-[#1f1f2c] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                  Base Location
                </span>
                <span className="text-zinc-200 font-bold">Bengaluru (560077), India</span>
              </div>
            </div>

            {/* Personal Interests Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#111116] border border-[#23232e] shadow-xl">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-4">
                <span>INTERESTS & ACTIVITIES // OFF-SCREEN LIFE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERSONAL_INFO.interests.map((interest) => (
                  <div
                    key={interest.name}
                    className="p-3.5 rounded-2xl bg-[#16161f] border border-[#23232e] hover:border-[#00f0ff]/50 transition-colors flex items-start gap-3"
                  >
                    <div className="p-2 rounded-xl bg-[#111116] border border-[#262633] shrink-0">
                      {getInterestIcon(interest.icon)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white font-brand">{interest.name}</span>
                      <span className="text-[10px] text-zinc-400 font-sans mt-0.5 leading-tight">
                        {interest.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
