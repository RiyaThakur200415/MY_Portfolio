import React, { useEffect } from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, CERTIFICATIONS_DATA, EXPERIENCE_DATA, PROJECTS } from '../data/portfolioData';
import { X, Download, Printer, ExternalLink, Mail, Github, Linkedin, GraduationCap, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0a0f1d] border border-blue-900/40 rounded-3xl shadow-2xl text-slate-100 z-10 custom-scrollbar">
        
        {/* Sticky Action Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0a0f1d]/95 backdrop-blur-md border-b border-blue-900/30">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-cyan-400">
              RESUME · RIYA KUMARI
            </span>
            <span className="text-xs text-slate-400">· Computer Science & Engineering</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-500/20 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-white" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Paper View */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#060913]">
          
          {/* Header */}
          <div className="border-b border-slate-800/80 pb-6">
            <h1 className="text-3xl font-bold text-white mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-sm font-medium text-cyan-300 mb-3">
              Software Engineer · AI, Full Stack & Frontend Developer
            </div>
            
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.email}
              </span>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 text-slate-300">
                github.com/RiyaThakur200415
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 text-slate-300">
                linkedin.com/in/riya-kumari
              </a>
              <span>·</span>
              <span className="text-blue-400">{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-1">
              EDUCATION
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm font-bold text-white">{EDUCATION_DATA.institution}</div>
                <div className="text-xs text-slate-200">{EDUCATION_DATA.degree}</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Relevant Coursework: Data Structures & Algorithms, OOP, DBMS, OS, Computer Networks
                </div>
              </div>
              <div className="text-right text-xs font-mono">
                <span className="text-slate-400 block">{EDUCATION_DATA.duration}</span>
                <span className="text-cyan-300 font-bold">CGPA: {EDUCATION_DATA.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-1">
              TECHNICAL EXPERTISE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-slate-200">Languages: </span>
                <span className="text-slate-400">Java, Python, JavaScript, C</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Frontend: </span>
                <span className="text-slate-400">React.js, HTML5, CSS3, Streamlit, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Backend & APIs: </span>
                <span className="text-slate-400">Node.js, Express.js, FastAPI, REST APIs</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Databases: </span>
                <span className="text-slate-400">MongoDB, MySQL, SQLite</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">AI & Multi-Agent: </span>
                <span className="text-slate-400">LangGraph, LangChain, RAG, FAISS, Ollama, Groq</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Developer Tools: </span>
                <span className="text-slate-400">Git, GitHub, VS Code, Postman, Figma</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-1">
              SELECTED ENGINEERING PROJECTS
            </h2>
            
            {PROJECTS.slice(0, 5).map((p) => (
              <div key={p.id} className="space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm font-bold text-white">{p.title}</span>
                    <span className="text-xs text-slate-400 ml-2">[{p.techStack.join(', ')}]</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">{p.categoryTag}</span>
                </div>
                <p className="text-xs text-slate-200">{p.description}</p>
                <div className="text-xs text-slate-400 space-y-0.5 pl-3 border-l-2 border-slate-800">
                  {p.highlights.slice(0, 2).map((h, i) => (
                    <div key={i}>• {h}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-1">
              ENGINEERING & LEADERSHIP EXPERIENCE
            </h2>
            {EXPERIENCE_DATA.map((e) => (
              <div key={e.id} className="space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm font-bold text-white">{e.role}</span>
                    <span className="text-xs text-slate-400 ml-2">· {e.organization}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{e.period}</span>
                </div>
                <p className="text-xs text-slate-200">{e.description}</p>
                <div className="text-xs text-slate-400 space-y-0.5 pl-3 border-l-2 border-slate-800">
                  {e.bullets.slice(0, 3).map((b, i) => (
                    <div key={i}>• {b}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800/80 pb-1">
              CERTIFICATIONS
            </h2>
            <div className="space-y-2">
              {CERTIFICATIONS_DATA.map((c) => (
                <div key={c.id} className="flex justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-200">{c.title}</span>
                    <span className="text-slate-400"> — {c.issuer}</span>
                  </div>
                  <span className="font-mono text-slate-500">{c.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
