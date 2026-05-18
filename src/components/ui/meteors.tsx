"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type MeteorsProps = {
    number?: number;
    className?: string;
};

type Meteor = {
    left: number;
    delay: number;
    duration: number;
};

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
    const [meteors, setMeteors] = useState<Meteor[]>([]);

    useEffect(() => {
        const generated = Array.from({ length: number }).map(() => ({
            left: Math.random() * 100, // ✅ full width %
            delay: Math.random() * 5,
            duration: Math.random() * 5 + 5,
        }));

        setMeteors(generated);
    }, [number]);

    return (
        <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        >
            {meteors.map((meteor, idx) => (
                <span
                    key={idx}
                    className={cn(
                        "absolute h-0.5 w-0.5 rotate-45 rounded-full bg-white",
                        "before:absolute before:top-1/2 before:h-px before:w-15 before:-translate-y-1/2 before:bg-linear-to-r before:from-white before:to-transparent",
                        "animate-meteor-effect",
                        className
                    )}
                    style={{
                        top: "-40px",
                        left: `${meteor.left}%`, // ✅ FULL WIDTH
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${meteor.duration}s`,
                    }}
                />
            ))}
        </motion.div>
    );
};