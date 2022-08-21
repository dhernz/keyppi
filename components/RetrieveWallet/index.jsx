import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./RetrieveWallet.css";

function RetrieveWallet(props) {
  const { logo2, image12, login, privateKey, headerProps } = props;

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
            <div className="overlap-group-4 border-3-5px-black">
              <div className="login spacemono-bold-black-35px">{login}</div>
            </div>
            <div className="private-key-1 spacemono-normal-black-30px">{privateKey}</div>
            <div className="rectangle-5-1 border-3-5px-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RetrieveWallet;
