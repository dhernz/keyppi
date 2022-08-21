import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./Metamask.css";

function Metamask(props) {
  const { logo2, image9, connect, wallet, email, privateKey, save } = props;

  return (
    <div className="container-center-horizontal">
      <div className="metamask screen">
        <div className="flex-row">
          <Link to="/home">
            <img className="logo-2" src={logo2} />
          </Link>
          <Header />
        </div>
        <div className="group-2">
          <div className="overlap-group1 spacemono-normal-black-30px border-3-5px-black">
            <img className="image-9" src={image9} />
            <div className="overlap-group border-3-5px-black">
              <div className="connect spacemono-bold-black-35px">{connect}</div>
            </div>
            <div className="wallet">{wallet}</div>
            <div className="rectangle-4 border-3-5px-black"></div>
            <div className="overlap-group1-item">{email}</div>
            <div className="rectangle border-3-5px-black"></div>
            <div className="overlap-group1-item">{privateKey}</div>
            <div className="rectangle border-3-5px-black"></div>
            <div className="overlap-group2">
              <div className="rectangle-2"></div>
              <a href="javascript:ShowOverlay('loading', 'animate-appear');">
                <div className="save spacemono-normal-white-40px">{save}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metamask;
