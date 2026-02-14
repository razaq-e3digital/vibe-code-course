'use client';

import { motion } from 'framer-motion';
import { Play, Code2, Sparkles, Terminal, Box } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-32 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 max-w-4xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary-foreground/80 mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    REGISTRATION OPENS SOON
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                    Stop Waiting for a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient-x">
                        Technical Co-Founder.
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Build and launch a functional B2B SaaS in 4 weeks. <br className="hidden md:block" />
                    No agency needed. Own your code. Own your future.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <Link href="#waitlist">
                        <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Join the Waitlist
                        </button>
                    </Link>

                    <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-lg font-bold text-lg transition-all flex items-center gap-2 group">
                        <Play className="w-5 h-5 group-hover:text-primary transition-colors" />
                        Watch the Trailer
                    </button>
                </div>

                <div className="pt-20 space-y-4">
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Powered by Modern Alchemy</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Tech Stack Placeholders */}
                        <div className="flex items-center gap-2 text-lg font-semibold"><Terminal className="w-5 h-5" /> Replit</div>
                        <div className="flex items-center gap-2 text-lg font-semibold"><Sparkles className="w-5 h-5" /> Lovable</div>
                        <div className="flex items-center gap-2 text-lg font-semibold"><Box className="w-5 h-5" /> Claude</div>
                        <div className="flex items-center gap-2 text-lg font-semibold"><Code2 className="w-5 h-5" /> Cursor</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
