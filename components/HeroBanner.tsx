"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-boabet-green rounded-2xl overflow-hidden shadow-xl my-8"
        >
            {/* Background Pattern - Simple and replicable */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-xl text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
                    >
                        New Customer Offer
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        2 Goals Ahead <br />
                        <span className="text-boabet-yellow">Early Payout</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0"
                    >
                        Get your single bets paid out instantly if your team goes 2 goals ahead. Available on over 80 leagues.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center gap-2 bg-white text-boabet-green font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 shadow-lg"
                        >
                            Join Now
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
                        >
                            View Details
                        </Link>
                    </motion.div>
                </div>

                {/* Simple Graphic Placeholder - Easy to replace with an image widget in Elementor */}
                <div className="hidden md:block relative w-full max-w-sm">
                    <div className="aspect-square rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center p-8">
                        <div className="text-center">
                            <div className="text-8xl font-black text-white/20">2</div>
                            <div className="text-2xl font-bold text-white/40 uppercase tracking-widest mt-2">Goals</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
