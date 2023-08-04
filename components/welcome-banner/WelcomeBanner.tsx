import React from "react";

import WelcomeImg from "public/welcome.svg";
import TempratureIcon from "public/temp.svg";
import CloudIcon from "public/cloud.svg";

import stl from "./WelcomeBanner.module.scss";

const WelcomeBanner = () => {
  return (
    <div className={stl.welcomeBanner}>
      <div className={stl.left}>
        <div className={stl.heading}>Hello, Scarlett!</div>
        <span className={stl.desc}>
          Welcome Home! The air quality is good & fresh you can go out today.
        </span>
        <div className={stl.temprature}>
          <TempratureIcon />
          <div className={stl.text}>
            <span className={stl.temp}>+25&deg;C</span>
            <span className={stl.tempType}>Outdoor temprature</span>
          </div>
        </div>
        <div className={stl.weather}>
          <CloudIcon /> Fuzzy cloud weather
        </div>
      </div>
      <div className={stl.right}>
        <WelcomeImg />
      </div>
    </div>
  );
};

export default WelcomeBanner;
