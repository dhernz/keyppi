import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

function Success(props) {
  const { success, rectangle } = props;

  return (
    <div className="container-center-horizontal">
      <div className="success screen" onclick="window.open('metamask.html', '_self');">
        <div className="success-1 spacemono-bold-black-35px">{success}</div>
        <img className="rectangle-8" src={rectangle} />
      </div>
    </div>
  );
}

export default Success;
