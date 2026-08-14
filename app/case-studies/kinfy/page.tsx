
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const screens = [
  {
    number: "01",
    title: "Onboarding",
    description:
      "Private account creation, interests, location preferences, and anonymous identity.",
    image: "/images/kinfy/onboarding.png",
  },
  {
    number: "02",
    title: "Home / Discover",
    description:
      "Nearby conversations, interest-based discussions, and activity discovery.",
    image: "/images/kinfy/home.png",
  },
  {
    number: "03",
    title: "Create Post",
    description:
      "A simple space to express thoughts, questions, discussions, or activities anonymously.",
    image: "/images/kinfy/create-expression.png",
  },
  {
    number: "04",
    title: "Conversation",
    description:
      "The core anonymous communication experience, with safety controls available without overwhelming the conversation.",
    image: "/images/kinfy/conversation.png",
  },
  {
    number: "05",
    title: "Explore Topics",
    description:
      "Discover conversations based on shared interests rather than browsing profiles.",
    image: "/images/kinfy/discover.png",
  },
  {
    number: "06",
    title: "Community Activities",
    description:
      "Discover and participate in activities such as sports, gaming, creative sessions, or study groups.",
    image: "/images/kinfy/community.png",
  },
  {
    number: "07",
    title: "Profile & Privacy",
    description:
      "Manage private identity, interests, location permissions, birthday visibility, and safety controls.",
    image: "/images/kinfy/profile.png",
  },
];

const decisions = [
  "No swiping or matching",
  "No gender-based discovery",
  "No romantic recommendations",
  "No follower counts",
  "No public profile photos",
  "No “Connect” or “Add Friend” button",
];

const metrics = [
  "Meaningful conversations started per active user",
  "Conversation start rate",
  "Conversation continuation rate",
  "Activity participation rate",
  "7-day and 30-day retention",
  "Report rate and successful moderation resolution",
];

