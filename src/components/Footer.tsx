import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "./Icons";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#080c14] text-slate-400 py-14 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                W
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Wakil Ahammed
              </span>
            </div>
            <p className="text-sm text-sky-400 font-medium">
              Frontend Developer • Diploma in CST Student
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Building responsive, intuitive, and modern web interfaces using React, Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link href="/#home" className="hover:text-sky-400 transition-colors">
                Home
              </Link>
              <Link href="/#about" className="hover:text-sky-400 transition-colors">
                About Me
              </Link>
              <Link href="/#skills" className="hover:text-sky-400 transition-colors">
                Skills
              </Link>
              <Link href="/#education" className="hover:text-sky-400 transition-colors">
                Education
              </Link>
              <Link href="/#experience" className="hover:text-sky-400 transition-colors">
                Experience
              </Link>
              <Link href="/#projects" className="hover:text-sky-400 transition-colors">
                Projects
              </Link>
              <Link href="/#contact" className="hover:text-sky-400 transition-colors">
                Contact
              </Link>
              <Link href="/#resume" className="hover:text-sky-400 transition-colors">
                Resume
              </Link>
            </div>
          </div>

          {/* Connect Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Connect Directly
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/mdwakil2009"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/wakil-ahammed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:mdwakil2009@gmail.com"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-red-400 hover:border-red-500/40 transition-colors"
                aria-label="Email Me"
              >
                <MailIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801924809025"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp Message"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              Location: Mymensingh, Bangladesh
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Wakil Ahammed. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js, React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
