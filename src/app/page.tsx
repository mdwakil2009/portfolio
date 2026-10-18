import React from "react";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <HeroSection />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Project />
      <Contact />
      <Resume />
    </main>
  );
}
