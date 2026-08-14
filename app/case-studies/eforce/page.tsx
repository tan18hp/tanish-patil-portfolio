"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  Users,
  Workflow,
  Database,
  Code2,
  FileText,
  TestTube2,
  Lightbulb,
  Target,
  Building2,
  MessageSquare,
  Layers3,
  Search,
  GitBranch,
  AlertCircle,
} from "lucide-react";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

/* ============================================================= */
/* ANIMATION */
/* ============================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

/* ============================================================= */
/* DATA */
/* ============================================================= */

const connectStates = [
  {
    title: "Sent",
    description:
      "The user initiates a connection request and the request moves into a pending state.",
  },
  {
    title: "Received",
    description:
      "The recipient receives the request and can choose to accept or decline it.",
  },
  {
    title: "Connected",
    description:
      "Once accepted, users can continue the interaction through communication options such as chat or call.",
  },
  {
    title: "Declined",
    description:
      "A declined request moves into a defined state, with a reason captured as part of the workflow.",
  },
  {
    title: "Closed",
    description:
      "If an ongoing interaction does not progress, the connection can be closed with an appropriate outcome.",
  },
];

const responsibilities = [
  "Requirement analysis and clarification",
  "BRD, FRD and user story preparation",
  "Workflow and functional analysis",
  "Stakeholder coordination and follow-ups",
  "Meeting discussions and MoM preparation",
  "Figma and design review",
  "API validation using Postman and Swagger",
  "MySQL-based data understanding",
  "Web and mobile UAT",
  "Issue identification and retesting",
];

const functionalRules = [
  "A connection request is generated when a user initiates a connection.",
  "The recipient receives a notification.",
  "The request remains pending until the recipient takes action.",
  "The recipient can accept or decline the request.",
  "A decline requires a reason.",
  "An accepted request enables further communication.",
  "Connection activity remains accessible through the Connect area.",
];

const challenges = [
  {
    icon: <MessageSquare size={24} />,
    title: "Bringing Offline Interaction Into the Product",
    description:
      "The existing matching experience could move the interaction outside the platform. The Connect feature required that post-match interaction to become a structured digital workflow.",
  },
  {
    icon: <GitBranch size={24} />,
    title: "Managing Multiple Connection States",
    description:
      "The workflow needed clearly defined states and appropriate actions for pending, accepted, declined, connected and closed interactions.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Supporting Multiple Companies",
    description:
      "The Multi-Company requirement introduced considerations around company relationships, user roles, login context and data visibility.",
  },
  {
    icon: <Layers3 size={24} />,
    title: "Connecting Operational Modules",
    description:
      "Work Order, Billing and DPR information needed to be understood as interconnected parts of the broader project execution workflow.",
  },
  {
    icon: <Workflow size={24} />,
    title: "Translating Requirements Into Behaviour",
    description:
      "High-level business requirements had to be converted into clear user actions, system states, rules and edge cases.",
  },
  {
    icon: <TestTube2 size={24} />,
    title: "Validating Across Platforms",
    description:
      "Implemented functionality needed to be checked across both web and mobile experiences against expected behaviour.",
  },
];

/* ============================================================= */
/* PAGE */
/* ============================================================= */

