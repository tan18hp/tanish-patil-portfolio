"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import {
  ArrowDown,
  MapPin,
  Briefcase,
  Users,
  FolderOpen,
  Target,
} from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={22} />,
    number: 2,
    suffix: "+",
    label: "Internships",
  },
  {
    icon: <Users size={22} />,
    number: 8,
    suffix: "+",
    label: "Leadership Roles",
  },
  {
    icon: <FolderOpen size={22} />,
    number: 3,
    suffix: "",
    label: "Case Studies",
  },
  {
    icon: <Target size={22} />,
    number: null,
    suffix: "",
    text: "Agile",
    label: "Product Mindset",
  },
];

export default function Hero() {
  const statsRef = useRef(null);

  const isInView = useInView(statsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-40 pb-24">
      <div className="mx-auto max-w-6xl text-center">

        {/* Open To Work */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="mb-12 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-6 py-3 text-green-300 backdrop-blur-xl"
        >
          <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>
          Open to Opportunities
        </motion.div>

        {/* Name */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="text-6xl font-black leading-none md:text-[8rem]"
        >
          Tanish <span className="text-blue-500">Patil</span>
        </motion.h1>

        {/* Headline */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="mx-auto mt-12 max-w-5xl text-2xl font-semibold leading-relaxed text-slate-300 md:text-4xl"
        >
          Analyzing Problems.
          <br />
          Building Solutions.
          <br />
          Delivering Impact.
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-9 text-slate-400"
        >
          Engineering graduate passionate about transforming ideas into digital
          products that solve real problems and create lasting value.
        </motion.p>

        {/* Location */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="mt-10 flex justify-center"
        >
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
            <MapPin size={18} className="text-blue-400" />
            Navi Mumbai, India
          </div>
        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >
          <a
            href="#case-studies"
            className="rounded-xl bg-blue-600 px-9 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,.35)]"
          >
            View Case Studies
          </a>

          <a
            href="/resume.pdf"
            className="rounded-xl border border-white/10 bg-white/5 px-9 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:bg-white/10"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Stats */}

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.2,
            duration: 1,
          }}
          className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(37,99,235,.18)]"
            >
              <div className="mb-5 inline-flex rounded-xl bg-blue-500/15 p-3 text-blue-400">
                {item.icon}
              </div>

              <h3 className="text-3xl font-black">
                {item.number !== null ? (
                  <AnimatedCounter
                    end={item.number}
                    suffix={item.suffix}
                    start={isInView}
                  />
                ) : (
                  item.text
                )}
              </h3>

              <p className="mt-2 text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-20 flex justify-center"
        >
          <ArrowDown
            size={32}
            className="text-blue-400"
          />
        </motion.div>

      </div>
    </section>
  );
}