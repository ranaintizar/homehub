import React from "react";

import ToggleBtn from "components/toggle-btn";

import FridgeIcon from "public/fridge.svg";

import stl from "./DeviceCard.module.scss";

interface Props {
  bgClr: string;
  title: string;
  icon: React.ReactNode;
  iconClr: string;
  titleClr: string;
  toggleBtnTextClr: string;
  toggleBtnBgClr: string;
  toggleBtnClr: string;
}

const DeviceCard = ({
  bgClr,
  title,
  icon,
  iconClr,
  titleClr,
  toggleBtnTextClr,
  toggleBtnBgClr,
  toggleBtnClr,
}: Props) => {
  const [isActive, setIsActive] = React.useState(false);
  const [shadow, setShadow] = React.useState("");

  console.log(isActive);

  return (
    <div
      onMouseEnter={() => setShadow(`${bgClr} 0px 1px 10px`)}
      onMouseLeave={() => setShadow("")}
      style={{ background: bgClr, boxShadow: shadow }}
      className={stl.deviceCard}
    >
      <div>
        <span style={{ color: iconClr }} className={stl.icon}>
          {icon}
        </span>
        <ToggleBtn
          textClr={toggleBtnTextClr}
          bgClr={toggleBtnBgClr}
          btnClr={toggleBtnClr}
          setIsActive={setIsActive}
        />
      </div>
      <span style={{ color: titleClr }} className={stl.title}>
        {title}
      </span>
    </div>
  );
};

DeviceCard.defaultProps = {
  bgClr: "#7a40f2",
  title: "Refridgerator",
  icon: <FridgeIcon />,
  iconClr: "#fff",
  titleClr: "#fff",
  toggleBtnTextClr: "#fff",
  toggleBtnBgClr: "#fff",
  toggleBtnClr: "#6f5cea",
};

export default DeviceCard;
