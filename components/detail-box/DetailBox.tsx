import React, { useEffect } from "react";

import IconButton from "components/icon-button";
import ToggleBtn from "components/toggle-btn";
import ProgressCircle from "components/progress-circle";

import WhiteShape from "public/white-shape.svg";
import TempIcon from "public/flash-2.svg";
import StartPoint from "public/start-point.svg";
import EndPoint from "public/end-point.svg";

import stl from "./DetailBox.module.scss";

interface Props {
  title: string;
}

const DetailBox = ({ title }: Props) => {
  const [isActive, setIsActive] = React.useState(false);

  useEffect(() => {
    var circle = document.getElementById("circle");

    for (let i = 0; i < 40; i++) {
      const line = document.createElement("div");
      line.classList.add(stl.lines);
      line.style.transform = "rotate(" + 9 * i + "deg)";

      if (i % 10 === 0) {
        line.style.height = "1.6rem";
        line.style.transform = "rotate(" + 9 * i + "deg) translateY(-11px)";
      }

      circle?.appendChild(line);
    }
  }, []);

  return (
    <div className={stl.detailBox}>
      <div className={stl.header}>
        <div className={stl.left}>
          <div className={stl.iconContainer}>
            <TempIcon />
          </div>
          <span className={stl.text}>Living Room {title}</span>
        </div>
        <ToggleBtn
          setIsON={setIsActive}
          size="lg"
          bgClr={isActive ? "#7a40ff" : "#f5f5f5"}
        />
      </div>
      <div className={stl.container}>
        <IconButton variant="secondary" />
        <div className={stl.circle1}>
          <div className={stl.first}>05 &deg;C</div>
          <div className={stl.second}>15 &deg;C</div>
          <div className={stl.third}>25 &deg;C</div>
          <div id="circle" className={stl.circle2}>
            <ProgressCircle>
              <div className={stl.circle3}>
                <div className={stl.startDot}>
                  <StartPoint />
                </div>
                <div className={stl.endDot}>
                  <EndPoint />
                </div>
                <span className={stl.icon}>
                  <WhiteShape />
                </span>
                <div className={stl.shadow} />
                <div className={stl.circle4}>
                  <div className={stl.circle5}>
                    <div>25&deg;C</div>
                    <span>Celsius</span>
                  </div>
                </div>
              </div>
            </ProgressCircle>
          </div>
        </div>
        <IconButton />
      </div>
    </div>
  );
};

DetailBox.defaultProps = {
  title: "Temprature",
};

export default DetailBox;
