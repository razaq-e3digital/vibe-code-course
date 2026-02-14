import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-12 bg-black border-t border-white/10 text-sm text-gray-500">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-white tracking-widest">VibeCoder</span>
                </div>

                <div className="flex gap-8">
                    <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                    <Link href="#" className="hover:text-white transition-colors">YouTube</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                </div>

                <div>
                    © 2024 Vibe Coding Masterclass. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
