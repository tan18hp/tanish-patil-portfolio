"use client";

import Reveal from "@/components/Reveal";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Lightbulb,
  Target,
  Users,
  Search,
  LayoutDashboard,
  Bell,
  FileText,
  Clock3,
} from "lucide-react";

const uiScreens = [
  {
    image: "/images/linkedin/my-applications-dashboard.png",
    title: "My Applications Dashboard",
    description:
      "A centralized workspace that gives candidates a clear overview of their active, completed and unresolved applications.",
  },
  {
    image: "/images/linkedin/application-detail-timeline.png",
    title: "Application Detail & Timeline",
    description:
      "A structured application view that makes the hiring journey easier to understand through clear milestones and status history.",
  },
  {
    image: "/images/linkedin/application-status-notifications.png",
    title: "Application Status Notifications",
    description:
      "Timely status updates keep candidates informed about meaningful changes instead of leaving them uncertain about application progress.",
  },
  {
    image: "/images/linkedin/resume-match-suggestions.png",
    title: "Resume Match & Suggestions",
    description:
      "Provides candidates with useful signals about how closely their profile matches a role and where their application can be strengthened.",
  },
  {
    image: "/images/linkedin/stale-application-management.png",
    title: "Stale Application Management",
    description:
      "Helps candidates identify applications that have remained inactive for an extended period and take appropriate action.",
  },
  {
    image: "/images/linkedin/recruiter-management-status-modal.png",
    title: "Recruiter Management & Status",
    description:
      "A structured recruiter workflow for managing candidate progress and communicating important hiring decisions.",
  },
];

const problems = [
  "Candidates often apply to multiple jobs but have limited visibility into what happens after applying.",
  "Application statuses can remain unchanged for long periods, creating uncertainty for candidates.",
  "Recruiters may complete hiring decisions without providing timely or meaningful feedback to applicants.",
  "Candidates need better signals to understand whether their profile is relevant to a particular role.",
];

const solutions = [
  "Create a centralized My Applications experience.",
  "Introduce clearer application timelines and status progression.",
  "Provide meaningful status notifications when application states change.",
  "Identify stale applications and surface them clearly to candidates.",
  "Introduce resume-to-job matching insights and improvement suggestions.",
  "Give recruiters a structured way to update candidate status.",
];

