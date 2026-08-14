"use client";

import Reveal from "./Reveal";

import {
  Briefcase,
  HeartHandshake,
  BrainCircuit,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const caseStudies = [
  {
    icon: <Briefcase size={34} />,
    title: "eFORCE",
    subtitle: "Business Analysis • Enterprise Product",
    description:
      "A Business Analyst case study covering requirement gathering, stakeholder coordination, documentation, API validation, UAT testing and the Connect Button workflow within an enterprise construction management platform.",
    status: "Available",
    href: "/case-studies/eforce",
  },
  {
    icon: <HeartHandshake size={34} />,
    title: "LinkedIn Hiring Experience",
    subtitle: "Product Design • UX Strategy",
    description:
      "A product case study exploring improvements to the hiring experience, with a focus on candidate communication, recruiter workflows and a more transparent job-search journey.",
    status: "Available",
    href: "/case-studies/linkedin/",
  },
  {
    icon: <BrainCircuit size={34} />,
    title: "KinFy — Community Expression Platform",
    subtitle: "Product Design • UX Strategy",
    description:
      "A product case study focused on helping people express themselves, discover meaningful connections and build conversations through a more human-centered digital experience.",
    status: "Available",
    href: "/case-studies/kinfy",
  },
];

export default function CaseStudies() {
  return (
    <Reveal>
      <section
        id="case-studies"
        className="relative overflow-hidden bg-[#081120] px-6 py-28 text-white"
      >
        {/* Background Glow */}

        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.35em] text-blue-400">
              Case Studies
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Product Thinking in Action
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              A collection of projects that demonstrate how I approach
              problems through business analysis, product thinking,
              stakeholder collaboration, UX strategy and structured execution.
            </p>
          </div>

          {/* Case Study Cards */}

          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <a
                key={study.title}
                href={study.href}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_20px_70px_rgba(37,99,235,0.12)]"
              >
                {/* Icon */}

                <div className="mb-6 inline-flex w-fit rounded-2xl bg-blue-500/15 p-4 text-blue-400 transition duration-500 group-hover:scale-110 group-hover:bg-blue-500/20">
                  {study.icon}
                </div>

                {/* Category */}

                <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
                  {study.subtitle}
                </span>

                {/* Title */}

                <h3 className="mt-3 text-2xl font-bold transition group-hover:text-blue-400">
                  {study.title}
                </h3>

                {/* Description */}

                <p className="mt-5 flex-grow leading-8 text-slate-400">
                  {study.description}
                </p>

                {/* Footer */}

                <div className="mt-8 flex items-center justify-between">
                  <div className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300">
                    {study.status}
                  </div>

                  <div className="flex items-center gap-2 text-blue-400">
                    <span className="text-sm font-medium">
                      View Case Study
                    </span>

                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}

          <div className="mt-20 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 p-10 backdrop-blur-xl">
            <div className="text-center">

              <h3 className="text-3xl font-bold">
                More projects. More problems. More solutions.
              </h3>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Each case study highlights a different aspect of my approach
                — from understanding business requirements and working with
                stakeholders to designing user experiences and thinking
                through product strategy.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold transition duration-300 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.3)]"
              >
                Let's Connect
                <ExternalLink size={18} />
              </a>

            </div>
          </div>

        </div>
      </section>
    </Reveal>
  );
}