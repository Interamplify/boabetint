"use client";

import Link from 'next/link';
import { getDictionary, Locale } from '@/lib/dictionaries';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Header({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const { navigation, branding } = dict;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="w-full shadow-sm sticky top-0 z-50 bg-white" onMouseLeave={() => setActiveMenu(null)}>
      {/* Top Bar - Green */}
      <div className="bg-boabet-green text-white py-3 px-4 md:px-8 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href={`/${lang}`} className="text-2xl font-bold italic tracking-tighter flex items-center gap-1">
            {branding.name.split(' ')[0]}<span className="text-boabet-yellow">{branding.name.split(' ')[1]}</span>
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
                  className={`flex items-center gap-1.5 uppercase tracking-wider text-xs font-bold transition-all duration-200 px-2 py-1 rounded-md ${activeMenu === key ? 'text-boabet-yellow bg-white/10' : 'text-gray-300 hover:text-white'}`}
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
            className="absolute left-0 w-full bg-white border-b border-gray-200 shadow-2xl py-10 z-30"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex gap-12">
                {/* Main Links Area */}
                <div className="flex-grow grid grid-cols-4 gap-y-6 gap-x-8">
                  {navigation[activeMenu as keyof typeof navigation].items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-boabet-green transition-colors shadow-sm" />
                      <span className="font-medium text-gray-700 group-hover:text-boabet-green transition-colors">{item.text}</span>
                    </Link>
                  ))}
                </div>

                {/* Featured / Promo Area */}
                <div className="w-72 flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-900 to-boabet-dark rounded-xl p-6 text-white shadow-lg h-full flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-boabet-green/20 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-boabet-green/30" />

                    <div className="relative z-10">
                      <h4 className="font-bold text-xl mb-2 text-boabet-yellow">{navigation[activeMenu as keyof typeof navigation].title}</h4>
                      <p className="text-sm text-gray-300 leading-relaxed mb-6">
                        Discover the best odds and exclusive offers available right now.
                      </p>
                    </div>

                    <Link
                      href={`/${lang}`}
                      className="relative z-10 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-boabet-yellow transition-colors group/link"
                    >
                      View All Markets <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
