import Link from 'next/link';

export default function Footer({ }: { lang: string }) {
    return (
        <footer className="bg-boabet-dark text-gray-400 py-12 px-4 md:px-8 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-white font-bold mb-4">About Boabet</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Help</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Responsible Gaming</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Sports</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-white transition-colors">Football</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Tennis</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Basketball</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Payment Methods</h3>
                    <div className="flex gap-2">
                        {/* Placeholders for payment icons */}
                        <div className="w-10 h-6 bg-gray-600 rounded"></div>
                        <div className="w-10 h-6 bg-gray-600 rounded"></div>
                        <div className="w-10 h-6 bg-gray-600 rounded"></div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} Boabet Global. All rights reserved.</p>
            </div>
        </footer>
    );
}