export default function KinfyCaseStudy() {
  return (
      <main className="min-h-screen overflow-hidden bg-[#081120] text-white">

        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section className="relative px-6 pb-24 pt-36">
          <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute right-0 top-72 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">

            <div className="mb-8 flex flex-wrap gap-3 text-sm">
              {[
                "Product Concept",
                "Product Management",
                "UX/UI Design",
                "Privacy & Safety",
                "Product Strategy",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
              Kinfy
            </p>

            <h1 className="mt-5 max-w-5xl text-6xl font-black leading-tight md:text-8xl">
              Find Your <span className="text-blue-500">Kind.</span>
            </h1>

            <p className="mt-8 text-2xl font-semibold text-slate-300 md:text-4xl">
              Talk first. Friendship follows.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              An anonymous, conversation-first social platform designed to
              help people express themselves, discover conversations around
              their interests and general area, participate in activities,
              and naturally build friendships over time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-500"
              >
                Explore the Case Study
                <ArrowRight size={18} />
              </a>

              <a
                href="#screens"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold backdrop-blur-xl transition hover:border-blue-500/40"
              >
                View Product Experience
              </a>
            </div>
          </div>
        </section>


        {/* ===================================================== */}
        {/* PROBLEM */}
        {/* ===================================================== */}

        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_.9fr]">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                01 — The Problem
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                What if meeting people didn&apos;t have to start with
                introducing yourself?
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-400">
              <p>
                Social platforms often encourage people to present themselves
                through carefully curated profiles, photos, follower counts,
                interests, and other forms of social identity. That can create
                pressure to make an impression before a conversation has even
                begun.
              </p>

              <p>
                There is also a difference between wanting to talk to someone
                and actively wanting to make a friend. Sometimes people simply
                want to share something, discuss an interest, find someone
                nearby with a shared activity, or talk to someone who
                understands what they are experiencing.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-6xl rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 md:p-10">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
              The Product Opportunity
            </p>

            <p className="mt-5 text-2xl font-semibold leading-10 md:text-3xl">
              Instead of asking people to discover who they should connect
              with, what if we helped them discover what they could talk
              about?
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              How might we make it easier for people to start genuine
              conversations without the pressure of identity, expectations,
              or forced connections?
            </p>
          </div>
        </section>


        {/* ===================================================== */}
        {/* PRODUCT */}
        {/* ===================================================== */}

        <section
          id="experience"
          className="bg-white/[0.02] px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              02 — The Product
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              A conversation-first social experience
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              {[
                {
                  icon: <MessageCircle size={28} />,
                  title: "Express",
                  text: "Users can share a thought, ask a question, start a discussion, or create an activity. The conversation itself becomes the starting point.",
                },
                {
                  icon: <Sparkles size={28} />,
                  title: "Discover",
                  text: "Discovery is personalized around interests and approximate location, giving users a natural reason to interact.",
                },
                {
                  icon: <Users size={28} />,
                  title: "Participate",
                  text: "Activities can turn online interaction into community experiences such as football, gym sessions, gaming, creative activities, or study sessions.",
                },
                {
                  icon: <CheckCircle2 size={28} />,
                  title: "Build familiarity",
                  text: "People can gradually become familiar through conversation. If trust develops, they may choose to reveal more about themselves.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-blue-500/15 p-4 text-blue-400">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

              {[
                "Express",
                "Discover",
                "Talk",
                "Participate",
                "Friendship",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3"
                >
                  <span className="rounded-full bg-blue-500/15 px-5 py-3 font-semibold text-blue-300">
                    {step}
                  </span>

                  {index < 4 && (
                    <ArrowRight
                      size={18}
                      className="text-slate-600"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ===================================================== */}
        {/* UI SCREENS */}
        {/* ===================================================== */}

        <section
          id="screens"
          className="px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              03 — Designing the Experience
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              From product idea to interface
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              The interface was designed around one central principle:
              <span className="font-semibold text-slate-200">
                {" "}the conversation should be more important than the profile.
              </span>
            </p>


            {/* Screens */}

            <div className="mt-16 space-y-24">

              {screens.map((screen) => (
                <div
                  key={screen.number}
                  className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center"
                >

                  {/* Screen Description */}

                  <div className="lg:pr-8">

                    <span className="text-sm font-bold tracking-[0.3em] text-blue-400">
                      {screen.number}
                    </span>

                    <h3 className="mt-3 text-3xl font-bold">
                      {screen.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {screen.description}
                    </p>

                  </div>


                  {/* Mobile UI Frame */}

                  <div className="flex min-h-[650px] items-center justify-center rounded-3xl border border-dashed border-blue-500/30 bg-white/[0.03] p-8 md:p-12">

                    <div className="relative">

                      {/* Phone Frame */}

                      <div className="w-[280px] overflow-hidden rounded-[2.5rem] border-[6px] border-slate-700/80 bg-[#0d1728] shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:w-[300px]">

                        <img
                          src={screen.image}
                          alt={`Kinfy ${screen.title} mobile UI`}
                          className="block h-auto w-full"
                        />

                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>


        {/* ===================================================== */}
        {/* PRIVACY & SAFETY */}
        {/* ===================================================== */}

        <section className="bg-white/[0.02] px-6 py-24">

          <div className="mx-auto max-w-6xl">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-500/15 p-4 text-blue-400">
                <ShieldCheck size={34} />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                  04 — Privacy & Safety
                </p>

                <h2 className="mt-2 text-4xl font-black">
                  Anonymous doesn&apos;t mean unprotected.
                </h2>
              </div>

            </div>


            <div className="mt-10 grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                <h3 className="text-2xl font-bold">
                  Private by default
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  The real identity remains associated with the verified
                  account while users interact through anonymous identities.
                  Personal information is not publicly exposed.
                </p>

                <div className="mt-6 flex items-start gap-3 text-slate-300">

                  <MapPin
                    className="mt-1 shrink-0 text-blue-400"
                    size={20}
                  />

                  <span>
                    Location can support discovery, but users see a general
                    area rather than an exact address, live location, or
                    unnecessary precision.
                  </span>

                </div>

              </div>


              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                <h3 className="text-2xl font-bold">
                  User control
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Users can restrict or block unwanted interactions and report
                  content or behavior that violates community guidelines.
                  Moderation can respond through warnings, restrictions,
                  temporary suspension, or permanent removal depending on
                  severity.
                </p>

              </div>

            </div>


            <div className="mt-8 rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">

              <p className="text-2xl font-bold text-green-300">
                Private by default. Safe by design.
              </p>

            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* PRODUCT DECISIONS */}
        {/* ===================================================== */}

        <section className="px-6 py-24">

          <div className="mx-auto max-w-6xl">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              05 — Product Decisions & Challenges
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
              Designing the behavior, not just the interface
            </h2>


            <div className="mt-12 grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                <h3 className="text-2xl font-bold">
                  Avoiding dating-app behavior
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Anonymous identities, nearby users, and shared interests
                  could easily create dating-app-like behavior. Kinfy
                  addresses this through the product experience itself rather
                  than a disclaimer.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                  {decisions.map((decision) => (
                    <div
                      key={decision}
                      className="flex gap-2 text-slate-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-blue-400"
                      />

                      <span>{decision}</span>
                    </div>
                  ))}

                </div>

              </div>


              <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8">

                <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                  Core Product Principle
                </p>

                <h3 className="mt-5 text-3xl font-black">
                  Friendship should be an outcome, not the objective.
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  The product focuses on “Join conversation,” “Reply,”
                  “View activity,” and “I&apos;m interested” rather than
                  forcing users toward a relationship.
                </p>

              </div>

            </div>


            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                The key trade-offs
              </h3>

              <div className="mt-6 grid gap-6 md:grid-cols-3">

                {[
                  ["Anonymity", "Freedom vs. accountability"],
                  ["Location", "Relevance vs. privacy"],
                  ["Expression", "Freedom vs. safety"],
                ].map(([title, text]) => (

                  <div
                    key={title}
                    className="rounded-2xl bg-black/10 p-5"
                  >
                    <p className="font-bold text-blue-300">
                      {title}
                    </p>

                    <p className="mt-2 text-slate-400">
                      {text}
                    </p>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* METRICS */}
        {/* ===================================================== */}

        <section className="bg-white/[0.02] px-6 py-24">

          <div className="mx-auto max-w-6xl">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              06 — Measuring Success
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              How would we know Kinfy is working?
            </h2>


            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">

              <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8">

                <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                  North Star Metric
                </p>

                <h3 className="mt-6 text-3xl font-black">
                  Meaningful conversations started per active user
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  The metric reflects the fundamental purpose of the product:
                  helping people overcome the barrier of starting a
                  conversation.
                </p>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                {metrics.map((metric) => (

                  <div
                    key={metric}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
                  >

                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-blue-400"
                    />

                    <span className="leading-7 text-slate-300">
                      {metric}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            <p className="mt-8 text-center text-slate-500">
              Metrics should be interpreted together. Increasing
              conversations alongside increasing harassment reports would
              not necessarily represent product success.
            </p>

          </div>

        </section>


        {/* ===================================================== */}
        {/* FUTURE + REFLECTION */}
        {/* ===================================================== */}

        <section className="px-6 py-24">

          <div className="mx-auto max-w-6xl">

            <div className="grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                  07 — Future Direction
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  Start focused. Expand after validation.
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  The initial version focuses on anonymous conversations,
                  interest-based discovery, nearby content, activities, and
                  fundamental safety controls.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  Once the core experience is validated, the product could
                  expand into richer community functionality, better
                  recommendation systems, activity groups, local events, and
                  more sophisticated trust and safety systems.
                </p>

              </div>


              <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 to-indigo-600/10 p-8">

                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                  Final Reflection
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  Designing the conditions for connection
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Kinfy reinforced that designing a social product is not only
                  about creating features that allow people to connect. It is
                  about carefully designing the conditions under which those
                  connections happen.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  Anonymity can reduce social pressure but introduces safety
                  challenges. Location can improve discovery but introduces
                  privacy risks. Activities can help people meet in the real
                  world but require additional safety considerations.
                </p>

              </div>

            </div>


            <div className="mt-12 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-10 text-center">

              <p className="text-3xl font-black md:text-5xl">
                People are the users.
                <br />
                <span className="text-blue-400">
                  Conversations are the product.
                </span>
              </p>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Kinfy is designed around the belief that meaningful
                friendships do not always need to be actively searched for.
                Sometimes, they begin with a simple conversation.
              </p>

            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* BACK */}
        {/* ===================================================== */}

        <div className="px-6 pb-20 text-center">

          <a
            href="/#case-studies"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-white"
          >
            <ArrowRight
              size={18}
              className="rotate-180"
            />

            Back to Case Studies
          </a>

        </div>

      </main>
  );
}