import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
  MapPinIcon,
  FileTextIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "./Icons";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Intro */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Building practical web experiences</span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <MapPinIcon className="w-3.5 h-3.5 text-sky-400" />
              Bangladesh
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-sm sm:text-base font-semibold text-sky-400 tracking-wide uppercase flex items-center justify-center lg:justify-start gap-2">
              <SparklesIcon className="w-4 h-4 text-sky-400" />
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Wakil Ahammed
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-400 via-indigo-300 to-indigo-500 bg-clip-text text-transparent">
              Frontend Developer
            </h2>
          </div>

          {/* Introduction Quote */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            I build responsive, user-friendly web interfaces using modern frontend technologies. I enjoy turning ideas into practical web experiences and continuously improving my development skills through hands-on projects.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-sm shadow-lg shadow-sky-500/25 hover:from-sky-400 hover:to-indigo-500 hover:shadow-sky-500/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span>View My Projects</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span>Contact Me</span>
            </Link>

            <Link
              href="#resume"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-sky-300 hover:text-sky-200 font-medium text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <FileTextIcon className="w-4 h-4" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-slate-800/80 w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Connect With Me:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/mdwakil2009"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/wakil-ahammed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:mdwakil2009@gmail.com"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-red-400 hover:border-red-500/50 hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Send Email"
              >
                <MailIcon className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/8801924809025"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="WhatsApp Chat"
              >
                <WhatsappIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Photo with Glow */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group max-w-sm sm:max-w-md w-full">
            {/* Ambient Backlight Gradient */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

            {/* Photo Container */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
              <div className="aspect-[4/5] relative w-full overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Wakil Ahammed - Frontend Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Subtle Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/60 p-3 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">Wakil Ahammed</p>
                  <p className="text-[11px] text-slate-400">Diploma in CST • Frontend Dev</p>
                </div>
                <div className="px-2 py-1 rounded-md bg-sky-500/10 text-[10px] font-medium text-sky-400 border border-sky-500/30">
                  Open to Learn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;