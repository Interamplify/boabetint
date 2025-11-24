"use client";

import Link from 'next/link';
import { getDictionary, Locale } from '@/lib/dictionaries';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Trophy,
  Timer,
  Gamepad2,
  Gift,
  Calendar,
  Monitor,
  CreditCard,
  HelpCircle,
  ShieldCheck,
  FileText,
  Info,
  Dribbble,
  Target,
  Swords,
  Hammer,
  Flag,
  Car,
  CircleDollarSign,
  Wallet,
  Banknote,
  Bitcoin,
  Smartphone
} from 'lucide-react';

// Helper to map text to icons
const getIconForMenuItem = (text: string) => {
  const lowerText = text.toLowerCase();

  // Sports
  if (lowerText.includes('football')) return <Trophy size={18} />;
  if (lowerText.includes('basketball')) return <Dribbble size={18} />;
  if (lowerText.includes('tennis')) return <Target size={18} />;
  if (lowerText.includes('mma') || lowerText.includes('boxing')) return <Swords size={18} />;
  if (lowerText.includes('cricket')) return <Hammer size={18} />; // Approximation
  if (lowerText.includes('golf')) return <Flag size={18} />;
  if (lowerText.includes('formula')) return <Car size={18} />;
  if (lowerText.includes('in-play')) return <Timer size={18} />;

  // Esports
  if (lowerText.includes('esports') || lowerText.includes('league') || lowerText.includes('dota') || lowerText.includes('cs2')) return <Monitor size={18} />;

  // Promotions
  if (lowerText.includes('bonus') || lowerText.includes('free') || lowerText.includes('promotion')) return <Gift size={18} />;

  // Daily Picks
  if (lowerText.includes('pick')) return <Calendar size={18} />;

  // Payments
  if (lowerText.includes('bitcoin')) return <Bitcoin size={18} />;
  if (lowerText.includes('paypal') || lowerText.includes('skrill') || lowerText.includes('neteller')) return <Wallet size={18} />;
  if (lowerText.includes('card') || lowerText.includes('revolut')) return <CreditCard size={18} />;
  if (lowerText.includes('deposit')) return <Banknote size={18} />;

  // Legal
  if (lowerText.includes('about')) return <Info size={18} />;
  if (lowerText.includes('responsible')) return <ShieldCheck size={18} />;
  if (lowerText.includes('terms') || lowerText.includes('privacy')) return <FileText size={18} />;

  // Default
  return <CircleDollarSign size={18} />;
};

export default function Header({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const { navigation } = dict;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="w-full shadow-sm sticky top-0 z-50 bg-white" onMouseLeave={() => setActiveMenu(null)}>
      {/* Top Bar - Green */}
      <div className="bg-boabet-green text-white py-3 px-4 md:px-8 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href={`/${lang}`} className="text-2xl font-bold italic tracking-tighter flex items-center gap-1">
            Boa<span className="text-boabet-yellow">Bet</span>
          </Link>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-white/80 transition-colors">
              Login
            </button>
            <button className="bg-boabet-yellow text-boabet-dark px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors shadow-md">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Dark */}
      <div className="bg-boabet-dark text-white relative z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-8 text-sm font-medium h-14 items-center">
            {Object.entries(navigation).map(([key, section]) => (
              <div
                key={key}
                className="h-full flex items-center"
                onMouseEnter={() => setActiveMenu(key)}
              >
                <button
                  className={`flex items-center gap-1.5 uppercase tracking-wider text-xs font-bold transition-all duration-200 px-3 py-1.5 rounded-md ${activeMenu === key ? 'text-boabet-yellow bg-white/10' : 'text-gray-300 hover:text-white'}`}
                >
                  {section.title}
                  <ChevronDown size={12} className={`transition-transform duration-200 ${activeMenu === key ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 w-full bg-white border-b border-gray-100 shadow-xl py-8 z-30"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-4 gap-6">
                {navigation[activeMenu as keyof typeof navigation].items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-boabet-green group-hover:text-white transition-colors duration-200 shadow-sm">
                      {getIconForMenuItem(item.text)}
                    </div>
                    <span className="font-semibold text-gray-700 group-hover:text-boabet-green transition-colors text-sm">{item.text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
