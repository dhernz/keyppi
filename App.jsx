import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Metamask from "./components/Metamask";
import Home from "./components/Home";
import GiftAWallet from "./components/GiftAWallet";
import WalletConnect from "./components/WalletConnect";
import ConnectWallets from "./components/ConnectWallets";
import Loading from "./components/Loading";
import Success from "./components/Success";
import RetrieveWallet from "./components/RetrieveWallet";
import ConnectWallets2 from "./components/ConnectWallets2";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/metamask">
          <Metamask
            logo2="/img/logo-2@2x.png"
            image9="/img/image-9@2x.png"
            connect="Connect"
            wallet="Wallet"
            email="Email"
            privateKey="Private key"
            save="Save"
          />
        </Route>
        <Route path="/:path(|home)">
          <Home
            logo1="/img/logo-2@2x.png"
            spanText1="Forget about managing your"
            spanText2=" private keys 🔐"
            joinUs="Join us"
            retrieveKey="Retrieve key"
            headerProps={homeData.headerProps}
          />
        </Route>
        <Route path="/gift-a-wallet">
          <GiftAWallet {...giftAWalletData} />
        </Route>
        <Route path="/wallet-connect">
          <WalletConnect
            logo2="/img/logo-2@2x.png"
            connect="Connect"
            wallet="Wallet"
            email="Email"
            privateKey="Private key"
            save="Save"
            image11="/img/image-11@2x.png"
          />
        </Route>
        <Route path="/connect-wallets">
          <ConnectWallets {...connectWalletsData} />
        </Route>
        <Route path="/loading">
          <Loading savingYourKeys="Saving your keys 🔐" rectangle="/img/rectangle@2x.png" />
        </Route>
        <Route path="/success">
          <Success success="Success! 🎉" rectangle="/img/rectangle-1@2x.png" />
        </Route>
        <Route path="/retrieve-wallet">
          <RetrieveWallet
            logo2="/img/logo-2@2x.png"
            image12="/img/image-12@2x.png"
            login="Login"
            privateKey="Private key"
            headerProps={retrieveWalletData.headerProps}
          />
        </Route>
        <Route path="/connect-wallets-1">
          <ConnectWallets2
            logo2="/img/logo-2@2x.png"
            image10="/img/image-10@2x.png"
            image8="/img/image-8@2x.png"
            image7="/img/image-7@2x.png"
            place="HOME"
            app="APP"
            image6="/img/image-6@2x.png"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const header2Data = {
    className: "header-1",
};

const homeData = {
    headerProps: header2Data,
};

const header3Data = {
    className: "header-2",
};

const giftAWalletData = {
    logo2: "/img/logo-2@2x.png",
    giftAWallet: "GIFT A WALLET🎁",
    giftAWalletSendItSecure: "Gift a wallet, send it secure",
    to: "To:",
    walletAddress: "Wallet Address:",
    from: "From:",
    proofOfGift: "Proof of gift",
    privateKey: "Private Key:",
    save: "Save",
    headerProps: header3Data,
};

const header5Data = {
    className: "header-4",
};

const connectWalletsData = {
    logo2: "/img/logo-2@2x.png",
    walletconnectName: "/img/walletconnect-name@2x.png",
    walletConnectLogo: "/img/image-10@2x.png",
    coinbaseLogo: "/img/image-8@2x.png",
    coinbaseName: "/img/image-7@2x.png",
    metamaskName: "/img/image-6@2x.png",
    metamaskLogo: "/img/metamask-logo@2x.png",
    headerProps: header5Data,
};

const header6Data = {
    className: "header-5",
};

const retrieveWalletData = {
    headerProps: header6Data,
};

