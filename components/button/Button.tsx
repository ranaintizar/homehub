import React from "react";
import clsx from "clsx";

import stl from "./Button.module.scss";

interface Props {
  leftIcon?: React.ReactNode;
  label?: string;
  rightIcon?: React.ReactNode;
  customClass?: string;
}

const Button = ({ leftIcon, label, rightIcon, customClass }: Props) => {
  console.log(leftIcon, label);

  return (
    <div className={clsx(stl.btn, customClass)}>
      {leftIcon || label ? (
        <div className={stl.left}>
          {leftIcon}
          {label}
        </div>
      ) : null}
      {rightIcon}
    </div>
  );
};

export default Button;
