import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle2 
} from 'lucide-react';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const ExperienceEducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'certifications' | 'education'>('all');

  const handleTabChange = (tab: 'all' | 'experience' | 'certifications' | 'education') => {
    sound.playClick(750);
    setActiveTab(tab);
  };

  return (
    <section id="experience" className="py-20 border-b border-[#1b1b24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-[#23232e] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#0df2c9] mb-2">
              <span>// 03. CAREER TRAJECTORY & CREDENTIALS</span>
              <span className="text-zinc-600">[ TIMELINE_SYS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight">
              EXPERIENCE, EDUCATION & <span className="text-[#0df2c9]">CERTS</span>
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#111116] border border-[#23232e] font-mono text-xs">
            {(['all', 'experience', 'certifications', 'education'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-3 py-1.5 rounded-lg transition-colors capitalize ${
                  activeTab === tab
                    ? 'bg-[#0df2c9] text-[#08080a] font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Experience & Certifications */}
          {(activeTab === 'all' || activeTab === 'experience' || activeTab === 'certifications') && (
            <div className={`${activeTab === 'all' ? 'lg:col-span-7' : 'lg:col-span-12'} flex flex-col gap-8`}>
              
              {/* Experience Subheading */}
              {(activeTab === 'all' || activeTab === 'experience') && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] mb-4">
                    <Briefcase className="w-4 h-4" />
                    <span>PROFESSIONAL INTERNSHIPS</span>
                  </div>

                  <div className="space-y-6">
                    {EXPERIENCES.map((exp) => (
                      <div
                        key={exp.id}
                        className="p-6 rounded-2xl bg-[#111116] border border-[#23232e] hover:border-[#00f0ff]/50 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-lg font-bold font-sans text-white">
                              {exp.role}
                            </h3>
                            <span className="text-sm font-semibold text-[#00f0ff]">
                              {exp.company}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-400">
                            <span className="flex items-center gap-1 bg-[#181822] px-2.5 py-1 rounded border border-[#252536]">
                              <Calendar className="w-3 h-3 text-[#0df2c9]" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1 bg-[#181822] px-2.5 py-1 rounded border border-[#252536]">
                              <MapPin className="w-3 h-3 text-zinc-400" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Deliverables List */}
                        <div className="space-y-2 mb-4">
                          {exp.achievements.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0df2c9] mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Skills Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1e1e2b]">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded bg-[#161622] text-[#0df2c9] text-[10px] font-mono border border-[#26263a]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications Subheading */}
              {(activeTab === 'all' || activeTab === 'certifications') && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#fbbf24] mb-4">
                    <Award className="w-4 h-4" />
                    <span>PROFESSIONAL CERTIFICATIONS</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {CERTIFICATIONS.map((cert) => (
                      <div
                        key={cert.id}
                        className="p-5 rounded-2xl bg-[#111116] border border-[#23232e] hover:border-[#fbbf24]/50 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
                            <span className="text-[#fbbf24] font-semibold">{cert.issuer}</span>
                            <span>{cert.date}</span>
                          </div>

                          <h4 className="text-sm font-bold font-sans text-white mb-2">
                            {cert.title}
                          </h4>

                          <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-3">
                            {cert.description}
                          </p>
                        </div>

                        {/* Topics */}
                        <div className="flex flex-wrap gap-1 pt-3 border-t border-[#1e1e2b]">
                          {cert.topics.map((t) => (
                            <span
                              key={t}
                              className="px-1.5 py-0.5 rounded bg-[#181822] text-zinc-400 text-[9px] font-mono"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Right Column: Formal Education */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className={`${activeTab === 'all' ? 'lg:col-span-5' : 'lg:col-span-12'} flex flex-col gap-6`}>
              <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
                <GraduationCap className="w-4 h-4" />
                <span>FORMAL EDUCATION & ACADEMICS</span>
              </div>

              <div className="space-y-6">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-6 rounded-2xl bg-[#111116] border border-[#23232e] hover:border-[#38bdf8]/50 transition-colors relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-[#38bdf8] font-bold">
                        {edu.period}
                      </span>
                      {edu.score && (
                        <span className="px-2 py-0.5 rounded bg-[#38bdf8]/10 text-[#38bdf8] text-[10px] font-mono font-bold border border-[#38bdf8]/20">
                          {edu.score}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold font-sans text-white mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-xs font-mono text-zinc-300 mb-3">
                      {edu.degree}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{edu.location}</span>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 pt-3 border-t border-[#1f1f2c]">
                      {edu.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400 font-sans">
                          <ChevronRight className="w-3.5 h-3.5 text-[#38bdf8] mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