export default function LinkedInCaseStudy() {
  return (
    <main className="min-h-screen bg-[#081120] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-[40%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Back */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10">
        <a
          href="/#case-studies"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-400"
        >
          <ArrowLeft size={18} />
          Back to Case Studies
        </a>
      </div>

      {/* Hero */}
      <Reveal>
        <section className="relative z-10 px-6 pb-24 pt-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
              Product Design • UX Strategy
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Improving the
              <span className="text-blue-500"> LinkedIn Hiring Experience</span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">
              A product case study exploring how the job application and
              recruitment experience can become more transparent, informative
              and useful for both candidates and recruiters.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-slate-500">Focus</p>
                <p className="mt-2 font-semibold">
                  Hiring Experience
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-slate-500">Role</p>
                <p className="mt-2 font-semibold">
                  Product Thinking & UX
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-slate-500">Platform</p>
                <p className="mt-2 font-semibold">
                  Web
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Overview */}
      <Reveal>
        <section className="relative z-10 px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                Overview
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                The Problem
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-400">
                Applying for a job is only the beginning of the candidate
                journey. After submitting an application, candidates often
                have limited visibility into what is happening behind the
                scenes.
              </p>

              <p className="mt-5 text-lg leading-9 text-slate-400">
                An application can remain unchanged for days or weeks, while
                recruiters may already have moved forward with other
                candidates. This creates uncertainty and makes the job search
                feel less transparent.
              </p>

              <p className="mt-5 text-lg leading-9 text-slate-400">
                The opportunity was therefore to improve the post-application
                experience by helping candidates understand where they stand,
                what actions they can take and when meaningful changes happen.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8">
              <Target className="text-blue-400" size={34} />

              <h3 className="mt-6 text-2xl font-bold">
                Product Objective
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Make the hiring journey more transparent by improving
                application visibility, candidate feedback, recruiter
                communication and decision-making.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Problem */}
      <Reveal>
        <section className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                Discovery
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Key Problems Identified
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
                >
                  <div className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                      {index + 1}
                    </div>

                    <p className="leading-8 text-slate-300">
                      {problem}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* User Perspective */}
      <Reveal>
        <section className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <Users size={32} className="text-blue-400" />

                <h3 className="mt-6 text-2xl font-bold">
                  Candidate Perspective
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Candidates need clarity after applying. They should be able
                  to understand their application status, see meaningful
                  updates and know when an application has effectively become
                  inactive.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <BriefcaseIcon />

                <h3 className="mt-6 text-2xl font-bold">
                  Recruiter Perspective
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Recruiters need efficient ways to manage candidate
                  applications, update statuses and communicate important
                  decisions without creating unnecessary operational overhead.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Solution */}
      <Reveal>
        <section className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Solution
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Designing a More Transparent Hiring Journey
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-400">
              Instead of treating the application as a single event, the
              proposed experience turns it into a visible journey where
              candidates can understand progress and recruiters can manage
              communication more effectively.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <CheckCircle2
                    size={24}
                    className="mt-1 shrink-0 text-blue-400"
                  />

                  <p className="leading-7 text-slate-300">
                    {solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Features */}
      <Reveal>
        <section className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                Core Features
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                What the Experience Adds
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<LayoutDashboard />}
                title="Application Dashboard"
                text="A single place to monitor the complete application portfolio."
              />

              <FeatureCard
                icon={<Clock3 />}
                title="Application Timeline"
                text="A chronological view of meaningful application events."
              />

              <FeatureCard
                icon={<Bell />}
                title="Status Notifications"
                text="Important updates are surfaced when application states change."
              />

              <FeatureCard
                icon={<Search />}
                title="Resume Match"
                text="Provides useful signals around profile and job alignment."
              />

              <FeatureCard
                icon={<Clock3 />}
                title="Stale Applications"
                text="Makes inactive applications easier to identify and manage."
              />

              <FeatureCard
                icon={<FileText />}
                title="Recruiter Status Management"
                text="Provides recruiters with a structured candidate status workflow."
              />
            </div>
          </div>
        </section>
      </Reveal>

      {/* UI Screens */}
      <Reveal>
  <section className="relative z-10 px-6 py-24">
    <div className="mx-auto max-w-7xl">

      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Product Interface
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Designed Experience
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-400">
          The proposed interface brings these product ideas together
          through connected experiences for candidates and recruiters.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">

        {/* 1. My Applications Dashboard */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1728]">
            <img
              src="/images/linkedin/my-applications-dashboard.png"
              alt="My Applications Dashboard"
              className="block h-auto w-full"
            />
          </div>

          <div className="px-2 pb-2 pt-6">
            <h3 className="text-xl font-bold">
              My Applications Dashboard
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              A centralized workspace that gives candidates a clear
              overview of their active, completed and unresolved
              applications.
            </p>
          </div>

        </div>


        {/* 2. Application Detail & Timeline */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1728]">
            <img
              src="/images/linkedin/application-detail-timeline.png"
              alt="Application Detail and Timeline"
              className="block h-auto w-full"
            />
          </div>

          <div className="px-2 pb-2 pt-6">
            <h3 className="text-xl font-bold">
              Application Detail & Timeline
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              A structured application view that makes the hiring
              journey easier to understand through clear milestones
              and status history.
            </p>
          </div>

        </div>


        {/* 3. Application Status Notifications */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1728]">
            <img
              src="/images/linkedin/application-status-notifications.png"
              alt="Application Status Notifications"
              className="block h-auto w-full"
            />
          </div>

          <div className="px-2 pb-2 pt-6">
            <h3 className="text-xl font-bold">
              Application Status Notifications
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Timely status updates keep candidates informed about
              meaningful changes instead of leaving them uncertain
              about application progress.
            </p>
          </div>

        </div>


        {/* 4. Resume Match & Suggestions */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1728]">
            <img
              src="/images/linkedin/resume-match-suggestions.png"
              alt="Resume Match and Suggestions"
              className="block h-auto w-full"
            />
          </div>

          <div className="px-2 pb-2 pt-6">
            <h3 className="text-xl font-bold">
              Resume Match & Suggestions
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Provides candidates with useful signals about how
              closely their profile matches a role and where their
              application can be strengthened.
            </p>
          </div>

        </div>


        {/* 5. Stale Application Management */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1728]">

            <img
              src="/images/linkedin/stale-application-management.png"
              alt="Stale Application Management"
              className="block h-auto w-full"
            />

          </div>

          <div className="px-2 pb-2 pt-6">
            <h3 className="text-xl font-bold">
              Stale Application Management
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Helps candidates identify applications that have
              remained inactive for an extended period and take
              appropriate action.
            </p>
          </div>

        </div>


        {/* 6. Recruiter Management & Status */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1728]">

            <img
              src="/images/linkedin/recruiter-management-status-modal.png"
              alt="Recruiter Management and Status"
              className="block h-auto w-full"
            />

          </div>

          <div className="px-2 pb-2 pt-6">
            <h3 className="text-xl font-bold">
              Recruiter Management & Status
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              A structured recruiter workflow for managing candidate
              progress and communicating important hiring decisions.
            </p>
          </div>

        </div>

      </div>
    </div>
  </section>
