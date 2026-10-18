import React from "react";
import {
  MailIcon,
  WhatsappIcon,
  GithubIcon,
  LinkedinIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "./Icons";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let&apos;s Connect
        </h2>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          I&apos;m always interested in learning, sharing ideas, and connecting with people who care about building useful digital experiences.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {/* Email Card */}
          <a
            href="mailto:mdwakil2009@gmail.com"
            className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/60 transition-all duration-300 shadow-xl flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform shrink-0">
              <MailIcon className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-400 font-medium">Email Address</p>
              <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors truncate">
                mdwakil2009@gmail.com
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Click to send an email directly
              </p>
            </div>
            <ArrowRightIcon className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/8801924809025"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all duration-300 shadow-xl flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
              <WhatsappIcon className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-400 font-medium">WhatsApp</p>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                +880 1924-809025
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Chat directly via WhatsApp
              </p>
            </div>
            <ExternalLinkIcon className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 shrink-0 mt-1" />
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/wakil-ahammed/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 shadow-xl flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform shrink-0">
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-400 font-medium">LinkedIn Network</p>
              <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                linkedin.com/in/wakil-ahammed
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Professional connections &amp; updates
              </p>
            </div>
            <ExternalLinkIcon className="w-4 h-4 text-slate-500 group-hover:text-blue-400 shrink-0 mt-1" />
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/mdwakil2009"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-500 hover:bg-slate-800/60 transition-all duration-300 shadow-xl flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-slate-800 text-slate-300 group-hover:scale-110 transition-transform shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-400 font-medium">GitHub Repositories</p>
              <h3 className="text-base font-bold text-white group-hover:text-slate-200 transition-colors truncate">
                github.com/mdwakil2009
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Open-source repositories &amp; code
              </p>
            </div>
            <ExternalLinkIcon className="w-4 h-4 text-slate-500 group-hover:text-white shrink-0 mt-1" />
          </a>
        </div>

        {/* Call to action message card */}
        <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-center space-y-3">
          <p className="text-xs text-slate-400">
            Based in Bangladesh • Open to junior frontend roles, student apprenticeships, and collaborative projects.
          </p>
          <div>
            <a
              href="mailto:mdwakil2009@gmail.com?subject=Hello%20Wakil%20-%20From%20Portfolio"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-all border border-slate-700"
            >
              <MailIcon className="w-4 h-4 text-sky-400" />
              <span>Compose Quick Message via Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;