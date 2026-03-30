"use client";
import AboutCard from "@/app/components/Cards/AboutCard";
import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Award } from "lucide-react";

const About = () => {

  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
        const top = (section as HTMLElement).offsetTop;

        window.scrollTo({
            top,
            behavior: "smooth",
        });

    }
};

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
            Hello! I&apos;m Harshal Patil, a passionate Software Developer who
            enjoys building fast, scalable, and visually engaging web
            applications.
          </p>
          <p>
            I specialize in React, Next.js, Django, Flask, MySQL, PostgreSQL,
            and Tailwind CSS.
          </p>
          <p>
            My goal is to grow as a developer and work in a high-impact company
            where I can continuously learn and build.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AboutCard
            title="Internship"
            subtitle="EXPERIENCE"
            Icon={Briefcase}
            href="/pages/internships"
          />

          <motion.div
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll('#project')}
            className="group relative cursor-pointer px-6 py-6 rounded-2xl bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white border border-zinc-700 shadow-md hover:shadow-zinc-500/30 backdrop-blur-md transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <FolderGit2 />
              <h3 className="text-xl font-semibold">Projects</h3>
            </div>

            <p className="mt-2 text-xs tracking-widest text-zinc-400">Build</p>
          </motion.div>

          <AboutCard
            title="Certificates"
            subtitle="ACHIEVED"
            Icon={Award}
            href="/pages/certificate"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
