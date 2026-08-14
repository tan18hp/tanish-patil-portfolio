import Reveal from "./Reveal";

import {
  Briefcase,
  Users,
  Lightbulb,
  Target,
  GraduationCap,
} from "lucide-react";

const cards = [
  {
    icon: <Briefcase size={32} />,
    title: "Business Analysis",
    description:
      "Requirement gathering, BRDs, FRDs, user stories, process mapping and translating business needs into functional solutions.",
  },
  {
    icon: <Users size={32} />,
    title: "Stakeholder Management",
    description:
      "Collaborating with clients, developers, QA teams and business stakeholders to ensure smooth product delivery.",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Product Thinking",
    description:
      "Passionate about solving user problems through structured thinking, feature prioritization and customer-centric decisions.",
  },
  {
    icon: <Target size={32} />,
    title: "Agile Delivery",
    description:
      "Experienced with Agile workflows, sprint planning, UAT testing, documentation and cross-functional collaboration.",
  },
];

export default function About() {
  return (
    <Reveal id="about">
      <section
        id="about"
        className="relative overflow-hidden bg-[#081120] px-6 py-28 text-white"
      >
        {/* Background Glow */}
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Heading */}

          <div className="mb-20 text-center">
            <p className="mb-3 uppercase tracking-[0.35em] text-blue-400">
              About Me
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Building products that solve
              <span className="text-blue-500"> real-world problems.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-400">
              I'm an aspiring Product Manager and Business Analyst with
              experience in requirement gathering, stakeholder collaboration,
              product documentation, API validation, UAT testing and Agile
              delivery. I enjoy transforming ideas into products that create
              meaningful value for users and businesses.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-500/15 p-4 text-blue-400 transition group-hover:scale-110">
                  {card.icon}
                </div>

                <h3 className="mb-4 text-2xl font-bold">{card.title}</h3>

                <p className="leading-8 text-slate-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education */}

          <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="rounded-2xl bg-blue-500/15 p-5 text-blue-400">
                <GraduationCap size={38} />
              </div>

              <div>
                <p className="uppercase tracking-[0.3em] text-blue-400">
                  Education
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  B.Tech in Electronics & Computer Science
                </h3>

                <p className="mt-3 text-lg text-slate-400">
                  Pillai College of Engineering, Navi Mumbai
                </p>

                <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                  Built a strong foundation in technology and problem-solving while developing leadership, 
                  communication, and creative skills through student organizations, event coordination, 
                  and graphic design workshops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}