</Reveal>

      {/* Product Thinking */}
      <Reveal>
        <section className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 p-10 md:p-14">
            <Lightbulb size={34} className="text-blue-400" />

            <h2 className="mt-6 text-3xl font-black md:text-4xl">
              Product Thinking Behind the Solution
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-bold">Reduce Uncertainty</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Give candidates clearer information instead of leaving them
                  to interpret an unchanged application status.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Improve Transparency</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Turn application progress into an understandable journey
                  rather than a single static status.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Support Better Decisions</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Give candidates and recruiters better information to decide
                  what to do next.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Outcome */}
      <Reveal>
        <section className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Expected Impact
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              A Better Experience for Both Sides
            </h2>

            <p className="mx-auto mt-7 max-w-4xl text-lg leading-9 text-slate-400">
              The proposed experience is designed to reduce candidate
              uncertainty, improve visibility into application progress and
              create a more structured communication loop between recruiters
              and applicants.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <ImpactCard
                title="More Visibility"
                text="Candidates can understand what is happening with their applications."
              />

              <ImpactCard
                title="Less Uncertainty"
                text="Meaningful notifications and stale-status indicators reduce ambiguity."
              />

              <ImpactCard
                title="Better Workflow"
                text="Recruiters receive a clearer structure for managing candidate status."
              />
            </div>
          </div>
        </section>
      </Reveal>

      {/* Conclusion */}
      <Reveal>
        <section className="relative z-10 px-6 pb-32 pt-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl md:p-14">
            <h2 className="text-3xl font-black md:text-4xl">
              Key Takeaway
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-400">
              This case study demonstrates how a familiar product experience
              can be examined through a product-thinking lens: identify user
              friction, understand the needs of different stakeholders and
              translate those problems into focused product improvements.
            </p>

            <a
              href="/#case-studies"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500"
            >
              Back to Case Studies
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </Reveal>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/30">
      <div className="inline-flex rounded-xl bg-blue-500/15 p-3 text-blue-400">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function ImpactCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function BriefcaseIcon() {
  return (
    <div className="inline-flex rounded-xl bg-blue-500/15 p-2 text-blue-400">
      <Briefcase size={32} />
    </div>
  );
}