import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./RetrieveWallet.css";
import {WorldIDWidget} from "@worldcoin/id";

function RetrieveWallet(props) {
  const { logo2, image12, login, privateKey, headerProps } = props;
  const actionId = process.env.WORLD_ID_ACTION_RETRIEVE_KEY
  return (
    <div className="container-center-horizontal">
      <div className="retrieve-wallet screen">
        <div className="flex-row-4">
          <Link to="/home">
            <img className="logo-2-4" src={logo2} />
          </Link>
          <Header className={headerProps.className} />
        </div>
        <div className="group-2-1">
          <div className="overlap-group1-5 border-3-5px-black">
            <img className="image-12" src={image12} />
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
            
            
            <div className="private-key-1 spacemono-normal-black-30px">{privateKey}</div>
            <input className="rectangle-5-1 border-3-5px-black"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RetrieveWallet;
