import React from "react";
import { Link } from "react-router-dom";
import "./ConnectWallets2.css";

function ConnectWallets2(props) {
  const { logo2, image10, image8, image7, place, app, image6 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="connect-wallets-1 screen">
        <div className="flex-col-2">
          <Link to="/home" className="align-self-flex-start">
            <img className="logo-2-5" src={logo2} />
          </Link>
          <div className="overlap-group-5">
            <Link to="/wallet-connect">
              <div className="rectangle-2-5 border-4px-black"></div>
            </Link>
            <img className="image-10" src={image10} />
          </div>
          <div className="image-container border-4px-black">
            <img className="image-8" src={image8} />
            <img className="image-7" src={image7} />
          </div>
        </div>
        <div className="flex-col-3">
          <div className="flex-row-5">
            <Link to="/home">
              <div className="place-1 spacemono-bold-black-35px">{place}</div>
            </Link>
            <div className="app-6 spacemono-bold-black-35px">{app}</div>
          </div>
          <div className="overlap-group1-6 border-4px-black">
            <img className="image-6" src={image6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallets2;
