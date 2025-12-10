import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#features' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3' : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-neutral-900 text-white p-2 rounded-xl">
                            <Sun size={20} fill="currentColor" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-neutral-900">Doon Infrapower</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-neutral-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all active:scale-95"
                        >
                            Get Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-neutral-900"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`
        md:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-xl transition-all duration-300 overflow-hidden
        ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
                <div className="flex flex-col p-6 space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-lg font-medium text-neutral-600 hover:text-neutral-900"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-neutral-100">
                        <a
                            href="#contact"
                            className="block w-full text-center bg-neutral-900 text-white px-5 py-3 rounded-xl font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Quote
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
