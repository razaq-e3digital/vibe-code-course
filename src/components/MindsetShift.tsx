'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const mindsetPoints = [
    "Context Engineering vs. Prompt Kiddies",
    "Thinking in Components",
    "The AI-First Programmer Workflow"
];

export default function MindsetShift() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-8"
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm">
                        MODULE 01
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        The Architect's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Blueprint</span>
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Learn to design software like a CTO. We move from idea to technical roadmap in hours.
                        Transform from a ticket-taker to a system architect.
                    </p>

                    <ul className="space-y-4">
                        {mindsetPoints.map((point, index) => (
                            <li key={index} className="flex items-center gap-3 text-lg text-gray-300">
                                <CheckCircle2 className="w-6 h-6 text-green-400" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full"
                >
                    {/* Abstract Visual Placeholder - CSS Art */}
                    <div className="relative w-full aspect-video bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                        <div className="w-32 h-32 border-4 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute w-24 h-24 border-4 border-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute w-16 h-16 bg-white/10 backdrop-blur-md rounded-lg rotate-45 shadow-[0_0_30px_rgba(124,58,237,0.5)]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
