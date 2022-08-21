import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ConnectWallets from "./components/ConnectWallets";
import ConnectWallets2 from "./components/ConnectWallets2";
import WorldIDCreatedWallet from "./components/WorldIDCreatedWallet";
import WorldIDRetrieveKey from "./components/WorldIDRetrieveKey";
import Home from "./components/Home";
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

require('dotenv').config();

function App() {
  const { activate, deactivate } = useWeb3React();
  
  return (
    <Router>
      <Switch>
        <Route path="/connect-wallets-1">
          <ConnectWallets
            logo2="/img/logo-2@2x.png"
            image10="/img/image-10@2x.png"
            image8="/img/image-8@2x.png"
            image7="/img/image-7@2x.png"
            place="HOME"
            app="APP"
            image6="/img/image-6@2x.png"
          />
        </Route>
        <Route path="/connect-wallets">
          <ConnectWallets2 {...connectWallets2Data} />
        </Route>
        <Route path="/:path(|home)">
          <Home
            logo1="/img/logo-2@2x.png"
            place="HOME"
            app="APP"
            spanText1="Forget about managing your"
            spanText2=" private keys 🔐"
            joinUs="Join us"
          />
        </Route>
        <Route path="/world-id-created-wallet">
          <WorldIDCreatedWallet {...worldIDData}/>
        </Route>
        <Route path="/world-id-retrieve-key">
          <WorldIDRetrieveKey {...worldIDData2}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const connectWallets2Data = {
    logo2: "/img/logo-2@2x.png",
    place: "HOME",
    app: "APP",
    image11: "/img/image-11@2x.png",
    connect: "Connect",
    wallet: "Wallet",
    privateKey: "Private key",
    save: "Save",
    walletConnect: WalletConnect,
};

const worldIDData = {
  logo2: "/img/logo-2@2x.png",
  place: "HOME",
  app: "APP",
  image11: "/img/image-11@2x.png",
  connect: "Connect",
  wallet: "Wallet",
  privateKey: "Private key",
  save: "Save",
};

const worldIDData2 = {
  logo2: "/img/logo-2@2x.png",
  place: "HOME",
  app: "APP",
  image11: "/img/image-11@2x.png",
  connect: "Connect",
  wallet: "Wallet",
  privateKey: "Private key",
  save: "Save",
};

