"use client";

import { Code, Folder, House, UserRound, Mail, Download } from "lucide-react";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const handleScroll = (id: string) => {
        const section = document.querySelector(id);
        if (section) {
            const top = (section as HTMLElement).offsetTop ;

            window.scrollTo({
                top,
                behavior: "smooth",
            });

            setOpen(false);
        }
    };

    const links = [
        { name: "Home", href: "#home", icon: <House size={22} /> },
        { name: "About", href: "#about", icon: <UserRound size={20} /> },
        { name: "Skills", href: "#skills", icon: <Code size={22} /> },
        { name: "Project", href: "#project", icon: <Folder size={22} /> },
        { name: "Contact", href: "#contact", icon: <Mail size={22} /> },
    ];

    const basicCss =
        "flex flex-col items-center justify-center text-sm hover:text-white transition hover:scale-110";

    return (
        <>
            {/*  Laptop Sidebar */}
            <div className="hidden z-50 lg:flex flex-col justify-center items-center gap-12 w-fit pl-4 pr-3 h-screen fixed text-gray-400">
                {links.map((link, i) => (
                    <button
                        key={i}
                        onClick={() => handleScroll(link.href)}
                        className={basicCss}
                    >
                        {link.icon}
                        {link.name}
                    </button>
                ))}
            </div>

            {/*  Top Right Controls (Mobile) */}
            {!open && (
                <div className="fixed top-5 right-5 flex items-center gap-4 z-50">

                    {/* Resume Button */}
                    <motion.button
                        variants={item}
                        initial={false}
                        animate="show"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-zinc-200 hover:bg-white/20 transition-all duration-300 shadow-lg"
                    >
                        Download Resume
                        <Download size={18} />
                    </motion.button>

                    {/* Menu Icon */}
                    <div
                        onClick={() => setOpen(true)}
                        className="cursor-pointer lg:hidden block"
                    >
                        <IoMenu size={28} color="white" />
                    </div>
                </div>
            )}

            {/* 🔹 Mobile Navbar */}
            <motion.div
                initial={false}
                animate={{ x: open ? 0 : "100%" }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 right-0 w-3/4 sm:w-2/3 h-screen bg-black/80 backdrop-blur-md text-white p-6 z-50 overflow-y-auto"
            >
                {/* Close Button */}
                <div
                    className="cursor-pointer mb-10 fixed top-5 right-5"
                    onClick={() => setOpen(false)}
                >
                    <IoClose size={30} />
                </div>

                {/* Links */}
                <ul className="flex flex-col gap-8 mt-10 text-lg">
                    {links.map((link, i) => (
                        <li key={i}>
                            <button
                                onClick={() => handleScroll(link.href)}
                                className="flex items-center gap-3 hover:text-gray-300 transition"
                            >
                                {link.icon}
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <motion.button
                    initial={false}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 flex items-center gap-2 px-5 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white font-medium shadow-lg hover:bg-black/60 transition-all duration-300"
                >
                    Download Resume
                    <Download size={18} />
                </motion.button>
            </motion.div>
        </>
    );
};

export default Navbar;