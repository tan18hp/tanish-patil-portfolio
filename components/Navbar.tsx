"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "./ActiveSectionContext";

const navItems = [
  {
    name: "About",
    href: "#about",
    id: "about",
  },
  {
    name: "Experience",
    href: "#experience",
    id: "experience",
  },
  {
    name: "Skills",
    href: "#skills",
    id: "skills",
  },
  {
    name: "Leadership",
    href: "#leadership",
    id: "leadership",
  },
  {
    name: "Case Studies",
    href: "#case-studies",
    id: "case-studies",
  },
  {
    name: "Contact",
    href: "#contact",
    id: "contact",
  },
];

export default function Navbar() {
  const { activeSection } = useActiveSection();

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-[#081120]/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-bold tracking-tight"
        >
          <span className="text-blue-500">Tanish</span>
          <span className="text-white">.</span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                className="relative py-2 text-sm font-medium"
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </span>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center">
          <a
            href="/resume.pdf"
            download="Tanish-Patil-Resume.pdf"
            className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.35)]"
          >
            Resume
          </a>
        </div>

      </div>
    </header>
  );
}