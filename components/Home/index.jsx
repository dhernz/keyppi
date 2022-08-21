import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./Home.css";

function Home(props) {
  const { logo1, spanText1, spanText2, joinUs, retrieveKey, headerProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="flex-row-1">
          <img className="logo-1" src={logo1} />
          <Header className={headerProps.className} />
        </div>
        <h1 className="forget-about-managin">
          <span className="span0">{spanText1}</span>
          <span className="span1">{spanText2}</span>
        </h1>
        <div className="overlap-group1-1">
          <Link to="/connect-wallets">
            <div className="rectangle-1"></div>
          
          <div className="join-us">{joinUs}</div>
          </Link>
        </div>
        <div className="overlap-group-1">
          <Link to="/retrieve-wallet">
            <div className="rectangle-2-1"></div>
          
          <div className="retrieve-key">{retrieveKey}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
