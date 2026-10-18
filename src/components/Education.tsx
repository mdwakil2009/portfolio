import React from "react";
import { GraduationCapIcon, MapPinIcon, CheckCircleIcon } from "./Icons";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <GraduationCapIcon className="w-3.5 h-3.5" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Educational Qualification
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Formal engineering education providing foundational knowledge in computer science principles.
        </p>
      </div>

      {/* Education Card */}
      <div className="max-w-3xl mx-auto">
        <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl hover:border-slate-700 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <GraduationCapIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-1.5">
                  Diploma in Engineering
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Diploma in Computer Science and Technology
                </h3>
                <p className="text-base text-slate-300 font-medium mt-1">
                  Mymensingh Polytechnic Institute
                </p>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <MapPinIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bangladesh</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Pursuing formal technical education focusing on computer hardware, software engineering basics, networking, data structures, and computer algorithms. Combining academic classroom coursework with active hands-on web programming and modern frontend development.
          </p>

          {/* Core Areas Covered */}
          <div className="pt-5 border-t border-slate-800/80">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Core Technical Focus Areas:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Computer Science &amp; Programming Fundamentals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Database Concepts &amp; Management Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Data Structures &amp; Elementary Algorithms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Web Application Architecture &amp; Networking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
