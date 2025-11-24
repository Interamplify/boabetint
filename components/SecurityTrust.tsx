import { Shield, Lock, CheckCircle } from 'lucide-react';

interface SecurityTrustProps {
    content: {
        title: string;
        description: string;
        badges: string[];
    };
}

export default function SecurityTrust({ content }: SecurityTrustProps) {
    return (
        <section className="py-16 px-4 md:px-8 bg-gray-900 text-white mt-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 text-boabet-green font-bold mb-4 uppercase tracking-wider text-sm">
                            <Shield size={16} />
                            Secure & Trusted
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-white">
                            {content.title}
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
                            {content.description}
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {content.badges.map((badge, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors px-5 py-4 rounded-xl border border-white/5">
                                    <CheckCircle size={20} className="text-boabet-green flex-shrink-0" />
                                    <span className="text-sm font-medium text-gray-200">{badge}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-6 text-gray-500 text-sm">
                            <div className="flex items-center gap-2">
                                <Lock size={16} />
                                <span>256-bit SSL Encryption</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield size={16} />
                                <span>Licensed & Regulated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
