"use client";

import Link from 'next/link';
import { Trophy, Timer, Gift, Spade, Dices } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
    {
        title: "Sports Betting",
        icon: <Trophy size={28} />,
        description: "40+ Sports",
        href: "sports",
        color: "text-blue-600 bg-blue-50"
    },
    {
        title: "In-Play",
        icon: <Timer size={28} />,
        description: "Live Action",
        href: "in-play",
        color: "text-green-600 bg-green-50"
    },
    {
        title: "Promotions",
        icon: <Gift size={28} />,
        description: "Daily Offers",
        href: "promotions",
        color: "text-amber-600 bg-amber-50"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function CategoryGrid({ lang }: { lang: string }) {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
        >
            {categories.map((cat, index) => (
                <motion.div key={index} variants={item} className="h-full">
                    <Link
                        href={`/${lang}/${cat.href}`}
                        className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-boabet-green/30 transition-all duration-300 group h-full"
                    >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${cat.color}`}>
                            {cat.icon}
                        </div>
                        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-boabet-green transition-colors">{cat.title}</h3>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{cat.description}</p>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
}
