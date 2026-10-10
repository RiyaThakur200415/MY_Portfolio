import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060c] border-t border-slate-900 py-12 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand & Subtitle */}
          <div className="text-center md:text-left">
            <div className="text-lg font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400 mb-1">
              RIYA KUMARI
            </div>
            <div className="text-xs font-mono text-cyan-400">
              Software Engineer • AI • Full Stack • Frontend
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-slate-500 hover:text-cyan-400 transition-colors" />
              <span className="text-xs">GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-slate-500 hover:text-cyan-400 transition-colors" />
              <span className="text-xs">LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4 text-slate-500 hover:text-cyan-400 transition-colors" />
              <span className="text-xs">LeetCode</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4 text-slate-500 hover:text-cyan-400 transition-colors" />
              <span className="text-xs">Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800 hover:border-cyan-500/50 flex items-center gap-1.5 text-xs font-mono shadow-md cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 font-mono">
          <div>
            © 2026 Riya Kumari. Built with curiosity and code.
          </div>
          <div className="text-slate-400">
            VIT-AP University · Computer Science & Engineering
          </div>
        </div>

      </div>
    </footer>
  );
};
