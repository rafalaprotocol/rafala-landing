import { useAccount } from 'wagmi';
import { useParams, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import qs from 'qs';

const SUPPORTED_CHAINS = [
    { id: 43114, name: 'Avalanche' },
    { id: 42161, name: 'Arbitrum' },
    { id: 8453, name: 'Base' },
    { id: 1, name: 'Ethereum' },
    { id: 59144, name: 'Linea' },
    { id: 942, name: 'Sonic' },
    { id: 2024021821, name: 'World Chain' },
];

const PaymentPage = () => {
    const { merchantAddress } = useParams();
    const location = useLocation();
    const { address: payerAddress } = useAccount();

    const query = useMemo(() => qs.parse(location.search, { ignoreQueryPrefix: true }), [location.search]);
    const destChainId = Number(query.dest);

    const [sourceChainId, setSourceChainId] = useState<number>(SUPPORTED_CHAINS[0].id);

    const selectedSourceChain = SUPPORTED_CHAINS.find((c) => c.id === sourceChainId);
    const selectedDestChain = SUPPORTED_CHAINS.find((c) => c.id === destChainId);

    const mockDepositAddress = `0xMockUSDCProxyFor_${merchantAddress?.slice(2, 8)}_${sourceChainId}`;

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-graphite p-6 rounded-2xl shadow-xl font-display text-glacier">
            <h2 className="text-xl font-bold mb-6">Pay Merchant with USDC</h2>

            <div className="mb-4 text-sm">
                <span className="font-medium text-glacier">Merchant:</span>
                <div className="bg-noir border border-rust mt-1 px-4 py-2 rounded-xl break-all">
                    {merchantAddress}
                </div>
            </div>

            <div className="mb-6 text-sm">
                <span className="font-medium text-glacier">Merchant’s Destination Chain:</span>
                <div className="bg-noir border border-rust mt-1 px-4 py-2 rounded-xl">
                    {selectedDestChain?.name ?? 'Unknown'} ({destChainId})
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="sourceChain" className="block text-sm font-medium mb-1">
                    Select your source chain:
                </label>
                <select
                    id="sourceChain"
                    value={sourceChainId}
                    onChange={(e) => setSourceChainId(Number(e.target.value))}
                    className="w-full bg-noir border border-rust rounded-xl px-4 py-2 text-glacier text-sm focus:outline-none focus:ring-2 focus:ring-rust"
                >
                    {SUPPORTED_CHAINS.map((chain) => (
                        <option key={chain.id} value={chain.id}>
                            {chain.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="bg-noir border border-rust rounded-xl p-5 text-sm mb-6">
                <p className="mb-2">
                    <span className="font-semibold text-rust">Step 1:</span> Send <span className="font-bold text-glacier">USDC</span> on{' '}
                    <span className="font-bold text-glacier">{selectedSourceChain?.name}</span> to:
                </p>
                <div className="font-mono bg-glacier text-noir p-3 rounded-md break-all text-xs mb-4">
                    {mockDepositAddress}
                </div>

                <p>
                    <span className="font-semibold text-rust">Step 2:</span> We’ll automatically rebalance your payment to{' '}
                    <span className="font-bold text-glacier">{selectedDestChain?.name}</span> via <span className="font-bold">CCTP V2</span>.
                </p>
            </div>

            {payerAddress && (
                <div className="text-xs text-steel text-right">
                    You are paying from wallet:{' '}
                    <span className="font-semibold text-glacier">{payerAddress}</span>
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
