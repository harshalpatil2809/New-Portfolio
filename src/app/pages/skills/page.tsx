'use client'
import { motion } from "framer-motion";
import { 
  FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt 
} from "react-icons/fa";

import { 
  SiJavascript, SiTailwindcss, SiDjango, SiFlask,
  SiNextdotjs, SiMysql, SiPostgresql, SiFigma, SiGithub, SiVercel, SiNetlify, SiRender, SiPostman
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";


export const TechStack = [
  { name: "Python", icon: FaPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "VS Code", icon: VscVscode },
  { name: "Figma", icon: SiFigma },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: SiGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "Render", icon: SiRender },
  { name: "Postman", icon: SiPostman },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen bg-linear-to-r from-[#2a2a2a] to-black text-zinc-100 py-20 px-6"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black tracking-wide">Tech Stack</h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {TechStack.map((tech) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 py-6 rounded-xl bg-linear-to-r from-zinc-900 -zinc-800 to-zinc-900 border border-zinc-700 shadow-md hover:shadow-zinc-500/30 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 "
            >
              {/* Icon */}
              <Icon className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-110" />

              {/* Name */}
              <p className="text-sm tracking-wide text-zinc-300 group-hover:text-white">
                {tech.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>

  )
}

export default Skills