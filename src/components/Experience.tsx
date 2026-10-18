import React from "react";
import Link from "next/link";
import { BriefcaseIcon, ArrowRightIcon, CheckCircleIcon } from "./Icons";

interface ProjectExp {
  title: string;
  projectSlug: string;
  type: string;
  technologies: string[];
  summary: string;
  keyLearnings: string[];
}

const projectExperiences: ProjectExp[] = [
  {
    title: "Bazar Dor — Product Information & Price Comparison",
    projectSlug: "bazar-dor",
    type: "Personal Project • Modern Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    summary:
      "Engineered a Bangla-focused web application designed to help consumers explore daily commodity products and compare market prices.",
    keyLearnings: [
      "Built clean, localized responsive layouts with Next.js App Router and Tailwind CSS",
      "Integrated REST API endpoints and mapped structured JSON datasets into reusable UI components",
      "Organized clean category navigation and optimized client-side state transitions",
    ],
  },
  {
    title: "FitLog — Fitness & Workout Tracking Application",
    projectSlug: "fitlog",
    type: "Academic & Practice Project",
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    summary:
      "Developed an interactive workout exploration and tracking interface tailored for fitness enthusiasts seeking structured exercise plans.",
    keyLearnings: [
      "Architected reusable exercise cards, filter bars, and modal details with React components",
      "Ensured thorough responsiveness across mobile phones, tablets, and desktop displays",
      "Managed component state and handled asynchronous API data fetching gracefully",
    ],
  },
  {
    title: "DevStack — Developer Tech Stack Builder",
    projectSlug: "assignment-5",
    type: "Practical Utility Project",
    technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "Vite"],
    summary:
      "Created an interactive tool allowing developers to browse various software libraries, choose frameworks, and configure their custom stack.",
    keyLearnings: [
      "Implemented dynamic state manipulation with React Hooks (useState) in TypeScript",
      "Utilized Tailwind CSS and DaisyUI for rapid, consistent component styling",
      "Maintained strict prop types and clean component hierarchy",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <BriefcaseIcon className="w-3.5 h-3.5" />
          <span>Experience</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Practical Project Experience
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Hands-on development experience acquired by building, testing, and deploying practical web applications.
        </p>
      </div>

      {/* Transparent Disclaimer Box */}
      <div className="max-w-4xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3.5">
        <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0 mt-0.5">
          <BriefcaseIcon className="w-4 h-4" />
        </div>
        <div>
          <span className="font-semibold text-white">Student Developer Background:</span> As an active Diploma in Computer Science student, I do not list fabricated corporate employment. Instead, this section transparently outlines the authentic engineering challenges solved and technical experience earned through independent and academic projects.
        </div>
      </div>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {projectExperiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 mb-1.5">
                  {exp.type}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {exp.title}
                </h3>
              </div>

              <Link
                href={`/projects/${exp.projectSlug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 hover:underline shrink-0"
              >
                <span>View Details</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {exp.summary}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {exp.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-950/80 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Key Outcomes / Learnings */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Key Practical Takeaways:
              </h4>
              {exp.keyLearnings.map((item, kIdx) => (
                <div key={kIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircleIcon className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
