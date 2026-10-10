import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Copy, Check, Send, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    // Create mailto link as seamless fallback
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    
    window.location.href = mailtoUrl;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#060913] border-t border-blue-950/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#0a0f1d] to-[#0d1527] border border-blue-900/40 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle multi-shade background glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left: Heading & Information */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono text-cyan-300 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Open for Engineering Roles & Internships</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Have an idea worth building?
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                Let's build something useful, intelligent and beautifully engineered.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                Whether you're a recruiter seeking a dedicated full-stack or AI engineer, a startup founder building the next breakthrough product, or an engineer wanting to collaborate—my inbox is always open.
              </p>

              {/* Display Email & Copy Button */}
              <div className="pt-2">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  Direct Inquiries
                </div>
                <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm font-mono text-white shadow-inner">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-xs text-emerald-400 font-mono block mt-1">
                    ✓ Email copied to clipboard!
                  </span>
                )}
              </div>

              {/* Social CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all hover:gap-2.5 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>Email Me</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:text-white transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:text-white transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>

            {/* Right: Quick Inquiry Form */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-sm font-semibold text-white">Send a Quick Message</h3>
                  <span className="text-[11px] font-mono text-cyan-400">Fast Response</span>
                </div>

                {isSent ? (
                  <div className="py-8 text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold text-white">Message Prepared</div>
                    <p className="text-xs text-slate-300 max-w-xs mx-auto">
                      Your default mail application has opened to deliver your note to {PERSONAL_INFO.email}.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="mt-4 text-xs text-cyan-400 hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs">
                    <div>
                      <label className="block text-slate-300 font-mono mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-mono mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-mono mb-1">Subject</label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Software Engineering Opportunity / Project Idea"
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-mono mb-1">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hi Riya, I came across your portfolio and wanted to discuss..."
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none shadow-inner"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-white" />
                      <span>Send Direct Message</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
