import React from "react";
import { Link } from "react-router-dom";
import {WorldIDWidget} from "@worldcoin/id";
import "./WorldID.css";

function WorldID(props) {
  const { logo2, place, app, image11, connect, wallet, privateKey, save } =
    props;

  return (
    <div className="container-center-horizontal">
      <div className="connect-wallets screen">
        <div className="flex-row-1">
          <Link to="/home">
            <img className="logo-2-1" src={logo2} />
          </Link>
          <Link to="/home">
            <div className="place-1 spacemono-bold-black-35px">{place}</div>
          </Link>
          <div className="app-1 spacemono-bold-black-35px">{app}</div>
        </div>
        <div className="group-2">
        <WorldIDWidget
          actionId="wid_staging_4a6e0089f6aa9448cdf3b053a8e016b9"
          signal="my_signal"
          enableTelemetry
          onSuccess={(verificationResponse) =>
            console.log(verificationResponse)
          } // you'll actually want to pass the proof to the API or your smart contract
          onError={(error) => console.error(error)}
        />
        </div>
      </div>
    </div>
  );
}

export default WorldID;
