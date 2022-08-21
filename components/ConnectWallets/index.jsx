import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./ConnectWallets.css";

function ConnectWallets(props) {
  const {
    logo2,
    walletconnectName,
    walletConnectLogo,
    coinbaseLogo,
    coinbaseName,
    metamaskName,
    metamaskLogo,
    headerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="connect-wallets screen">
        <div className="flex-col">
          <Link to="/home" className="align-self-flex-start">
            <img className="logo-2-3" src={logo2} />
          </Link>
          <div className="overlap-group2-2">
            <Link to="/wallet-connect">
              <div className="rectangle-6 border-4px-black"></div>
            
            <img className="walletconnect-name" src={walletconnectName} />
            <img className="wallet-connect-logo" src={walletConnectLogo} />
            </Link>
          </div>
          <div className="coinbase-container border-4px-black">
            <img className="coinbase-logo" src={coinbaseLogo} />
            <img className="coinbase-name" src={coinbaseName} />
          </div>
        </div>
        <div className="flex-col-1">
          <Header className={headerProps.className} />
          <div className="overlap-group1-4">
            <Link to="/metamask">
              <div className="rectangle-6 border-4px-black"></div>
            
            <img className="metamask-name" src={metamaskName} />
            <img className="metamask-logo" src={metamaskLogo} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallets;
