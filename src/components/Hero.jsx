export default function Hero() {
    return (
        <section className="py-24 px-6 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display mb-6 leading-tight">
                The Future of Decentralized Payments
            </h2>
            <p className="text-steel text-lg">
                Rafala is a multichain USDC protocol powered by Circle CCTP V2, zero-knowledge identity, and quantum-safe cryptography.
            </p>
            <div className="mt-10">
                <a
                    href="#pay"
                    className="inline-block px-8 py-3 bg-rust text-noir font-medium rounded-xl hover:opacity-90 transition"
                >
                    Launch Pay
                </a>
            </div>
        </section>
    );
}
