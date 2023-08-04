import React from "react";
import clsx from "clsx";

import PlusIcon from "public/plus.svg";
import MinusIcon from "public/minus.svg";

import stl from "./IconButton.module.scss";

interface Props {
  variant: "primary" | "secondary";
}

const IconButton = ({ variant }: Props) => {
  return (
    <div className={clsx(stl.iconBtn, stl[variant])}>
      {variant === "primary" ? <PlusIcon /> : <MinusIcon />}
    </div>
  );
};

IconButton.defaultProps = {
  variant: "primary",
};

export default IconButton;
