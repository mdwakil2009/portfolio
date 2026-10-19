import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wakil Ahammed | Frontend Developer Portfolio",
  description:
    "Personal portfolio of Wakil Ahammed, a Frontend Developer and Diploma in CST student from Bangladesh specializing in React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Wakil Ahammed",
    "Frontend Developer",
    "Portfolio",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Bangladesh Developer",
    "Mymensingh Polytechnic Institute",
  ],
  authors: [{ name: "Wakil Ahammed", url: "https://github.com/mdwakil2009" }],
  creator: "Wakil Ahammed",
  openGraph: {
    title: "Wakil Ahammed | Frontend Developer Portfolio",
    description:
      "Explore responsive web applications, frontend projects, and technical skills by Wakil Ahammed.",
    url: "https://github.com/mdwakil2009",
    siteName: "Wakil Ahammed Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0f19] text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-200">
        <Navber />
        <div className="flex-1 w-full flex flex-col ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
