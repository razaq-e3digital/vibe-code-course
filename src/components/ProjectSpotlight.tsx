'use client';

import { motion } from 'framer-motion';
import { AreaChart, Users, Activity, Dumbbell } from 'lucide-react';

export default function ProjectSpotlight() {
    return (
        <section className="py-24 px-4 bg-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-8"
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-semibold text-sm">
                        MODULE 02
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Beyond Basic <span className="text-secondary">Features</span>
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Build a real B2B tool for Personal Trainers. Learn to manage multiple user types (Admins, Trainers, Clients) and create custom workout/nutrition builders without writing syntax.
                    </p>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
                        <p className="italic text-gray-300 mb-4">"I built this app in 3 hours using the techniques from the course. It would have taken me 3 weeks before."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                            <div>
                                <p className="font-semibold">Sarah J.</p>
                                <p className="text-xs text-gray-400">Early Access Student</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Visual: CSS Dashboard Mockup */}
                <div className="flex-1 w-full max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-[#0f172a] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 text-xs text-gray-500 font-mono">dashboard.fit-track.app</div>
                        </div>

                        {/* Layout */}
                        <div className="flex h-[400px]">
                            {/* Sidebar */}
                            <div className="w-16 border-r border-white/10 flex flex-col items-center py-4 gap-6 bg-white/5">
                                <Activity className="w-6 h-6 text-primary" />
                                <Users className="w-6 h-6 text-gray-500" />
                                <Dumbbell className="w-6 h-6 text-gray-500" />
                                <div className="mt-auto w-8 h-8 rounded-full bg-white/10" />
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-6 space-y-6 bg-gradient-to-br from-[#0f172a] to-[#1e1b4b]">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold">Client Progress</h3>
                                    <button className="px-3 py-1 bg-primary text-xs rounded-md">Add Client</button>
                                </div>

                                {/* Simulated Chart */}
                                <div className="h-40 w-full border border-white/5 bg-white/5 rounded-lg p-4 relative flex items-end justify-between gap-2 overflow-hidden">
                                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                            className="w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-sm"
                                        />
                                    ))}
                                    <div className="absolute top-2 right-2 flex items-center gap-1 text-xs text-gray-400">
                                        <AreaChart className="w-3 h-3" /> Growth
                                    </div>
                                </div>

                                {/* Bottom Row Cards */}
                                <div className="flex gap-4">
                                    <div className="flex-1 bg-white/5 p-4 rounded-lg border border-white/5">
                                        <div className="text-xs text-gray-400 mb-1">Active Clients</div>
                                        <div className="text-2xl font-bold">24</div>
                                    </div>
                                    <div className="flex-1 bg-white/5 p-4 rounded-lg border border-white/5">
                                        <div className="text-xs text-gray-400 mb-1">Workout Plans</div>
                                        <div className="text-2xl font-bold">12</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
