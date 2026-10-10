import React, { useState } from 'react';
import { ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectFilters } from './ProjectFilters';
import { TiltCard } from './TiltCard';
import { 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Workflow
} from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering logic
  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory =
      selectedCategory === 'All' || proj.category === selectedCategory;

    const matchesSearch =
      searchQuery.trim() === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      proj.categoryTag.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Refined theme for each project card to give rich high-tech blue, cyan and deep dark depth
  const getProjectTheme = (category: string, id: string) => {
    return {
      cardBg: 'bg-[#0c1222]/90',
      border: 'border-blue-900/40 hover:border-blue-700/60',
      tagColor: 'text-cyan-400',
      flowBg: 'bg-blue-950/40 border-blue-800/40 text-slate-300',
      flowIcon: 'text-cyan-400',
      btnBg: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-blue-500/20',
    };
  };

  return (
    <section id="projects" className="py-24 relative bg-[#060913] border-t border-blue-950/40 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/3 w-[650px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[550px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold mb-3">
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Work
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              A collection of systems, products, and experiments I've built.
            </p>
          </div>

          <div className="text-xs font-mono text-cyan-400 bg-blue-950/40 px-3.5 py-1.5 rounded-xl border border-blue-800/40">
            Engineered with modern frameworks, agents & clean architecture.
          </div>
        </div>

        {/* Filter & Search Bar */}
        <ProjectFilters
          currentCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalCount={PROJECTS.length}
          filteredCount={filteredProjects.length}
        />

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center bg-[#091124]/60 border border-blue-500/20 rounded-2xl">
            <p className="text-slate-400 text-sm">No projects matching your search criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Projects Cards List with Alternating Layouts */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const theme = getProjectTheme(project.category, project.id);

            return (
              <TiltCard
                key={project.id}
                staggerIndex={idx}
                tiltIntensity={4}
                className={`group relative ${theme.cardBg} border ${theme.border} rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-2xl ${
                  project.isProminent ? 'ring-1 ring-cyan-500/30' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column (or Right if alternating): Content Details */}
                  <div className={`lg:col-span-6 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    
                    {/* Header: Category & Number */}
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-2 text-xs font-mono ${theme.tagColor} font-semibold tracking-wider`}>
                        <span>{project.categoryTag}</span>
                      </div>
                      <span className="text-sm font-mono text-cyan-300/60 font-bold px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900/50">
                        {project.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {project.title}
                      </h3>
                      {project.tagline && (
                        <p className="text-xs sm:text-sm text-cyan-300/80 font-mono mt-1">
                          {project.tagline}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architecture Workflow Graphic */}
                    {project.architectureFlow && project.architectureFlow.length > 0 && (
                      <div className="p-3.5 rounded-2xl bg-[#060c1c]/90 border border-blue-500/20 space-y-2">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <Workflow className={`w-3.5 h-3.5 ${theme.flowIcon}`} />
                          <span>System Architecture Flow</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-slate-300">
                          {project.architectureFlow.map((step, i) => (
                            <React.Fragment key={step}>
                              <span className={`px-2 py-0.5 rounded-lg border ${theme.flowBg}`}>
                                {step}
                              </span>
                              {i < project.architectureFlow.length - 1 && (
                                <span className="text-cyan-400/60 px-0.5">→</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${theme.tagColor} mt-0.5 shrink-0`} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack (Zero-Pill clean typography) */}
                    <div className="pt-2 border-t border-blue-900/40">
                      <div className="text-xs font-mono text-slate-400">
                        {project.techStack.map((tech, i) => (
                          <React.Fragment key={tech}>
                            <span className="text-slate-200 hover:text-cyan-300 transition-colors">{tech}</span>
                            {i < project.techStack.length - 1 && (
                              <span className="text-slate-600 mx-1.5" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: Live Demo and Source ONLY */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {/* Live Demo Button (not present for AI Customer Support Swarm) */}
                      {project.id !== 'customer-support-swarm' && (
                        project.isLiveDemoPending ? (
                          <button
                            type="button"
                            onClick={() => {
                              if (project.githubUrl) window.open(project.githubUrl, '_blank');
                            }}
                            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white ${theme.btnBg} shadow-md transition-all hover:gap-2.5`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </button>
                        ) : (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white ${theme.btnBg} shadow-md transition-all hover:gap-2.5`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )
                      )}

                      {/* Source Button */}
                      {project.isSourceInactive ? (
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 bg-[#091124] border border-blue-900/40 cursor-not-allowed opacity-80"
                          title="Source repository being indexed"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </button>
                      ) : project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all hover:gap-2.5 ${
                            project.id === 'customer-support-swarm'
                              ? 'text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 shadow-md shadow-blue-600/30 hover:from-blue-500 hover:to-cyan-500'
                              : 'text-slate-200 bg-[#091124] hover:bg-[#0f1b3b] border border-blue-500/25'
                          }`}
                        >
                          <Github className="w-3.5 h-3.5 text-cyan-300" />
                          <span>Source</span>
                        </a>
                      ) : null}
                    </div>

                  </div>

                  {/* Right Column: Visual Mockup / Direct Demo Launch on Click */}
                  <div className={`lg:col-span-6 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div 
                      onClick={() => {
                        const targetUrl = project.liveDemoUrl && project.liveDemoUrl !== '#' 
                          ? project.liveDemoUrl 
                          : project.githubUrl;
                        if (targetUrl && targetUrl !== '#') {
                          window.open(targetUrl, '_blank');
                        }
                      }}
                      className="relative rounded-2xl overflow-hidden border border-blue-500/25 bg-[#060c1a] cursor-pointer group/img transition-all hover:border-cyan-400/60 shadow-2xl"
                      title={project.liveDemoUrl && project.liveDemoUrl !== '#' ? `Open Live Demo for ${project.title}` : `Open Source on GitHub for ${project.title}`}
                    >
                      {/* Image container */}
                      <div className="aspect-[16/10] overflow-hidden bg-slate-950 relative">
                        <img
                          src={project.image}
                          alt={`${project.title} Interface Mockup`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                          onError={(e) => {
                            if (project.fallbackImage && e.currentTarget.src !== project.fallbackImage) {
                              e.currentTarget.src = project.fallbackImage;
                            } else {
                              e.currentTarget.style.display = 'none';
                            }
                          }}
                        />

                        {/* Top bar overlay badge */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#070e20]/85 backdrop-blur-md border border-blue-500/30 text-[10px] font-mono text-cyan-200 shadow-md">
                          {project.category}
                        </div>

                        {/* Hover Overlay Button to open Live Demo */}
                        <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-xs shadow-xl flex items-center gap-2">
                            <span>
                              {project.liveDemoUrl && project.liveDemoUrl !== '#' ? 'Launch Live Application' : 'Inspect Source Code'}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      {/* Mockup sub-caption */}
                      <div className="p-3 bg-[#081126] border-t border-blue-900/40 flex items-center justify-between text-[11px] font-mono text-slate-300">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse shadow-sm shadow-emerald-400/80" />
                          {project.liveDemoUrl && project.liveDemoUrl !== '#' ? 'Live Web Deployment' : 'Open Source Repository'}
                        </span>
                        <span className="text-cyan-400 flex items-center gap-1 font-semibold group-hover/img:underline">
                          <span>{project.liveDemoUrl && project.liveDemoUrl !== '#' ? 'Launch Live App' : 'View Source'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
