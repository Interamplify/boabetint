import Link from 'next/link';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

interface SEOContentProps {
    content: {
        title: string;
        paragraphs: string[];
        links: { text: string; href: string }[];
    };
}

export default function SEOContent({ content }: SEOContentProps) {
    return (
        <section className="py-20 px-4 md:px-8 bg-white overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-boabet-green/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-3/5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                            Premium Experience
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            {content.title}
                        </h2>
                        <div className="prose prose-lg prose-gray max-w-none text-gray-600 space-y-6">
                            {content.paragraphs.map((paragraph, index) => (
                                <p key={index} className="leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            {content.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:border-boabet-green hover:text-boabet-green hover:shadow-md transition-all duration-300"
                                >
                                    {link.text}
                                    <ArrowRight size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-2/5 w-full">
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 relative">
                            <div className="absolute -top-6 -right-6 bg-boabet-green text-white p-4 rounded-2xl shadow-lg transform rotate-6">
                                <Shield size={32} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Players Trust Us</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Lightning Fast</h4>
                                        <p className="text-sm text-gray-500 mt-1">Instant deposits and rapid withdrawals processed automatically.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Bank-Grade Security</h4>
                                        <p className="text-sm text-gray-500 mt-1">Your data is protected by advanced SSL encryption technology.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                                        <Star size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Best Odds</h4>
                                        <p className="text-sm text-gray-500 mt-1">We consistently offer market-leading odds on top leagues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
