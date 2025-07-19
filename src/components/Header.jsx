export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 border-b border-graphite">
            <h1 className="text-xl font-display tracking-wide">RAFALA</h1>
            <nav className="space-x-6 text-sm">
                <a href="#pay" className="hover:text-rust">Pay</a>
                <a href="#identity" className="hover:text-rust">Identity</a>
                <a href="#app" className="hover:text-rust">App</a>
                <a href="#token" className="hover:text-rust">Token</a>
                <a href="https://docs.rafala.xyz" className="hover:text-rust">Docs</a>
            </nav>
        </header>
    );
}
