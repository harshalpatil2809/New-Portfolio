"use client";

import { motion } from "framer-motion";
import CoustomeArrow from "@/app/components/CoustomeArrow";
import Image from "next/image";
import { useRouter } from "next/navigation";


const internships = [
  {
    company: "Skillcraft Technologies",
    role: "Software Developer Intern",
    duration: "Jan 2025 – Present",
    description:
      "Worked as a Software Developer Intern, contributing to building scalable web applications. Developed responsive UI using modern frontend technologies and collaborated on backend integration and performance optimization.",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    certificate: "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto/v1774892265/Screenshot_2026-03-30_230706_rcztw6.png",
  },
];

const Internship = () => {

  const router = useRouter();
  return (
    <section className="min-h-screen bg-linear-to-r from-[#2a2a2a] to-black text-white px-6 py-20 relative overflow-hidden">
      <CoustomeArrow />

      <div className="max-w-5xl mx-auto flex items-center justify-start mb-6">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-zinc-300 hover:text-white transitionc justify-center"
        >
          <span className="text-2xl">←</span>
          Back
        </button>
      </div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-black tracking-wide">Internships</h1>
        <p className="text-zinc-400 mt-4">
          My professional journey and hands-on experience 🚀
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">

        {/* vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-zinc-700 via-zinc-500 to-zinc-700"></div>

        {internships.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-14 mb-16"
          >
            {/* dot */}
            <div className="absolute left-0 top-3 w-4 h-4 bg-white rounded-full shadow-lg shadow-white/30"></div>

            {/* CARD */}
            <div className="relative group bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-lg hover:shadow-zinc-500/30 transition-all duration-500">


              {/* ROLE */}
              <h3 className="text-2xl font-bold mb-2">{item.role}</h3>

              {/* COMPANY */}
              <p className="text-sm text-zinc-400 mb-4">
                <span className="text-white font-medium">{item.company}</span> • {item.duration}
              </p>

              {/* DESCRIPTION */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CERTIFICATE SECTION */}
              <div className="border-t border-zinc-700 pt-6">
                <h4 className="text-lg font-semibold mb-3">
                  🎓 Completion Certificate
                </h4>

                <div className="relative group/cert overflow-hidden rounded-xl border border-zinc-700">
                  <Image
                    src={item.certificate}
                    alt="Certificate"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain hover:scale-105 transition duration-500"
                  />

                  {/* hover glow */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/cert:opacity-100 transition"></div>
                </div>

                {/* optional download */}
                <a
                  href={item.certificate}
                  download
                  target="_blank"
                  className="inline-block mt-4 px-4 py-2 text-sm bg-white text-black rounded-lg hover:bg-zinc-200 transition"
                >
                  Download Certificate
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="flex justify-center mt-16">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition flex items-center justify-center"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Internship;