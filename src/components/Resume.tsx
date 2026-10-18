"use client";

import React, { useState } from "react";
import {
  FileTextIcon,
  DownloadIcon,
  GraduationCapIcon,
  CodeIcon,
  BriefcaseIcon,
  MapPinIcon,
  MailIcon,
  ExternalLinkIcon,
} from "./Icons";

const Resume: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadNotice(
      "The verified PDF copy of my resume is currently being finalized and will be linked directly to /Wakil_Ahammed_Resume.pdf. For now, please review my complete verified qualifications below or contact me directly via email!"
    );
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <FileTextIcon className="w-3.5 h-3.5" />
          <span>Resume &amp; Qualifications</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Curriculum Vitae Overview
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Comprehensive summary of my technical competencies, education, and development experience.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Notice & Action Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900/90 border border-slate-800 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
              <span>PDF Ready Architecture</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Download Official Resume
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
              Drop <code className="text-sky-300 font-mono text-xs bg-slate-950 px-1.5 py-0.5 rounded">Wakil_Ahammed_Resume.pdf</code> into the public folder to enable instant direct file download.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleDownloadClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-sky-500/25 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </button>
          </div>
        </div>

        {/* Modal / Alert Notification if clicked */}
        {downloadNotice && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="p-1 rounded bg-amber-500/20 text-amber-400 shrink-0 font-bold">ℹ</span>
            <div className="flex-1">
              <p>{downloadNotice}</p>
            </div>
            <button
              onClick={() => setDownloadNotice(null)}
              className="text-amber-400 hover:text-white text-xs font-semibold px-2 py-0.5 rounded hover:bg-amber-500/20"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Resume Preview Sheet */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-8">
          {/* Header section of resume */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Wakil Ahammed
              </h3>
              <p className="text-sky-400 font-semibold text-sm mt-0.5">
                Frontend Developer • Diploma in CST Student
              </p>
            </div>
            <div className="text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPinIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>Mymensingh, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MailIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>mdwakil2009@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Education Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <GraduationCapIcon className="w-5 h-5 text-emerald-400" />
              <h4>Education</h4>
            </div>
            <div className="pl-7 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <span className="font-semibold text-slate-200">
                  Diploma in Computer Science and Technology
                </span>
                <span className="text-xs text-slate-400">Enrolled Student</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Mymensingh Polytechnic Institute, Bangladesh
              </p>
            </div>
          </div>

          {/* Technical Skills Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <CodeIcon className="w-5 h-5 text-sky-400" />
              <h4>Technical Competencies</h4>
            </div>
            <div className="pl-7 space-y-2 text-xs sm:text-sm">
              <p className="text-slate-300">
                <span className="font-semibold text-white">Frontend:</span> React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, DaisyUI, Responsive Web Design
              </p>
              <p className="text-slate-300">
                <span className="font-semibold text-white">Concepts:</span> Reusable Components, React Hooks, REST API Integration, JSON, Async/Await, Routing, Form Handling
              </p>
              <p className="text-slate-300">
                <span className="font-semibold text-white">Workflow &amp; Tools:</span> Git, GitHub, VS Code, npm, Vercel, Chrome DevTools
              </p>
            </div>
          </div>

          {/* Featured Projects Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <BriefcaseIcon className="w-5 h-5 text-indigo-400" />
              <h4>Featured Practical Projects</h4>
            </div>
            <div className="pl-7 space-y-4">
              {/* Project 1 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-200">FitLog — Fitness Tracker Web App</span>
                  <a
                    href="https://assigment-06-5xa1.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sky-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Live Demo</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-slate-400">
                  Built responsive fitness plan tracking with React, JavaScript, and Tailwind CSS.
                </p>
              </div>

              {/* Project 2 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-200">Bazar Dor — Product Price Comparison</span>
                  <a
                    href="https://bazar-dor-omega-ten.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sky-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Live Demo</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-slate-400">
                  Developed Bangla price comparison application with Next.js, React, TypeScript, and REST APIs.
                </p>
              </div>

              {/* Project 3 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-200">DevStack — Tech Stack Builder</span>
                  <a
                    href="https://assignment-5-dev-stack.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sky-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Live Demo</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-slate-400">
                  Built interactive stack selection and management tool using React, TypeScript, Tailwind, and DaisyUI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;