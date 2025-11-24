import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import SEOContent from "@/components/SEOContent";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import LiveBettingFeature from "@/components/LiveBettingFeature";
import PopularSports from "@/components/PopularSports";
import SecurityTrust from "@/components/SecurityTrust";
import { getDictionary, Locale } from "@/lib/dictionaries";
import { Metadata } from "next";

export function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'hu' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = getDictionary(lang);

    return {
        title: dict.metadata.title,
        description: dict.metadata.description,
    };
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = getDictionary(lang);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            <HeroBanner />
            <CategoryGrid lang={lang} />

            <PopularSports content={dict.popularSports} />

            <LiveBettingFeature content={dict.liveBetting} />

            {/* Additional Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-12">
                <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Featured Matches</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((match) => (
                            <div key={match} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 mb-1">Premier League</span>
                                    <div className="font-semibold text-gray-800">Man City vs Liverpool</div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="bg-white px-3 py-1 rounded border border-gray-200 text-sm font-medium hover:border-boabet-green hover:text-boabet-green">1.95</button>
                                    <button className="bg-white px-3 py-1 rounded border border-gray-200 text-sm font-medium hover:border-boabet-green hover:text-boabet-green">3.50</button>
                                    <button className="bg-white px-3 py-1 rounded border border-gray-200 text-sm font-medium hover:border-boabet-green hover:text-boabet-green">3.80</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Casino Top Picks</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((game) => (
                            <div key={game} className="aspect-square bg-gray-200 rounded-lg relative overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-bold text-sm bg-boabet-green px-3 py-1 rounded-full">Play</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <WhyChooseUs content={dict.whyChooseUs} />

            <SecurityTrust content={dict.securityTrust} />

            <SEOContent content={dict.seoContent} />
            <FAQ content={dict.faq} />
        </div>
    );
}
