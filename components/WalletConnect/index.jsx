import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./WalletConnect.css";
import {WorldIDWidget} from "@worldcoin/id";
import { connectors } from "../../utils/connectors"
import { useWeb3React } from '@web3-react/core'

function WalletConnect(props) {
  const { logo2, connect, wallet, email, privateKey, save, image11 } = props;
  const actionId = process.env.WORLD_ID_ACTION_CREATED_WALLET
  const { activate } = useWeb3React();
  const handleConnect = () => {
    activate(connectors.walletConnect)
  }
  return (
    <div className="container-center-horizontal">
      <div className="wallet-connect screen">
        <div className="flex-row-3">
          <Link to="/home">
            <img className="logo-2-2" src={logo2} />
          </Link>
          <Header />
        </div>
        <div className="overlap-group3">
          <div className="overlap-group1-3 border-3-5px-black">
            <div className="overlap-group-3 border-3-5px-black">
            <button onClick={handleConnect}>
              <div className="connect spacemono-bold-black-35px">{connect}</div>
            </button>
            </div>
            <div>
              <br></br>
            <WorldIDWidget
          actionId={actionId}
          signal="created_wallet"
          enableTelemetry
          onSuccess={(verificationResponse) =>
            console.log(verificationResponse)
          } // you'll actually want to pass the proof to the API or your smart contract
          onError={(error) => console.error(error)}
             />
            </div>

            <div className="wallet-1 spacemono-normal-black-30px">{wallet}</div>
            <input className="rectangle-4-2 border-3-5px-black"></input>
            <div className="overlap-group1-item-1 spacemono-normal-black-30px">{email}</div>
            <input className="rectangle-5 border-3-5px-black"></input>
            <div className="overlap-group1-item-1 spacemono-normal-black-30px">{privateKey}</div>
            <input className="rectangle-5 border-3-5px-black"></input>
            <div className="overlap-group2-1">
              <div className="rectangle-2-4"></div>
              <a href="javascript:ShowOverlay('loading', 'animate-appear');">
                <div className="save-2 spacemono-normal-white-40px">{save}</div>
              </a>
            </div>
          </div>
          <img className="image-11" src={image11} />
        </div>
      </div>
    </div>
  );
}

export default WalletConnect;
