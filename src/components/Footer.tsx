export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold uppercase italic tracking-widest text-accent">Shadowline</h2>
                    <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Automotive Grade Bicycles</p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Instagram</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">YouTube</a>
                </div>

                <div className="text-xs text-gray-600 font-mono">
                    &copy; {new Date().getFullYear()} Shadowline Automotive. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
