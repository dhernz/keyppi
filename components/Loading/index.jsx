import React from "react";
import "./Loading.css";

function Loading(props) {
  const { savingYourKeys, rectangle } = props;

  return (
    <div className="container-center-horizontal">
      <div className="loading screen">
        <div className="loading-1">
          <div className="saving-your-keys spacemono-bold-black-35px">{savingYourKeys}</div>
          <img className="rectangle-7" src={rectangle} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
