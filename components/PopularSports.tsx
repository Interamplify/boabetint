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
        <section className="py-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{content.title}</h2>
                    <Link href="/en/sports" className="text-sm font-medium text-gray-500 hover:text-boabet-green transition-colors flex items-center gap-1">
                        View All <ArrowRight size={14} />
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {content.items.map((sport, index) => {
                        const Icon = sportIcons[index % sportIcons.length];
                        return (
                            <Link
                                key={index}
                                href={sport.link}
                                className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-100 hover:border-boabet-green/50 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-boabet-green group-hover:text-white transition-colors duration-300 mb-3">
                                    <Icon size={20} />
                                </div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-boabet-green transition-colors">{sport.name}</h3>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
