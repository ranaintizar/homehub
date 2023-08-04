import React from "react";

import WelcomeBanner from "components/welcome-banner";
import DetailBox from "components/detail-box";
import Button from "components/button";
import DeviceCard from "components/device-card";

import DownIcon from "public/chevron-down-2.svg";
import DropIcon from "public/drop.svg";
import TempIcon from "public/temp-2.svg";
import TempratureIcon from "public/flash.svg";
import ACIcon from "public/ac.svg";
import LampIcon from "public/lamp.svg";

import stl from "./Main.module.scss";

const Main = () => {
  const [active, setActive] = React.useState("Temprature");

  return (
    <div className={stl.main}>
      <WelcomeBanner />
      <div className={stl.controls}>
        <div className={stl.header}>
          <div className={stl.left}>Scarlett&apos;s Home</div>
          <div className={stl.right}>
            <span className={stl.text}>
              <DropIcon /> 35%
            </span>
            <span className={stl.text}>
              <TempIcon /> 15 &deg;C
            </span>
            <Button
              label="Living Room"
              rightIcon={<DownIcon />}
              customClass={stl.btn}
            />
          </div>
        </div>

        <div className={stl.container}>
          <DeviceCard
            variant="secondary"
            handleOnClick={setActive}
            isActive={active === "Refridgerator"}
          />
          <DeviceCard
            variant="secondary"
            title="Temprature"
            icon={<TempratureIcon />}
            handleOnClick={setActive}
            isActive={active === "Temprature"}
          />
          <DeviceCard
            variant="secondary"
            title="Air Conditioner"
            icon={<ACIcon />}
            handleOnClick={setActive}
            isActive={active === "Air Conditioner"}
          />
          <DeviceCard
            variant="secondary"
            title="Lights"
            icon={<LampIcon />}
            handleOnClick={setActive}
            isActive={active === "Lights"}
          />
        </div>
      </div>
      <DetailBox title={active} />
    </div>
  );
};

export default Main;
