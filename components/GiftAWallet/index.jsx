import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./GiftAWallet.css";

function GiftAWallet(props) {
  const {
    logo2,
    giftAWallet,
    giftAWalletSendItSecure,
    to,
    walletAddress,
    from,
    proofOfGift,
    privateKey,
    save,
    headerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="gift-a-wallet-6 screen">
        <div className="flex-row-2">
          <Link to="/home">
            <img className="logo-2-1" src={logo2} />
          </Link>
          <Header className={headerProps.className} />
        </div>
        <div className="gift-a-wallet-7">{giftAWallet}</div>
        <div className="gift-a-wallet-send-it-secure spacemono-normal-black-30px">{giftAWalletSendItSecure}</div>
        <div className="to spacemono-normal-black-30px">{to}</div>
        <input className="rectangle-4-1 border-3-5px-black"></input>
        <div className="gift-a-wallet-item spacemono-normal-black-30px">{walletAddress}</div>
        <input className="rectangle-3 border-3-5px-black"></input>
        <div className="gift-a-wallet-item spacemono-normal-black-30px">{from}</div>
        <input className="rectangle-3 border-3-5px-black"></input>
        <div className="overlap-group-2">
          <div className="rectangle-2-2"></div>
          <div className="proof-of-gift spacemono-normal-white-40px">{proofOfGift}</div>
        </div>
        <div className="private-key spacemono-normal-black-30px">{privateKey}</div>
        <input className="rectangle-3 border-3-5px-black"></input>
        <div className="overlap-group1-2">
          <a href="javascript:ShowOverlay('loading', 'animate-appear');">
            <div className="rectangle-2-3"></div>
          </a>
          <a href="javascript:ShowOverlay('loading', 'animate-appear');">
            <div className="save-1 spacemono-normal-white-40px">{save}</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GiftAWallet;
