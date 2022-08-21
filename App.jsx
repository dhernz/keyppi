import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ConnectWallets from "./components/ConnectWallets";
import ConnectWallets2 from "./components/ConnectWallets2";
import WorldIDCreatedWallet from "./components/WorldIDCreatedWallet";
import WorldIDRetrieveKey from "./components/WorldIDRetrieveKey";
import Home from "./components/Home";

function App() {
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

