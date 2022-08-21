import React from "react";
import { Link } from "react-router-dom";
import "./ConnectWallets.css";



function ConnectWallets(props) {
  const { logo2, image10, image8, image7, place, app, image6 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="connect-wallets-1 screen">
        <div className="flex-col">
          <Link to="/home" className="align-self-flex-start">
            <img className="logo-2" src={logo2} />
          </Link>
          <Link to="/connect-wallets">
          <div className="overlap-group2">
            
              <div className="rectangle-2 border-4px-black"></div>
            
            <img className="image-10" src={image10} />
          </div>
          </Link>
          <div className="image-container border-4px-black">
            <img className="image-8" src={image8} />
            <img className="image-7" src={image7} />
          </div>
        </div>
        <div className="flex-col-1">
          <div className="flex-row">
            <Link to="/home">
              <div className="place spacemono-bold-black-35px">{place}</div>
            </Link>
            <div className="app spacemono-bold-black-35px">{app}</div>
          </div>
          <div className="overlap-group1 border-4px-black">
            <img className="image-6" src={image6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallets;
