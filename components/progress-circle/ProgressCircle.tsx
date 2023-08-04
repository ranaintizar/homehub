import React from "react";

import stl from "./ProgressCircle.module.scss";

interface Props {
  size: number;
  progress: number;
  children: JSX.Element;
}

const ProgressCircle = ({ size, progress, children }: Props) => {
  const radius = (size - 5) / 2;
  const viewBox = `0 0 ${size} ${size}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * progress) / 100;

  return (
    <div style={{ position: "relative" }} className={stl.container}>
      {children}
      <svg width={size} height={size} viewBox={viewBox} className={stl.circle}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(360)">
            <stop offset="0%" stopColor="#f2946d" />
            <stop offset="50%" stopColor="#ae5bff" />
            <stop offset="100%" stopColor="#6f5cea" />
          </linearGradient>
        </defs>
        <circle
          className={stl.circleProgress}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
    </div>
  );
};

ProgressCircle.defaultProps = {
  size: 210,
  progress: 50,
};

export default ProgressCircle;
