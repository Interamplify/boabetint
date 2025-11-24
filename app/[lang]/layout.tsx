import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/dictionaries";

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    return (
        <div className="flex flex-col min-h-screen bg-boabet-bg">
            <Header lang={lang as Locale} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer lang={lang} />
        </div>
    );
}
