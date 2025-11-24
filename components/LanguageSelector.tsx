"use client";

import Link from 'next/link';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LanguageSelector() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-boabet-bg p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8 flex justify-center text-boabet-green"
        >
          <Globe size={64} />
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Boabet</h1>
        <p className="text-gray-500 mb-8">Please select your language</p>

        <div className="space-y-4">
          <Link
            href="/en"
            className="block w-full py-4 px-6 bg-white border-2 border-gray-200 rounded-xl hover:border-boabet-green hover:bg-green-50 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg text-gray-700 group-hover:text-boabet-green">English</span>
              <span className="text-2xl">🇬🇧</span>
            </div>
          </Link>

          <Link
            href="/hu"
            className="block w-full py-4 px-6 bg-white border-2 border-gray-200 rounded-xl hover:border-boabet-green hover:bg-green-50 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg text-gray-700 group-hover:text-boabet-green">Magyar</span>
              <span className="text-2xl">🇭🇺</span>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
