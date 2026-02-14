'use client';

import { motion } from 'framer-motion';
import { Users, Send, ShieldCheck } from 'lucide-react';

export default function Community() {
    return (
        <section className="py-24 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black -z-10" />

            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#1e1b4b] to-[#312e81] border border-white/10 rounded-3xl p-12 relative overflow-hidden"
                >
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full" />

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        We build together. <br />
                        <span className="text-purple-300">Live feedback. Real shipping.</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Join the elite community of builders. Weekly live catch-ups, real-time code reviews, and a network of high-agency peers.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 text-sm font-semibold">
                            <ShieldCheck className="w-4 h-4 text-green-400" />
                            Real Critics, Not Yes-Men
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 text-sm font-semibold">
                            <Users className="w-4 h-4 text-blue-400" />
                            Limited to 50 seats
                        </div>
                    </div>

                    <button className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-bold text-lg transition-all flex items-center gap-2 mx-auto">
                        <Send className="w-5 h-5" />
                        Join the Telegram
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
