'use client';

import { motion } from 'framer-motion';
import { Bot, Zap, Rocket } from 'lucide-react';

const blueprints = [
    {
        icon: <Bot className="w-8 h-8 text-primary" />,
        title: 'Talk to AI',
        description: 'Forget complex syntax memorization. Learn the art of Natural Language Programming. If you can articulate it, you can build it.'
    },
    {
        icon: <Zap className="w-8 h-8 text-secondary" />,
        title: 'Validate Fast',
        description: 'Skip the boilerplate. Use AI to spin up MVPs in minutes. Test your assumptions with real code before the coffee gets cold.'
    },
    {
        icon: <Rocket className="w-8 h-8 text-purple-400" />,
        title: 'Ship Product',
        description: 'Deploy instantly. We focus on shipping real, functional applications that solve problems, not just simulating tutorials.'
    }
];

export default function Blueprint() {
    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
                >
                    The Digital Alchemist's Way
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {blueprints.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
