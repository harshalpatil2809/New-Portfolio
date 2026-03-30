"use client";

import Image from "next/image";
import CoustomeArrow from '@/app/components/CoustomeArrow'

const certificates = [

    {
        name: "Solution Architecture Job Simulation - Forage",
        image:
            "https://res.cloudinary.com/dz5yaloug/image/upload/v1774894704/Screenshot_2026-03-30_234703_wvonnl.png",
    },
    {
        name: "Cybersecurity Fundamentals - IBM",
        image:
            "https://res.cloudinary.com/dz5yaloug/image/upload/v1774894704/Screenshot_2026-03-30_234730_bs6otr.png",
    },
    {
        name: "Web Development Fundamentals - IBM",
        image:
            "https://res.cloudinary.com/dz5yaloug/image/upload/v1774894704/Screenshot_2026-03-30_234635_euqx6q.png",
    },
];

const Certificate = () => {
    return (
        <section className="min-h-screen bg-linear-to-r from-[#2a2a2a] to-black text-white px-6 py-20">

            <CoustomeArrow />

            {/* 🔙 TOP BACK BUTTON */}
            <div className="max-w-6xl mx-auto flex items-center justify-start mb-10">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 text-zinc-300 hover:text-white transition"
                >
                    <span className="text-2xl">←</span>
                    Back
                </button>
            </div>

            {/* TITLE */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-black">Certificates</h1>
                <p className="text-zinc-400 mt-4">
                    My achievements and certifications 🎓
                </p>
            </div>

            {/* GRID */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 hover:shadow-lg hover:shadow-zinc-500/20 transition"
                    >
                        {/* IMAGE */}
                        <div className="overflow-hidden rounded-xl border border-zinc-700">
                            <Image
                                src={cert.image}
                                alt={cert.name}
                                width={1920}
                                height={1080}
                                className="w-full h-64 object-contain hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* NAME */}
                        <h3 className="text-lg font-semibold mt-4 text-center">
                            {cert.name}
                        </h3>
                    </div>
                ))}
            </div>

            {/* 🔙 BOTTOM BACK BUTTON */}
            <div className="flex justify-center mt-16">
                <button
                    onClick={() => window.history.back()}
                    className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition"
                >
                    ← Go Back
                </button>
            </div>

        </section>
    );
};

export default Certificate;