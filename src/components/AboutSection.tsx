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
  Terminal, 
  CheckCircle2 
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
    <section id="about" className="py-20 border-b border-[#1b1b24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#23232e] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] mb-2">
              <span>// 01. PROFILE OVERVIEW</span>
              <span className="text-zinc-600">[ IDENT_SYS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight">
              ENGINEERED FOR <span className="text-[#0df2c9]">PERFORMANCE</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400">
            <span>‹STATUS: READY_TO_BUILD/›</span>
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111116] border border-[#23232e] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00f0ff]/10 to-transparent pointer-events-none rounded-tr-2xl" />
              
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-4">
                <Terminal className="w-4 h-4 text-[#00f0ff]" />
                <span>whoami --summary</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-4">
                Full-Stack Developer bridging MERN applications with Machine Learning intelligence.
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans mb-4">
                {PERSONAL_INFO.bio}
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                Currently pursuing a <span className="text-zinc-200 font-medium">Bachelor of Computer Applications (BCA)</span> at Aditya Institute of Management Studies in Bengaluru. Combining strong fundamentals in C/C++, algorithms, and computer systems with practical modern engineering in React, Node.js, Express, MongoDB, and Python-driven predictive modeling.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-[#1f1f2a]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0df2c9] mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-zinc-200 block">Modern MERN Architecture</span>
                    <span className="text-zinc-400">REST APIs, state management & clean components</span>
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

            {/* Languages Spoken (Adrien Quechon brutalist chips) */}
            <div className="p-6 rounded-2xl bg-[#111116] border border-[#23232e]">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-4">
                <Globe2 className="w-4 h-4 text-[#0df2c9]" />
                <span>LANGUAGES SPOKEN // MULTI-LINGUAL FLUENCY</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PERSONAL_INFO.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 rounded-xl bg-[#16161f] border border-[#23232e] flex flex-col gap-1"
                  >
                    <span className="text-sm font-bold text-white font-sans">{lang.name}</span>
                    <span className="text-[10px] font-mono text-[#00f0ff]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Schedule & Interests */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Academic & Shift Schedule Card */}
            <div className="p-6 rounded-2xl bg-[#111116] border border-[#23232e]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#0df2c9] mb-4">
                <Clock className="w-4 h-4" />
                <span>DAILY OPERATIONAL SCHEDULE</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#161620] border border-[#262635] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-200 font-semibold flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#00f0ff]" />
                      Morning Academics (BCA)
                    </span>
                    <span className="text-[10px] text-zinc-400 bg-[#21212e] px-2 py-0.5 rounded">
                      08:00 – 13:00 IST
                    </span>
                  </div>
                  <span className="text-zinc-400 text-[11px] font-sans">
                    Aditya Institute of Management Studies, Bengaluru. Computer Science, DBMS & Advanced Mathematics.
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#161620] border border-[#262635] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0df2c9] font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Engineering & Night-Shift Window
                    </span>
                    <span className="text-[10px] text-[#0df2c9] bg-[#0df2c9]/10 px-2 py-0.5 rounded font-bold">
                      AVAILABLE
                    </span>
                  </div>
                  <span className="text-zinc-400 text-[11px] font-sans">
                    Full availability for remote software development, US/European team overlap, and nocturnal operational shifts.
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#161620] border border-[#262635] flex items-center justify-between text-[11px]">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                    Pincode
                  </span>
                  <span className="text-zinc-200 font-bold">560077 (Bengaluru)</span>
                </div>
              </div>
            </div>

            {/* Personal Interests Card */}
            <div className="p-6 rounded-2xl bg-[#111116] border border-[#23232e]">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-4">
                <span>INTERESTS & ACTIVITIES // OFF-SCREEN LIFE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERSONAL_INFO.interests.map((interest) => (
                  <div
                    key={interest.name}
                    className="p-3.5 rounded-xl bg-[#16161f] border border-[#23232e] hover:border-[#00f0ff]/50 transition-colors flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-[#111116] border border-[#262633] shrink-0">
                      {getInterestIcon(interest.icon)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white font-sans">{interest.name}</span>
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
