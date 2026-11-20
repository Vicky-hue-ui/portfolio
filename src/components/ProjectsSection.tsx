import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Code2, 
  Layers, 
  Check, 
  X 
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { sound } from '../utils/sound';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack MERN', 'Python & ML', 'Frontend & APIs'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleFilterClick = (cat: string) => {
    sound.playClick(800);
    setSelectedCategory(cat);
  };

  const handleOpenModal = (project: Project) => {
    sound.playClick(900);
    setActiveModalProject(project);
  };

  const handleCloseModal = () => {
    sound.playClick(600);
    setActiveModalProject(null);
  };

  return (
    <section id="projects" className="py-20 border-b border-[#1b1b24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-[#23232e] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] mb-2">
              <span>// 02. SELECTED WORK & REPOSITORIES</span>
              <span className="text-zinc-600">[ GITHUB: @Vicky-hue-ui ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight">
              FEATURED <span className="text-[#00f0ff]">PROJECTS</span>
            </h2>
          </div>

          {/* GitHub Profile Direct Link */}
          <a
            href="https://github.com/Vicky-hue-ui"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playHover()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111116] border border-[#282836] hover:border-[#00f0ff] text-zinc-300 hover:text-white transition-all text-xs font-mono w-fit"
          >
            <Github className="w-4 h-4 text-[#00f0ff]" />
            <span>View All Repositories (@Vicky-hue-ui)</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#00f0ff] text-[#08080a] font-bold shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)]'
                    : 'bg-[#111116] border border-[#23232e] text-zinc-400 hover:border-zinc-500 hover:text-white'
                }`}
              >
                <span>{cat}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#08080a]" />}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#111116] border border-[#23232e] hover:border-[#00f0ff]/60 transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.15)] relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00f0ff]/40 to-transparent group-hover:via-[#00f0ff] transition-all" />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                  <span className="flex items-center gap-1.5 text-[#0df2c9]">
                    <Code2 className="w-3.5 h-3.5" />
                    {project.category}
                  </span>
                  <span className="text-zinc-600 font-mono">0{idx + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-sans text-white group-hover:text-[#00f0ff] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-mono text-zinc-400 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics / Key highlights pill */}
                {project.metrics && (
                  <div className="p-2.5 rounded-lg bg-[#161622] border border-[#252536] text-[11px] font-mono text-zinc-300 mb-4 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </div>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#181822] text-zinc-300 text-[10px] font-mono border border-[#262635]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[#1e1e2b] text-xs font-mono">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="text-[#00f0ff] hover:text-[#0df2c9] transition-colors flex items-center gap-1 font-semibold"
                  >
                    <span>View Architecture</span>
                    <Layers className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playHover()}
                      className="p-1.5 rounded-lg bg-[#181822] hover:bg-[#232332] text-zinc-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playHover()}
                        className="p-1.5 rounded-lg bg-[#181822] hover:bg-[#232332] text-[#0df2c9] hover:text-white transition-colors"
                        title="Open Live Deployment / Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: CineSphere & foodiee Focus */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111116] via-[#161622] to-[#111116] border border-[#232330] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] shrink-0">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-sans text-white">
                Featured Repositories on GitHub: <span className="text-[#00f0ff]">CineSphere</span> & <span className="text-[#0df2c9]">foodiee</span>
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-2xl font-sans">
                Full-stack implementations demonstrating decoupled RESTful APIs, responsive React frontends, resilient Express routers, and asynchronous data fetching.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Vicky-hue-ui?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#1d1d28] hover:bg-[#00f0ff] hover:text-[#08080a] text-zinc-200 border border-[#2d2d3e] font-mono text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>EXPLORE @Vicky-hue-ui</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#111116] border border-[#28283a] p-6 sm:p-8 font-mono text-[#ededf2] shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#181822] hover:bg-[#232332] text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 text-xs text-[#00f0ff] mb-2">
              <Code2 className="w-4 h-4" />
              <span>PROJECT SPECIFICATION // {activeModalProject.category}</span>
            </div>

            <h3 className="text-2xl font-black font-sans text-white mb-1">
              {activeModalProject.title}
            </h3>
            <p className="text-xs text-zinc-400 mb-4 font-mono">
              {activeModalProject.tagline}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
              <p>{activeModalProject.description}</p>

              {/* Architectural Highlights */}
              <div className="p-4 rounded-xl bg-[#161622] border border-[#262638]">
                <span className="text-xs font-mono text-[#0df2c9] font-bold block mb-2">
                  KEY ARCHITECTURAL HIGHLIGHTS:
                </span>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#00f0ff] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-2">STACK & LIBRARIES:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#181824] border border-[#28283a] text-zinc-300 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Links */}
            <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-[#23232e]">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#1a1a26] hover:bg-[#252536] text-white text-xs font-mono flex items-center gap-2 border border-[#2e2e42]"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#00f0ff] hover:bg-[#0df2c9] text-[#08080a] text-xs font-mono font-bold flex items-center gap-2"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
