import React from "react";
import { SparklesIcon, CodeIcon, GraduationCapIcon, CheckCircleIcon } from "./Icons";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Passionate About Building Intuitive Web Interfaces
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Getting to know my learning journey, the types of problems I love solving, and my approach to modern frontend engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Natural Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-5">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Hi, I&apos;m <span className="font-semibold text-white">Wakil Ahammed</span>, a Frontend Developer from Bangladesh and a Diploma student in Computer Science and Technology at Mymensingh Polytechnic Institute.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              My journey into web development started with learning how websites are structured and styled. As I continued learning HTML, CSS, and JavaScript, I became fascinated by creating interactive and responsive user interfaces. I then transitioned into modern ecosystems—exploring React, Next.js, TypeScript, and utility-first styling tools to build practical, real-world web applications.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I enjoy turning ideas into clean interfaces, breaking down complex tasks into smaller manageable problems, creating modular components, and understanding how frontend applications interact with APIs. Building projects has helped me connect theoretical concepts with practical development workflows.
            </p>

            <div className="p-4 rounded-xl bg-slate-950/60 border-l-4 border-sky-500 text-slate-300 text-sm leading-relaxed">
              Hands-on projects like <span className="text-sky-300 font-medium">FitLog</span>, <span className="text-sky-300 font-medium">Bazar Dor</span>, and <span className="text-sky-300 font-medium">DevStack</span> have been instrumental in practicing responsive design, component architecture, and state management.
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I believe that becoming a better developer requires patience, continuous practice, curiosity, and a willingness to learn from mistakes. My current goal is to deepen my frontend engineering fundamentals, write clean and maintainable code, and build digital experiences that provide genuine value.
            </p>
          </div>
        </div>

        {/* Right Column: Three Pillars & Quick Details */}
        <div className="lg:col-span-5 space-y-4">
          {/* Pillar 1: Programming Journey */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                <CodeIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">Learning Progression</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Began with fundamental web concepts (HTML, CSS, JS), evolved into building single-page applications with React and Vite, and progressed to full-stack Next.js and TypeScript.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Type of Work I Enjoy */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                <SparklesIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">What I Enjoy Building</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Responsive user interfaces, reusable and maintainable component libraries, practical web tools, and seamless API data integration.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Academic Background */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <GraduationCapIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">Academic Foundation</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Diploma in Computer Science &amp; Technology at Mymensingh Polytechnic Institute, combining core computing principles with self-driven web engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Key Facts Summary */}
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircleIcon className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Location: Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircleIcon className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Role: Frontend Developer</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircleIcon className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Focus: React &amp; Next.js</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircleIcon className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Status: Active Learner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;