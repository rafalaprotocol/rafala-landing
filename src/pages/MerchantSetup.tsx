import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';

const SUPPORTED_CHAINS = [
    { id: 43114, name: 'Avalanche' },
    { id: 42161, name: 'Arbitrum' },
    { id: 8453, name: 'Base' },
    { id: 1, name: 'Ethereum' },
    { id: 59144, name: 'Linea' },
];

const MerchantSetup = () => {
    const { address } = useAccount();
    const [selectedChainId, setSelectedChainId] = useState<number>(SUPPORTED_CHAINS[0].id);
    const [copied, setCopied] = useState(false);

    if (!address) {
        return (
            <div className="text-center font-display text-glacier mt-10">
                Please connect your wallet to set up your payment link.
            </div>
        );
    }

    const paymentLink = `https://pay.rafala.xyz/m/${address}?dest=${selectedChainId}`;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(paymentLink);
        setCopied(true);
    };

    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timeout);
        }
    }, [copied]);

    return (
        <div className="max-w-xl mx-auto mt-10 bg-graphite p-6 rounded-2xl shadow-lg font-display text-glacier">
            <h2 className="text-xl font-bold mb-4">Merchant Setup</h2>

            <div className="mb-6">
                <label className="block mb-1 font-medium text-sm">Connected Wallet:</label>
                <div className="bg-noir border border-rust rounded-xl px-4 py-2 break-all text-sm">
                    {address}
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="chain-select" className="block mb-1 font-medium text-sm">
                    Select destination chain:
                </label>
                <select
                    id="chain-select"
                    value={selectedChainId}
                    onChange={(e) => setSelectedChainId(Number(e.target.value))}
                    className="w-full bg-noir border border-rust rounded-xl px-4 py-2 text-glacier text-sm focus:outline-none focus:ring-2 focus:ring-rust"
                >
                    {SUPPORTED_CHAINS.map((chain) => (
                        <option key={chain.id} value={chain.id}>
                            {chain.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <button
                    onClick={handleCopy}
                    className="bg-rust text-noir px-5 py-2 rounded-2xl hover:bg-glacier hover:text-graphite transition duration-150 shadow-md font-semibold"
                >
                    Copy Payment Link
                </button>

                {copied && (
                    <span className="ml-4 text-sm text-rust font-semibold">Copied!</span>
                )}

                <p className="mt-6 text-sm break-all">
                    <span className="font-semibold text-glacier">Your Payment Link:</span><br />
                    <a
                        href={paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rust underline hover:text-glacier"
                    >
                        {paymentLink}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default MerchantSetup;
