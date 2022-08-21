import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./WalletConnect.css";
import {WorldIDWidget} from "@worldcoin/id";

function WalletConnect(props) {
  const { logo2, connect, wallet, email, privateKey, save, image11 } = props;
  const actionId = process.env.WORLD_ID_ACTION_RETRIEVE_KEY
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
              <div className="connect-1 spacemono-bold-black-35px">{connect}</div>
            </div>
            <div>
              <br></br>
            <WorldIDWidget
          actionId={actionId}
          signal="retrieve_key"
          enableTelemetry
          onSuccess={(verificationResponse) =>
            console.log(verificationResponse)
          } // you'll actually want to pass the proof to the API or your smart contract
          onError={(error) => console.error(error)}
             />
            </div>

            <div className="wallet-1 spacemono-normal-black-30px">{wallet}</div>
            <div className="rectangle-4-2 border-3-5px-black"></div>
            <div className="overlap-group1-item-1 spacemono-normal-black-30px">{email}</div>
            <div className="rectangle-5 border-3-5px-black"></div>
            <div className="overlap-group1-item-1 spacemono-normal-black-30px">{privateKey}</div>
            <div className="rectangle-5 border-3-5px-black"></div>
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
