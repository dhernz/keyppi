import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  const { logo1, place, app, spanText1, spanText2, joinUs } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="flex-row-2">
          <img className="logo-1" src={logo1} />
          <div className="place-2 spacemono-bold-black-35px">{place}</div>
          <Link to="/connect-wallets-1">
            <div className="app-2 spacemono-bold-black-35px">{app}</div>
          </Link>
        </div>
        <h1 className="forget-about-managin">
          <span className="span0">{spanText1}</span>
          <span className="span1">{spanText2}</span>
        </h1>
        <div className="overlap-group-1">
          <Link to="/connect-wallets-1">
            <div className="rectangle-1"></div>
          </Link>
          <div className="join-us">{joinUs}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
