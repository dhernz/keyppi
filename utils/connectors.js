import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "Web3-react",
  supportedChainIds: [1, 3, 4, 5, 42],
 });
 
 const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
 });
 
 const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
 });

 export const connectors = {
    injected: Injected,
    walletConnect: WalletConnect,
    coinbaseWallet: CoinbaseWallet
 }