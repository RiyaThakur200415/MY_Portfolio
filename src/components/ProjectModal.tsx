import React, { useEffect } from 'react';
import { Project } from '../types';
import { InteractiveProjectDemo } from './InteractiveProjectDemos';
import { 
  X, 
  ExternalLink, 
  Github, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Workflow, 
  Code2, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0a0f1d] border border-blue-900/40 rounded-3xl shadow-2xl shadow-black/80 text-white z-10 custom-scrollbar">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0a0f1d]/95 backdrop-blur-md border-b border-blue-900/30">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
              {project.categoryTag}
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              Project #{project.number}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 bg-[#060913]">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            {project.tagline && (
              <p className="text-base text-cyan-300 font-medium">
                {project.tagline}
              </p>
            )}
          </div>

          {/* Interactive Sandbox / Mini Demo */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Live Preview & Sandbox</span>
            </div>
            <InteractiveProjectDemo type={project.caseStudy.interactiveType} />
          </div>

          {/* Tech Stack Bar (Zero-Pill clean typography) */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
              Technologies & Infrastructure
            </div>
            <div className="text-xs font-mono text-slate-300 leading-relaxed">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="text-cyan-300 font-medium">{tech}</span>
                  {idx < project.techStack.length - 1 && (
                    <span className="text-slate-600 mx-2" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Overview, Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                Overview
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                The Problem
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                The Solution
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Technical Architecture & Workflow */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-indigo-400" />
                  <span>{project.caseStudy.architectureTitle}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {project.caseStudy.architectureDescription}
                </p>
              </div>
            </div>

            {/* Step-by-Step Architecture Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.caseStudy.workflowSteps.map((s, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#080c14] border border-slate-800/80 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-400 font-bold">
                      STEP 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-200">
                      {s.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features & Engineering Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Key Features & Capabilities</span>
              </h4>
              <div className="space-y-2">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>Engineering & Architectural Highlights</span>
              </h4>
              <div className="space-y-2">
                {project.caseStudy.engineeringHighlights.map((high, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span>{high}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Actions Bar */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              VIT-AP Engineering Portfolio · Riya Kumari
            </div>

            <div className="flex items-center gap-3">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  <span>Launch Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Inspect Source on GitHub</span>
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
