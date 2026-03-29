
import { Briefcase, FolderGit2, Award } from "lucide-react";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-linear-to-r from-[#2a2a2a] to-black text-zinc-100 flex items-center justify-center px-6 "
    >
      <div className="max-w-5xl w-full space-y-14">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-black tracking-wide">About Me</h2>
        </div>

        {/* Description */}
        <div className="text-center text-gray-300 space-y-4 text-lg leading-relaxed">
          <p>
            Hello! I&apos;m Harshal Patil, a passionate Software Developer who enjoys building fast, scalable, and visually engaging web applications.
          </p>
          <p>
            I specialize in React, Next.js, Django, Flask, MySQL, PostgreSQL, and Tailwind CSS.
          </p>
          <p>
            My goal is to grow as a developer and work in a high-impact company where I can continuously learn and build.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Internship */}
          <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]">

            {/* white glow background layer */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl bg-white/10 -z-10"></div>

            <div className="flex items-center gap-3">
              <Briefcase className="text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition" />
              <h3 className="text-xl font-semibold text-white">
                Internship
              </h3>
            </div>

            <p className="mt-2 text-xs tracking-widest text-white/60">
              EXPERIENCE
            </p>
          </div>

          {/* Projects */}
          <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]">

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl bg-white/10 -z-10"></div>

            <div className="flex items-center gap-3">
              <FolderGit2 className="text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition" />
              <h3 className="text-xl font-semibold text-white">
                Projects
              </h3>
            </div>

            <p className="mt-2 text-xs tracking-widest text-white/60">
              BUILT
            </p>
          </div>

          {/* Certificates */}
          <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]">

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl bg-white/10 -z-10"></div>

            <div className="flex items-center gap-3">
              <Award className="text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition" />
              <h3 className="text-xl font-semibold text-white">
                Certificates
              </h3>
            </div>

            <p className="mt-2 text-xs tracking-widest text-white/60">
              ACHIEVED
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;