import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#2a2a2a] to-black text-zinc-100 px-6 py-12 border-t border-gray-400">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wide">Harshal Patil</h2>
          <p className="text-zinc-400 text-sm mt-2">
            Building clean & modern web experiences.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right - Socials */}
        <div className="flex gap-4">
          <Link
            href="https://github.com/harshalpatil2809"
            className="border border-zinc-700 px-3 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/harshal-patil-56a0b2293/"
            className="border border-zinc-700 px-3 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-zinc-500 text-sm mt-10 border-t border-zinc-800 pt-6">
        © {new Date().getFullYear()} Harshal Patil. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;