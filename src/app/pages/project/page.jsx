"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Intellex AI",
      description:
        "An AI-powered web application designed to enhance user productivity with intelligent features and a clean, responsive interface. Built with modern frontend technologies and optimized for seamless performance.",
      image:
        "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto/v1774769554/Intellex_jz8iru.svg",
      github:
        "https://github.com/harshalpatil2809/INTELLEX-2/tree/main/frontend",
      live: "https://intellex-ai-harshal.vercel.app/",
      technologies: ["React JS", "Tailwind", "Groq API"],
    },
    {
      id: 2,
      name: "BuyBasket",
      description:
        "A full-stack e-commerce platform offering a smooth and responsive shopping experience. Features include dynamic product listings, user-friendly UI, and efficient backend integration for handling data and transactions.",
      image:
        "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto/v1774769555/BuyBasket_qumsqe.svg",
      github: "https://github.com/harshalpatil2809/BuyBasket-frontend",
      live: "https://buybasket-by-harshal.vercel.app/",
      technologies: [
        "React JS",
        "Django",
        "TailwindCSS",
        "JavaScript",
        "PostgreSQL",
        "Claudinary",
      ],
    },
    {
      id: 3,
      name: "Weather App",
      description:
        "Weather App using HTML, Tailwind CSS & JavaScript — Displays real-time weather data for any city with a clean, responsive design.",
      image:
        "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto/v1774769864/WeatherApp_kfkbnb.svg",
      github: "https://github.com/harshalpatil2809/Weather-app",
      live: "https://weatherapp-by-harshal.vercel.app/",
      technologies: ["HTML", "TailwindCSS", "Javascript"],
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div
      id="project"
      className="min-h-screen bg-linear-to-r from-[#2a2a2a] to-black text-white py-20 flex flex-col items-center justify-center px-5 overflow-hidden"
    >
      <h2 id="project" className="text-5xl font-black mb-16">Projects</h2>

      <div className="relative w-full max-w-4xl">
        {/* Card */}

<AnimatePresence mode="wait">
  <motion.div
    key={projects[index].id}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl p-8 bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 shadow-lg hover:shadow-zinc-500/20 backdrop-blur-md transition-all duration-500 overflow-hidden"
  >

        
    {/* Image */}
    <div className="overflow-hidden rounded-xl mb-6">
      <Image
        src={projects[index].image}
        alt={projects[index].name}
        width={500}
        height={200}
        loading="lazy"
        fetchPriority="low"
        className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Title */}
    <h3 className="text-2xl font-semibold mb-2">
      {projects[index].name}
    </h3>

    {/* Description */}
    <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
      {projects[index].description}
    </p>

    {/* Technologies */}
    <div className="flex flex-wrap gap-2 mb-6">
      {projects[index].technologies?.map((tech, i) => (
        <span
          key={i}
          className="px-3 py-1 text-xs rounded-full 
          bg-white/10 border border-white/10 text-zinc-300"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex gap-4">
      <a
        href={projects[index].github}
        target="_blank"
        className="flex-1 text-center px-4 py-2 rounded-lg border border-zinc-600 hover:border-white hover:bg-white/5 transition-all duration-300"
      >
        Code
      </a>

      <a
        href={projects[index].live}
        target="_blank"
        className="flex-1 text-center px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all duration-300"
      >
        Live
      </a>
    </div>
  </motion.div>
</AnimatePresence>


        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black lg:-ml-20 px-3 py-2 rounded-full"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black lg:-mr-20 px-3 py-2 rounded-full"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Project;
