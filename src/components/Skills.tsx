import React from "react";
import { SparklesIcon, CodeIcon } from "./Icons";

interface SkillCategory {
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  skills: { name: string; tag?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Core technologies used to build modern, responsive, and accessible client interfaces.",
    badge: "Core Stack",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    skills: [
      { name: "HTML5", tag: "Markup" },
      { name: "CSS3", tag: "Styling" },
      { name: "JavaScript (ES6+)", tag: "Language" },
      { name: "React.js", tag: "Library" },
      { name: "Next.js (App Router)", tag: "Framework" },
      { name: "TypeScript", tag: "Typed JS" },
      { name: "Tailwind CSS", tag: "Utility CSS" },
      { name: "DaisyUI", tag: "Component UI" },
      { name: "Responsive Web Design", tag: "Mobile-first" },
    ],
  },
  {
    title: "Web Development Concepts",
    description: "Essential architectural paradigms and practices implemented across projects.",
    badge: "Concepts",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    skills: [
      { name: "Reusable Components" },
      { name: "React Hooks (useState, useEffect)" },
      { name: "REST API Integration" },
      { name: "JSON Data Handling" },
      { name: "Promises & Async / Await" },
      { name: "Client & Server Routing" },
      { name: "Form Handling & Validation" },
      { name: "Authentication Basics" },
    ],
  },
  {
    title: "Development Tools & Environment",
    description: "Workflow tools utilized for coding, version control, testing, and deployment.",
    badge: "Workflow",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    skills: [
      { name: "Visual Studio Code" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "npm (Node Package Manager)" },
      { name: "Vercel Platform" },
      { name: "Chrome DevTools" },
    ],
  },
  {
    title: "Currently Learning & Exploring",
    description: "Actively studying backend foundations and deepening fullstack engineering skills.",
    badge: "In Progress",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    skills: [
      { name: "Node.js Fundamentals" },
      { name: "Express.js" },
      { name: "Database Fundamentals" },
      { name: "MongoDB" },
      { name: "SQL Basics" },
      { name: "Advanced TypeScript Concepts" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <CodeIcon className="w-3.5 h-3.5" />
          <span>Technical Skills</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tools, Languages &amp; Practical Knowledge
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          An honest, organized overview of my established skills and technologies I am currently learning.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {cat.title}
                </h3>
                <span
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${cat.badgeColor}`}
                >
                  {cat.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                {cat.description}
              </p>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium hover:border-sky-500/40 hover:text-white hover:bg-slate-800/60 transition-all duration-150"
                  >
                    <span>{skill.name}</span>
                    {skill.tag && (
                      <span className="text-[10px] text-slate-500 group-hover:text-sky-400 font-mono">
                        • {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom info note if currently learning */}
            {cat.badge === "In Progress" && (
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-amber-300/80">
                <SparklesIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Actively strengthening backend and database fundamentals</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;