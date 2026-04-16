"use client";
import { motion, Variants } from "motion/react";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Bebas_Neue } from "next/font/google";
import { Meteors } from "@/app/components/ui/meteors";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

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

const Home = () => {
  return (
    <div id="home" className="min-h-screen bg-linear-to-r from-[#2a2a2a] to-black text-zinc-100 flex flex-col items-center justify-center  md:py-30 ">
      <Meteors />

      {/* Middle Part  */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex items-center justify-center flex-col max-w-4xl px-6 "
      >
        <motion.p variants={item} className="text-lg text-zinc-400">
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`lg:text-[180px] md:text-8xl text-7xl text-center font-black mb-4 cursor-default subpixel-antialiased leading-none tracking-tight text-white/70 ${bebas.className}`}
        >
          Harshal Patil
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-xl md:text-2xl text-zinc-300 mb-6"
        >
          Software Developer
        </motion.h2>

        <motion.p
          variants={item}
          className="text-zinc-400 leading-relaxed text-justify"
        >
          I don&apos;t just build software—I craft experiences. From intuitive
          design to powerful backend logic, I focus on creating products that
          are fast, reliable, and genuinely enjoyable to use. Always learning,
          always improving, always building. 🚀
        </motion.p>
      </motion.div>

      {/* Social Media Icons  */}
      <motion.div
        className="flex items-center gap-12 lg:mt-12 md:mt-12 mt-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.a
          href="https://github.com/harshalpatil2809"
          target="_blank"
          whileHover={{ scale: 1.2, y: -3 }}
          className="text-zinc-400 hover:text-white transition"
        >
          <LuGithub size={28} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/harshal-patil-56a0b2293/"
          target="_blank"
          whileHover={{ scale: 1.2, y: -3 }}
          className="text-zinc-400 hover:text-blue-400 transition"
        >
          <FiLinkedin size={28} />
        </motion.a>

        <motion.a
          href="https://x.com/Patil_Harshal_5"
          target="_blank"
          whileHover={{ scale: 1.2, y: -3 }}
          className="text-zinc-400 hover:text-white transition"
        >
          <FaXTwitter size={28} />
        </motion.a>
      </motion.div>

      {/* Bottom Button  */}
      <motion.div className="flex lg:gap-25 md:gap-25 gap-5 mt-8 " variants={container}
        initial="hidden"
        animate="show">

        <motion.button
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll("#project")}
          className="px-6 py-3 rounded-xl bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white font-medium border border-zinc-700 shadow-md hover:shadow-zinc-500/30 backdrop-blur-md transition-all duration-500">
          Explore Projects
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll("#contact")}
          className="px-6 py-3 rounded-xl bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white font-medium border border-zinc-700 shadow-md hover:shadow-zinc-500/30 backdrop-blur-md transition-all duration-500">
          Let&apos;s Collaborate
        </motion.button>

      </motion.div>
    </div>
  );
};

export default Home;
