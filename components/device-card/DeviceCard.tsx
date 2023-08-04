import React from "react";
import clsx from "clsx";

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
  variant: "primary" | "secondary";
  isActive: Boolean;
  handleOnClick: (arg: string) => void;
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
  variant,
  isActive,
  handleOnClick,
}: Props) => {
  const [isON, setIsON] = React.useState(false);
  const [shadow, setShadow] = React.useState("");

  return (
    <div
      onMouseEnter={() => setShadow(`${bgClr} 0px 1px 10px`)}
      onMouseLeave={() => setShadow("")}
      style={
        isActive
          ? { background: "#7a40ff" }
          : (variant === "secondary" && { background: "#fff" }) || {
              background: bgClr,
              boxShadow: shadow,
            }
      }
      className={clsx(stl.deviceCard, stl[variant])}
      onClick={() => handleOnClick(title)}
    >
      <div className={stl.iconContainer}>
        <span
          style={
            isActive
              ? { color: "#ffff" }
              : (variant === "secondary" &&
                  (isON ? { color: "#7a40f2" } : { color: "#9897ad" })) || {
                  color: iconClr,
                }
          }
          className={stl.icon}
        >
          {icon}
        </span>
        <ToggleBtn
          textClr={
            isActive
              ? "#fff"
              : (variant === "secondary" && "#242424") || toggleBtnTextClr
          }
          bgClr={
            isActive
              ? "#fff"
              : variant === "secondary" && isON
              ? "#7a40f2"
              : "#f5f5f5" || toggleBtnBgClr
          }
          btnClr={
            isActive
              ? "#6f5cea"
              : (variant === "secondary" && "#fff") || toggleBtnClr
          }
          setIsON={setIsON}
          customClass={stl.toggleBtn}
        />
      </div>
      <span
        style={
          isActive
            ? { color: "#fff" }
            : (variant === "secondary" &&
                (isON ? { color: "#7a40f2" } : { color: "#9897ad" })) || {
                color: titleClr,
              }
        }
        className={stl.title}
      >
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
  variant: "primary",
  isActive: false,
  handleOnClick: (title: string) => console.log(title),
};

export default DeviceCard;
