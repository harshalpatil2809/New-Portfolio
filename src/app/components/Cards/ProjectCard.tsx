"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
    id: number;
    name: string;
    description: string;
    image: string;
    github: string;
    live: string;
    technologies: string[];
};

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 shadow-lg hover:shadow-zinc-500/20 backdrop-blur-md transition-all duration-500 overflow-hidden"
        >
            {/* Image */}
            <div className="overflow-hidden rounded-xl mb-6">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={200}
                    className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2">
                {project.name}
            </h3>

            {/* Description */}
            <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies?.map((tech, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-zinc-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
                <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 text-center px-4 py-2 rounded-lg border border-zinc-600 hover:border-white hover:bg-white/5 transition-all duration-300"
                >
                    Code
                </a>

                <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all duration-300"
                >
                    Live
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;