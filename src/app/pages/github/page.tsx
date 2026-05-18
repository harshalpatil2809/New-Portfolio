"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import {
    LuArrowUpRight,
    LuUsers,
    LuFolderGit2,
} from "react-icons/lu";

import { useEffect, useState } from "react";

const USERNAME = "harshalpatil2809";

interface GitHubData {
    public_repos: number;
    followers: number;
    following: number;
}

const greenTheme = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

const StatCard = ({
    title,
    value,
    icon,
}: {
    title: string;
    value: string | number;
    icon: React.ReactNode;
}) => {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur-md"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="text-zinc-400">{icon}</div>

                <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>

            <p className="text-sm text-zinc-500 mb-2 tracking-wide">
                {title}
            </p>

            <h2 className="text-4xl font-bold text-white">
                {value}
            </h2>
        </motion.div>
    );
};

export default function GitHubSection() {
    const [githubData, setGithubData] = useState<GitHubData | null>(null);

    useEffect(() => {
        async function fetchGitHub() {
            try {
                const res = await fetch(
                    `https://api.github.com/users/${USERNAME}`
                );

                const data = await res.json();

                setGithubData(data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchGitHub();
    }, []);

    const stats = [
        {
            title: "Repositories",
            value: githubData?.public_repos || 0,
            icon: <LuFolderGit2 size={22} />,
        },
        {
            title: "Followers",
            value: githubData?.followers || 0,
            icon: <LuUsers size={22} />,
        },
        {
            title: "Following",
            value: githubData?.following || 0,
            icon: <LuArrowUpRight size={22} />,
        },
    ];

    return (
        <section
            id="github"
            className="min-h-screen bg-linear-to-r from-[#2a2a2a] to-black text-zinc-100 py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="text-5xl md:text-7xl font-black tracking-tight">
                        GitHub Activity
                    </h2>

                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        Building projects, exploring ideas, and maintaining
                        consistency through code & open source.
                    </p>
                </motion.div>

                {/* Main Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl overflow-hidden"
                >
                    {/* Top Bar */}
                    <div className="border-b border-zinc-800 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                        <div>
                            <h3 className="text-2xl font-bold">
                                @{USERNAME}
                            </h3>

                            <p className="text-zinc-500 text-sm mt-1">
                                Open Source Developer
                            </p>
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={`https://github.com/${USERNAME}`}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 transition-all duration-300"
                        >
                            Visit Profile
                            <LuArrowUpRight />
                        </motion.a>
                    </div>

                    {/* Calendar */}
                    <div className="p-6 md:p-10 border-b border-zinc-800 overflow-x-auto">
                        <div className="min-w-max">
                            <GitHubCalendar
                                username={USERNAME}
                                theme={greenTheme}
                                blockSize={15}
                                blockMargin={5}
                                fontSize={14}
                            />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-3 gap-5 p-6 md:p-10">
                        {stats.map((stat) => (
                            <StatCard
                                key={stat.title}
                                title={stat.title}
                                value={stat.value}
                                icon={stat.icon}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Button */}
                <div className="flex justify-center mt-10">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://github.com/${USERNAME}?tab=repositories`}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition-all duration-300"
                    >
                        Explore Repositories
                        <LuArrowUpRight />
                    </motion.a>
                </div>
            </div>
        </section>
    );
}