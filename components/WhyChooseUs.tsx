import { ShieldCheck, Zap, Headset, Trophy } from 'lucide-react';

interface WhyChooseUsProps {
    content: {
        title: string;
        items: { title: string; description: string }[];
    };
}

const icons = [Trophy, Zap, Headset, ShieldCheck];

export default function WhyChooseUs({ content }: WhyChooseUsProps) {
    return (
        <section className="py-24 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{content.title}</h2>
                    <div className="h-1 w-20 bg-boabet-green mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.items.map((item, index) => {
                        const Icon = icons[index] || Trophy;
                        return (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-boabet-green group-hover:text-white transition-colors duration-300 text-gray-700">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
