import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import projectsData from "@/data/project.json";
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  GithubIcon,
  CheckCircleIcon,
  SparklesIcon,
  CodeIcon,
} from "@/components/Icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "fitlog" },
    { slug: "bazar-dor" },
    { slug: "assignment-5" },
    { slug: "devstack" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find(
    (p) => p.slug === slug || (slug === "devstack" && p.slug === "assignment-5")
  );

  if (!project) {
    return {
      title: "Project Not Found | Wakil Ahammed",
    };
  }

  return {
    title: `${project.title} | Wakil Ahammed Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find(
    (p) => p.slug === slug || (slug === "devstack" && p.slug === "assignment-5")
  );

  if (!project) {
    notFound();
  }

  // Find other projects for quick navigation
  const otherProjects = projectsData.filter((p) => p.id !== project.id);

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-sm font-medium transition-all group"
        >
          <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Project Header */}
      <header className="space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">
          <span>{project.category}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          {project.description}
        </p>
      </header>

      {/* Interactive Action Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-slate-800">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-sm shadow-lg shadow-sky-500/25 hover:from-sky-400 hover:to-indigo-500 transition-all duration-200"
        >
          <span>Open Live Application</span>
          <ExternalLinkIcon className="w-4 h-4" />
        </a>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 font-medium text-sm transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        )}
      </div>

      {/* Main Showcase Image */}
      <div className="relative mb-14 rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={project.image}
            alt={`${project.title} high resolution preview`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1152px"
            className="object-contain sm:object-cover object-top"
          />
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Column: Tech Stack & Overview */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <CodeIcon className="w-5 h-5 text-sky-400" />
              <h3>Technology Stack</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Key libraries, frameworks, and tools utilized during implementation:
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-950 border border-slate-800 text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-500">Project Type:</span>
                <span className="text-slate-300 font-medium">{project.category}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-500">Author:</span>
                <span className="text-slate-300 font-medium">Wakil Ahammed</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Deployment:</span>
                <span className="text-emerald-400 font-medium">Verified Active Live Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Challenges & Future Improvements */}
        <div className="lg:col-span-7 space-y-6">
          {/* Challenges */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <SparklesIcon className="w-5 h-5 text-indigo-400" />
              <h3>Development Challenges</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Real engineering obstacles encountered during design and development, and how they were solved:
            </p>
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
                >
                  <CheckCircleIcon className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Potential Improvements & Proposed Future Plans */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <SparklesIcon className="w-5 h-5 text-amber-400" />
              <h3>Proposed Future Plans &amp; Enhancements</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Planned architectural upgrades and proposed feature extensions:
            </p>
            <ul className="space-y-3">
              {project.future.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Explore Other Projects Footer */}
      <section className="pt-12 border-t border-slate-800">
        <h2 className="text-xl font-bold text-white mb-6">Explore Other Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherProjects.map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.slug}`}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
            >
              <div>
                <p className="text-xs text-sky-400 font-semibold mb-1">{p.category}</p>
                <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                  {p.title}
                </h4>
              </div>
              <ArrowLeftIcon className="w-4 h-4 rotate-180 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
