"use client";

import ProjectCard from "@/app/components/Cards/ProjectCard";
import { AnimatePresence } from "framer-motion";
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
      technologies: ["Next.js","React JS","TypeScript","Tailwind CSS","Supabase","Google Auth","Django","Groq API","Docker","Postgres"]
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
      className={"min-h-screen bg-linear-to-r from-[#2a2a2a] to-black text-white py-20 flex flex-col items-center justify-center px-5 overflow-hidden"}
    >
      <h2 id="project" className={"text-5xl font-black mb-10"}>Projects</h2>

      <div className={"relative w-full max-w-4xl"}>
        {/* Card */}

        <AnimatePresence mode="wait">
          <ProjectCard project={projects[index]} />
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
