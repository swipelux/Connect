import '../styles/global.css';
import '@swipelux/connect/styles.css';
import type { AppProps } from 'next/app';
import {
  SwipeluxConnectProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@swipelux/connect';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@swipelux/connect/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const projectId = 'YOUR_PROJECT_ID';

const { wallets } = getDefaultWallets({
  appName: 'Connect demo',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'Connect Demo',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <SwipeluxConnectProvider appInfo={demoAppInfo} chains={chains}>
        <Component {...pageProps} />
      </SwipeluxConnectProvider>
    </WagmiConfig>
  );
}

export default MyApp;
