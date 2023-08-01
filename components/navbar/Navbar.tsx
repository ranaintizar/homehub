import React from "react";
import clsx from "clsx";

import HomeIcon from "public/home.svg";
import DashboardIcon from "public/dashboard.svg";
import LampIcon from "public/lamp.svg";
import SecurityIcon from "public/security.svg";
import LocationIcon from "public/location.svg";
import FamilyIcon from "public/persons.svg";
import CellularIcon from "public/cellular.svg";
import CollapseIcon from "public/collapse.svg";
import ExpandIcon from "public/expand.svg";

import stl from "./Navbar.module.scss";

const Navbar = () => {
  const [active, setIsActive] = React.useState("");
  const [expand, setExpand] = React.useState(false);

  const items = [
    { title: "Home", icon: <HomeIcon /> },
    { title: "Dashboard", icon: <DashboardIcon /> },
    { title: "Lamp", icon: <LampIcon /> },
    { title: "Security", icon: <SecurityIcon /> },
    { title: "Location", icon: <LocationIcon /> },
    { title: "Family", icon: <FamilyIcon /> },
    { title: "Cellular", icon: <CellularIcon /> },
  ];

  return (
    <div className={clsx(stl.navbar, expand ? stl.expand : "")}>
      <div>
        {items.map((item, i) => (
          <button
            key={i}
            className={active === item.title ? stl.active : ""}
            onClick={() => setIsActive(item.title)}
          >
            <span></span>
            {item.icon}
            <span className={stl.title}>{item.title}</span>
            <span></span>
          </button>
        ))}
      </div>
      <div>
        <button
          title={expand ? "collapse-sidebar" : "expand-sidebar"}
          className={active === "signout" ? stl.active : ""}
          onClick={() => setExpand(!expand)}
        >
          <span></span>
          {expand ? <CollapseIcon /> : <ExpandIcon />}
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