export default function EforceCaseStudy() {
  return (
    <main className="min-h-screen bg-[#081120] text-white">

      {/* ========================================================= */}
      {/* TOP NAVIGATION */}
      {/* ========================================================= */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081120]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>

          <div className="hidden text-sm text-slate-500 md:block">
            Business Analyst Case Study
          </div>

          <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-300">
            Confidential Project
          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden px-6 pb-28 pt-24">

        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute right-0 top-60 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
              <Briefcase size={16} />
              Business Analyst Internship
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
              eFORCE
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-400">
              A Business Analysis case study exploring how I contributed to
              requirement analysis, functional documentation, product
              thinking, stakeholder coordination, API validation and UAT
              across an enterprise construction and workforce management
              platform.
            </p>

          </motion.div>

          {/* Project Meta */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Role
              </p>
              <p className="mt-2 font-semibold">
                Business Analyst Intern
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Domain
              </p>
              <p className="mt-2 font-semibold">
                Construction & Workforce Management
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Platform
              </p>
              <p className="mt-2 font-semibold">
                Enterprise Web & Mobile
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Focus
              </p>
              <p className="mt-2 font-semibold">
                BA + Product Thinking
              </p>
            </div>

          </motion.div>

          {/* Confidentiality */}

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">

            <ShieldCheck
              className="mt-1 shrink-0 text-amber-400"
              size={22}
            />

            <p className="text-sm leading-7 text-slate-400">
              Due to project confidentiality, proprietary application
              screens, client information, internal identifiers and sensitive
              system details are not displayed. This case study focuses on
              the product problem, functional reasoning, workflows and
              sanitized evidence.
            </p>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* PROJECT OVERVIEW */}
      {/* ========================================================= */}

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="01 — Project Overview"
            title="Understanding the Product"
            description="eFORCE is an enterprise digital platform designed to support construction and workforce management operations through a centralized digital environment."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                The Product Ecosystem
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                The platform brings together several operational workflows
                including project management, labour requirements, supply
                management, work orders, daily progress reporting, billing,
                vendor information and multi-company operations.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                During my internship, I contributed to an enhancement
                initiative focused on expanding these capabilities and
                bringing more construction-related processes into structured
                digital workflows.
              </p>

            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-8">

              <p className="text-sm uppercase tracking-widest text-blue-400">
                Product Objective
              </p>

              <h3 className="mt-4 text-3xl font-black">
                Transforming construction operations into connected digital
                workflows.
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                The work covered five major enhancement areas: Connect,
                Work Order, Billing, DPR and Multi-Company.
              </p>

            </div>

          </div>

          {/* Product Ecosystem */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">

            <p className="text-sm uppercase tracking-widest text-blue-400">
              Product Ecosystem
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {[
                ["DISCOVER", "Project / Requisition / Supply / Matching"],
                ["CONNECT", "Connection / Conversation"],
                ["EXECUTE", "Work Order / Activities"],
                ["MONITOR", "DPR / Productivity"],
                ["TRACK", "Billing / Status"],
                ["SCALE", "Multi-Company / Data Separation"],
              ].map(([title, text]) => (

                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >

                  <p className="font-bold text-blue-400">
                    {title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* EXISTING EXPERIENCE */}
      {/* ========================================================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="02 — The Problem"
            title="From Finding a Match to Managing What Happens Next"
            description="The existing matching experience solved discovery, but the interaction after the match could move outside the platform."
          />

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">

            <div className="rounded-3xl border border-red-500/20 bg-red-500/[0.04] p-8">

              <p className="mb-6 text-sm uppercase tracking-widest text-red-400">
                Existing Experience
              </p>

              <FlowStep text="Match Found" />
              <FlowArrow />
              <FlowStep text="View Contact Information" />
              <FlowArrow />
              <FlowStep text="Interaction Moves Offline" />

            </div>

            <div>

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-xl bg-red-500/10 p-3 text-red-400">
                  <AlertCircle size={24} />
                </div>

                <h3 className="text-2xl font-bold">
                  The Digital Gap
                </h3>

              </div>

              <p className="leading-8 text-slate-400">
                The platform could help users answer:
                <span className="font-semibold text-slate-200">
                  {" "}“Who is relevant to my requirement?”
                </span>
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                However, there was limited visibility into what happened after
                the match. Interactions, decisions and outcomes could move
                outside the application.
              </p>

              <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

                <p className="text-sm uppercase tracking-widest text-blue-300">
                  Product Opportunity
                </p>

                <p className="mt-3 text-xl font-semibold leading-8 text-slate-200">
                  Move from simply identifying matches to managing the
                  interaction after the match.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* MY ROLE */}
      {/* ========================================================= */}

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="03 — My Role"
            title="Working Across the Product Lifecycle"
            description="My role sat between business requirements, product workflows, design, development and quality validation."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {responsibilities.map((item, index) => (

              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >

                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-400">
                  {index + 1}
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  {item}
                </p>

              </div>

            ))}

          </div>

          {/* Lifecycle */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">

            <p className="text-sm uppercase tracking-widest text-blue-400">
              Delivery Lifecycle
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

              {[
                "Requirement",
                "Design",
                "Development",
                "Validation",
              ].map((item, index) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <span className="rounded-full bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300">
                    {item}
                  </span>

                  {index < 3 && (
                    <ArrowRight
                      size={18}
                      className="text-slate-600"
                    />
                  )}

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* CONNECT FEATURE DEEP DIVE */}
      {/* ========================================================= */}

      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="04 — Feature Deep Dive"
            title="Connect: More Than Just a Button"
            description="The Connect feature became one of the strongest examples of product thinking during the project."
          />

          <div className="mt-14 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.08] to-transparent p-8 md:p-12">

            <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">

              <div>

                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Initial Requirement
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  “Users should be able to connect when a relevant match is
                  found.”
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  A simple interpretation could have been to add a Connect
                  button. But functional analysis showed that the requirement
                  involved an entire interaction lifecycle.
                </p>

              </div>

              <div className="hidden text-5xl text-blue-500 lg:block">
                →
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-7">

                <p className="text-sm uppercase tracking-widest text-blue-300">
                  Product Questions
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">

                  <li>Who receives the request?</li>
                  <li>What status should be displayed?</li>
                  <li>What happens after acceptance?</li>
                  <li>What happens after rejection?</li>
                  <li>Should a reason be captured?</li>
                  <li>How does conversation continue?</li>
                  <li>How can previous connections be tracked?</li>
                  <li>What happens when the opportunity does not progress?</li>

                </ul>

              </div>

            </div>

          </div>

          {/* Connection Journey */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">

            <p className="text-sm uppercase tracking-widest text-blue-400">
              Connection Journey
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

              {[
                "Match Found",
                "Connect",
                "Request Sent",
                "Notification",
                "Accept / Decline",
                "Conversation",
                "Continue / Close",
              ].map((step, index) => (

                <div
                  key={step}
                  className="flex items-center gap-3"
                >

                  <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200">
                    {step}
                  </span>

                  {index < 6 && (
                    <ArrowRight
                      size={18}
                      className="text-blue-500"
                    />
                  )}

                </div>

              ))}

            </div>

          </div>

          {/* States */}

          <div className="mt-12">

            <h3 className="text-3xl font-black">
              Connection States
            </h3>

            <p className="mt-4 max-w-3xl leading-8 text-slate-400">
              Each stage required a clear system state and expected behaviour.
              This helped turn a simple interaction into a manageable
              workflow.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">

              {connectStates.map((state) => (

                <div
                  key={state.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >

                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <CheckCircle2 size={20} />
                  </div>

                  <h4 className="text-lg font-bold">
                    {state.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {state.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Negative Outcomes */}

          <div className="mt-12 rounded-3xl border border-amber-500/20 bg-amber-500/[0.04] p-8 md:p-10">

            <p className="text-sm uppercase tracking-widest text-amber-400">
              Handling Negative Outcomes
            </p>

            <h3 className="mt-4 text-3xl font-black">
              Designing for unsuccessful interactions too
            </h3>

            <p className="mt-5 max-w-4xl leading-8 text-slate-400">
              The workflow could not focus only on successful connections.
              When a request was declined, the user was required to provide a
              reason. Similarly, an ongoing interaction could be closed with
              an appropriate outcome when it did not progress.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">

              {[
                "Match",
                "Request",
                "Decision",
                "Outcome",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/10 p-5 text-center font-semibold text-slate-200"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SUPPORTING PRODUCT AREAS */}
      {/* ========================================================= */}

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="05 — Supporting Product Areas"
            title="Understanding the Wider Platform"
            description="Connect was the strongest example of my product thinking, while the other modules helped me understand how different enterprise workflows connect together."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            <FeatureCard
              icon={<Workflow size={28} />}
              title="Work Order"
              subtitle="Connecting Requirements to Execution"
              description="Work Order functionality connected project requirements with operational execution. Users could access work order information, project, status, value and associated items, with related billing and DPR information connected around the same work order."
              flow="Project → Work Order → Project Activities → Operational Tracking"
            />

            <FeatureCard
              icon={<FileText size={28} />}
              title="Bill Order / Billing"
              subtitle="Improving Visibility Into Billing"
              description="Billing functionality provided visibility into information associated with work orders, including bill-related status and details."
              flow="Bill Created → Processing / Approval → Current Status"
            />

            <FeatureCard
              icon={<Target size={28} />}
              title="DPR"
              subtitle="Daily Progress & Labour Tracking"
              description="The Daily Progress Report functionality supported recording and tracking daily project productivity, including labour distribution, activities, work descriptions and remarks."
              flow="Work Order → Date → Activity → Labour → Remarks → Save DPR"
            />

            <FeatureCard
              icon={<Building2 size={28} />}
              title="Multi-Company"
              subtitle="Scaling Across Organizations"
              description="The Multi-Company requirement introduced company context, hierarchy, user roles and data separation so the same platform could support multiple organizations."
              flow="Login → Select Company → Company Dashboard → Company Data"
            />

          </div>

          {/* Multi Company Highlight */}

          <div className="mt-10 rounded-3xl border border-indigo-500/20 bg-indigo-500/[0.04] p-8 md:p-10">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm uppercase tracking-widest text-indigo-400">
                  Important Edge Case
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  One User. Multiple Company Relationships.
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  A Subcontractor or Labour Contractor could have relationships
                  with multiple General Contractor companies. The product
                  therefore needed to maintain the correct company context
                  while preserving organizational data separation.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-7">

                <FlowStep text="Login" />
                <FlowArrow />
                <FlowStep text="Select Company" />
                <FlowArrow />
                <FlowStep text="Company-Specific Dashboard" />
                <FlowArrow />
                <FlowStep text="Company-Specific Data" />

                <div className="mt-6 border-t border-white/10 pt-5 text-center text-sm font-medium text-indigo-300">
                  Company A Context ≠ Company B Context
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* REQUIREMENT TO DELIVERY */}
      {/* ========================================================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="06 — Requirement to Delivery"
            title="How I Approached Business Requirements"
            description="The internship helped me understand that Business Analysis is not simply about writing documentation. The responsibility is to ensure business intent is translated correctly into product behaviour."
          />

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: <Search />,
                  title: "Business Requirement",
                  text: "Understand the business objective.",
                },
                {
                  icon: <Workflow />,
                  title: "Process Analysis",
                  text: "Understand the existing workflow and identify gaps.",
                },
                {
                  icon: <FileText />,
                  title: "Functional Definition",
                  text: "Translate requirements into BRDs, FRDs and user stories.",
                },
                {
                  icon: <Code2 />,
                  title: "Development Coordination",
                  text: "Clarify expected system behaviour with technical teams.",
                },
                {
                  icon: <Database />,
                  title: "API / Data Validation",
                  text: "Validate relevant backend behaviour and data.",
                },
                {
                  icon: <TestTube2 />,
                  title: "Web & Mobile UAT",
                  text: "Compare expected behaviour with actual behaviour.",
                },
                {
                  icon: <AlertCircle />,
                  title: "Issue Identification",
                  text: "Communicate discrepancies and track corrections.",
                },
                {
                  icon: <CheckCircle2 />,
                  title: "Retesting",
                  text: "Validate the corrected functionality.",
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/10 p-6"
                >

                  <div className="text-blue-400">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* REQUIREMENT ANALYSIS IN PRACTICE */}
      {/* ========================================================= */}

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="07 — Requirement Analysis in Practice"
            title="Turning a Simple Requirement Into a Complete Workflow"
            description="The Connect requirement demonstrates how I approached requirements as business problems rather than isolated UI requests."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <p className="text-sm uppercase tracking-widest text-blue-400">
                Initial Requirement
              </p>

              <h3 className="mt-5 text-3xl font-bold">
                Users should be able to connect when a relevant match is found.
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                The obvious implementation could have been a single Connect
                button. Functional analysis showed that this would leave
                important parts of the journey undefined.
              </p>

            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8">

              <p className="text-sm uppercase tracking-widest text-blue-300">
                Functional Analysis
              </p>

              <ul className="mt-5 space-y-4">

                {[
                  "Who receives the request?",
                  "What status should be shown?",
                  "What happens after acceptance?",
                  "What happens after decline?",
                  "Should a decline reason be captured?",
                  "What happens after conversation?",
                  "How can previous connections be tracked?",
                  "What happens if the opportunity does not progress?",
                ].map((question) => (

                  <li
                    key={question}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                  >

                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-blue-400"
                    />

                    {question}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* CONNECT EVIDENCE */}
      {/* ========================================================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="08 — Connect Evidence"
            title="The Product Workflow Behind the Feature"
            description="Because the original product is confidential, the portfolio focuses on the reasoning and workflow rather than exposing proprietary application screens."
          />

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">

              {[
                ["01", "Business Problem"],
                ["02", "Requirement"],
                ["03", "Functional Analysis"],
                ["04", "UI Evidence"],
                ["05", "Structured Lifecycle"],
              ].map(([number, title]) => (

                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-black/10 p-6 text-center"
                >

                  <span className="text-sm font-bold tracking-widest text-blue-400">
                    {number}
                  </span>

                  <p className="mt-3 font-semibold text-slate-200">
                    {title}
                  </p>

                </div>

              ))}

            </div>

            <div className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-6 text-center">

              <ShieldCheck
                className="mx-auto text-amber-400"
                size={28}
              />

              <p className="mt-4 leading-7 text-slate-400">
                Actual application screenshots are intentionally omitted due
                to confidentiality. The portfolio evidence instead focuses on
                sanitized workflows, functional reasoning and non-sensitive
                delivery examples.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* UAT & QUALITY */}
      {/* ========================================================= */}

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="09 — UAT & Quality Validation"
            title="From Expected Behaviour to Validated Behaviour"
            description="I supported validation across both web and mobile experiences by comparing expected behaviour against actual behaviour and participating in issue resolution and retesting."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                Validation Process
              </h3>

              <div className="mt-8 space-y-4">

                {[
                  "Expected Behaviour",
                  "Actual Behaviour",
                  "Issue Identification",
                  "Communication to Relevant Team",
                  "Correction",
                  "Retesting",
                ].map((step, index) => (

                  <div
                    key={step}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-400">
                      {index + 1}
                    </div>

                    <span className="text-slate-300">
                      {step}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-8">

              <h3 className="text-2xl font-bold">
                Technical Validation Exposure
              </h3>

              <div className="mt-8 space-y-5">

                <ToolRow
                  name="Postman"
                  description="API validation and backend behaviour checks."
                />

                <ToolRow
                  name="Swagger"
                  description="API documentation and endpoint understanding."
                />

                <ToolRow
                  name="MySQL"
                  description="Understanding relevant database fields and data relationships."
                />

                <ToolRow
                  name="Figma"
                  description="Design review and workflow validation."
                />

              </div>

            </div>

          </div>

          <div className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 text-center">

            <p className="text-lg font-semibold text-slate-200">
              Business Requirement
              <span className="mx-3 text-blue-400">→</span>
              UI
              <span className="mx-3 text-blue-400">→</span>
              API
              <span className="mx-3 text-blue-400">→</span>
              Data
              <span className="mx-3 text-blue-400">→</span>
              User Experience
            </p>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* STAKEHOLDER COLLABORATION */}
      {/* ========================================================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="10 — Stakeholder Collaboration"
            title="Working Across Teams and Stakeholders"
            description="The project involved collaboration across business stakeholders, technical teams and external project teams."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Requirement clarification",
              "Meeting discussions",
              "MoM preparation",
              "Functional documentation",
              "Follow-ups",
              "Development coordination",
              "UAT coordination",
              "Issue communication",
              "Requirement validation",
              "Stakeholder alignment",
              "Design discussions",
              "Delivery follow-through",
            ].map((item) => (

              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6"
              >

                <Users
                  size={20}
                  className="mt-1 shrink-0 text-blue-400"
                />

                <p className="text-sm leading-6 text-slate-300">
                  {item}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-10 rounded-3xl border border-amber-500/20 bg-amber-500/[0.04] p-8">

            <p className="text-sm uppercase tracking-widest text-amber-400">
              Confidentiality
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              Individual clients, external organizations, private
              stakeholders, proprietary identifiers and internal system
              information are intentionally not disclosed in this portfolio
              case study.
            </p>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* CHALLENGES */}
      {/* ========================================================= */}

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="11 — Challenges"
            title="Challenges I Worked Through"
            description="The project required balancing business requirements, product behaviour, technical constraints and validation across multiple workflows."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {challenges.map((challenge) => (

              <div
                key={challenge.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-blue-500/30"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400">
                  {challenge.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {challenge.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {challenge.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* LEARNINGS */}
      {/* ========================================================= */}

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="12 — Key Learnings"
            title="What This Experience Changed For Me"
            description="The internship changed how I understand Business Analysis and showed me how closely BA work can connect with product thinking."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            <LearningCard
              icon={<Briefcase size={25} />}
              title="Business Analysis"
              text="Look beyond what stakeholders ask for and understand the business process behind the requirement."
            />

            <LearningCard
              icon={<Lightbulb size={25} />}
              title="Product Thinking"
              text="Think in complete user journeys, states, rules and outcomes rather than individual screens."
            />

            <LearningCard
              icon={<Users size={25} />}
              title="Stakeholder Collaboration"
              text="Structured communication, documentation and continuous clarification are essential when multiple teams are involved."
            />

            <LearningCard
              icon={<Database size={25} />}
              title="Technical Understanding"
              text="APIs, databases and ERP-related information helped connect business requirements with technical systems."
            />

            <LearningCard
              icon={<TestTube2 size={25} />}
              title="Quality & Delivery"
              text="A feature is not complete when it is developed; it is complete when it behaves as intended."
            />

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* REFLECTION */}
      {/* ========================================================= */}

      <section className="px-6 py-28">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto mb-8 inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400">
            <Lightbulb size={32} />
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            13 — Reflection
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Business Analysis Became More Than Documentation
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-400">
            Initially, I viewed Business Analysis primarily through the lens
            of requirements and documentation. Working on a live enterprise
            product showed me that effective analysis requires a much broader
            perspective.
          </p>

          <div className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-8 md:p-10">

            <p className="text-xl font-semibold leading-9 text-slate-200">
              Users
              <span className="mx-2 text-blue-400">→</span>
              Business Process
              <span className="mx-2 text-blue-400">→</span>
              Product Experience
              <span className="mx-2 text-blue-400">→</span>
              System Behaviour
              <span className="mx-2 text-blue-400">→</span>
              Technical Implementation
              <span className="mx-2 text-blue-400">→</span>
              Validation
            </p>

          </div>

          <p className="mt-10 text-lg leading-9 text-slate-400">
            The Connect feature particularly helped me understand how product
            thinking can emerge from Business Analysis. What initially
            appeared to be a simple requirement for a connection button
            became a complete interaction lifecycle involving states,
            notifications, decisions, conversations and history.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-400">
            The Multi-Company work further taught me how seemingly simple
            business requirements can involve complex relationships between
            users, organizations, access and data.
          </p>

        </div>
      </section>

      {/* ========================================================= */}
      {/* TAKEAWAY */}
      {/* ========================================================= */}

      <section className="px-6 pb-32">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-[2rem] border border-blue-500/30 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-transparent p-10 text-center md:p-16">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Final Takeaway
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Connecting Business Problems With Practical Digital Solutions
            </h2>

            <p className="mx-auto mt-7 max-w-4xl text-lg leading-9 text-slate-300">
              My contribution to eFORCE was not limited to documenting
              requirements. I worked across the product lifecycle to help
              translate business needs into structured workflows, functional
              requirements and validated product behaviour.
            </p>

            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">

              {[
                "Business Analysis",
                "Product Thinking",
                "Stakeholder Collaboration",
                "Technical Understanding",
                "UAT",
                "Enterprise Product Delivery",
              ].map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 text-sm text-blue-300"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* BACK */}
      {/* ========================================================= */}

      <div className="px-6 pb-20 text-center">

        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Case Studies
        </Link>

      </div>

    </main>
  );
}

/* ============================================================= */
/* REUSABLE COMPONENTS */
/* ============================================================= */

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl">

      <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {description}
      </p>

    </div>
  );
}

function FlowStep({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center font-medium text-slate-200">
      {text}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center py-2 text-blue-400">
      <ArrowDown size={20} />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  subtitle,
  description,
  flow,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  flow: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="mb-6 inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400">
        {icon}
      </div>

      <p className="text-sm uppercase tracking-widest text-blue-400">
        {subtitle}
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-5">

        <p className="text-xs uppercase tracking-widest text-slate-500">
          Workflow
        </p>

        <p className="mt-3 text-sm font-medium leading-7 text-slate-300">
          {flow}
        </p>

      </div>

    </div>
  );
}

function ToolRow({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">

      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
        <Code2 size={16} />
      </div>

      <div>
        <p className="font-semibold text-slate-200">
          {name}
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>

    </div>
  );
}

function LearningCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
        {icon}
      </div>

      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {text}
      </p>

    </div>
  );
}