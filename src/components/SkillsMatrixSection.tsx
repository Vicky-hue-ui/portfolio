import React, { useState } from 'react';
import { 
  Cpu, 
  Code, 
  Database, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Search 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const SkillsMatrixSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCategories = SKILL_CATEGORIES.map(cat => {
    const matchesCategory = selectedCategory === 'All' || cat.category === selectedCategory;
    if (!matchesCategory) return null;

    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.level.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery && filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: searchQuery ? filteredSkills : cat.skills
    };
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  return (
    <section id="skills" className="py-20 border-b border-[#1b1b24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-[#23232e] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] mb-2">
              <span>// 04. TECHNICAL COMPETENCIES</span>
              <span className="text-zinc-600">[ STACK_MATRIX ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight">
              DEVELOPER <span className="text-[#00f0ff]">TOOLKIT</span>
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g., React, Python)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#111116] border border-[#262635] focus:border-[#00f0ff] text-xs font-mono text-white placeholder-zinc-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs">
          <button
            onClick={() => {
              sound.playClick();
              setSelectedCategory('All');
            }}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              selectedCategory === 'All'
                ? 'bg-[#00f0ff] text-[#08080a] font-bold'
                : 'bg-[#111116] border border-[#23232e] text-zinc-400 hover:text-white'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              onClick={() => {
                sound.playClick();
                setSelectedCategory(cat.category);
              }}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                selectedCategory === cat.category
                  ? 'bg-[#00f0ff] text-[#08080a] font-bold'
                  : 'bg-[#111116] border border-[#23232e] text-zinc-400 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-[#111116] border border-[#23232e] hover:border-[#00f0ff]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold font-sans text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#0df2c9]" />
                  <span>{group.category}</span>
                </h3>
                <span className="text-[10px] font-mono text-zinc-500">
                  {group.skills.length} TECHNOLOGIES
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-400 mb-5">
                {group.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                      skill.highlight
                        ? 'bg-[#151520] border-[#2b2b3d] hover:border-[#00f0ff]/60'
                        : 'bg-[#121218] border-[#20202c] hover:border-zinc-600'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-[#00f0ff]' : 'bg-zinc-600'}`} />
                      <span className="text-xs font-semibold text-zinc-200 font-sans">
                        {skill.name}
                      </span>
                    </div>

                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      skill.highlight
                        ? 'text-[#0df2c9] bg-[#0df2c9]/10'
                        : 'text-zinc-500 bg-[#1a1a24]'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Developer Workflow Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-[#111116] border border-[#23232e] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#0df2c9]/10 text-[#0df2c9]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-zinc-200 font-bold block">AI-Augmented Development Cadence</span>
              <span className="text-zinc-400 text-[11px] font-sans">
                Accelerating clean architecture with Cursor AI, GitHub Copilot, strict typing, and automated unit testing.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
            <span className="px-2 py-1 rounded bg-[#161622] border border-[#242436]">VS Code</span>
            <span className="px-2 py-1 rounded bg-[#161622] border border-[#242436]">Git Workflow</span>
            <span className="px-2 py-1 rounded bg-[#161622] border border-[#242436]">REST Handlers</span>
          </div>
        </div>

      </div>
    </section>
  );
};
