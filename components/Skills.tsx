import Reveal from "./Reveal";

import {
  Briefcase,
  Boxes,
  Monitor,
  PenTool,
  BrainCircuit,
} from "lucide-react";

const skillCategories = [
  {
    title: "Business Analysis",
    icon: <Briefcase size={28} />,
    skills: [
      "Requirement Gathering",
      "BRD",
      "FRD",
      "User Stories",
      "Stakeholder Management",
      "UAT Testing",
      "Process Mapping",
      "Agile Methodology",
    ],
  },
  {
    title: "Product Management",
    icon: <Boxes size={28} />,
    skills: [
      "Product Thinking",
      "Roadmapping",
      "Feature Prioritization",
      "Problem Solving",
      "Market Research",
      "Competitive Analysis",
      "Product Documentation",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Monitor size={28} />,
    skills: [
      "Jira",
      "Notion",
      "Postman",
      "Swagger",
      "MySQL",
      "Excel",
      "Google Sheets",
      "Slides",
    ],
  },
  {
    title: "Design & Creativity",
    icon: <PenTool size={28} />,
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
      "Canva",
      "UI/UX",
      "Wireframing",
    ],
  },
  {
    title: "Technical Skills",
    icon: <BrainCircuit size={28} />,
    skills: [
      "Python",
      "SQL",
      "AWS",
      "API Testing",
      "Prompt Engineering",
      "Generative AI",
    ],
  },
];

export default function Skills() {
  return (
    <Reveal id="skills">
      <section
        id="skills"
        className="relative overflow-hidden bg-[#081120] px-6 py-28 text-white"
      >
        {/* Background Glow */}

        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>

        <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-20 text-center">

            <p className="uppercase tracking-[0.35em] text-blue-400">
              Skills
            </p>

            <h2 className="mt-4 text-5xl font-black">
              My Professional Toolkit
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              A combination of business analysis, product thinking,
              technical knowledge and creative problem solving that
              helps transform ideas into successful digital products.
            </p>

          </div>

          {/* Skill Cards */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {skillCategories.map((category) => (

              <div
                key={category.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-blue-500/15 p-4 text-blue-400 transition group-hover:scale-110">
                  {category.icon}
                </div>

                <h3 className="mb-6 text-2xl font-bold">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 transition duration-300 hover:bg-blue-500 hover:text-white"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}