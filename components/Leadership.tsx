import Reveal from "./Reveal";

import {
  Users,
  Palette,
  Presentation,
  Award,
  ArrowUpRight,
} from "lucide-react";

const leadership = [
  {
    icon: <Palette size={30} />,
    title: "Graphics Head",
    organization: "Alegria 2025",
    description:
      "Led the complete creative branding for one of the biggest college festivals, managing a team of designers and ensuring consistent visual communication across digital and print media.",
    highlights: [
      "Led a team of 8+ designers",
      "Managed complete event branding",
      "Designed marketing creatives",
      "Coordinated with multiple committees",
    ],
  },
  {
    icon: <Users size={30} />,
    title: "Graphics Head",
    organization: "Pillai Student Council",
    description:
      "Managed the design vertical of the Student Council by planning, reviewing and delivering creatives for college initiatives while collaborating with multiple departments.",
    highlights: [
      "Creative leadership",
      "Cross-team collaboration",
      "Brand consistency",
      "Event promotions",
    ],
  },
  {
    icon: <Presentation size={30} />,
    title: "Business Analyst Intern",
    organization: "Cross-Functional Role",
    description:
      "Worked across business analysis, product coordination, documentation, testing, and stakeholder communication throughout the internship.",
    highlights: [
      "Requirement Gathering & Analysis",
      "BRD, FRD & User Story Documentation",
      "Stakeholder & Client Coordination",
      "UAT & Functional Testing",
    ],
  },
];

export default function Leadership() {
  return (
    <Reveal id="leadership">
      <section
        id="leadership"
        className="relative overflow-hidden bg-[#081120] px-6 py-28 text-white"
      >
        {/* Background Glow */}

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-20 text-center">

            <p className="uppercase tracking-[0.35em] text-blue-400">
              Leadership
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Leading Beyond the Classroom
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Leadership has helped me develop communication, ownership,
              collaboration and decision-making skills that directly translate
              into Business Analysis and Product Management.
            </p>

          </div>

          {/* Cards */}

          <div className="grid gap-8 lg:grid-cols-3">

            {leadership.map((item) => (

              <div
                key={item.title + item.organization}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-blue-500/15 p-4 text-blue-400 transition group-hover:scale-110">
                  {item.icon}
                </div>

                <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
                  {item.organization}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-8 space-y-3">

                  {item.highlights.map((point) => (

                    <div
                      key={point}
                      className="flex items-center gap-3 text-slate-300"
                    >

                      <ArrowUpRight
                        size={18}
                        className="text-blue-400"
                      />

                      <span>{point}</span>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

          {/* Bottom Achievement Card */}

          <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-10 backdrop-blur-xl">

            <div className="flex flex-col items-center gap-6 text-center">

              <div className="rounded-full bg-blue-500/20 p-5 text-blue-400">
                <Award size={42} />
              </div>

              <h3 className="text-3xl font-bold">
                Leadership Through Ownership
              </h3>

              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                Whether working with stakeholders, analyzing requirements, supporting product development, or leading creative teams, I enjoy taking ownership, bringing people together, and turning ideas into meaningful outcomes.
              </p>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}