import Reveal from "./Reveal";

import {
  Mail,
  MapPin,
  FileText,
  ArrowUpRight,
  Globe,
} from "lucide-react";

export default function Contact() {
  return (
    <Reveal id="contact">
      <section
        id="contact"
        className="relative overflow-hidden bg-[#081120] px-6 py-28 text-white"
      >
        {/* Background Glow */}

        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          {/* Heading */}

          <div className="text-center">
            <p className="uppercase tracking-[0.35em] text-blue-400">
              Contact
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Let's Build Something Meaningful Together
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Whether you're looking for a Business Analyst, Product Manager,
              or Project Management professional, I'd love to connect and
              discuss opportunities to create impactful digital products.
            </p>
          </div>

          {/* Contact Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            {/* Email */}

            <a
              href="mailto:tanishpatil2500@gmail.com"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-5">

                <div className="rounded-2xl bg-blue-500/15 p-4 text-blue-400">
                  <Mail size={32} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
                    Email
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    tanishpatil2500@gmail.com
                  </h3>
                </div>

              </div>

              <div className="mt-8 flex items-center text-blue-400">
                <span>Send an Email</span>

                <ArrowUpRight
                  className="ml-2 transition group-hover:translate-x-1"
                  size={18}
                />
              </div>
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/tanish-patil-0b4380242"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-5">

                <div className="rounded-2xl bg-blue-500/15 p-4 text-blue-400">
                  <Globe size={32} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
                    LinkedIn
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Connect with me
                  </h3>
                </div>

              </div>

              <div className="mt-8 flex items-center text-blue-400">
                <span>Visit Profile</span>

                <ArrowUpRight
                  className="ml-2 transition group-hover:translate-x-1"
                  size={18}
                />
              </div>
            </a>

            {/* Resume */}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-5">

                <div className="rounded-2xl bg-blue-500/15 p-4 text-blue-400">
                  <FileText size={32} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
                    Resume
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    View Resume
                  </h3>
                </div>

              </div>

              <div className="mt-8 flex items-center text-blue-400">
                <span>View Resume</span>

                <ArrowUpRight
                  className="ml-2 transition group-hover:translate-x-1"
                  size={18}
                />
              </div>
            </a>

            {/* Location */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div className="flex items-center gap-5">

                <div className="rounded-2xl bg-blue-500/15 p-4 text-blue-400">
                  <MapPin size={32} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
                    Location
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Navi Mumbai, India
                  </h3>
                </div>

              </div>

              <p className="mt-8 leading-8 text-slate-400">
                Open to full-time opportunities in Product Management,
                Business Analysis and Project Management roles.
              </p>

            </div>

          </div>

          {/* Bottom CTA */}

          <div className="mt-20 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 p-12 text-center backdrop-blur-xl">

            <h3 className="text-4xl font-black">
              Ready to create products that make an impact.
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              I'm always excited to collaborate, solve meaningful problems,
              and contribute to teams building exceptional digital experiences.
            </p>

          </div>

        </div>
      </section>
    </Reveal>
  );
}