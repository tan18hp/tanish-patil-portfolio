"use client";

import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#081120] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Left */}

        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-blue-500">Tanish</span>.
          </h2>

          <p className="mt-2 text-slate-400">
            Business Analyst • Product Management • Project Management
          </p>
        </div>

        {/* Center */}

        {/*
<div className="text-center text-slate-400">
  <p>
    © {new Date().getFullYear()} Tanish Patil.
  </p>

  <p className="mt-2 flex items-center justify-center gap-2">
    Built with Next.js
    <Heart size={16} className="text-red-500" />
    Tailwind CSS
  </p>
</div>
*/}

        {/* Right */}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full bg-blue-600 p-3 transition hover:bg-blue-500"
        >
          <ArrowUp size={22} />
        </button>

      </div>
    </footer>
  );
}