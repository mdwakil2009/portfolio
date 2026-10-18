import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 text-sm font-semibold mb-4 border border-sky-500/20">
        404 — Page Not Found
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
        Looking for a Project?
      </h1>
      <p className="text-slate-400 max-w-md text-sm sm:text-base mb-8 leading-relaxed">
        The page or project you requested could not be located. You can return to the portfolio homepage or browse the verified projects.
      </p>
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-sm shadow-lg shadow-sky-500/20 hover:from-sky-400 hover:to-indigo-500 transition-all"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        <span>Return to Projects</span>
      </Link>
    </main>
  );
}
