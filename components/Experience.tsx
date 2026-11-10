
import Reveal from "./Reveal";
import {
  Calendar,
  Briefcase,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    company: "mple.ai",
    role: "Product Manager",
    duration: "Sep 2026 – Present",
    color: "bg-blue-500",
    current: true,
    achievements: [
      "Work with clients and stakeholders to understand business challenges, identify pain points, and gather product requirements.",
  "Collaborate with technical teams to evaluate solutions, assess constraints, and define actionable product improvements.",
  "Translate client feedback into new features and product enhancements, aligning stakeholders on feasibility, priorities, and business value.",
  "Facilitate daily stand-ups, sprint discussions, and stakeholder meetings to track progress, coordinate execution, and resolve blockers.",
],
  },
  {
    company: "Benchmark Computer Solutions",
    role: "Business Analyst Intern",
    duration: "Jan 2026 – Apr 2026",
    color: "bg-cyan-500",
    achievements: [
      "Gathered and analyzed business requirements for enterprise applications.",
      "Prepared BRDs, FRDs, user stories and meeting documentation.",
      "Collaborated with stakeholders, developers and QA teams.",
      "Performed API validation using Postman and Swagger.",
      "Conducted UAT testing for Web and Mobile applications.",
      "Worked with Agile methodology and sprint-based delivery.",
    ],
  },
  {
    company: "Mercor",
    role: "Visual Content Creator",
    duration: "Aug 2025 – Jan 2026",
    color: "bg-indigo-500",
    achievements: [
      "Created high-quality visual assets to support AI model training and data generation.",
      "Worked extensively on Photoshop-based image editing and manipulation.",
      "Edited video content, including subtitles and visual enhancements, for AI training datasets.",
      "Maintained visual consistency and quality across multiple deliverables.",
    ],
  },
  {
    company: "Pillai College of Engineering",
    role: "Graphics Head",
    duration: "2024 – 2025",
    color: "bg-purple-500",
    achievements: [
      "Led a team of 8+ designers for college events and creative initiatives.",
      "Managed visual branding and creative execution for Alegria 2025.",
      "Conducted graphic design workshops and supported creative learning initiatives.",
      "Designed digital media and visual communication materials for college events.",
    ],
  },
];

export default function Experience() {
  return (
    <Reveal id="experience">
      <section
        id="experience"
        className="bg-[#081120] px-6 py-28 text-white"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.35em] text-blue-400">
              Experience
            </p>

            <h2 className="mt-4 text-5xl font-black">
              My Professional Journey
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              My journey has been focused on understanding products,
              collaborating with teams, and creating user-focused solutions
              through business analysis, product management, design and leadership.
            </p>
          </div>

          {/* Timeline */}

          <div className="relative">

            <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-blue-500/30"></div>

            <div className="space-y-16">

              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16">

                  {/* Timeline Dot */}

                  <div
                    className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full ${exp.color}`}
                  >
                    <Briefcase size={20} />
                  </div>

                  {/* Experience Card */}

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10">

                    {/* Role and Duration */}

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                      <div>

                        <div className="flex flex-wrap items-center gap-3">

                          <h3 className="text-3xl font-bold">
                            {exp.role}
                          </h3>

                          {exp.current && (
                            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
                              Currently Working
                            </span>
                          )}

                        </div>

                        <p className="mt-2 text-xl text-blue-400">
                          {exp.company}
                        </p>

                      </div>

                      <div className="mt-4 flex items-center gap-2 text-slate-400 md:mt-0">
                        <Calendar size={18} />
                        {exp.duration}
                      </div>

                    </div>

                    {/* Achievements */}

                    <div className="mt-8 space-y-4">

                      {exp.achievements.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={20}
                            className="mt-1 shrink-0 text-blue-400"
                          />

                          <p className="leading-7 text-slate-300">
                            {item}
                          </p>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}
