import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { className } = props;

  return (
    <div className={`header ${className || ""}`}>
      <Link to="/home">
        <div className="place spacemono-bold-black-35px">HOME</div>
      </Link>
      <Link to="/connect-wallets">
        <div className="app spacemono-bold-black-35px">APP</div>
      </Link>
      <Link to="/gift-a-wallet">
        <div className="gift-a-wallet spacemono-bold-black-35px">GIFT A WALLET</div>
      </Link>
    </div>
  );
}

export default Header;
