import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="flex items-center justify-between p-4 border-b border-graphite relative">
            <h1 className="text-xl font-display tracking-wide">RAFALA</h1>
            <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
            <nav className={`space-y-4 md:space-y-0 md:space-x-6 text-sm absolute md:static top-full left-0 right-0 bg-noir md:bg-transparent p-4 md:p-0 ${open ? 'block' : 'hidden'} md:block`}>
                <a href="#pay" className="hover:text-rust block md:inline-block">Pay</a>
                <a href="#identity" className="hover:text-rust block md:inline-block">Identity</a>
                <a href="#app" className="hover:text-rust block md:inline-block">App</a>
                <a href="#token" className="hover:text-rust block md:inline-block">Token</a>
                <a href="https://docs.rafala.xyz" className="hover:text-rust block md:inline-block">Docs</a>
            </nav>
        </header>
    );
}
