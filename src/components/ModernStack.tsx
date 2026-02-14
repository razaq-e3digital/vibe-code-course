'use client';

import { motion } from 'framer-motion';
import { Server, Layout, Rocket, Box, Database, Terminal } from 'lucide-react';

const stackSteps = [
    {
        icon: <Layout className="w-8 h-8 text-blue-400" />,
        title: "Build",
        description: "AI-Assisted Architecture"
    },
    {
        icon: <Server className="w-8 h-8 text-green-400" />,
        title: "Deploy",
        description: "One-Click to Cloud"
    },
    {
        icon: <Rocket className="w-8 h-8 text-orange-400" />,
        title: "GTM",
        description: "Automated User Acquisition"
    }
];

export default function ModernStack() {
    return (
        <section className="py-24 px-4 bg-black relative">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px] opacity-20 pointer-events-none" />

            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold text-sm mb-6">
                    MODULE 03
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Launch & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Automate</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
                    Deploy your product and your own high-converting landing page to the cloud. Set up automated GTM systems to start signing up businesses immediately.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {stackSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-xl font-bold"><Terminal className="w-6 h-6" /> Replit</div>
                    <div className="flex items-center gap-2 text-xl font-bold"><Box className="w-6 h-6" /> Lovable</div>
                    <div className="flex items-center gap-2 text-xl font-bold"><Database className="w-6 h-6" /> Supabase</div>
                    <div className="flex items-center gap-2 text-xl font-bold"><Server className="w-6 h-6" /> Cloudflare</div>
                </div>
            </div>
        </section>
    );
}
