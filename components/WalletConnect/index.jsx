import React from "react";
import { Link } from "react-router-dom";
import "./ConnectWallets2.css";
import { useWeb3React } from '@web3-react/core'
import { connectors } from "../../utils/connectors"
  
function ConnectWallets2(props) {
  const { logo2, place, app, image11, connect, wallet, privateKey, save } = props;
  const { activate } = useWeb3React();
  const handleConnect = () => {
    activate(connectors.walletConnect)
  }


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
          <div className="overlap-group1-1 spacemono-normal-black-30px border-3-5px-black">
            <img className="image-11" src={image11} />
            <div className="overlap-group border-3-5px-black">
              <button onClick={handleConnect}>
              <div className="connect spacemono-bold-black-35px">{connect}</div>
              </button>
        
              
          
            </div>
            <div className="wallet">{wallet}</div>
            <div className="rectangle-4 border-3-5px-black"><textarea/></div>
            <div className="private-key">{privateKey}</div>
            <div className="rectangle-5 border-3-5px-black"><textarea/></div>
            <div className="overlap-group2-1">
              <div className="rectangle-2-1"></div>
              <div className="save">{save}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallets2;
