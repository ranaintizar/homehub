import React, { useEffect } from "react";
import clsx from "clsx";

import stl from "./ToggleBtn.module.scss";

interface Props {
  textClr: string;
  bgClr: string;
  btnClr: string;
  size: "md" | "lg";
  customClass?: string;
  setIsON: (arg: any) => void;
}

const ToggleBtn = ({
  textClr,
  bgClr,
  btnClr,
  size,
  customClass,
  setIsON,
}: Props) => {
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    setIsON(active);
  }, [active, setIsON]);

  return (
    <div className={clsx(stl.toggleBtn, stl[size], customClass)}>
      <span
        style={{ color: textClr, fontWeight: "600", fontSize: "14px" }}
        className={stl.title}
      >
        {active ? "ON" : "OFF"}
      </span>
      <div
        style={{ background: bgClr }}
        className={clsx(stl.container, active ? stl.active : "")}
        onClick={() => setActive(!active)}
      >
        <button style={{ background: btnClr }} className={stl.btn}></button>
      </div>
    </div>
  );
};

ToggleBtn.defaultProps = {
  textClr: "#242424",
  bgClr: "#f5f5f5",
  btnClr: "#fff",
  size: "md",
};

export default ToggleBtn;
