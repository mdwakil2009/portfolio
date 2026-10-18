import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/project.json";
import {
  SparklesIcon,
  ExternalLinkIcon,
  GithubIcon,
  ArrowRightIcon,
} from "./Icons";

export interface ProjectType {
  id: number;
  slug: string;
  title: string;
  image: string;
  category: string;
  technologies: string[];
  description: string;
  live: string;
  github?: string;
  challenges: string[];
  future: string[];
}

const Project: React.FC = () => {
  const projects = projectsData as ProjectType[];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>Portfolio Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured Web Applications
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Real web projects built to practice modern frontend architectures, responsive design, and API integration.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-sky-300 border border-slate-700/70">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-950/70 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Actions Footer */}
            <div className="p-6 pt-0 mt-2 border-t border-slate-800/60 flex items-center justify-between gap-2">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
              >
                <span>View Details</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                    aria-label={`${project.title} GitHub Repository`}
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 border border-sky-500/30 text-xs font-medium transition-colors"
                  aria-label={`${project.title} Live Preview`}
                  title="Visit Live Application"
                >
                  <span>Live</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;