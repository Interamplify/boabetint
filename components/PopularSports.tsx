import Link from 'next/link';
import { ArrowRight, Trophy, Dribbble, Target, Gamepad2 } from 'lucide-react';

interface PopularSportsProps {
    content: {
        title: string;
        items: { name: string; link: string }[];
    };
}

const sportIcons = [Trophy, Dribbble, Target, Gamepad2];

export default function PopularSports({ content }: PopularSportsProps) {
    return (
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{content.title}</h2>
                    <Link href="/en/sports" className="group flex items-center gap-2 text-boabet-green font-semibold hover:text-green-700 transition-colors">
                        View All Sports
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {content.items.map((sport, index) => {
                        const Icon = sportIcons[index % sportIcons.length];
                        return (
                            <Link
                                key={index}
                                href={sport.link}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-64 flex flex-col justify-end p-6"
                            >
                                {/* Background Gradient & Pattern */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(index)} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                <div className="absolute -right-8 -top-8 text-gray-50 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 rotate-12">
                                    <Icon size={180} strokeWidth={1} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getGradient(index)} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:translate-x-1 transition-transform">{sport.name}</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        Bet Now <ArrowRight size={14} />
                                    </div>
                                </div>

                                {/* Hover Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-boabet-green/20 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function getGradient(index: number) {
    const gradients = [
        "from-emerald-500 to-teal-600",
        "from-orange-500 to-red-600",
        "from-blue-500 to-indigo-600",
        "from-violet-500 to-purple-600"
    ];
    return gradients[index % gradients.length];
}
