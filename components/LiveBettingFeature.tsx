import Image from 'next/image';
import Link from 'next/link';
import { Activity, CheckCircle2, PlayCircle } from 'lucide-react';

interface LiveBettingFeatureProps {
    content: {
        title: string;
        description: string;
        features: string[];
        cta: string;
    };
}

export default function LiveBettingFeature({ content }: LiveBettingFeatureProps) {
    return (
        <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold tracking-wide uppercase">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            Live Now
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                            {content.title}
                        </h2>

                        <p className="text-xl text-gray-500 leading-relaxed">
                            {content.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {content.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                                    <CheckCircle2 size={20} className="text-boabet-green flex-shrink-0" />
                                    <span className="font-medium text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/en/in-play"
                                className="inline-flex items-center gap-2 bg-boabet-green hover:bg-green-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                {content.cta}
                                <Activity size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        {/* Clean Card Design - Replicable with Image/Card widget */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-900">
                            {/* Background Image Placeholder */}
                            <div className="aspect-[16/10] bg-gray-900 flex items-center justify-center relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80"
                                    alt="Live Match"
                                    fill
                                    className="object-cover opacity-40 mix-blend-overlay"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <PlayCircle size={80} className="text-white/80 relative z-10" />
                            </div>

                            {/* Live Stats Bar */}
                            <div className="bg-white p-6 flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="font-bold text-gray-900 text-lg">Real Madrid</div>
                                    <div className="bg-gray-100 px-3 py-1 rounded text-gray-600 font-mono font-bold">2 - 1</div>
                                    <div className="font-bold text-gray-900 text-lg">Barcelona</div>
                                </div>
                                <div className="text-red-500 font-bold text-sm animate-pulse">78'</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
