"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type AboutCardProps = {
    title: string;
    subtitle: string;
    Icon: React.ElementType;
    href?: string;
};

const AboutCard: React.FC<AboutCardProps> = ({
    title,
    subtitle,
    Icon,
    href,
}) => {
    const router = useRouter();

    return (
        <motion.div
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => href && router.push(href)}
            className="group relative cursor-pointer px-6 py-6 rounded-2xl bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white border border-zinc-700 shadow-md hover:shadow-zinc-500/30 backdrop-blur-md transition-all duration-500"
        >
            <div className="flex items-center gap-3">
                <Icon />
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>

            <p className="mt-2 text-xs tracking-widest text-zinc-400">
                {subtitle}
            </p>
        </motion.div>
    );
};

export default AboutCard;