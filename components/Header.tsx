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
  Smartphone,
  Menu,
  X
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
  );
}
