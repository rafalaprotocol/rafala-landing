import '@rainbow-me/rainbowkit/styles.css';
import {
    RainbowKitProvider,
    getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
    WagmiProvider,
    http,
} from 'wagmi';
import {
    mainnet,
    base,
    arbitrum,
    avalanche,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { darkTheme } from '@rainbow-me/rainbowkit';
const chains = [mainnet, base, avalanche, arbitrum];

export const config = getDefaultConfig({
    appName: 'RafalaPay',
    projectId: 'rafala-default',
    chains: [mainnet, base, avalanche, arbitrum],
    transports: chains.reduce((acc, chain) => {
        acc[chain.id] = http(chain.rpcUrls.default.http[0]);
        return acc;
    }, {} as Record<number, ReturnType<typeof http>>),
});

const queryClient = new QueryClient();

export const AppWalletProvider = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
            <RainbowKitProvider
                theme={darkTheme({
                    accentColor: '#C08A2D',
                    accentColorForeground: '#0F0F0F',
                    borderRadius: 'medium',
                    fontStack: 'system',
                })}
            >
                {children}
            </RainbowKitProvider>
        </WagmiProvider>
    </QueryClientProvider>
);
